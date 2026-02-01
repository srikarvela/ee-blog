export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        I asked for headphones — what is this?
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Feb 1, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          That was my exact reaction when I opened the box. No headband, no
          earcups — just two tiny things and a wire.
        </p>

        <p>
          I plugged them in anyway, and yeah… something was different.
        </p>

        <p>
          Impedance. Sensitivity. Multiple drivers.
        </p>

        <p>
          This blog is me poking around that world as an EE undergrad.
        </p>
      </div>
    </article>
  );
}