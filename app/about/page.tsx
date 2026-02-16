import Image from "next/image";
import { Leaf, Heart, Globe, Award } from "lucide-react";
import { aboutContent } from "@/lib/data";

export const metadata = {
  title: "About Us | Zyva",
  description:
    "Learn about Zyva – a purpose-driven millet-based brand making nutritious food affordable and accessible.",
};

const icons = [Leaf, Heart, Globe, Award];

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-24">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-black">
      About Us
    </h1>

    <div className="mx-auto mt-6 h-[2px] w-16 bg-black" />

    <p className="mt-8 text-base sm:text-lg text-gray-600 leading-relaxed">
      Discover our journey, our values, and our commitment to
      bringing healthy millet-based nutrition to every home.
    </p>

  </div>
</section>


      {/* ================= HOW IT STARTED ================= */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1600&h=900&fit=crop"
          alt="Millets background"
          fill
          className="object-cover"
        />

        {/* Blur + Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold">
            How It Started!!!
          </h2>

          <div className="mt-10 space-y-6 text-gray-200 leading-relaxed text-base sm:text-lg">
            <p>
              Zyva is committed to making healthy millet nutritious products
              at affordable prices. With a clear vision to promote better
              eating habits, Zyva combines traditional millet goodness
              with modern taste and quality standards.
            </p>

            <p>
              The brand supports a healthier generation by replacing
              chemical-laden snacks with natural, wholesome alternatives.
              By sourcing quality ingredients and maintaining high
              production standards, Zyva ensures both taste and nutrition.
            </p>

            <p>
              Zyva strives to create awareness about millets, empower
              farmers, and build a sustainable future through healthy,
              budget-friendly snacking options.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&h=900&fit=crop"
          alt="Production background"
          fill
          className="object-cover"
        />

        {/* Blur + Light Overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-black">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What We Do.....
          </h2>

          <div className="mt-10 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              We manufacture high-quality millet-based snacks that are
              hygienic, nutritious, and affordable for everyday consumers.
            </p>

            <p>
              Our focus is on using pure, carefully selected ingredients
              to create snacks that are both healthy and delicious. We
              follow strict quality standards in every stage of production
              to ensure safety, freshness, and taste.
            </p>

            <p>
              Customer satisfaction is at the heart of our work. We
              continuously improve our products to meet evolving customer
              expectations.
            </p>

            <p>
              By combining nutrition, hygiene, and affordability, Zyva
              makes healthy snacking easy and accessible for everyone
              while building lasting trust.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              What Drives Us
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value, idx) => {
              const Icon = icons[idx];
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center bg-white p-8 text-center shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black/10">
                    <Icon className="h-7 w-7 text-black" />
                  </div>

                  <h3 className="mb-3 text-base font-semibold text-black">
                    {value.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-black py-20 text-white m-5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Nutritious Food is a Daily Right, Not a Luxury
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            We believe every family deserves access to wholesome,
            chemical-free food at affordable prices. Through sustainable
            farming, ethical sourcing, and innovative millet-based
            products, Zyva is building a future where healthy snacking
            becomes the global standard.
          </p>
        </div>
      </section>
    </>
  );
}
