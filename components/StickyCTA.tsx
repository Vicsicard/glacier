"use client";

import { Button } from "@/components/ui/button";

interface StickyProps {
  onOpenQuote: () => void;
}

export default function StickyCTA({ onOpenQuote }: StickyProps) {
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
