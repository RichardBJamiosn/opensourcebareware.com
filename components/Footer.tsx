import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--deep-wood)] border-t border-[var(--copper)]/20 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍸</span>
              <span className="text-lg font-bold text-[var(--amber)]">
                Open Source Barware
              </span>
            </div>
            <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">
              Free bar inventory tools built by bartenders who got tired of
              paying for spreadsheets. No subscriptions, no upsells, no
              bullshit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[var(--amber)] font-semibold mb-3 uppercase text-sm tracking-wider">
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-[var(--foreground)]/60 hover:text-[var(--amber)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-[var(--foreground)]/60 hover:text-[var(--amber)] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/downloads"
                className="text-sm text-[var(--foreground)]/60 hover:text-[var(--amber)] transition-colors"
              >
                Free Downloads
              </Link>
            </div>
          </div>

          {/* Built with */}
          <div>
            <h3 className="text-[var(--amber)] font-semibold mb-3 uppercase text-sm tracking-wider">
              Built With
            </h3>
            <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">
              Built in the real world at{" "}
              <span className="text-[var(--whiskey)]">Agave &amp; Rye</span>,
              downtown Cleveland. Tested with real bottles, real counts, real
              bartenders.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--copper)]/10 mt-8 pt-6 text-center text-xs text-[var(--foreground)]/40">
          <p>
            &copy; {new Date().getFullYear()} Open Source Barware &mdash; A{" "}
            <span className="text-[var(--whiskey)]">RBJP Holdings</span>{" "}
            project. Free forever.
          </p>
        </div>
      </div>
    </footer>
  );
}
