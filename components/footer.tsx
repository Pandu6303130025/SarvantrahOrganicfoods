"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin } from "lucide-react";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_ALT,
  EMAIL,
  ADDRESS,
  BUSINESS_HOURS,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/data";

/* ===== TOP LEGAL LINKS STRIP ===== */
const legalLinks = [
  "Privacy Policy",
  "Terms & Condition",
  "Shipping Policy",
  "Refunds/Cancellations",
  "Sitewide Search",
  "Contacts",
  "News",
  "New Introductions",
  "Download Brochure",
];

export function Footer() {
  return (
    <footer className="bg-white">

      {/* ================= BLUE TOP STRIP ================= */}
      <div className="bg-black text-white py-6 px-4 m-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {legalLinks.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <span className="h-5 w-[2px] bg-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
           <div>
  <Link href="/" className="inline-block">

    <Image
      src="https://res.cloudinary.com/dgky6sudx/image/upload/v1771237752/0004-6948386854837152614_vtvbgs.png"
      alt="Sarvantrah Logo"
      width={180}
      height={80}
      priority
      className="h-16 w-auto sm:h-20 md:h-24 object-contain"
    />

  </Link>

  <p className="mt-6 max-w-xs text-sm text-gray-400 leading-relaxed">
    Premium millet-based organic snacks from Andhra Pradesh.
    Making nutritious food affordable and accessible for everyone.
  </p>

  <div className="mt-6 flex gap-5">
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:scale-110"
    >
      <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
    </a>

    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:scale-110"
    >
      <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
    </a>
  </div>
</div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Categories
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/products?category=millet-chikkis">Millet Chikkis</Link></li>
                <li><Link href="/products?category=cheesy-crunchy-hots">Cheesy Crunchy Hots</Link></li>
                <li><Link href="/products?category=healthy-mix">Healthy Mix</Link></li>
                <li><Link href="/products?category=classy-cookies">Classy Cookies</Link></li>
                <li><Link href="/products?category=millet-chapathis">Millet Chapathis</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Contact
              </h4>

              <div className="space-y-3 text-sm text-gray-400">

                <div className="flex gap-2">
                  <Phone className="h-4 w-4 mt-1" />
                  <div>
                    {PHONE_NUMBER}
                    <br />
                    {PHONE_NUMBER_ALT}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Mail className="h-4 w-4 mt-1" />
                  <span className="break-all">{EMAIL}</span>
                </div>

                <div className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>{ADDRESS}</span>
                </div>

                <div className="flex gap-2">
                  <Clock className="h-4 w-4 mt-1" />
                  <span>{BUSINESS_HOURS}</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sarvantrah Organic Foods Pvt. Ltd.
          All rights reserved.
        </div>
      </div>

    </footer>
  );
}
