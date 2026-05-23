"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--deep-wood)]/95 backdrop-blur-sm border-b border-[var(--copper)]/20">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl" role="img" aria-label="cocktail">
            🍸
          </span>
          <div>
            <span className="text-xl font-bold text-[var(--amber)] group-hover:text-[var(--amber-light)] transition-colors">
              Open Source Barware
            </span>
            <span className="hidden sm:block text-xs text-[var(--whiskey)]/70 tracking-widest uppercase">
              Free tools for the bar industry
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[var(--foreground)]/80 hover:text-[var(--amber)] transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[var(--foreground)]/80 hover:text-[var(--amber)] transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/downloads"
            className="bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-black font-bold px-5 py-2 rounded-lg transition-colors"
          >
            Free Downloads
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--amber)] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--deep-wood)] border-t border-[var(--copper)]/20 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-[var(--foreground)]/80 hover:text-[var(--amber)] transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-[var(--foreground)]/80 hover:text-[var(--amber)] transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/downloads"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-black font-bold px-5 py-2 rounded-lg transition-colors text-center"
          >
            Free Downloads
          </Link>
        </div>
      )}
    </header>
  );
}
