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

      <Link href="/posts/asked-for-headphones-what-is-this">
        <article className="cursor-pointer border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
          <h2 className="text-lg font-medium">
            ▶ I asked for headphones — what is this?
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