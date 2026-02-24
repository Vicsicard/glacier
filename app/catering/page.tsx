"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Packages from "@/components/Packages";
import EventTypes from "@/components/EventTypes";
import Gallery from "@/components/Gallery";
import WhyGlacier from "@/components/WhyGlacier";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import StickyCTA from "@/components/StickyCTA";
import QuoteModal from "@/components/QuoteModal";

export default function CateringPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onOpenQuote={() => setQuoteModalOpen(true)} />
      <TrustBar />
      <Packages onOpenQuote={() => setQuoteModalOpen(true)} />
      <EventTypes />
      <Gallery />
      <WhyGlacier />
      <Testimonials />
      <FAQ />
      <CTASection onOpenQuote={() => setQuoteModalOpen(true)} />
      <StickyCTA onOpenQuote={() => setQuoteModalOpen(true)} />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </main>
  );
}
