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
      <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
        {/* Image */}
        <div
          className="relative aspect-square cursor-pointer overflow-hidden"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!isAvailable && (
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
              <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground sm:text-sm">
                Coming Soon
              </span>
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            className="absolute right-2 top-2 rounded-full bg-card/80 p-2 opacity-0 shadow-sm backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-card"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 sm:text-base">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-auto flex flex-col gap-1 pt-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-primary sm:text-xl">
                Rs.{product.price}
              </span>
              <span className="text-xs text-muted-foreground">
                + Rs.{product.additionalCharges} (GST & Delivery)
              </span>
            </div>
            <p className="text-[10px] text-secondary font-medium sm:text-xs">
              Buy 4+ boxes (above Rs.{FREE_DELIVERY_THRESHOLD}) for FREE delivery
            </p>
          </div>

          {/* Action */}
          {isAvailable ? (
            inCart ? (
              <button
                disabled
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-xs font-semibold text-primary sm:text-sm"
              >
                <Check className="h-4 w-4" />
                Added to Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-sm"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
            )
          ) : (
            <div className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-muted px-4 py-2.5 text-xs font-medium text-muted-foreground sm:text-sm">
              <Clock className="h-4 w-4" />
              Coming Soon
            </div>
          )}
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
