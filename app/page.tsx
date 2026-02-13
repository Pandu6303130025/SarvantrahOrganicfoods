import { HeroCarousel } from "@/components/hero-carousel";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedProducts } from "@/components/featured-products";
import { WhyChooseUs } from "@/components/why-choose-us";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />

      {/* CTA Banner */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl text-balance">
            Ready to Start Your Healthy Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
            Join thousands of happy customers who have switched to nutritious
            millet-based snacking with Sarvantrah Organics.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-card/90 sm:px-8 sm:text-base"
            >
              Browse Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border-2 border-primary-foreground bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:px-8 sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
