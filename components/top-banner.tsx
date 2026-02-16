"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full bg-black text-white border-b border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-[11px] sm:text-xs tracking-wide">
        
        <span className="uppercase">
          Buy 4 Boxes (Above ₹1000) &nbsp;—&nbsp; 
          <span className="font-semibold">Free Delivery</span>
        </span>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-6 text-gray-400 hover:text-white transition"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
