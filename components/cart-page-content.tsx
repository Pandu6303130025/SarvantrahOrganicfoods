"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Truck,
} from "lucide-react";
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
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <ShoppingBag className="mx-auto h-14 w-14 text-gray-400" />
          <h1 className="mt-6 text-3xl font-semibold text-black">
            Your Cart is Empty
          </h1>
          <p className="mt-3 text-gray-500">
            Start exploring our millet collection.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Browse Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* PAGE TITLE */}
        <h1 className="mb-12 text-4xl font-bold tracking-wide text-black">
          Shopping Cart
        </h1>

        {/* FREE DELIVERY MESSAGE */}
        <div className="mb-10 border border-gray-200 p-4 text-sm text-gray-700 flex items-center gap-3">
          <Truck className="h-5 w-5 text-black" />
          {isFreeDelivery ? (
            <span className="font-medium">
              You qualify for FREE delivery.
            </span>
          ) : (
            <span>
              Add ₹{FREE_DELIVERY_THRESHOLD - subtotal} more to get FREE delivery.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">

          {/* ================= CART ITEMS ================= */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 pb-6"
              >
                <div className="relative h-32 w-32 bg-white">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">

                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.product.category}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-black transition"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    {/* QUANTITY */}
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="px-4 py-2 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* PRICE */}
                    <div className="text-right">
                      <p className="text-lg font-semibold text-black">
                        ₹{" "}
                        {isFreeDelivery
                          ? item.product.price * item.quantity
                          : (item.product.price +
                              item.product.additionalCharges) *
                            item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₹{item.product.price} x {item.quantity}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= ORDER SUMMARY ================= */}
          <div className="w-full lg:w-96">
            <div className="border border-gray-200 p-8">

              <h2 className="text-xl font-semibold text-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">GST & Delivery</span>
                  <span>
                    {isFreeDelivery ? "Free" : `₹${additionalCharges}`}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <Link
                href="/checkout"
                className="mt-8 flex w-full items-center justify-center gap-2 bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="mt-4 block text-center text-sm text-gray-500 hover:text-black"
              >
                Continue Shopping
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
