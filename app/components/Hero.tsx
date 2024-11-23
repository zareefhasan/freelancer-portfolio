"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[url('/grid.svg')] bg-center">
      <motion.div
        className="text-center space-y-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello <span className="inline-block animate-wave">👋</span> i&aposm
          available for <br className="hidden sm:block" />
          freelance work
        </motion.h1>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl text-gray-600">
            For quick response:{" "}
            <Link
              href="skype:your.id?chat"
              className="relative inline-flex items-center gap-1 text-gray-900 font-medium group"
            >
              <span className="relative">
                Chat now
                <span className="absolute left-0 right-0 bottom-0 h-[6px] bg-orange-200 -z-10 group-hover:h-full transition-all duration-200"></span>
              </span>
            </Link>
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold text-lg group transition-all duration-300 hover:gap-4"
            >
              Hire Me Now
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
