import { aboutContent } from "@/lib/data";
import Image from "next/image";
import { Leaf, Heart, Globe, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Sarvantrah Organics",
  description: "Learn about Sarvantrah Organic Foods - a purpose-driven millet-based FMCG company making nutritious food affordable and accessible.",
};

const icons = [Leaf, Heart, Globe, Award];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1400&h=600&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-foreground/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Our Story
          </span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
            {aboutContent.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
            From Andhra Pradesh to your table - bringing the ancient goodness of millets to modern kitchens.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1">
              <div className="prose prose-sm max-w-none sm:prose-base">
                {aboutContent.description.split("\n\n").map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:w-96">
              <Image
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=750&fit=crop"
                alt="Millet farming in India"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-accent/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Values
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
              What Drives Us
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value, idx) => {
              const Icon = icons[idx];
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mb-2 inline-block rounded-full bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            Our Mission
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl text-balance">
            Nutritious Food is a Daily Right, Not a Luxury
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We believe every family deserves access to wholesome, chemical-free food at affordable prices.
            Through sustainable farming, ethical sourcing, and innovative millet-based products,
            we are building a future where healthy snacking becomes the global standard.
          </p>
        </div>
      </section>
    </>
  );
}
