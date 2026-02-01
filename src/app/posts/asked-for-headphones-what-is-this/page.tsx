import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        I asked for headphones — what is this?
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Feb 1, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          That was my exact reaction when I opened the box. No headband, no earcups —
          just two tiny things and a wire. I genuinely thought I got the wrong product.
        </p>

        <div className="md:float-right md:ml-8 md:mb-4 w-full md:w-1/3">
          <Image
            src="/images/posts/asked-for-headphones-what-is-this/my-iem-bought.svg"
            alt="In-ear monitors I bought"
            width={400}
            height={400}
            className="rounded-md shadow-sm"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Model: AudioSense T800
          </p>
        </div>

        <p>
          I plugged them in anyway, and yeah… something was different. Not in a “wow
          this is louder” way, but in a why does this sound so controlled way. Bass
          didn’t feel boosted, vocals were super clear, and I started hearing stuff in
          songs I’d listened to a hundred times. That’s when I realized this wasn’t
          just another consumer audio thing.
        </p>

        <p>
          Out of curiosity, I checked the specs — and that’s when it really clicked.
          Impedance. Sensitivity. Multiple drivers. Ohms, voltage, current. Stuff I’d
          already seen in EE classes, just suddenly attached to something I could
          actually hear. It stopped feeling like audio magic and started feeling like
          real hardware doing real work.
        </p>

        <p>
          That moment kind of sent me down a rabbit hole. IEMs, DACs, audio chains —
          all of it started making sense in a way it never had before. This blog is
          basically me poking around that world as an EE undergrad, figuring out how
          tiny pieces of hardware end up shaping something as subjective as sound.
        </p>

        <p>
          If you’re into tech, music, or just asking “why does this work?”, you’ll
          probably enjoy this too.
        </p>
      </div>
    </article>
  );
}