import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-wood)] via-[var(--bar-top)] to-[var(--background)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <div className="text-6xl md:text-8xl mb-6">🥃</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[var(--amber)]">Free</span> Bar Inventory
            <br />
            <span className="text-[var(--whiskey)]">
              Built by Bartenders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop paying for overpriced inventory systems and clunky
            spreadsheets. We built the tools we wished we had &mdash; and
            we&apos;re giving them away for free. No subscriptions. No upsells.
            Just count your bottles and go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/downloads"
              className="bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-black font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Download Free Tools
            </Link>
            <Link
              href="/about"
              className="border border-[var(--copper)] text-[var(--whiskey)] hover:bg-[var(--copper)]/10 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Know the <span className="text-[var(--amber)]">Pain</span>
          </h2>
          <p className="text-[var(--foreground)]/60 max-w-xl mx-auto text-lg">
            Every bartender has been there. End of night, clipboard in hand,
            counting bottles by tenths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PainCard
            emoji="📋"
            title="The Clipboard Shuffle"
            description="Counting bottles by tenths, scribbling on paper, then manually entering it all into a spreadsheet. Hours of your life, gone."
          />
          <PainCard
            emoji="💸"
            title="Expensive 'Solutions'"
            description="Inventory guns cost thousands. Monthly software subscriptions add up. And they all want to lock you into their ecosystem."
          />
          <PainCard
            emoji="😤"
            title="Never Matches Up"
            description="Your counts never quite match the POS sales. Shrinkage? Pour variance? Who knows &mdash; the spreadsheet sure doesn't tell you."
          />
        </div>
      </section>

      {/* What We Built */}
      <section className="bg-[var(--deep-wood)]/50 border-y border-[var(--copper)]/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="text-[var(--amber)]">Built</span>
            </h2>
            <p className="text-[var(--foreground)]/60 max-w-xl mx-auto text-lg">
              AI-powered tools that make inventory fast, accurate, and
              actually useful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              emoji="📊"
              title="Smart Inventory Sheets"
              description="Pre-built spreadsheets with formulas that calculate cost, usage, variance, and reorder points. Just enter your counts."
            />
            <FeatureCard
              emoji="🤖"
              title="AI Count Assistant"
              description="Use your phone camera to snap bottles. AI reads the levels so you don't have to eyeball tenths at 2am."
            />
            <FeatureCard
              emoji="📈"
              title="Variance Tracking"
              description="Compare your physical counts against POS sales automatically. Find where you're losing money, not just that you are."
            />
            <FeatureCard
              emoji="🔓"
              title="100% Open Source"
              description="Every tool, every formula, every script &mdash; it's all yours. Fork it, modify it, improve it. No vendor lock-in, ever."
            />
          </div>
        </div>
      </section>

      {/* How It's Being Built */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built in a{" "}
            <span className="text-[var(--amber)]">Real Bar</span>
          </h2>
          <p className="text-[var(--foreground)]/60 max-w-xl mx-auto text-lg">
            Not in a Silicon Valley office. In a real restaurant, with real
            bottles, counting real inventory.
          </p>
        </div>

        <div className="bg-[var(--bar-top)] border border-[var(--copper)]/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[var(--amber)] mb-4">
                Agave &amp; Rye, Downtown Cleveland
              </h3>
              <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                Our partner Bill, the General Manager of Agave &amp; Rye, opened
                his doors so we could build this system the right way &mdash; on
                the bar floor, not in a lab.
              </p>
              <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                Three weeks. One day a week. Working side by side with his bar
                manager, doing real inventory, testing every tool against real
                bottles and real numbers.
              </p>
              <p className="text-[var(--whiskey)] font-medium">
                That&apos;s how you build something that actually works.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <TimelineStep
                step="Week 1"
                title="Baseline & Count"
                description="Full bar inventory count. Document every bottle, every category, every shelf position."
              />
              <TimelineStep
                step="Week 2"
                title="Build & Test"
                description="Deploy the spreadsheet system. Run it alongside their existing process. Compare results."
              />
              <TimelineStep
                step="Week 3"
                title="Refine & Ship"
                description="Fix what broke. Optimize what worked. Package it up and give it to the world."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[var(--background)] to-[var(--deep-wood)]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-5xl mb-6">🍻</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="text-[var(--amber)]">Ditch the Pain?</span>
          </h2>
          <p className="text-[var(--foreground)]/60 text-lg mb-8 max-w-xl mx-auto">
            Download our free inventory tools and start counting smarter
            tonight. No signup required. No email capture. Just the goods.
          </p>
          <Link
            href="/downloads"
            className="inline-block bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-black font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105"
          >
            Get the Free Tools
          </Link>
        </div>
      </section>
    </>
  );
}

function PainCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[var(--bar-top)] border border-[var(--copper)]/15 rounded-xl p-6 hover:border-[var(--copper)]/30 transition-colors">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-[var(--whiskey)] mb-2">{title}</h3>
      <p
        className="text-[var(--foreground)]/60 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[var(--background)] border border-[var(--copper)]/15 rounded-xl p-6 hover:border-[var(--amber)]/30 transition-colors">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-xl font-bold text-[var(--amber)] mb-2">{title}</h3>
      <p
        className="text-[var(--foreground)]/60 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

function TimelineStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-[var(--amber)] text-black text-xs font-bold px-3 py-1 rounded-full shrink-0 mt-1">
        {step}
      </div>
      <div>
        <h4 className="font-bold text-[var(--foreground)] mb-1">{title}</h4>
        <p className="text-sm text-[var(--foreground)]/60">{description}</p>
      </div>
    </div>
  );
}
