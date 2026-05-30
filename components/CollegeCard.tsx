"use client";
import Link from "next/link";
import { CollegeCard as CollegeCardType } from "@/types";
import SaveButton from "./SaveButton";

interface Props {
  college: CollegeCardType;
  showSave?: boolean;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-amber-400" : "text-slate-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CollegeCard({ college, showSave = true }: Props) {
  const placement = Array.isArray(college.placements)
    ? college.placements[0]
    : college.placements;

  return (
    <Link href={`/colleges/${college.id}`} className="block">
      <div className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer h-full transition-all duration-200">
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-brand-950">
          {college.images?.[0] ? (
            <img
              src={college.images[0]}
              alt={college.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-brand-900 to-brand-950">
              🎓
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`tag ${college.type === "government" ? "bg-green-500/20 text-green-400 border border-green-500/20" : "bg-purple-500/20 text-purple-400 border border-purple-500/20"}`}>
              {college.type === "government" ? "🏛 Govt" : "🏢 Private"}
            </span>
          </div>

          {college.nirfRanking && (
            <div className="absolute top-3 right-3 bg-amber-500/90 text-amber-950 text-xs font-bold px-2 py-1 rounded-lg">
              NIRF #{college.nirfRanking}
            </div>
          )}

          {showSave && (
            <div className="absolute bottom-3 right-3" onClick={(e) => e.preventDefault()}>
              <SaveButton collegeId={college.id} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-white text-lg leading-tight mb-1 group-hover:text-indigo-300 transition-colors line-clamp-2">
            {college.name}
          </h3>
          <p className="text-slate-500 text-sm mb-3 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {college.location}, {college.state}
          </p>

          <StarRating rating={college.rating} />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5">
            <div>
              <p className="text-xs text-slate-500 mb-0.5">Annual Fees</p>
              <p className="text-sm font-semibold text-white">
                ₹{(college.fees / 100000).toFixed(1)}L
              </p>
            </div>
            {placement && (
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Avg Package</p>
                <p className="text-sm font-semibold text-green-400">
                  ₹{(placement.averagePackage / 100000).toFixed(1)}L
                </p>
              </div>
            )}
          </div>

          {placement && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Placement rate</span>
                <span className="text-slate-300">{placement.placementPercentage}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  style={{ width: `${placement.placementPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
