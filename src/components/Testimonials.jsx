import React from "react";
import { motion } from "framer-motion";
import avatar1 from "../assets/Ellipse 1.png";
import avatar2 from "../assets/Ellipse 1 (1).png";
import avatar3 from "../assets/Ellipse 1 (2).png";
import avatar4 from "../assets/Ellipse 1 (3).png";

function Testimonials() {
  const testimonials = [
    {
      text: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
      author: "Kelly Williams",
      avatar: avatar1,
      rating: 5,
    },
    {
      text: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
      author: "Kelly Williams",
      avatar: avatar2,
      rating: 5,
    },
    {
      text: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
      author: "Kelly Williams",
      avatar: avatar3,
      rating: 5,
    },
    {
      text: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
      author: "Kelly Williams",
      avatar: avatar4,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-16 px-6 md:px-12 lg:px-20 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Testimonials Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#4D4D4D] text-xs mb-3 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-[#000000] font-semibold text-xs">
                    {testimonial.author}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Text */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#000000] text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
              Community powered by over 3 million users, and we are just getting started.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
