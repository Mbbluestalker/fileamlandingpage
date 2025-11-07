import React from "react";
import { motion } from "framer-motion";
import phoneMockup from "../assets/mockup 1.png";
import googlePlayIcon from "../assets/image 62.png";
import appleStoreIcon from "../assets/Group (1).png";

function AppDownload() {
  return (
    <section id="download" className="bg-[#334E4E] h-[525px] relative overflow-visible">
      <div className="h-full w-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Left Content */}
          <motion.div
            className="max-w-lg space-y-6 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Get Started By Downloading Our App
            </h2>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-[#334E4E] transition-colors"
              >
                <img src={googlePlayIcon} alt="Google Play" className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-[#334E4E] transition-colors"
              >
                <img src={appleStoreIcon} alt="Apple Store" className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">Apple Store</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Phone Mockup - Positioned from bottom right */}
        <motion.div
          className="hidden lg:block absolute right-20 bottom-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={phoneMockup}
            alt="App mockup"
            className="w-auto max-h-[650px] object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AppDownload;
