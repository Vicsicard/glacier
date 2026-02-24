"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const galleryItems = [
    { id: 1, label: "Wedding Setup" },
    { id: 2, label: "Sundae Bar" },
    { id: 3, label: "Corporate Event" },
    { id: 4, label: "Ice Cream Display" },
    { id: 5, label: "Festival Service" },
    { id: 6, label: "Happy Guests" },
    { id: 7, label: "School Event" },
    { id: 8, label: "Premium Flavors" }
  ];

  return (
    <section className="py-20 bg-[#F7F7F7] border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            See Us in Action
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            From elegant weddings to fun festivals, we bring smiles to every event.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#7B4B94]/20 to-[#FFD700]/20 flex items-center justify-center border border-gray-200"
            >
              <span className="text-sm text-gray-600 font-medium text-center px-4">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
