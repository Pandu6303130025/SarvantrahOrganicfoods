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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const categoryLinks = [
  { href: "/products?category=millet-chikkis", label: "Millet Chikkis" },
  { href: "/products?category=cheesy-crunchy-hots", label: "Cheesy Crunchy Hots" },
  { href: "/products?category=healthy-mix", label: "Healthy Mix" },
  { href: "/products?category=classy-cookies", label: "Classy Cookies" },
  { href: "/products?category=millet-chapathis", label: "Millet Chapathis" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Sarvantrah Organics Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg bg-card object-contain p-1"
              />
              <div className="flex flex-col">
                <span className="font-serif text-sm font-bold text-secondary">
                  Sarvantrah
                </span>
                <span className="font-serif text-lg font-bold text-card">
                  Organics
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-card/70">
              Premium millet-based organic snacks from Andhra Pradesh. Making
              nutritious food affordable and accessible for everyone.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card/10 text-card transition-colors hover:bg-secondary hover:text-secondary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card/10 text-card transition-colors hover:bg-secondary hover:text-secondary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-card/70 transition-colors hover:text-card"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Categories
            </h3>
            <nav className="flex flex-col gap-2">
              {categoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-card/70 transition-colors hover:text-card"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-start gap-2 text-sm text-card/70 transition-colors hover:text-card"
              >
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {PHONE_NUMBER}
                  <br />
                  {PHONE_NUMBER_ALT}
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-2 text-sm text-card/70 transition-colors hover:text-card"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="break-all">{EMAIL}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-card/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-card/70">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{BUSINESS_HOURS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-card/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-card/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Sarvantrah Organic Foods Pvt. Ltd. All
            rights reserved.
          </p>
          <p>Millet-powered nutrition for a healthier tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
