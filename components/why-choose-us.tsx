import { Leaf, Heart, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our products are made with pure organic millets and natural ingredients, free from chemicals and preservatives.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Every product is crafted to deliver maximum nutrition. Rich in fiber, protein, calcium, and essential minerals.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Buy 4 boxes (above Rs.1000) and enjoy free delivery across India. Fast and reliable shipping.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Strict hygiene standards, carefully sourced ingredients, and quality checks at every step of production.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
            The Sarvantrah Promise
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
