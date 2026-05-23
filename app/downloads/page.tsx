import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Downloads — Open Source Barware",
  description:
    "Download free bar inventory tools. Spreadsheets, count sheets, variance calculators, and more. No signup required.",
};

export default function DownloadsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--deep-wood)] to-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-5xl mb-6">📦</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Free <span className="text-[var(--amber)]">Downloads</span>
          </h1>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed">
            Every tool is free. No email required. No signup wall. Click
            download and get to work. We&apos;ll keep adding tools as we build
            them.
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DownloadCard
            emoji="📊"
            title="Bar Inventory Master Sheet"
            description="Complete inventory spreadsheet with categories for liquor, beer, wine, and mixers. Pre-built formulas calculate total value, usage rate, and reorder alerts."
            format="XLSX"
            status="coming-soon"
          />

          <DownloadCard
            emoji="📋"
            title="Quick Count Template"
            description="Simplified count sheet for weekly spot checks. Print it, count it, done. Designed for speed &mdash; just the essentials."
            format="PDF + XLSX"
            status="coming-soon"
          />

          <DownloadCard
            emoji="📈"
            title="Variance Calculator"
            description="Plug in your counts and POS sales. The sheet calculates pour cost, shrinkage percentage, and flags problem categories automatically."
            format="XLSX"
            status="coming-soon"
          />

          <DownloadCard
            emoji="🏷️"
            title="Product Database Starter"
            description="Pre-populated database of 500+ common bar products with bottle sizes, costs, and standard pours. Save hours of data entry."
            format="CSV + XLSX"
            status="coming-soon"
          />

          <DownloadCard
            emoji="🤖"
            title="AI Bottle Counter"
            description="Python script that uses your phone camera to estimate bottle levels. Snap a photo, get a count. Open source, runs locally."
            format="Python"
            status="coming-soon"
          />

          <DownloadCard
            emoji="📱"
            title="Mobile Count App"
            description="Progressive web app for counting on your phone. Works offline, syncs when connected. Walk the bar with your phone instead of a clipboard."
            format="Web App"
            status="coming-soon"
          />
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-[var(--deep-wood)]/50 border-y border-[var(--copper)]/10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Build <span className="text-[var(--amber)]">Roadmap</span>
          </h2>
          <p className="text-center text-[var(--foreground)]/60 mb-12 max-w-xl mx-auto">
            We&apos;re building these tools live at Agave &amp; Rye. Here&apos;s
            what&apos;s happening and when.
          </p>

          <div className="space-y-6">
            <RoadmapItem
              phase="Phase 1 &mdash; Foundation"
              timeline="Weeks 1-2"
              status="in-progress"
              items={[
                "Full inventory count at Agave & Rye",
                "Build master spreadsheet with live data",
                "Create quick count template",
                "Document every shelf, category, and product",
              ]}
            />
            <RoadmapItem
              phase="Phase 2 &mdash; Intelligence"
              timeline="Week 3"
              status="upcoming"
              items={[
                "Variance calculator with POS integration",
                "Product database with 500+ items",
                "Reorder point formulas",
                "Cost analysis per category",
              ]}
            />
            <RoadmapItem
              phase="Phase 3 &mdash; Automation"
              timeline="Post-Launch"
              status="planned"
              items={[
                "AI bottle level reader (phone camera)",
                "Mobile progressive web app",
                "POS data import tools",
                "Multi-location support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to <span className="text-[var(--amber)]">Contribute?</span>
        </h2>
        <p className="text-[var(--foreground)]/60 text-lg mb-8 max-w-xl mx-auto">
          This is open source. If you&apos;re a bartender with ideas, a
          developer who wants to help, or a bar owner who wants to test &mdash;
          we want to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="border border-[var(--copper)] text-[var(--whiskey)] hover:bg-[var(--copper)]/10 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn About the Project
          </Link>
        </div>
      </section>
    </>
  );
}

function DownloadCard({
  emoji,
  title,
  description,
  format,
  status,
}: {
  emoji: string;
  title: string;
  description: string;
  format: string;
  status: "available" | "coming-soon";
}) {
  return (
    <div className="bg-[var(--bar-top)] border border-[var(--copper)]/15 rounded-2xl p-6 hover:border-[var(--copper)]/30 transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{emoji}</span>
        <span className="text-xs font-mono bg-[var(--copper)]/20 text-[var(--whiskey)] px-2 py-1 rounded">
          {format}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[var(--amber)] mb-2">{title}</h3>
      <p
        className="text-[var(--foreground)]/60 leading-relaxed mb-6 flex-1"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {status === "available" ? (
        <button className="w-full bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-black font-bold py-3 rounded-lg transition-colors">
          Download Free
        </button>
      ) : (
        <div className="w-full bg-[var(--copper)]/10 border border-[var(--copper)]/20 text-[var(--whiskey)] font-medium py-3 rounded-lg text-center text-sm">
          Coming Soon &mdash; Building at Agave &amp; Rye
        </div>
      )}
    </div>
  );
}

function RoadmapItem({
  phase,
  timeline,
  status,
  items,
}: {
  phase: string;
  timeline: string;
  status: "completed" | "in-progress" | "upcoming" | "planned";
  items: string[];
}) {
  const statusStyles = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-[var(--amber)]/20 text-[var(--amber)] border-[var(--amber)]/30",
    upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    planned: "bg-[var(--foreground)]/10 text-[var(--foreground)]/50 border-[var(--foreground)]/20",
  };

  const statusLabels = {
    completed: "Done",
    "in-progress": "In Progress",
    upcoming: "Up Next",
    planned: "Planned",
  };

  return (
    <div className="bg-[var(--bar-top)] border border-[var(--copper)]/15 rounded-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div>
          <h3
            className="text-lg font-bold text-[var(--foreground)]"
            dangerouslySetInnerHTML={{ __html: phase }}
          />
          <p className="text-sm text-[var(--foreground)]/50">{timeline}</p>
        </div>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full border ${statusStyles[status]} w-fit`}
        >
          {statusLabels[status]}
        </span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[var(--foreground)]/60 text-sm flex items-start gap-2"
          >
            <span className="text-[var(--copper)] mt-0.5">&#9656;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
