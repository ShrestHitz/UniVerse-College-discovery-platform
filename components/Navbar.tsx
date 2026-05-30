"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <span className="font-display font-semibold text-xl text-white">
              Uni<span className="gradient-text">Verse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/colleges" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              Colleges
            </Link>
            <Link href="/compare" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              Compare
            </Link>
            <Link href="/predictor" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              Predictor
            </Link>
            {session && (
              <Link href="/saved" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                Saved
              </Link>
            )}
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">
                  {session.user?.name?.split(" ")[0]}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:border-white/20"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/register"
                  className="btn-primary text-sm text-white px-4 py-1.5 rounded-lg font-medium"
                >
                  Get started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 py-4 space-y-3">
          <Link href="/colleges" className="block text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Colleges</Link>
          <Link href="/compare" className="block text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Compare</Link>
          <Link href="/predictor" className="block text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Predictor</Link>
          {session ? (
            <>
              <Link href="/saved" className="block text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Saved</Link>
              <button onClick={() => signOut()} className="block text-red-400 py-2 text-sm">Sign out</button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="block text-slate-300 hover:text-white py-2">Sign in</Link>
              <Link href="/auth/register" className="block btn-primary text-white px-4 py-2 rounded-lg text-center text-sm">Get started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
