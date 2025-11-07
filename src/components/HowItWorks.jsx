import React from "react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "SPEAK",
      description:
        "Simply speak your transactions and business activities. No typing, no spreadsheets—just your voice.",
    },
    {
      number: "02",
      title: "APP ORGANIZES",
      description:
        "Our smart system automatically categorizes and organizes your financial data in real-time.",
    },
    {
      number: "03",
      title: "TAX DONE",
      description:
        "Stay tax-ready all year round. Generate compliant reports instantly whenever you need them.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title - Redesigned */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[#008B8B] text-sm md:text-base font-semibold uppercase tracking-wider mb-2 block">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] mb-4">
              How It Works
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-[#008B8B] rounded"></div>
              <div className="h-1 w-8 bg-[#00A5A5] rounded"></div>
              <div className="h-1 w-4 bg-[#FFD700] rounded"></div>
            </div>
          </div>
          <p className="text-[#4D4D4D] text-lg max-w-2xl mx-auto mt-6">
            Get started in three easy steps—no complicated setup, no learning curve.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {steps.map((step, index) => (
            <div key={index} className="text-left space-y-4">
              {/* Step Number */}
              <div className="text-6xl md:text-7xl font-bold text-gray-200">
                {step.number}
              </div>
              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#000000]">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="text-[#4D4D4D] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
