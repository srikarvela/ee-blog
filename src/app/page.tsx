import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight">
          Srikar Velavarthipati —{" "}
          <span className="text-red-500">EE Blog</span>
        </h1>
      </header>

      <Link href="/posts/exploring-iems">
        <article className="group cursor-pointer border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
              ▶
            </span>
            Exploring IEMs
          </h2>

          <p className="mt-1 text-sm text-zinc-500">Jun 24, 2026</p>

          <p className="mt-3 text-sm text-zinc-400">
            Three lenses on in-ear monitors — the technical seal-and-driver story, what
            performers actually report, and how the pros measure and tune them.
          </p>
        </article>
      </Link>

      <Link href="/posts/event-based-vision">
        <article className="group cursor-pointer border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
              ▶
            </span>
            Event-Based Vision
          </h2>

          <p className="mt-1 text-sm text-zinc-500">Apr 8, 2026</p>

          <p className="mt-3 text-sm text-zinc-400">
            Instead of capturing frames, event cameras fire per-pixel signals the moment
            luminance changes — asynchronous, sparse, and microsecond-precise.
          </p>
        </article>
      </Link>

      <Link href="/posts/asked-for-headphones-what-is-this">
        <article className="group cursor-pointer border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
              ▶
            </span>
            I asked for headphones — what is this?
          </h2>

          <p className="mt-1 text-sm text-zinc-500">Feb 1, 2026</p>

          <p className="mt-3 text-sm text-zinc-400">
            An EE-first encounter with IEMs, impedance, and why audio suddenly
            clicked.
          </p>
        </article>
      </Link>
    </main>
  );
}