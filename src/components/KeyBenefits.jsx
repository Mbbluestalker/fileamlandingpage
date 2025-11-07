import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image.png";
import image2 from "../assets/image (1).png";
import image3 from "../assets/image (2).png";
import image4 from "../assets/image (3).png";

function KeyBenefits() {
  const benefits = [
    {
      title: "Voice First",
      description:
        "Record your transactions by simply speaking. No typing, no spreadsheets—just talk naturally about your sales, expenses, and receipts. Our AI understands and organizes everything automatically, making financial tracking as easy as having a conversation.",
      image: image1,
      imagePosition: "right",
    },
    {
      title: "Instant clarity",
      description:
        "See your complete financial picture instantly. Get real-time insights into your cash flow, profit margins, and business performance with clear, easy-to-understand reports. Make smarter decisions faster with data that updates as you speak.",
      image: image2,
      imagePosition: "left",
    },
    {
      title: "Tax ready",
      description:
        "Stay ahead of Nigeria's monthly tax requirements effortlessly. FileAm automatically categorizes transactions for tax compliance, generates reports, and keeps you prepared for filing. No stress, no penalties—just peace of mind knowing you're always tax-ready.",
      image: image3,
      imagePosition: "right",
    },
    {
      title: "Small business focus",
      description:
        "Designed specifically for Nigerian micro and small businesses. No complex features you don't need, no expensive subscriptions you can't afford. Just simple, powerful tools that help you manage your finances and grow your business—all at a price that makes sense.",
      image: image4,
      imagePosition: "left",
    },
  ];

  return (
    <section id="benefits" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000000] mb-16">
          Key Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                benefit.imagePosition === "left" ? "lg:grid-flow-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Text Content */}
              <motion.div
                className={`space-y-4 ${
                  benefit.imagePosition === "left"
                    ? "lg:col-start-2"
                    : "lg:col-start-1"
                }`}
                initial={{ opacity: 0, x: benefit.imagePosition === "left" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#000000]">
                  {benefit.title}
                </h3>
                <p className="text-[#4D4D4D] text-base leading-relaxed">
                  {benefit.description}
                </p>
                <button
                  onClick={() => {
                    document.getElementById('waitinglist')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#008B8B] text-white px-6 py-2 rounded hover:bg-[#334E4E] transition-colors"
                >
                  Get Started
                </button>
              </motion.div>

              {/* Image */}
              <motion.div
                className={`flex ${
                  benefit.imagePosition === "left"
                    ? "lg:col-start-1 lg:row-start-1 justify-start"
                    : "justify-end"
                }`}
                initial={{ opacity: 0, x: benefit.imagePosition === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-md"
                    style={{
                      transform: index % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyBenefits;
