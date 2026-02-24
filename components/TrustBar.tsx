"use client";

import { motion } from "framer-motion";
import { trustIndicators } from "@/lib/mockData";

export default function TrustBar() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#E8D4F0] via-[#FFE8B3] to-[#D4B8E8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7B4B94]/10 mb-3">
                <svg
                  className="w-6 h-6 text-[#7B4B94]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">{indicator.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
