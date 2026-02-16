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

        {/* Desktop Horizontal Slider */}
        <div className="relative hidden md:block">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 text-black shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group relative min-w-[300px] flex-shrink-0 overflow-hidden rounded-xl"
              >
                <div className="relative h-[320px] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-[4000ms] ease-linear group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {cat.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                    {cat.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:underline">
                    View Collection
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 text-black shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile 2 Grid Layout */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-sm font-semibold">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
