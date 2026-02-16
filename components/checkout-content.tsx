"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
              : (item.product.price + item.product.additionalCharges) *
                item.quantity
          }`
      )
      .join("\n");

    const message = `*New Order - Zyva*\n\n*Items:*\n${itemsList}\n\nSubtotal: Rs.${subtotal}\nDelivery: ${
      isFreeDelivery ? "Free" : `Rs.${additionalCharges}`
    }\n*Total: Rs.${total}*\n\n*Address:*\nName: ${form.fullName}\nPhone: ${
      form.phone
    }\nAddress: ${form.address}, ${form.city}, ${form.state} - ${
      form.pincode
    }${form.landmark ? `\nLandmark: ${form.landmark}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <ShoppingBag className="mx-auto h-14 w-14 text-gray-400" />
          <h1 className="mt-6 text-3xl font-semibold text-black">
            No Items to Checkout
          </h1>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Browse Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const isFormValid =
    form.fullName &&
    form.phone &&
    form.address &&
    form.city &&
    form.state &&
    form.pincode;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <Link
          href="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <h1 className="mb-12 text-4xl font-bold text-black">
          Checkout
        </h1>

        <div className="flex flex-col gap-12 lg:flex-row">

          {/* ================= FORM ================= */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} id="checkout-form">

              <h2 className="mb-8 text-xl font-semibold text-black">
                Delivery Address
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State *"
                  value={form.state}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode *"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <textarea
                  name="address"
                  rows={3}
                  placeholder="Full Address *"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="sm:col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="landmark"
                  placeholder="Landmark (optional)"
                  value={form.landmark}
                  onChange={handleChange}
                  className="sm:col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

              </div>
            </form>
          </div>

          {/* ================= SUMMARY ================= */}
          <div className="w-full lg:w-96">
            <div className="border border-gray-200 p-8">

              <h2 className="text-xl font-semibold text-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">

                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>
                      ₹
                      {isFreeDelivery
                        ? item.product.price * item.quantity
                        : (item.product.price +
                            item.product.additionalCharges) *
                          item.quantity}
                    </span>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>
                    {isFreeDelivery ? "Free" : `₹${additionalCharges}`}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={!isFormValid}
                className="mt-8 flex w-full items-center justify-center gap-2 bg-black py-4 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-50"
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </button>

              <p className="mt-3 text-xs text-gray-500 text-center">
                Your order details will be sent directly to WhatsApp.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
