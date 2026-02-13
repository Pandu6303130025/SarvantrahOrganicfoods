"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, ArrowRight, MessageCircle } from "lucide-react";
import {
  useCart,
  useCartTotal,
  useCartSubtotal,
  useCartAdditionalCharges,
  clearCart,
} from "@/lib/cart-store";
import { WHATSAPP_NUMBER, FREE_DELIVERY_THRESHOLD } from "@/lib/data";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
}

export function CheckoutContent() {
  const cart = useCart();
  const subtotal = useCartSubtotal();
  const additionalCharges = useCartAdditionalCharges();
  const total = useCartTotal();
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemsList = cart
      .map(
        (item) =>
          `- ${item.product.name} x${item.quantity} = Rs.${
            isFreeDelivery
              ? item.product.price * item.quantity
              : (item.product.price + item.product.additionalCharges) * item.quantity
          }`
      )
      .join("\n");

    const message = `*New Order from Sarvantrah Organics*\n\n*Order Items:*\n${itemsList}\n\n*Order Summary:*\nSubtotal: Rs.${subtotal}\nGST & Delivery: ${isFreeDelivery ? "Waived (Free Delivery)" : `Rs.${additionalCharges}`}\n*Total: Rs.${total}*\n\n*Delivery Address:*\nName: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address}\nCity: ${form.city}\nState: ${form.state}\nPincode: ${form.pincode}${form.landmark ? `\nLandmark: ${form.landmark}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
          No Items to Checkout
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Please add some products to your cart first.
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

  const isFormValid =
    form.fullName && form.phone && form.address && form.city && form.state && form.pincode;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      <Link
        href="/cart"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Cart
      </Link>

      <h1 className="mb-8 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
        Checkout
      </h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Delivery Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} id="checkout-form">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h2 className="mb-5 text-lg font-semibold text-foreground">
                Delivery Address
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter email (optional)"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Full Address <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="House/Flat no., Street, Area"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    City <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    State <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter state"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Pincode <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter pincode"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Landmark
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    value={form.landmark}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Nearby landmark (optional)"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Order Summary
            </h2>

            {/* Items */}
            <div className="mb-4 flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Rs.{isFreeDelivery
                      ? item.product.price * item.quantity
                      : (item.product.price + item.product.additionalCharges) * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex flex-col gap-2">
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
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={!isFormValid}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20BD5A] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Your order details and address will be sent directly to our WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
