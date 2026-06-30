"use client";

import { useState } from "react";
import Link from "next/link";
import { posts, allTags, TAG_STYLES, type Tag } from "./posts";

type Filter = Tag | "All";

export default function PostList() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState(false);

  const visible =
    filter === "All" ? posts : posts.filter((p) => p.tags.includes(filter));

  const options: Filter[] = ["All", ...allTags];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-zinc-500">
          {visible.length} {visible.length === 1 ? "post" : "posts"}
        </span>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="flex items-center gap-2 rounded-md border border-zinc-800 px-3 py-1.5 text-sm text-zinc-300 hover:border-zinc-600 transition"
          >
            {/* filter icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 5h18M6 12h12M10 19h4" />
            </svg>
            <span>{filter === "All" ? "All topics" : filter}</span>
            {/* chevron */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {open && (
            <ul
              role="listbox"
              className="absolute right-0 z-10 mt-2 w-44 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 py-1 shadow-lg"
            >
              {options.map((opt) => (
                <li key={opt} role="option" aria-selected={filter === opt}>
                  <button
                    type="button"
                    onClick={() => {
                      setFilter(opt);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-zinc-900 transition ${
                      filter === opt ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    <span>{opt === "All" ? "All topics" : opt}</span>
                    {opt !== "All" && (
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${TAG_STYLES[opt]}`}
                      >
                        {opt}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {visible.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <article className="group cursor-pointer border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
              <h2 className="text-lg font-medium flex items-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
                  ▶
                </span>
                {post.title}
              </h2>

              <div className="mt-1 flex items-center gap-3">
                <p className="text-sm text-zinc-500">{post.date}</p>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${TAG_STYLES[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm text-zinc-400">{post.blurb}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
