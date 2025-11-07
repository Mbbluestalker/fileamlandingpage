import React from "react";
import logo from "../assets/FileAm Finance Brand Mark PNG 1 1.png";

function Header() {
  return (
    <header className="bg-white py-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="FileAm Finance" className="h-10 md:h-12 lg:h-14" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-[#4D4D4D] hover:text-[#008B8B] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <a
            href="#benefits"
            className="text-[#4D4D4D] hover:text-[#008B8B] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Benefits
          </a>
          <a
            href="#how-it-works"
            className="text-[#4D4D4D] hover:text-[#008B8B] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-[#4D4D4D] hover:text-[#008B8B] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Testimonials
          </a>
        </nav>

        {/* Download Button */}
        <div className="flex items-center">
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative bg-gradient-to-r from-[#008B8B] to-[#00A5A5] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Download App</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
