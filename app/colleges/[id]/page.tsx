"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import SaveButton from "@/components/SaveButton";
import ReviewForm from "@/components/ReviewForm";

interface CollegeDetailData {
  id: number;
  name: string;
  location: string;
  state: string;
  type: string;
  fees: number;
  rating: number;
  overview: string;
  establishedYear: number;
  nirfRanking: number | null;
  website: string | null;
  images: string[];
  placements: {
    averagePackage: number;
    highestPackage: number;
    placementPercentage: number;
    topRecruiters: string[];
  }[];
  courses: {
    id: number;
    name: string;
    duration: string;
    fees: number;
    eligibility: string;
    seats: number;
  }[];
  reviews: {
    id: number;
    rating: number;
    title: string;
    comment: string;
    createdAt: string;
    user: { name: string };
  }[];
  _count: { reviews: number };
}

type Tab = "overview" | "courses" | "placements" | "reviews";

export default function CollegeDetailPage() {
  const params = useParams();
  const [college, setCollege] = useState<CollegeDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    fetch(`/api/colleges/${params.id}`)
      .then((r) => r.json())
      .then((data) => { setCollege(data); setLoading(false); });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h1 className="text-2xl text-white">College not found</h1>
        <Link href="/colleges" className="text-indigo-400 mt-4 block">← Back to colleges</Link>
      </div>
    );
  }

  const placement = college.placements[0];
  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "courses", label: `Courses (${college.courses.length})` },
    { id: "placements", label: "Placements" },
    { id: "reviews", label: `Reviews (${college._count.reviews})` },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        {college.images[imgIndex] ? (
          <img src={college.images[imgIndex]} alt={college.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-900 to-brand-950 flex items-center justify-center text-6xl">🎓</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/40 to-transparent" />

        {/* Image thumbnails */}
        {college.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {college.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === imgIndex ? "bg-white scale-125" : "bg-white/40"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        {/* College Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`tag ${college.type === "government" ? "bg-green-500/20 text-green-400 border border-green-500/20" : "bg-purple-500/20 text-purple-400 border border-purple-500/20"}`}>
                {college.type === "government" ? "Government" : "Private"}
              </span>
              {college.nirfRanking && (
                <span className="tag bg-amber-500/20 text-amber-400 border border-amber-500/20">NIRF #{college.nirfRanking}</span>
              )}
              <span className="tag bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Est. {college.establishedYear}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{college.name}</h1>
            <p className="text-slate-400 mt-2 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {college.location}, {college.state}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {college.website && (
              <a href={college.website} target="_blank" rel="noopener noreferrer"
                className="glass border border-white/10 px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Website
              </a>
            )}
            <Link href={`/compare?add=${college.id}`}
              className="glass border border-indigo-500/30 px-4 py-2 rounded-lg text-sm text-indigo-300 hover:text-indigo-200 hover:border-indigo-500/50 transition-all">
              + Compare
            </Link>
            <div className="w-10 h-10 glass border border-white/10 rounded-lg flex items-center justify-center">
              <SaveButton collegeId={college.id} />
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Annual Fees", value: `₹${(college.fees / 100000).toFixed(1)}L`, icon: "💰" },
            { label: "Rating", value: `${college.rating}/5`, icon: "⭐" },
            { label: "Avg Package", value: placement ? `₹${(placement.averagePackage / 100000).toFixed(1)}L` : "—", icon: "💼" },
            { label: "Placement", value: placement ? `${placement.placementPercentage}%` : "—", icon: "📈" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 border border-white/5">
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="text-lg font-semibold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 glass rounded-xl p-1 border border-white/5 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pb-16">
          {activeTab === "overview" && (
            <div className="prose max-w-none">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h2 className="font-display text-xl font-semibold text-white mb-4">About {college.name}</h2>
                <p className="text-slate-300 leading-relaxed">{college.overview}</p>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-3">
              {college.courses.map((course) => (
                <div key={course.id} className="glass rounded-xl p-5 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-white">{course.name}</h3>
                      <p className="text-sm text-slate-400 mt-1">Eligibility: {course.eligibility}</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-white">{course.duration}</div>
                        <div className="text-xs text-slate-500">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-400">₹{(course.fees / 100000).toFixed(1)}L</div>
                        <div className="text-xs text-slate-500">Fees/year</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white">{course.seats}</div>
                        <div className="text-xs text-slate-500">Seats</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "placements" && placement && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Average Package", value: `₹${(placement.averagePackage / 100000).toFixed(1)} LPA`, color: "text-green-400" },
                  { label: "Highest Package", value: `₹${(placement.highestPackage / 100000).toFixed(1)} LPA`, color: "text-amber-400" },
                  { label: "Placement Rate", value: `${placement.placementPercentage}%`, color: "text-indigo-400" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-6 border border-white/5 text-center">
                    <div className={`font-display text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-xl p-6 border border-white/5">
                <h3 className="font-semibold text-white mb-4">Top Recruiters</h3>
                <div className="flex flex-wrap gap-2">
                  {placement.topRecruiters.map((r) => (
                    <span key={r} className="tag bg-slate-800 text-slate-300 border border-white/5">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              <ReviewForm collegeId={college.id} onSubmit={() => {
                fetch(`/api/colleges/${params.id}`).then(r => r.json()).then(setCollege);
              }} />
              {college.reviews.map((review) => (
                <div key={review.id} className="glass rounded-xl p-5 border border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                          {review.user.name[0]}
                        </div>
                        <span className="text-sm font-medium text-white">{review.user.name}</span>
                        <span className="text-xs text-slate-500">
                          {new Date(review.createdAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {[1,2,3,4,5].map(s => (
                          <svg key={s} className={`w-4 h-4 ${s <= review.rating ? "text-amber-400" : "text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{review.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
              {college.reviews.length === 0 && (
                <div className="text-center py-10 text-slate-500">
                  <div className="text-4xl mb-3">📝</div>
                  <p>No reviews yet. Be the first to review!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
