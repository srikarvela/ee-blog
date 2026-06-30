import PostList from "./PostList";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight">
          Srikar Velavarthipati —{" "}
          <span className="text-red-500">EE Blog</span>
        </h1>
      </header>

      <PostList />
    </main>
  );
}
