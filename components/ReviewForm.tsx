"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  collegeId: number;
  onSubmit: () => void;
}

export default function ReviewForm({ collegeId, onSubmit }: Props) {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  if (!session) {
    return (
      <div className="glass rounded-xl p-5 border border-white/5 text-center mb-4">
        <p className="text-slate-400 text-sm">
          <Link href="/auth/login" className="text-indigo-400 hover:underline">Sign in</Link> to write a review
        </p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="glass rounded-xl p-5 border border-green-500/20 text-center mb-4">
        <div className="text-2xl mb-2">✅</div>
        <p className="text-green-400 text-sm font-medium">Review submitted! Thank you.</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !title || !comment) {
      setError("Please fill all fields and select a rating");
      return;
    }
    setLoading(true);
    setError("");
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collegeId, rating, title, comment }),
    });
    if (res.ok) {
      setSuccess(true);
      onSubmit();
    } else {
      const data = await res.json();
      setError(data.error || "Failed to submit");
    }
    setLoading(false);
  };

  return (
    <div className="mb-4">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="btn-primary px-5 py-2.5 rounded-xl text-white text-sm font-medium"
        >
          + Write a Review
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="glass rounded-xl p-6 border border-white/5 space-y-4">
          <h3 className="font-semibold text-white">Write a Review</h3>

          <div>
            <label className="text-sm text-slate-400 block mb-2">Your Rating</label>
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={`text-2xl transition-transform hover:scale-110 ${star <= (hover || rating) ? "text-amber-400" : "text-slate-700"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            placeholder="Review title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 text-sm"
          />

          <textarea
            placeholder="Share your experience at this college..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            maxLength={500}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 text-sm resize-none"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-5 py-2 rounded-lg text-white text-sm font-medium disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-slate-400 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
