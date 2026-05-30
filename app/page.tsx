import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CollegeCard from "@/components/CollegeCard";

async function getFeaturedColleges() {
  return prisma.college.findMany({
    take: 6,
    orderBy: { rating: "desc" },
    include: { placements: true, _count: { select: { reviews: true } } },
  });
}

export default async function HomePage() {
  const featured = await getFeaturedColleges();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-indigo-300 mb-8 border border-indigo-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>15+ top colleges across India</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
            Discover Your{" "}
            <span className="gradient-text">Perfect College</span>{" "}
            Journey
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Search, compare, and predict admissions across India&apos;s top engineering colleges
            with real placement data, cutoff ranks, and student reviews.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/colleges" className="btn-primary px-8 py-3.5 rounded-xl text-white font-semibold text-lg w-full sm:w-auto">
              Explore Colleges
            </Link>
            <Link href="/predictor" className="glass px-8 py-3.5 rounded-xl text-slate-200 font-semibold text-lg hover:bg-white/8 transition-all border border-white/10 w-full sm:w-auto">
              Rank Predictor →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "15+", label: "Colleges" },
              { value: "50+", label: "Courses" },
              { value: "100%", label: "Free" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 border border-white/5">
                <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* Features Strip */}
      <section className="border-y border-white/5 bg-white/[0.02] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: "🎓", text: "Real placement data" },
              { icon: "📊", text: "JEE rank predictor" },
              { icon: "⚖️", text: "Side-by-side compare" },
              { icon: "❤️", text: "Save your shortlist" },
              { icon: "⭐", text: "Student reviews" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-2 text-slate-400 text-sm">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-indigo-400 text-sm font-medium mb-2 tracking-widest uppercase">Top Picks</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              India&apos;s Best Engineering Colleges
            </h2>
          </div>
          <Link href="/colleges" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium hidden sm:flex items-center gap-1">
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((college, i) => (
            <div
              key={college.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <CollegeCard college={college} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/colleges" className="btn-primary px-6 py-2.5 rounded-lg text-white text-sm font-medium inline-block">
            View all colleges →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-indigo-400 text-sm font-medium mb-2 tracking-widest uppercase">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-14">
            Your college search, simplified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Search & Filter",
                desc: "Browse colleges by state, type, fees, and rating. Find colleges that match your criteria.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Predict & Compare",
                desc: "Enter your JEE rank to see which colleges you qualify for. Compare 2-3 colleges side by side.",
                icon: "📈",
              },
              {
                step: "03",
                title: "Save & Decide",
                desc: "Save your shortlisted colleges, read student reviews, and make an informed decision.",
                icon: "✅",
              },
            ].map((item) => (
              <div key={item.step} className="glass rounded-2xl p-7 border border-white/5 text-left">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-indigo-400 text-xs font-mono mb-2">{item.step}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-10 md:p-16 text-center border border-indigo-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 relative">
            Ready to find your dream college?
          </h2>
          <p className="text-slate-400 mb-8 relative">
            Create a free account to save colleges, track comparisons, and get personalized recommendations.
          </p>
          <Link href="/auth/register" className="btn-primary px-8 py-3.5 rounded-xl text-white font-semibold inline-block relative">
            Start for free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-white font-semibold">
            Uni<span className="gradient-text">Verse</span>
          </span>
          <p className="text-slate-600 text-xs">© 2024 UniVerse. Built for India&apos;s students.</p>
          <div className="flex gap-4 text-xs text-slate-600">
            <Link href="/colleges" className="hover:text-slate-400">Colleges</Link>
            <Link href="/compare" className="hover:text-slate-400">Compare</Link>
            <Link href="/predictor" className="hover:text-slate-400">Predictor</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
