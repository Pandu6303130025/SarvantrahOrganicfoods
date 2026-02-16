"use client";

import Image from "next/image";
import { ShoppingCart, Check, Clock, Eye } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { FREE_DELIVERY_THRESHOLD } from "@/lib/data";
import { addToCart, useIsInCart } from "@/lib/cart-store";
import { ProductModal } from "./product-modal";

export function ProductCard({ product }: { product: Product }) {
  const inCart = useIsInCart(product.id);
  const [modalOpen, setModalOpen] = useState(false);

  const isAvailable = product.status === "available";

  return (
    <>
      <div className="group relative flex flex-col bg-white">

        {/* IMAGE SECTION */}
        <div
          className="relative aspect-square cursor-pointer overflow-hidden bg-white"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {!isAvailable && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black">
                Coming Soon
              </span>
            </div>
          )}

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            className="absolute right-3 top-3 rounded-full bg-white p-2 shadow opacity-0 transition group-hover:opacity-100"
          >
            <Eye className="h-4 w-4 text-black" />
          </button>
        </div>

        {/* ADD TO CART BUTTON */}
        {isAvailable ? (
          inCart ? (
            <button
              disabled
              className="mt-4 w-full rounded-full bg-gray-200 py-3 text-sm font-semibold text-black"
            >
              <Check className="mr-2 inline h-4 w-4" />
              Added to Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              <ShoppingCart className="mr-2 inline h-4 w-4" />
              Add to Cart
            </button>
          )
        ) : (
          <div className="mt-4 w-full rounded-full bg-gray-100 py-3 text-center text-sm font-medium text-gray-500">
            <Clock className="mr-2 inline h-4 w-4" />
            Coming Soon
          </div>
        )}

        {/* BLACK INFO BOX */}
        <div className="mt-3 bg-black px-4 py-4 text-center text-white flex flex-col">

          <h3 className="text-sm font-semibold uppercase tracking-wide">
            ZYVA
          </h3>

          {/* FIXED HEIGHT PRODUCT NAME */}
          <p className="mt-1 text-sm font-medium line-clamp-2 min-h-[40px]">
            {product.name}
          </p>

          <div className="mt-2 text-sm font-semibold">
            ₹ {product.price}
          </div>

          <p className="mt-1 text-[11px] text-gray-400">
            + ₹{product.additionalCharges} (GST & Delivery)
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            Buy 4+ boxes (above ₹{FREE_DELIVERY_THRESHOLD}) for FREE delivery
          </p>

        </div>
      </div>

      <ProductModal
        product={product}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
