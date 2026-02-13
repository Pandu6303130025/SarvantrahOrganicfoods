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
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-foreground/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Gallery
          </span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
            Our Visual Journey
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
            A glimpse into the world of Sarvantrah Organics - from our farms to your table.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => openLightbox(idx)}
              >
                <div className="group relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-foreground/0 p-4 transition-colors group-hover:bg-foreground/30">
                    <p className="translate-y-4 text-sm font-medium text-card opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-card transition-colors hover:bg-card/40"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/20 p-2 text-card transition-colors hover:bg-card/40"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/20 p-2 text-card transition-colors hover:bg-card/40"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[80vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 p-3 text-center">
              <p className="text-sm text-card">
                {galleryImages[lightboxIndex].alt} ({lightboxIndex + 1}/{galleryImages.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
