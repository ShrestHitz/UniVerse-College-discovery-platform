import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="text-center">
        <div className="font-display text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="font-display text-3xl text-white mb-3">Page not found</h1>
        <p className="text-slate-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary px-8 py-3 rounded-xl text-white font-medium inline-block">
          Go Home →
        </Link>
      </div>
    </div>
  );
}
