"use client";
import { useState, useEffect, useCallback } from "react";
import CollegeCard from "@/components/CollegeCard";
import { CollegeCard as CollegeCardType } from "@/types";

const STATES = ["Delhi", "Maharashtra", "Tamil Nadu", "Karnataka", "Rajasthan", "West Bengal", "Uttarakhand", "Uttar Pradesh"];
const SORT_OPTIONS = [
  { value: "rating", label: "Top Rated" },
  { value: "fees", label: "Lowest Fees" },
  { value: "nirfRanking", label: "NIRF Rank" },
];

function SkeletonCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="skeleton h-44 w-full" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-5 w-3/4 rounded" />
        <div className="skeleton h-4 w-1/2 rounded" />
        <div className="skeleton h-4 w-full rounded" />
      </div>
    </div>
  );
}

export default function CollegesPage() {
  const [colleges, setColleges] = useState<CollegeCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchColleges = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({
      search, state, type, sortBy, page: String(page), limit: "9",
    });
    const res = await fetch(`/api/colleges?${params}`);
    const data = await res.json();
    setColleges(data.colleges || []);
    setTotalPages(data.totalPages || 1);
    setTotal(data.total || 0);
    setLoading(false);
  }, [search, state, type, sortBy, page]);

  useEffect(() => {
    const timeout = setTimeout(fetchColleges, 300);
    return () => clearTimeout(timeout);
  }, [fetchColleges]);

  useEffect(() => { setPage(1); }, [search, state, type, sortBy]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Explore</p>
          <h1 className="font-display text-4xl font-bold text-white mb-2">
            Find Your College
          </h1>
          <p className="text-slate-400">{total} colleges found</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search colleges by name, city, or state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors bg-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="glass border border-white/10 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-indigo-500/50 bg-transparent cursor-pointer"
          >
            <option value="" className="bg-slate-900">All States</option>
            {STATES.map((s) => (
              <option key={s} value={s} className="bg-slate-900">{s}</option>
            ))}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="glass border border-white/10 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-indigo-500/50 bg-transparent cursor-pointer"
          >
            <option value="" className="bg-slate-900">All Types</option>
            <option value="government" className="bg-slate-900">Government</option>
            <option value="private" className="bg-slate-900">Private</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="glass border border-white/10 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-indigo-500/50 bg-transparent cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-slate-900">{o.label}</option>
            ))}
          </select>

          {(search || state || type) && (
            <button
              onClick={() => { setSearch(""); setState(""); setType(""); }}
              className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1 px-3 py-2 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : colleges.length > 0
            ? colleges.map((college) => <CollegeCard key={college.id} college={college} />)
            : (
              <div className="col-span-3 text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-display text-xl text-white mb-2">No colleges found</h3>
                <p className="text-slate-500">Try adjusting your search or filters</p>
              </div>
            )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="glass px-4 py-2 rounded-lg text-sm text-slate-300 disabled:opacity-40 hover:bg-white/8 transition-all border border-white/10"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  p === page
                    ? "bg-indigo-600 text-white"
                    : "glass text-slate-400 hover:bg-white/8 border border-white/10"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="glass px-4 py-2 rounded-lg text-sm text-slate-300 disabled:opacity-40 hover:bg-white/8 transition-all border border-white/10"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
