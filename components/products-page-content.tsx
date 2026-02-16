"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "./product-card";

export function ProductsPageContent() {
  const searchParams = useSearchParams();

  // Get values from URL
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  // State
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [showFilters, setShowFilters] = useState(false);

  // 🔥 Sync search input when URL changes
  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  // 🔥 Filter logic
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.categorySlug === selectedCategory
      );
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const availableCount = filteredProducts.filter(
    (p) => p.status === "available"
  ).length;

  const comingSoonCount = filteredProducts.filter(
    (p) => p.status === "coming-soon"
  ).length;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-black">
            Our Products
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-black" />
          <p className="mx-auto mt-6 max-w-xl text-gray-600 text-base">
            Explore our premium millet-based collection crafted for
            nutrition, taste, and affordability.
          </p>
        </div>

        {/* ================= SEARCH + FILTER ================= */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Search */}
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 bg-white py-3 pl-10 pr-10 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Product Count */}
          <div className="text-sm text-gray-500">
            {filteredProducts.length} Products
            {" "}({availableCount} Available • {comingSoonCount} Coming Soon)
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 border border-black px-4 py-2 text-sm font-medium text-black sm:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="flex gap-12">

          {/* ================= SIDEBAR ================= */}
          <aside className="hidden w-60 sm:block">
            <div className="sticky top-24">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
                Categories
              </h3>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`text-left text-sm ${
                    selectedCategory === "all"
                      ? "font-semibold text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  All Products
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`text-left text-sm ${
                      selectedCategory === cat.slug
                        ? "font-semibold text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* ================= PRODUCTS GRID ================= */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <h3 className="text-lg font-semibold text-black">
                  No products found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try adjusting your search or filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
