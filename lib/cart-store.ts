import { useSyncExternalStore, useMemo, useEffect, useState } from "react";
import type { Product } from "./data";
import { FREE_DELIVERY_THRESHOLD } from "./data";

export interface CartItem {
  product: Product;
  quantity: number;
}

type Listener = () => void;

const STORAGE_KEY = "sarvantrah-cart";
const EMPTY_CART: CartItem[] = [];

function loadFromStorage(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART;
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return EMPTY_CART;
}

function saveToStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

let cartItems: CartItem[] = loadFromStorage();
let listeners: Listener[] = [];

function emitChange() {
  saveToStorage(cartItems);
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: Listener) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): CartItem[] {
  return cartItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

export function addToCart(product: Product) {
  const existing = cartItems.find((item) => item.product.id === product.id);
  if (existing) {
    cartItems = cartItems.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    cartItems = [...cartItems, { product, quantity: 1 }];
  }
  emitChange();
}

export function removeFromCart(productId: string) {
  cartItems = cartItems.filter((item) => item.product.id !== productId);
  emitChange();
}

export function updateQuantity(productId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  cartItems = cartItems.map((item) =>
    item.product.id === productId ? { ...item, quantity } : item
  );
  emitChange();
}

export function clearCart() {
  cartItems = [];
  emitChange();
}

// Reactive hook: returns the full cart array via useSyncExternalStore
function useCartRaw(): CartItem[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Hydration-safe wrapper
export function useCart(): CartItem[] {
  const raw = useCartRaw();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored.length > 0 && cartItems.length === 0) {
      cartItems = stored;
      emitChange();
    }
    setHydrated(true);
  }, []);
  return hydrated ? raw : EMPTY_CART;
}

// Reactive hook: returns whether a specific product is in the cart
export function useIsInCart(productId: string): boolean {
  const cart = useCart();
  return useMemo(() => cart.some((item) => item.product.id === productId), [cart, productId]);
}

// Reactive hook: returns total item count
export function useCartItemCount(): number {
  const cart = useCart();
  return useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
}

// Reactive hook: returns subtotal (base price only, no additional charges)
export function useCartSubtotal(): number {
  const cart = useCart();
  return useMemo(() => cart.reduce((total, item) => total + item.product.price * item.quantity, 0), [cart]);
}

// Reactive hook: returns additional charges total (waived when subtotal >= 1000)
export function useCartAdditionalCharges(): number {
  const cart = useCart();
  return useMemo(() => {
    const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    if (subtotal >= FREE_DELIVERY_THRESHOLD) return 0;
    return cart.reduce((total, item) => total + item.product.additionalCharges * item.quantity, 0);
  }, [cart]);
}

// Reactive hook: returns grand total (subtotal + additional charges, charges waived above 1000)
export function useCartTotal(): number {
  const cart = useCart();
  return useMemo(() => {
    const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    if (subtotal >= FREE_DELIVERY_THRESHOLD) return subtotal;
    return cart.reduce(
      (total, item) => total + (item.product.price + item.product.additionalCharges) * item.quantity,
      0
    );
  }, [cart]);
}
