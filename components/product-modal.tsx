"use client";

import Image from "next/image";
import { X, ShoppingCart, Check, Clock } from "lucide-react";
import type { Product } from "@/lib/data";
import { FREE_DELIVERY_THRESHOLD } from "@/lib/data";
import { addToCart, useIsInCart } from "@/lib/cart-store";
import { useEffect } from "react";

interface ProductModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const inCart = useIsInCart(product.id);
  const isAvailable = product.status === "available";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 text-gray-500 hover:text-black transition"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col md:flex-row">

          {/* IMAGE SECTION */}
          <div className="relative aspect-square w-full md:w-1/2 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
            />

            {!isAvailable && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-1 flex-col justify-between p-8">

            {/* TOP CONTENT */}
            <div>

              <p className="text-xs uppercase tracking-wider text-gray-500">
                {product.category}
              </p>

              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-black leading-snug">
                {product.name}
              </h2>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* PRICE SECTION */}
              <div className="mt-8">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold text-black">
                    ₹ {product.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    per box
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  + ₹{product.additionalCharges} (GST & Delivery)
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  Buy 4+ boxes (above ₹{FREE_DELIVERY_THRESHOLD}) and get FREE delivery
                </p>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="mt-10">
              {isAvailable ? (
                inCart ? (
                  <button
                    disabled
                    className="w-full border border-black py-4 text-sm font-semibold text-black flex items-center justify-center gap-2"
                  >
                    <Check className="h-5 w-5" />
                    Added to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                )
              ) : (
                <div className="w-full border border-gray-300 py-4 text-sm text-gray-500 flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5" />
                  Coming Soon
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
