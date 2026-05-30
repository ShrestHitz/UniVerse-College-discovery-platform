"use client";
import { useState } from "react";
import Link from "next/link";

interface PredictorResult {
  college: {
    id: number;
    name: string;
    location: string;
    state: string;
    rating: number;
    images: string[];
    nirfRanking: number | null;
    placements: { averagePackage: number; placementPercentage: number } | null;
  };
  course: { name: string };
  closingRank: number;
  openingRank: number;
  category: string;
}

const EXAMS = ["JEE Main", "JEE Advanced"];
const CATEGORIES = ["General", "OBC", "SC", "ST"];

export default function PredictorPage() {
  const [exam, setExam] = useState("JEE Main");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("General");
  const [results, setResults] = useState<PredictorResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rank || isNaN(Number(rank)) || Number(rank) < 1) {
      setError("Please enter a valid rank");
      return;
    }
    setError("");
    setLoading(true);
    setSearched(false);
    try {
      const res = await fetch("/api/predictor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exam, rank: parseInt(rank), category }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResults(data.results || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  const chanceColor = (result: PredictorResult) => {
    const margin = result.closingRank - parseInt(rank);
    if (margin > 5000) return "text-green-400";
    if (margin > 1000) return "text-amber-400";
    return "text-orange-400";
  };

  const chanceLabel = (result: PredictorResult) => {
    const margin = result.closingRank - parseInt(rank);
    if (margin > 5000) return "High Chance";
    if (margin > 1000) return "Good Chance";
    return "Moderate";
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-indigo-300 mb-6 border border-indigo-500/30">
            <span>🎯</span>
            <span>Powered by real cutoff data</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            College <span className="gradient-text">Rank Predictor</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Enter your JEE rank and category to discover which colleges you can get admission into.
          </p>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl border border-white/10 p-8 mb-10 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Exam */}
              <div>
                <label className="text-sm text-slate-400 block mb-2 font-medium">Exam</label>
                <div className="flex flex-col gap-2">
                  {EXAMS.map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setExam(e)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all border ${
                        exam === e
                          ? "bg-indigo-600 border-indigo-500 text-white"
                          : "glass border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="text-sm text-slate-400 block mb-2 font-medium">Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all border ${
                        category === c
                          ? "bg-purple-600 border-purple-500 text-white"
                          : "glass border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rank */}
              <div>
                <label className="text-sm text-slate-400 block mb-2 font-medium">Your Rank</label>
                <input
                  type="number"
                  placeholder="e.g. 5000"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  min={1}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-lg font-semibold placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
                <p className="text-xs text-slate-600 mt-1">All India Rank</p>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Predicting...
                </span>
              ) : (
                "Predict My Colleges →"
              )}
            </button>
          </form>
        </div>

        {/* Results */}
        {searched && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-white">
                {results.length > 0
                  ? `${results.length} colleges found for rank ${rank}`
                  : "No colleges found"}
              </h2>
              {results.length > 0 && (
                <span className="text-sm text-slate-500">
                  {exam} · {category} · Rank {rank}
                </span>
              )}
            </div>

            {results.length === 0 ? (
              <div className="glass rounded-2xl border border-white/5 p-12 text-center">
                <div className="text-5xl mb-4">😔</div>
                <h3 className="font-display text-xl text-white mb-2">No matches found</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Your rank may be high for the selected exam/category combination in our dataset.
                  Try JEE Main instead of JEE Advanced, or check other categories.
                </p>
                <Link href="/colleges" className="btn-primary px-6 py-2.5 rounded-xl text-white text-sm font-medium inline-block">
                  Browse All Colleges →
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((result, i) => (
                  <div
                    key={`${result.college.id}-${result.course.name}-${i}`}
                    className="glass rounded-xl border border-white/5 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-indigo-500/20 transition-colors group"
                  >
                    {/* Rank badge */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                      {i + 1}
                    </div>

                    {/* Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      {result.college.images[0] ? (
                        <img src={result.college.images[0]} alt={result.college.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-brand-950 flex items-center justify-center text-2xl">🎓</div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/colleges/${result.college.id}`} className="font-display font-semibold text-white hover:text-indigo-300 transition-colors group-hover:text-indigo-300">
                        {result.college.name}
                      </Link>
                      <p className="text-sm text-slate-400 mt-0.5">
                        {result.course.name} · {result.college.location}, {result.college.state}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-xs text-slate-500">
                          Opening rank: <span className="text-slate-300">{result.openingRank.toLocaleString()}</span>
                        </span>
                        <span className="text-xs text-slate-500">
                          Closing rank: <span className="text-slate-300">{result.closingRank.toLocaleString()}</span>
                        </span>
                        {result.college.placements && (
                          <span className="text-xs text-slate-500">
                            Avg pkg: <span className="text-green-400">₹{(result.college.placements.averagePackage / 100000).toFixed(1)}L</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Chance indicator */}
                    <div className="flex-shrink-0 text-right">
                      <div className={`text-sm font-semibold ${chanceColor(result)}`}>
                        {chanceLabel(result)}
                      </div>
                      <div className="flex gap-0.5 mt-1 justify-end">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div
                            key={s}
                            className={`w-1.5 h-4 rounded-sm ${
                              s <= Math.round(result.college.rating)
                                ? "bg-amber-400"
                                : "bg-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{result.college.rating}/5</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Info cards */}
        {!searched && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { icon: "📊", title: "Real cutoff data", desc: "Based on actual 2024 JEE cutoffs from JOSAA and individual colleges" },
              { icon: "🔄", title: "Multiple categories", desc: "Supports General, OBC, SC, and ST category cutoffs" },
              { icon: "⚡", title: "Instant results", desc: "Get your college list in seconds and save results to your profile" },
            ].map((card) => (
              <div key={card.title} className="glass rounded-xl p-5 border border-white/5">
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
