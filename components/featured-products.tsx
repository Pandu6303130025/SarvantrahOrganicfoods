"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "./product-card";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const availableProducts = products.filter((p) => p.status === "available");

  return (
    <section className="bg-accent/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:mb-14 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Available Now
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
              Our Popular Products
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Handpicked favorites that our customers love
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {availableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
