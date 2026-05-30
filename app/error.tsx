"use client";
import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="font-display text-3xl text-white mb-3">Something went wrong</h1>
        <p className="text-slate-400 mb-8">An unexpected error occurred. Please try again.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-6 py-3 rounded-xl text-white font-medium"
          >
            Try again
          </button>
          <Link href="/" className="glass border border-white/10 px-6 py-3 rounded-xl text-slate-300 font-medium hover:bg-white/8 transition-all">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
