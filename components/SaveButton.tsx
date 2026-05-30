"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SaveButton({ collegeId }: { collegeId: number }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session) return;
    fetch("/api/saved")
      .then((r) => r.json())
      .then((colleges) => {
        if (Array.isArray(colleges)) {
          setSaved(colleges.some((c: { id: number }) => c.id === collegeId));
        }
      })
      .catch(() => {});
  }, [session, collegeId]);

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!session) {
      router.push("/auth/login");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/saved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collegeId }),
      });
      const data = await res.json();
      setSaved(data.saved);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
        saved
          ? "bg-red-500 text-white"
          : "bg-black/40 backdrop-blur text-slate-300 hover:text-red-400 hover:bg-black/60"
      }`}
      title={saved ? "Remove from saved" : "Save college"}
    >
      <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
}
