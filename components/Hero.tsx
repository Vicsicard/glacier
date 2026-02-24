"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    packagesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Vibrant animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5F4] via-[#FFF9E5] to-[#E5F4FF] animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#7B4B94]/10 via-transparent to-[#FFD700]/10" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Make Your Event Unforgettable with<br />Premium Ice Cream Catering
        </h1>
        
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Full-service catering for weddings, corporate events, schools, and private parties across Colorado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onOpenQuote}
            size="lg"
            className="bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white rounded-xl shadow-sm font-medium px-8 py-6 text-lg"
          >
            Get a Quote
          </Button>
          
          <Button
            onClick={scrollToPackages}
            variant="outline"
            size="lg"
            className="rounded-xl shadow-sm font-medium px-8 py-6 text-lg border-2"
          >
            View Packages
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
