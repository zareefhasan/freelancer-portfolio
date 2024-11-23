"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  MessageSquare,
  Home,
  FileEdit,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: PieChart,
    title: "Branding Design",
    description:
      "Continue indulged speaking the was horrible for domestic position. Seeing get rather.",
    color: "text-pink-500",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "App Development",
    description:
      "Continue indulged speaking the was horrible for domestic position. Seeing get rather.",
    color: "text-orange-500",
    highlight: true,
  },
  {
    icon: Home,
    title: "UI/UX Design",
    description:
      "Continue indulged speaking the was horrible for domestic position. Seeing get rather.",
    color: "text-rose-400",
    highlight: true,
  },
  {
    icon: FileEdit,
    title: "Web Design",
    description:
      "Continue indulged speaking the was horrible for domestic position. Seeing get rather.",
    color: "text-coral-500",
    highlight: true,
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Quality Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative p-6 bg-white rounded-3xl transition-all duration-300 hover:shadow-2xl ring-2 ring-orange-300 ${
                service.highlight ? "ring-1 hover:ring-orange-500 hover:" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center ${service.color}`}
                >
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-gray-800 hover:text-orange-500 transition-colors group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
