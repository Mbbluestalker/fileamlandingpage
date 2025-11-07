import React from "react";
import { motion } from "framer-motion";

function PartnerCTA() {
  return (
    <section className="bg-gradient-to-br from-[#008B8B] via-[#00A5A5] to-[#008B8B] py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Partner With FileAm
        </h2>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Grow your firm while helping SMEs stay compliant with Nigeria's new monthly tax rules.
        </p>

        {/* Benefits List */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 text-white">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-base md:text-lg font-medium">Earn commissions</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-base md:text-lg font-medium">Get clean, organised client data</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-base md:text-lg font-medium">Offer fast, AI-powered tax automation</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="#partner"
          className="inline-flex items-center gap-2 bg-white text-[#008B8B] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Become a Partner</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default PartnerCTA;
