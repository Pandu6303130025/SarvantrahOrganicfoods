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
      {/* ================= FOUNDER SECTION ================= */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">

      {/* Founder Image */}
      <div className="relative w-full max-w-sm lg:w-1/2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="https://res.cloudinary.com/dgky6sudx/image/upload/v1771252027/file_cltmdk.jpg"
            alt="Miriyala Sai Krishna - Founder & CEO"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Founder Content */}
      <div className="lg:w-1/2 text-center lg:text-left">

        <h2 className="text-4xl sm:text-5xl font-bold text-black">
          Meet Our Founder
        </h2>

        <div className="mt-6 h-[2px] w-16 bg-black mx-auto lg:mx-0" />

        <h3 className="mt-8 text-2xl font-semibold text-black">
          Miriyala Sai Krishna
        </h3>

        <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
          Founder & CEO – Sarvantrah Organic Pvt. Ltd
        </p>

        <p className="mt-2 text-xs text-gray-400">
          “Live Healthy & Taste Healthy”
        </p>

        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed text-base">

          <p>
            Miriyala Sai Krishna’s journey is not just a business story —
            it is a battle against life’s odds and a courageous pursuit of dreams.
            Losing his father at a young age, he faced hardships early in life,
            with his mother becoming the pillar of strength and inspiration.
          </p>

          <p>
            His childhood was marked by struggles in education and sports,
            yet those challenges shaped resilience, discipline, and determination.
            He later worked in one of the world’s leading semiconductor companies,
            securing a stable and promising career.
          </p>

          <p>
            However, driven by passion, purpose, and a deep desire to give back
            to society, he chose to leave that secure path to build something meaningful.
            That vision gave birth to <strong>Sarvantrah Organic Pvt. Ltd</strong>.
          </p>

          <p>
            With a commitment to organic products, farmer empowerment,
            and building a healthier generation, his mission is clear:
            to make nutritious, affordable organic FMCG products accessible
            to every household while creating a sustainable future.
          </p>

        </div>

        {/* Contact Info */}
        <div className="mt-10 border-t border-gray-200 pt-6 space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-black">Company:</span> SARVANTRAH ORGANIC PVT. LTD
          </p>
          <p>
            <span className="font-semibold text-black">Vision:</span> To be a Global Lead Supplier in Organic FMCG sector ✨
          </p>
          <p>
            <span className="font-semibold text-black">Phone:</span> +91 81069 32164
          </p>
          <p>
            <span className="font-semibold text-black">Email:</span> miriyalasai50@gmail.com
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

    </>
  );
}
