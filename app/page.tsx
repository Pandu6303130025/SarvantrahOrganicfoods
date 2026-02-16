import { HeroCarousel } from "@/components/hero-carousel";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedProducts } from "@/components/featured-products";
import { WhyChooseUs } from "@/components/why-choose-us";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutPage from "./about/page";
import GalleryPage from "./gallery/page";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutPage/>

      {/* CTA Banner */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-5xl">

    {/* Black CTA Box */}
    <div className="bg-black text-white px-8 py-16 text-center">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
        Ready to Start Your Healthy Journey?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed">
        Join thousands of happy customers who have switched to nutritious
        millet-based snacking with Sarvantrah Organics.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
        >
          Browse Products
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Contact Us
        </Link>

      </div>

    </div>

  </div>
</section>
<GalleryPage/>

    </>
  );
}
