import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function CategoriesSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Categories
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
            Explore Our Millet Collection
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            From crunchy chikkis to soft chapathis, discover the complete range of
            our nutritious millet-based products.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-1 p-4">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {cat.description}
                </p>
                <span className="mt-auto flex items-center gap-1 pt-2 text-xs font-medium text-primary transition-colors group-hover:text-secondary">
                  Shop Now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
