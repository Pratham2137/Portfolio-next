import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://github.com/prathamshinde-dev" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
          </Link>
          <Link href="https://linkedin.com/in/prathamshinde" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
          </Link>
          <Link href="mailto:contact@prathamshinde.tech">
            <img src="/icons/globe.svg" alt="Email" className="w-6 h-6 hover:opacity-80" />
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-sky-400">Pratham Shinde</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
