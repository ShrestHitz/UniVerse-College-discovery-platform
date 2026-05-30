"use client";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

interface CompareCollege {
  id: number;
  name: string;
  location: string;
  state: string;
  type: string;
  fees: number;
  rating: number;
  nirfRanking: number | null;
  images: string[];
  placements: { averagePackage: number; highestPackage: number; placementPercentage: number; topRecruiters: string[] }[];
  courses: { id: number; name: string; fees: number; duration: string }[];
  _count: { reviews: number };
}

interface SearchResult {
  id: number;
  name: string;
  location: string;
  state: string;
  images: string[];
}

export default function ComparePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const [data, setData] = useState<CompareCollege[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const addId = searchParams.get("add");
    if (addId) {
      setSelected([parseInt(addId)]);
      router.replace("/compare");
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (selected.length < 2) { setData([]); return; }
    setLoading(true);
    fetch(`/api/compare?ids=${selected.join(",")}`)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); });
  }, [selected]);

  const searchColleges = useCallback(async (q: string) => {
    if (!q) { setSearchResults([]); return; }
    setSearching(true);
    const res = await fetch(`/api/colleges?search=${q}&limit=5`);
    const d = await res.json();
    setSearchResults(d.colleges || []);
    setSearching(false);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => searchColleges(search), 300);
    return () => clearTimeout(t);
  }, [search, searchColleges]);

  const addCollege = (id: number) => {
    if (selected.includes(id) || selected.length >= 3) return;
    setSelected([...selected, id]);
    setSearch("");
    setSearchResults([]);
  };

  const removeCollege = (id: number) => {
    setSelected(selected.filter((s) => s !== id));
  };

  const metrics = data.length >= 2
    ? [
        { label: "Annual Fees", values: data.map((c) => `₹${(c.fees / 100000).toFixed(1)}L`) },
        { label: "NIRF Ranking", values: data.map((c) => c.nirfRanking ? `#${c.nirfRanking}` : "—") },
        { label: "Rating", values: data.map((c) => `${c.rating}/5`) },
        { label: "Avg Package", values: data.map((c) => c.placements[0] ? `₹${(c.placements[0].averagePackage / 100000).toFixed(1)}L` : "—") },
        { label: "Highest Package", values: data.map((c) => c.placements[0] ? `₹${(c.placements[0].highestPackage / 100000).toFixed(1)}L` : "—") },
        { label: "Placement Rate", values: data.map((c) => c.placements[0] ? `${c.placements[0].placementPercentage}%` : "—") },
        { label: "No. of Courses", values: data.map((c) => `${c.courses.length}`) },
        { label: "College Type", values: data.map((c) => c.type) },
        { label: "Location", values: data.map((c) => `${c.location}, ${c.state}`) },
        { label: "Student Reviews", values: data.map((c) => `${c._count.reviews}`) },
      ]
    : [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Compare</p>
          <h1 className="font-display text-4xl font-bold text-white mb-2">College Comparison</h1>
          <p className="text-slate-400">Select 2–3 colleges to compare side by side</p>
        </div>

        {/* College selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[0, 1, 2].map((slot) => {
            const collegeId = selected[slot];
            const college = data.find((c) => c.id === collegeId);

            return (
              <div key={slot} className="glass rounded-xl border border-white/10 overflow-hidden">
                {collegeId && college ? (
                  <div className="p-4">
                    <div className="relative h-28 rounded-lg overflow-hidden mb-3">
                      {college.images[0] ? (
                        <img src={college.images[0]} alt={college.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-brand-950 flex items-center justify-center text-3xl">🎓</div>
                      )}
                      <button
                        onClick={() => removeCollege(collegeId)}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <Link href={`/colleges/${college.id}`} className="font-semibold text-white text-sm hover:text-indigo-300 transition-colors line-clamp-2">
                      {college.name}
                    </Link>
                    <p className="text-xs text-slate-500 mt-1">{college.location}, {college.state}</p>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="h-28 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center mb-3 text-slate-600">
                      <div className="text-center">
                        <div className="text-2xl mb-1">+</div>
                        <div className="text-xs">Add college {slot + 1}</div>
                      </div>
                    </div>
                    {slot === selected.length && (
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search college..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/50"
                        />
                        {searchResults.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-1 glass border border-white/10 rounded-lg overflow-hidden z-20 shadow-xl">
                            {searchResults.filter((r) => !selected.includes(r.id)).map((r) => (
                              <button
                                key={r.id}
                                onClick={() => addCollege(r.id)}
                                className="w-full flex items-center gap-3 p-3 hover:bg-white/8 transition-colors text-left"
                              >
                                <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                                  {r.images[0] ? <img src={r.images[0]} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-brand-900" />}
                                </div>
                                <div>
                                  <div className="text-sm text-white font-medium line-clamp-1">{r.name}</div>
                                  <div className="text-xs text-slate-500">{r.location}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                        {searching && <div className="text-xs text-slate-500 mt-1">Searching...</div>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        {loading && (
          <div className="text-center py-12 text-slate-500">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            Loading comparison...
          </div>
        )}

        {!loading && data.length >= 2 && (
          <div className="glass rounded-2xl border border-white/5 overflow-hidden">
            {/* Table header */}
            <div className="grid border-b border-white/5" style={{ gridTemplateColumns: `180px repeat(${data.length}, 1fr)` }}>
              <div className="p-4 text-xs text-slate-500 font-medium uppercase tracking-wider">Metric</div>
              {data.map((c) => (
                <div key={c.id} className="p-4 text-center border-l border-white/5">
                  <Link href={`/colleges/${c.id}`} className="font-display font-semibold text-white text-sm hover:text-indigo-300 transition-colors">
                    {c.name}
                  </Link>
                </div>
              ))}
            </div>

            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`grid border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                style={{ gridTemplateColumns: `180px repeat(${data.length}, 1fr)` }}
              >
                <div className="p-4 text-sm text-slate-400 font-medium">{metric.label}</div>
                {metric.values.map((val, vi) => (
                  <div key={vi} className="p-4 text-center border-l border-white/5">
                    <span className="text-sm text-white font-medium">{val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {selected.length < 2 && (
          <div className="text-center py-16 glass rounded-2xl border border-white/5">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="font-display text-xl text-white mb-2">Select colleges to compare</h3>
            <p className="text-slate-500 text-sm mb-6">Add 2 or 3 colleges using the search boxes above</p>
            <Link href="/colleges" className="btn-primary px-6 py-2.5 rounded-xl text-white text-sm font-medium inline-block">
              Browse Colleges →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
