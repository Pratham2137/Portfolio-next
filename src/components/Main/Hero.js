// src/components/Hero.js
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-blue-50 pt-20"
    >
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I&apos;m <span className="text-blue-600">Pratham Shinde</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate Web Developer who builds interactive, secure, and
          high-performance web applications.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Optional image */}
      <div className="mt-12">
        <Image
          src="/images/avatar.webp" // place your image in public/images/
          width={160}
          height={160}
          alt="Pratham avatar"
          className="rounded-full shadow-md border-4 border-blue-200"
        />
      </div>
    </section>
  );
}
