import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Open Source Barware",
  description:
    "Meet the team behind Open Source Barware. Built by Richard Jamison and Bill at Agave & Rye in downtown Cleveland.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--deep-wood)] to-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Two Guys Who Got{" "}
            <span className="text-[var(--amber)]">Tired of Counting</span>
          </h1>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed">
            Open Source Barware started the way most good bar projects
            do &mdash; over drinks, complaining about the same problems every
            bar deals with.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert max-w-none">
          <div className="bg-[var(--bar-top)] border border-[var(--copper)]/20 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-[var(--amber)] mb-6">
              Why We&apos;re Doing This
            </h2>
            <div className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
              <p>
                If you&apos;ve ever worked behind a bar, you know the drill.
                Close out, grab the clipboard, start counting. Tenths of bottles
                on every shelf. Scribble it down. Go back to the office. Type it
                all into a spreadsheet. Try to match it against POS sales. Watch
                the numbers never quite add up. Repeat next week.
              </p>
              <p>
                Over the years, companies figured out there was money in this
                pain. So they built inventory guns that cost thousands. Monthly
                subscription software that charges per location. Consulting
                firms that&apos;ll do your counts for you &mdash; at a premium.
              </p>
              <p>
                Here&apos;s the thing:{" "}
                <span className="text-[var(--amber)] font-semibold">
                  AI changed everything.
                </span>{" "}
                The tools to build a genuinely good inventory system are now
                essentially free. So we did what any self-respecting bartender
                would do &mdash; we built our own, and we&apos;re giving it
                away.
              </p>
              <p>
                No subscriptions. No upsells. No &quot;premium tier.&quot; Just
                free tools that work, built by people who actually do inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-[var(--deep-wood)]/50 border-y border-[var(--copper)]/10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            The <span className="text-[var(--amber)]">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Richard */}
            <div className="bg-[var(--bar-top)] border border-[var(--copper)]/20 rounded-2xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--amber)] mb-1">
                Richard Jamison
              </h3>
              <p className="text-sm text-[var(--whiskey)] mb-4">
                Creator &amp; Developer
              </p>
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                Entrepreneur and longtime bar industry veteran. Richard has done
                more inventory counts than he can remember &mdash; which is
                exactly why he built the tools to make it painless. He brings the
                bartender perspective and the tech chops to make it real.
              </p>
            </div>

            {/* Bill / Agave & Rye */}
            <div className="bg-[var(--bar-top)] border border-[var(--copper)]/20 rounded-2xl p-8">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-[var(--amber)] mb-1">
                Bill &amp; the Agave &amp; Rye Team
              </h3>
              <p className="text-sm text-[var(--whiskey)] mb-4">
                General Manager, Agave &amp; Rye &mdash; Downtown Cleveland
              </p>
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                Bill stepped up in a big way. He opened his restaurant so we
                could build and test this system where it matters &mdash; on an
                actual bar floor. Three weeks of real inventory sessions with his
                team, proving every tool works before it ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agave & Rye Feature */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-[var(--bar-top)] border border-[var(--copper)]/20 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">🌵</span>
            <div>
              <h2 className="text-2xl font-bold text-[var(--amber)]">
                Agave &amp; Rye
              </h2>
              <p className="text-[var(--whiskey)]">Downtown Cleveland, Ohio</p>
            </div>
          </div>
          <div className="space-y-4 text-[var(--foreground)]/70 leading-relaxed">
            <p>
              Agave &amp; Rye isn&apos;t just our testing ground &mdash;
              they&apos;re our proof that this works in the real world.
            </p>
            <p>
              When we approached Bill about building an open-source inventory
              system, he didn&apos;t hesitate. He gave us access to his bar, his
              team, and his time. One day a week for three weeks, we worked
              alongside his bar manager doing actual inventory, testing our tools
              against their existing process, and refining everything until it
              worked seamlessly.
            </p>
            <p>
              That kind of partnership is rare, and we want to make sure Agave
              &amp; Rye gets the recognition they deserve. If you&apos;re ever
              in downtown Cleveland, go support them. They&apos;re good people
              running a great spot.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--copper)]/10">
            <p className="text-sm text-[var(--foreground)]/50">
              Agave &amp; Rye is located in downtown Cleveland, Ohio. Known for
              their creative tacos and extensive tequila &amp; mezcal selection.
            </p>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="bg-gradient-to-b from-[var(--background)] to-[var(--deep-wood)]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            The <span className="text-[var(--amber)]">Mission</span>
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed mb-4">
            Every bar &mdash; from the dive on the corner to the craft cocktail
            lounge downtown &mdash; deserves access to proper inventory tools.
            Not everyone can afford $200/month software. Not everyone should have
            to.
          </p>
          <p className="text-lg text-[var(--whiskey)] font-medium max-w-2xl mx-auto">
            We&apos;re building this in the open, testing it in real restaurants,
            and giving it to the industry for free. Period.
          </p>
          <div className="mt-10">
            <Link
              href="/downloads"
              className="inline-block bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-black font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Download the Free Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
