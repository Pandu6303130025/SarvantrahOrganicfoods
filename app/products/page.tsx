import { Suspense } from "react";
import { ProductsPageContent } from "@/components/products-page-content";

export const metadata = {
  title: "Products | Sarvantrah Organics",
  description: "Browse our complete range of premium millet-based organic snacks, chikkis, cookies, chapathis, and health mixes.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-20 text-muted-foreground">Loading products...</div>}>
      <ProductsPageContent />
    </Suspense>
  );
}
