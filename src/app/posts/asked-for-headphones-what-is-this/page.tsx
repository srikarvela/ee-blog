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

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Okay, so… what is an IEM?
        </h2>

        <p>
          At this point, I kept seeing the term IEM everywhere, but I didn’t actually know
          what made it different from normal earbuds. Turns out, an in-ear monitor isn’t
          just a smaller headphone — it’s designed around a completely different goal.
          Instead of convenience or mass appeal, IEMs are built for accuracy, isolation,
          and control. They started as tools for musicians and audio engineers who needed
          to hear exactly what was going on in a mix, even on a loud stage.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Purpose-driven, not product-driven
        </h3>

        <p>
          The easiest way to understand IEMs is to forget how consumer earbuds are usually
          designed. Most earbuds are built around convenience, branding, and a sound
          signature that works “well enough” for most people. IEMs come from a different
          mindset entirely.
        </p>

        <p>
          They were designed as monitoring tools. Their job isn’t to impress — it’s to be
          predictable. Musicians and engineers rely on IEMs to hear exactly what’s happening
          in a mix, night after night, in environments that are anything but quiet.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          What physically makes an IEM different
        </h3>

        <p>
          One of the biggest differences is the seal. Unlike earbuds that sit loosely in
          your ear, an IEM forms a tight acoustic seal inside the ear canal. That single
          design choice changes almost everything about how sound behaves.
        </p>

        <p>
          With a proper seal, bass doesn’t have to be artificially boosted, outside noise
          is reduced passively, and the sound becomes far more repeatable from one listening
          session to the next.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          What’s actually inside an IEM
        </h3>

        <p>
          Internally, an IEM is less like a tiny speaker and more like a compact system.
          Depending on the design, there may be multiple drivers, acoustic tubes, and even
          small crossover networks packed into a shell that fits in your ear.
        </p>

        <p>
          Instead of one component doing all the work, different parts are often responsible
          for different frequency ranges. Thinking in terms of blocks rather than a single
          element makes it much easier to understand why IEMs behave the way they do.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Why specs suddenly start to matter
        </h3>

        <p>
          Once you realize you’re dealing with a sealed acoustic system connected directly
          to an electrical source, the spec sheet stops looking like audiophile fluff.
          Impedance and sensitivity, in particular, start describing real interactions
          between the IEM and whatever is driving it.
        </p>

        <p>
          At that point, sound quality stops feeling mysterious. It starts feeling like the
          result of design tradeoffs — electrical, mechanical, and acoustic — all interacting
          in a very small space.
        </p>

        <p>
          This is where a simple comparison table helps lock everything in. Instead of
          memorizing specs, you can map each term to a physical or electrical idea you
          already understand.
        </p>

        <h3 className="mt-12 text-lg font-semibold tracking-tight text-white">
          Key IEM Concepts (Explained Without the Audiophile Noise)
        </h3>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">
                  Concept
                </th>
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">
                  What It Is
                </th>
                <th className="py-3 pr-4 text-left font-medium text-zinc-300">
                  EE Framing
                </th>
                <th className="py-3 text-left font-medium text-zinc-300">
                  Why It Matters
                </th>
              </tr>
            </thead>

            <tbody className="align-top">
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Driver
                </td>
                <td className="py-4 pr-4">
                  Converts electrical signals into sound
                </td>
                <td className="py-4 pr-4">
                  Electromechanical transducer
                </td>
                <td className="py-4">
                  Determines bass, detail, and overall sound character
                </td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Dynamic Driver
                </td>
                <td className="py-4 pr-4">
                  Coil, magnet, and diaphragm acting like a mini speaker
                </td>
                <td className="py-4 pr-4">
                  Lorentz force driving diaphragm motion
                </td>
                <td className="py-4">
                  Moves more air, improving low-frequency response
                </td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Balanced Armature
                </td>
                <td className="py-4 pr-4">
                  Tiny magnetic actuator tuned for a narrow frequency band
                </td>
                <td className="py-4 pr-4">
                  Precision electromechanical system
                </td>
                <td className="py-4">
                  High efficiency and detail, often used in multiples
                </td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Multiple Drivers
                </td>
                <td className="py-4 pr-4">
                  More than one driver per ear
                </td>
                <td className="py-4 pr-4">
                  Frequency band separation
                </td>
                <td className="py-4">
                  Each driver handles less work, resulting in cleaner sound
                </td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Crossover
                </td>
                <td className="py-4 pr-4">
                  Circuit that splits audio into frequency bands
                </td>
                <td className="py-4 pr-4">
                  Passive filtering network
                </td>
                <td className="py-4">
                  Prevents drivers from overlapping poorly
                </td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Impedance (Ω)
                </td>
                <td className="py-4 pr-4">
                  Electrical load presented to the source
                </td>
                <td className="py-4 pr-4">
                  Frequency-dependent load interaction
                </td>
                <td className="py-4">
                  Affects loudness and tonal balance with different DACs
                </td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Sensitivity
                </td>
                <td className="py-4 pr-4">
                  Loudness per unit power or voltage
                </td>
                <td className="py-4 pr-4">
                  Power efficiency metric
                </td>
                <td className="py-4">
                  Determines how easy an IEM is to drive
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">
                  Seal
                </td>
                <td className="py-4 pr-4">
                  How well the ear canal is closed
                </td>
                <td className="py-4 pr-4">
                  Acoustic boundary condition
                </td>
                <td className="py-4">
                  Huge impact on bass and isolation
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          From a hardware perspective, an IEM is basically a tiny sound system sealed
          directly into your ear canal. That seal matters a lot. It changes how bass
          behaves, how much power is needed, and how predictable the sound becomes. Once
          you understand that, a lot of the “why does this sound so different?” questions
          start answering themselves.
        </p>

        <p>
          Let’s break down what actually lives inside an IEM — and why those tiny parts
          matter more than you’d expect.
        </p>

        <p>
          If you’re into tech, music, or just asking “why does this work?”, you’ll
          probably enjoy this too.
        </p>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (Optional EE Context)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          This section is intentionally placed at the end. The math isn’t required to
          understand IEMs, but it helps ground some of the concepts in familiar EE
          territory.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          For example, when thinking about how an IEM interacts with a source, impedance
          behaves similarly to a voltage divider — except the load is frequency
          dependent:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
V_out(ω) = V_in(ω) · Z_load(ω) / (Z_source + Z_load(ω))
</pre>

        <p className="mt-6 text-sm text-zinc-300">
          Sensitivity can also be viewed as a power efficiency metric, often expressed
          in decibels:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
SPL (dB) = 10 · log10(P / P_ref)
</pre>

        <p className="mt-6 text-sm text-zinc-400">
          You don’t need to work through these equations to enjoy the sound — they’re
          here to show that the behavior you hear has a clean electrical explanation
          underneath.
        </p>

      </div>
    </article>
  );
}