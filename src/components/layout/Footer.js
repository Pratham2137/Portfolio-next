// src/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://github.com/yourusername" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 hover:text-white transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 ...Z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/yourusername" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 hover:text-white transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.24 0 0 2.24 0 ...Z" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Pratham Shinde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
