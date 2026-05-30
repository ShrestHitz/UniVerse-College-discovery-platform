"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CollegeCard from "@/components/CollegeCard";
import { CollegeCard as CollegeCardType } from "@/types";

export default function SavedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [colleges, setColleges] = useState<CollegeCardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router]);

  useEffect(() => {
    if (!session) return;
    fetch("/api/saved")
      .then((r) => r.json())
      .then((data) => {
        setColleges(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, [session]);

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">My List</p>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Saved Colleges</h1>
          <p className="text-slate-400">
            {colleges.length} {colleges.length === 1 ? "college" : "colleges"} saved
          </p>
        </div>

        {colleges.length === 0 ? (
          <div className="glass rounded-2xl border border-white/5 p-16 text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="font-display text-2xl text-white mb-3">No saved colleges yet</h3>
            <p className="text-slate-400 mb-8 max-w-sm mx-auto">
              Start exploring and tap the heart icon on any college to save it here.
            </p>
            <Link
              href="/colleges"
              className="btn-primary px-8 py-3 rounded-xl text-white font-medium inline-block"
            >
              Explore Colleges →
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>

            {colleges.length >= 2 && (
              <div className="mt-10 text-center">
                <Link
                  href={`/compare?ids=${colleges.slice(0, 3).map((c) => c.id).join(",")}`}
                  className="glass border border-indigo-500/30 px-6 py-3 rounded-xl text-indigo-300 hover:text-indigo-200 hover:border-indigo-500/50 transition-all font-medium inline-flex items-center gap-2"
                >
                  <span>⚖️</span>
                  Compare your saved colleges
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
