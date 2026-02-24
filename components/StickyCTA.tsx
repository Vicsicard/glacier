"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface StickyProps {
  onOpenQuote: () => void;
}

export default function StickyCTA({ onOpenQuote }: StickyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section (top of page)
      const heroSection = document.querySelector('section');
      // Get the final CTA section
      const ctaSection = document.querySelector('section:last-of-type');
      
      if (!heroSection || !ctaSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const ctaRect = ctaSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hide sticky CTA if:
      // 1. Hero section is visible (top 50% of viewport)
      // 2. Final CTA section is visible (any part in viewport)
      const heroVisible = heroRect.bottom > windowHeight * 0.5;
      const ctaVisible = ctaRect.top < windowHeight && ctaRect.bottom > 0;

      setIsVisible(!heroVisible && !ctaVisible);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop: bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Button
          onClick={onOpenQuote}
          size="lg"
          className="bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white rounded-xl shadow-lg font-medium px-6 py-6"
        >
          Get a Quote
        </Button>
      </div>
      
      {/* Mobile: centered bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Button
          onClick={onOpenQuote}
          size="lg"
          className="bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white rounded-xl shadow-lg font-medium px-8 py-6"
        >
          Get a Quote
        </Button>
      </div>
    </>
  );
}
