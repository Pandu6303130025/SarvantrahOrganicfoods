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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-card/80 p-2 shadow-sm transition-colors hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative aspect-square w-full sm:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover sm:rounded-l-2xl"
            />
            {!isAvailable && (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
                <span className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
            <div>
              <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {product.category}
              </span>
              <h2 className="mt-2 font-serif text-xl font-bold text-foreground sm:text-2xl">
                {product.name}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="rounded-lg bg-accent p-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">
                  Rs.{product.price}
                </span>
                <span className="text-sm text-muted-foreground">per box</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                + Rs.{product.additionalCharges} for GST & Delivery charges
              </p>
              <p className="mt-1 text-xs font-medium text-secondary">
                Buy 4+ boxes (above Rs.{FREE_DELIVERY_THRESHOLD}) and get FREE
                delivery!
              </p>
            </div>

            {isAvailable ? (
              inCart ? (
                <button
                  disabled
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
                >
                  <Check className="h-5 w-5" />
                  Added to Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              )
            ) : (
              <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
                <Clock className="h-5 w-5" />
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
