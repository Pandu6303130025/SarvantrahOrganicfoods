"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "./product-card";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const availableProducts = products.filter(
    (p) => p.status === "available"
  );

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              Our Popular Products
            </h2>
            <p className="mt-2 text-gray-500">
              Handpicked favorites that customers love
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {availableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
