// src/components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Pratham<span className="text-gray-900">Shinde</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          ☰
        </button>

        {/* Nav links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-8 text-gray-700 font-medium`}
        >
          <Link href="#home" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
