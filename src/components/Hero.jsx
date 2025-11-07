import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Mask group.png";
import underlineDecor from "../assets/Group.png";

function Hero() {
  return (
    <section id="home" className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight">
              Speak Your<br />
              Business<br />
              <span className="relative inline-block">
                Finances
                <img
                  src={underlineDecor}
                  alt=""
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>{" "}
              into<br />
              Clarity
            </h1>

            <p className="text-[#4D4D4D] text-lg">
              No spreadsheets. No stress. Just your voice.
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#008B8B]"
              />
              <button className="bg-[#008B8B] text-white px-8 py-3 rounded hover:bg-[#334E4E] transition-colors whitespace-nowrap">
                Join us
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Business professional using phone"
                className="rounded-3xl shadow-lg w-full max-w-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
