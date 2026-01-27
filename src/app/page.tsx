"use client";

import { useState } from "react";

type Post = {
  title: string;
  date: string;
  description: string;
};

const POSTS: Post[] = [
  {
    title: "I cannot use AirPods anymore after this....",
    date: "Feb 1, 2026",
    description: "Exploring the world of IEMs",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredPosts = POSTS.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Srikar Velavarthipati —{" "}
            <span className="text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]">
              EE Blog
            </span>
          </h1>
        </div>
      </header>

      {/* Search */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <input
          type="text"
          placeholder="Search posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-black border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
        />
      </section>

      {/* Posts */}
      <main className="mx-auto max-w-4xl px-6">
        {filteredPosts.length === 0 && (
          <p className="text-sm text-zinc-500">No posts found.</p>
        )}

        {filteredPosts.map((post, index) => (
          <article
            key={index}
            className="border-t border-zinc-800 py-8 cursor-pointer hover:bg-zinc-950 transition"
          >
            <h2 className="text-lg font-medium hover:underline">
              ▶ {post.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-500">{post.date}</p>
            <p className="mt-2 text-sm text-zinc-400">
              {post.description}
            </p>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-zinc-500 flex gap-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:underline">Email</a>
          <span className="opacity-50">Portfolio (later)</span>
        </div>
      </footer>
    </div>
  );
}
