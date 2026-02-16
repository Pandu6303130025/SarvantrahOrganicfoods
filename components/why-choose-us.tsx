"use client";

import { Leaf, Heart, Truck, Shield } from "lucide-react";

/* ===== STORY STRIP ===== */
const storyBlocks = [
  {
    title: "HOW IT STARTED",
    description:
      "What started as a Millet Paratha venture catering to schools and corporations is now India's Largest Millet Snacks Company.",
  },
  {
    title: "WHAT WE DO",
    description:
      "With a strategic focus on Millet Snacks that reach a wider market, we are scaling production rapidly.",
  },
  {
    title: "WHERE WE ARE",
    description:
      "Sustainable practices and healthy offerings have helped us skyrocket our growth up to 100% in its second year.",
  },
];

/* ===== YOUR ORIGINAL FEATURES (UNCHANGED) ===== */
const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "All our products are made with pure organic millets and natural ingredients.",
  },
  {
    icon: Heart,
    title: "Health First",
    description:
      "Every product is crafted to deliver maximum nutrition and taste.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Buy 4 boxes (above Rs.1000) and enjoy free delivery across India.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Strict hygiene standards and quality checks at every production stage.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* ================= STORY STRIP ================= */}
        <div className="bg-black text-white">

          <div className="grid grid-cols-1 md:grid-cols-3">
            {storyBlocks.map((block, index) => (
              <div
                key={block.title}
                className={`px-6 py-10 text-center ${
                  index !== storyBlocks.length - 1
                    ? "md:border-r md:border-gray-700"
                    : ""
                }`}
              >
                <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase">
                  {block.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
                  {block.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ================= ORIGINAL FEATURES ================= */}
        <div>
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              The Sarvantrah Promise
            </h2>
            <p className="mt-3 text-gray-500">
              Built on health, sustainability, and quality
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black/10">
                  <feature.icon className="h-7 w-7 text-black" />
                </div>

                <h3 className="mb-3 text-base font-semibold text-black">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
