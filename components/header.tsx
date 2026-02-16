"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useCartItemCount } from "@/lib/cart-store";
import Image from "next/image";


export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const itemCount = useCartItemCount();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    router.push(`/products?search=${encodeURIComponent(searchValue)}`);

    setShowSearch(false);
    setMobileMenuOpen(false);
    setSearchValue("");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">

      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setShowSearch(false);
            }}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">Our Story</Link>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
  <Link href="/" className="block">
  <Image
    src="https://res.cloudinary.com/dgky6sudx/image/upload/v1771251518/IMG_2479_ltxxzp.png"
    alt="ZYVA Logo"
    width={740}
    height={360}
    priority
    className="h-24 w-auto md:h-28 lg:h-32 object-contain"
  />
</Link>

</div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-6">

          {/* 🔥 Search now visible on ALL screens */}
          <button
            onClick={() => {
              setShowSearch(!showSearch);
              setMobileMenuOpen(false);
            }}
          >
            <Search className="h-5 w-5" />
          </button>

          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* 🔥 SEARCH BAR (Works in mobile + desktop) */}
      {showSearch && (
        <div className="border-t border-gray-800 bg-black">
          <form
            onSubmit={handleSearch}
            className="mx-auto max-w-7xl px-6 py-4"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full rounded-lg bg-white px-4 py-3 text-black focus:outline-none"
              autoFocus
            />
          </form>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm tracking-wide">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              Our Story
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
