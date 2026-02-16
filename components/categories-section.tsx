"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
            Explore Our Collection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-400">
            Discover our premium millet-based creations crafted with purity,
            tradition, and modern nutrition.
          </p>
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="relative hidden md:block">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 text-black shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {categories.map((cat) => {
              const isComingSoon = cat.status === "coming-soon";

              const CardContent = (
                <div
                  className={`group relative min-w-[300px] flex-shrink-0 overflow-hidden rounded-xl ${
                    isComingSoon ? "cursor-not-allowed opacity-80" : ""
                  }`}
                >
                  <div className="relative h-[320px] w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-[4000ms] ease-linear group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />

                    {/* Coming Soon Badge */}
                    {isComingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {cat.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                      {cat.description}
                    </p>

                    {!isComingSoon && (
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:underline">
                        View Collection
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                </div>
              );

              return isComingSoon ? (
                <div key={cat.slug}>{CardContent}</div>
              ) : (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 text-black shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ================= MOBILE GRID ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {categories.map((cat) => {
            const isComingSoon = cat.status === "coming-soon";

            const Card = (
              <div
                className={`group relative overflow-hidden rounded-xl ${
                  isComingSoon ? "cursor-not-allowed opacity-80" : ""
                }`}
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  {isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-sm font-semibold">
                    {cat.name}
                  </h3>
                </div>
              </div>
            );

            return isComingSoon ? (
              <div key={cat.slug}>{Card}</div>
            ) : (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
              >
                {Card}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
