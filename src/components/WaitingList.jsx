import React from "react";
import { motion } from "framer-motion";

function WaitingList() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-[#008B8B] rounded-3xl py-12 px-8 md:px-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get early access
            </h2>

            {/* Email and Phone Input Form */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-96">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-6 py-3 rounded bg-[#006666] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="relative w-full md:w-96">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-6 py-3 pr-32 rounded bg-[#006666] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#008B8B] px-8 py-2 rounded font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Join us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WaitingList;
