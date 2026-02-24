"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenQuote: () => void;
}

export default function CTASection({ onOpenQuote }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#7B4B94]/10 to-[#FFD700]/10 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Tell us about your event and our team will follow up with availability and pricing.
          </p>
          <Button
            onClick={onOpenQuote}
            size="lg"
            className="bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white rounded-xl shadow-sm font-medium px-8 py-6 text-lg"
          >
            Get a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
