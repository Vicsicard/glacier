"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/mockData";

interface PackagesProps {
  onOpenQuote: () => void;
}

export default function Packages({ onOpenQuote }: PackagesProps) {
  return (
    <section id="packages" className="py-20 bg-gradient-to-r from-[#FFE8B3] via-[#E8D4F0] to-[#D4B8E8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Catering Packages
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Choose the perfect package for your event. All packages include professional service, setup, and cleanup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-sm border p-8 ${
                pkg.featured
                  ? "border-[#7B4B94] ring-2 ring-[#7B4B94]/20 relative"
                  : "border-gray-200"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#7B4B94] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#7B4B94]">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600">{pkg.priceUnit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#7EC6E8] flex-shrink-0 mt-0.5"
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
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenQuote}
                className={`w-full rounded-xl shadow-sm font-medium ${
                  pkg.featured
                    ? "bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white"
                    : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200"
                }`}
              >
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
