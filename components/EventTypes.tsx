"use client";

import { motion } from "framer-motion";
import { eventTypes } from "@/lib/mockData";

export default function EventTypes() {
  return (
    <section className="py-20 bg-gradient-to-bl from-[#D4B8E8] via-[#E8D4F0] to-[#C9E4FF]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Perfect for Any Event
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            From intimate gatherings to large festivals, we bring the ice cream experience to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#7B4B94]/30 to-[#FFD700]/30 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  {event.title} Photo
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
