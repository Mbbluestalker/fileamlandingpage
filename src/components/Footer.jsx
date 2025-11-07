import React from "react";
import logo from "../assets/FileAm Finance Brand Mark PNG 1 1.png";

function Footer() {
  const footerSections = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Partners", href: "#partner" },
      { name: "Contact", href: "#contact" },
    ],
    features: [
      { name: "Voice Recording", href: "#benefits" },
      { name: "Tax Automation", href: "#how-it-works" },
      { name: "Compliance", href: "#benefits" },
    ],
    help: [
      { name: "Help Center", href: "#help" },
      { name: "Support", href: "#support" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security", href: "#security" },
    ],
  };

  return (
    <footer className="bg-white py-12 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="FileAm Finance" className="h-8 mb-4" />
            <p className="text-[#4D4D4D] text-sm leading-relaxed">
              Empowering small businesses across Nigeria with voice-first financial management. Stay compliant, stay ahead.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[#000000] font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#4D4D4D] text-sm hover:text-[#008B8B] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="text-[#000000] font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              {footerSections.features.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#4D4D4D] text-sm hover:text-[#008B8B] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-[#000000] font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              {footerSections.help.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#4D4D4D] text-sm hover:text-[#008B8B] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-[#000000] font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#4D4D4D] text-sm hover:text-[#008B8B] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
