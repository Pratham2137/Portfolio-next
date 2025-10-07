"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="bg-white/30  backdrop-blur-md shadow-md shadow-slate-900/30 z-50 mx-auto w-full ">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-Inter font-bold ">
          Pratham <span className="">Shinde</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="">
            <ul className="gap-6 hidden md:flex">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Dark Mode Toggle Button */}
          <button>
            {isDarkMode ? (
              <Sun className="text-red-500" />
            ) : (
              <Moon className="text-blue-500" />
            )}
          </button>

          {/* Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu
              className={`absolute transition-all duration-300 transform ${
                isOpen
                  ? "opacity-0 scale-0 rotate-90"
                  : "opacity-100 scale-100 rotate-0 text-blue-500"
              }`}
            />
            <X
              className={`absolute transition-all duration-300 ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0 text-red-500"
                  : "opacity-0 scale-0 rotate-90"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden bg-white dark:bg-slate-900">
            <div className="flex flex-col items-center py-4 gap-4 text-gray-700 dark:text-gray-300 font-medium">
              <Link href="#home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="#blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </nav>
        )}
    </header>
  );
}
