"use client";

import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBanner />
      <Header />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
      <StickyButtons />
    </>
  );
}
