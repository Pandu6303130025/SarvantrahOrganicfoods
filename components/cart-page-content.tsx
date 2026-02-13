"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import {
  useCart,
  updateQuantity,
  removeFromCart,
  useCartTotal,
  useCartSubtotal,
  useCartAdditionalCharges,
} from "@/lib/cart-store";
import { FREE_DELIVERY_THRESHOLD } from "@/lib/data";

export function CartPageContent() {
  const cart = useCart();
  const subtotal = useCartSubtotal();
  const additionalCharges = useCartAdditionalCharges();
  const total = useCartTotal();
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;

  if (cart.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
          Your Cart is Empty
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Looks like you have not added any products yet.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Browse Products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      <h1 className="mb-8 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
        Shopping Cart
      </h1>

      {/* Free delivery banner */}
      {!isFreeDelivery && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3">
          <Truck className="h-5 w-5 flex-shrink-0 text-secondary" />
          <p className="text-sm text-foreground">
            Add Rs.{FREE_DELIVERY_THRESHOLD - subtotal} more to get{" "}
            <strong>FREE delivery!</strong> (Buy 4+ boxes above Rs.{FREE_DELIVERY_THRESHOLD})
          </p>
        </div>
      )}
      {isFreeDelivery && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3">
          <Truck className="h-5 w-5 flex-shrink-0 text-primary" />
          <p className="text-sm font-medium text-primary">
            You qualify for FREE delivery!
          </p>
        </div>
      )}

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">
                        {item.product.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {item.product.category}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-l-lg text-foreground transition-colors hover:bg-muted"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="flex h-8 w-10 items-center justify-center border-x border-border text-sm font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-r-lg text-foreground transition-colors hover:bg-muted"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      {isFreeDelivery ? (
                        <>
                          <p className="text-sm font-bold text-primary sm:text-base">
                            Rs.{item.product.price * item.quantity}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            Rs.{item.product.price} x {item.quantity} (charges waived)
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm font-bold text-primary sm:text-base">
                            Rs.{(item.product.price + item.product.additionalCharges) * item.quantity}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            Rs.{item.product.price} + Rs.{item.product.additionalCharges} x {item.quantity}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Order Summary
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">Rs.{subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">GST & Delivery</span>
                {isFreeDelivery ? (
                  <span className="font-medium text-primary line-through decoration-primary/50">
                    Waived
                  </span>
                ) : (
                  <span className="text-foreground">Rs.{additionalCharges}</span>
                )}
              </div>
              {isFreeDelivery && (
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-primary">Free Delivery</span>
                  <span className="font-medium text-primary">Applied</span>
                </div>
              )}
              <div className="my-2 border-t border-border" />
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">Rs.{total}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Proceed to Checkout <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="mt-3 flex w-full items-center justify-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
