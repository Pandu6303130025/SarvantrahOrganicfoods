"use client";

import { Gift, X } from "lucide-react";
import { useState } from "react";

export function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-secondary text-secondary-foreground relative">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <Gift className="h-4 w-4 flex-shrink-0" />
        <span>
          Buy 4 Boxes (Above Rs.1000) &amp; Get <strong>FREE Delivery!</strong>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-secondary-foreground/10"
          aria-label="Close banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
