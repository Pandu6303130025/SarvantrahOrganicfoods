"use client";

import { galleryImages } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );

  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );

  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          Gallery
        </h1>
        <div className="mx-auto mt-4 h-[2px] w-16 bg-black" />
        <p className="mx-auto mt-6 max-w-xl text-gray-600">
          A glimpse into our journey — from pure ingredients to premium products.
        </p>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative cursor-pointer overflow-hidden bg-gray-100"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/40" />

                <div className="absolute bottom-4 left-4 right-4 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-6"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:opacity-70"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto object-contain"
            />

            <div className="mt-6 text-center text-white">
              <p className="text-sm tracking-wide">
                {galleryImages[lightboxIndex].alt}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
