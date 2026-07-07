import Image from "next/image";

type Product = {
  src: string;
  alt: string;
  name: string;
  tag: string;
  author: string;
  license: string;
  href: string;
};

const COMMONS = "https://upload.wikimedia.org/wikipedia/commons/thumb";

const airpods: Product = {
  src: `${COMMONS}/2/2f/AirPods_Pro_%282nd_generation%29.jpg/960px-AirPods_Pro_%282nd_generation%29.jpg`,
  alt: "Apple AirPods Pro (2nd generation) wireless earbuds",
  name: "Apple AirPods Pro",
  tag: "Bluetooth · ANC earbuds",
  author: "Hajoon0102",
  license: "CC BY-SA 4.0",
  href: "https://commons.wikimedia.org/wiki/File:AirPods_Pro_(2nd_generation).jpg",
};

const sony: Product = {
  src: `${COMMONS}/4/4b/Sony-WH-1000XM3-kabellose-Bluetooth-Noise-Cancelling-Kopfhoerer.jpg/960px-Sony-WH-1000XM3-kabellose-Bluetooth-Noise-Cancelling-Kopfhoerer.jpg`,
  alt: "Sony WH-1000XM3 wireless noise-cancelling headphones",
  name: "Sony WH-1000XM3",
  tag: "Bluetooth · ANC over-ear",
  author: "digitalpush.net",
  license: "CC BY 4.0",
  href: "https://commons.wikimedia.org/wiki/File:Sony-WH-1000XM3-kabellose-Bluetooth-Noise-Cancelling-Kopfhoerer.jpg",
};

const bose: Product = {
  src: `${COMMONS}/d/d6/Bose_QuietComfort_35_II_Wireless_Headphones.jpg/960px-Bose_QuietComfort_35_II_Wireless_Headphones.jpg`,
  alt: "Bose QuietComfort 35 II wireless headphones",
  name: "Bose QuietComfort 35 II",
  tag: "Bluetooth · ANC over-ear",
  author: "Carsonjp21",
  license: "CC BY-SA 4.0",
  href: "https://commons.wikimedia.org/wiki/File:Bose_QuietComfort_35_II_Wireless_Headphones.jpg",
};

const sennheiser: Product = {
  src: `${COMMONS}/3/30/Sennheiser_HD800S.jpg/960px-Sennheiser_HD800S.jpg`,
  alt: "Sennheiser HD 800 S wired open-back headphones",
  name: "Sennheiser HD 800 S",
  tag: "Wired · open-back",
  author: "Benlisquare",
  license: "CC BY-SA 4.0",
  href: "https://commons.wikimedia.org/wiki/File:Sennheiser_HD800S.jpg",
};

const iem: Product = {
  src: `${COMMONS}/9/99/2_In-ear_monitors.jpg/960px-2_In-ear_monitors.jpg`,
  alt: "A pair of in-ear monitors",
  name: "In-ear monitors",
  tag: "Wired · sealed in-ear",
  author: "BDaniel",
  license: "CC BY-SA 4.0",
  href: "https://commons.wikimedia.org/wiki/File:2_In-ear_monitors.jpg",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        What&apos;s the Difference?
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Jun 26, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p className="text-sm text-zinc-500 italic">
          Diary entry. Finally settling whether these are just fancy earbuds — pulling apart
          IEMs, Bluetooth ANC, and wired headphones side by side.
        </p>

        <p>
          By now I&apos;ve written a fair bit about IEMs. But every time I bring them up, the
          same question comes back: <em>aren&apos;t those just earbuds?</em> Fair — because
          three very different things all get called &quot;headphones&quot; these days. The
          wireless buds everyone has. The big noise-cancelling cans on every flight. And the
          wired stuff audio people won&apos;t shut up about. They look related. Under the hood
          they&apos;re solving different problems in different ways. So let&apos;s actually pin
          down the difference.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The contenders
        </h2>

        <p>
          The most popular headphones in the world right now are wireless and noise-cancelling.
          These three are the ones you actually see in the wild:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Photo p={airpods} />
          <Photo p={sony} />
          <Photo p={bose} />
        </div>

        <p>
          All three are <strong className="text-white">Bluetooth</strong> with{" "}
          <strong className="text-white">active noise cancellation</strong>. They&apos;re
          wildly convenient, and they&apos;re genuinely good. But every one of them makes the
          same set of engineering trades to cut the cord — trades the wired world doesn&apos;t.
        </p>

        <p>
          On the other side are wired headphones. No radio, no battery, no codec — just an
          analog signal down a copper cable into a driver. Open-back audiophile sets like the
          Sennheiser below, closed studio cans, and IEMs all live here:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Photo p={sennheiser} />
          <Photo p={iem} />
        </div>

        <p>
          IEMs are the wired family member I keep coming back to — sealed, in-ear, often
          multi-driver. Hold that thought, because the seal turns out to matter a lot when we
          get to noise cancellation.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          It&apos;s really about the signal path
        </h2>

        <p>
          The cleanest way to see the difference isn&apos;t the shape of the thing in your ear —
          it&apos;s what the audio goes through to get there. Trace the chain from the source to
          the driver and the three categories separate immediately.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/whats-the-difference/signal-path.svg"
            alt="Signal path comparison of wired headphones, Bluetooth headphones, and IEMs"
            width={800}
            height={480}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Wired and IEM keep the signal analog the whole way. Bluetooth compresses it, sends
            it over radio, and rebuilds it inside the earpiece.
          </p>
        </div>

        <p>
          A wired headphone receives a full analog signal — the digital-to-analog conversion and
          amplification happen back in your phone, dongle, or amp, and what travels down the
          cable is the finished waveform. A Bluetooth headphone can&apos;t do that. Radio
          bandwidth is limited, so the audio is run through a lossy codec, transmitted, and then
          decoded and re-converted by a tiny DAC and amplifier <em>inside the bud</em>. The
          entire back end of the audio chain got miniaturized and moved into the thing in your
          ear.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          What Bluetooth does to the signal
        </h2>

        <p>
          &quot;Lossy&quot; is the key word. To fit audio through a Bluetooth connection, codecs
          like SBC, AAC, aptX, and LDAC throw away data the encoder predicts you won&apos;t miss,
          then reconstruct an approximation on the other side <Sup href="#src-soundguys" n={1} />.
          Modern high-bitrate codecs get impressively close — but &quot;close&quot; is the point.
          A wired signal isn&apos;t approximating anything.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/whats-the-difference/codec-waveform.svg"
            alt="Waveform comparison: a full lossless waveform versus a lossy codec reconstruction"
            width={800}
            height={420}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            A lossy codec sends a faithful approximation of the waveform, not a bit-perfect copy.
            How faithful depends on the codec and bitrate.
          </p>
        </div>

        <p>
          How much you can hear the difference is genuinely debated, and for most music on most
          gear it&apos;s subtle. The codec also isn&apos;t the only variable — the cheap DAC and
          amp crammed into a wireless bud have far less room (literally and electrically) than a
          dedicated source. The wired path simply removes both of those variables from the
          equation.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Latency: the difference you can measure
        </h2>

        <p>
          Fidelity is arguable. Latency isn&apos;t. Compressing, transmitting, and decoding audio
          takes time, and different codecs take very different amounts of it — from roughly 30 ms
          for newer codecs like LC3, to ~70 ms for aptX, up to ~150–200 ms for SBC, AAC, and LDAC{" "}
          <Sup href="#src-soundguys" n={1} /> <Sup href="#src-at" n={2} />. A wired headphone has
          effectively none.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/whats-the-difference/latency.svg"
            alt="Bar chart of approximate audio latency for wired and various Bluetooth codecs"
            width={800}
            height={430}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Approximate end-to-end latency. Music masks it; video, gaming, and live monitoring
            expose it — which is why no one performs on stage over Bluetooth.
          </p>
        </div>

        <p>
          This is also exactly why performers use <em>wired</em> IEMs (or dedicated wireless
          systems on a different radio band, not Bluetooth). When you&apos;re singing to a click
          track, a 200 ms delay between playing a note and hearing it is unusable.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          ANC vs. the seal
        </h2>

        <p>
          Here&apos;s where it ties back to IEMs. The Sony, Bose, and AirPods all block outside
          noise <em>actively</em>: microphones listen to the ambient sound, and the electronics
          generate a phase-inverted &quot;anti-noise&quot; signal that cancels it through
          destructive interference <Sup href="#src-hp" n={3} />. It works remarkably well on
          low-frequency drone — engines, AC hum, subway rumble — knocking ambient noise down by
          roughly 30 dB on average, and more at low frequencies <Sup href="#src-hp" n={3} />.
        </p>

        <p>
          An IEM does something different to reach a similar end: it blocks noise{" "}
          <em>passively</em>, with a physical seal in the ear canal — the same seal from my last
          post. No microphones, no processing, no battery. Passive sealing actually handles the
          higher frequencies that ANC struggles with, while ANC owns the low end{" "}
          <Sup href="#src-hp" n={3} />. That&apos;s why the best ANC headphones still rely on a
          good passive seal underneath the electronics: the two approaches cover different parts
          of the spectrum.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The difference, in one table
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Property</th>
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Wired</th>
                <th className="py-3 pr-4 text-left font-medium text-zinc-300">Bluetooth ANC</th>
                <th className="py-3 text-left font-medium text-zinc-300">IEM</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Signal</td>
                <td className="py-4 pr-4">Analog, lossless</td>
                <td className="py-4 pr-4">Lossy codec over radio</td>
                <td className="py-4">Analog, sealed load</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Fidelity ceiling</td>
                <td className="py-4 pr-4">Highest — no codec</td>
                <td className="py-4 pr-4">Codec &amp; tiny-DAC limited</td>
                <td className="py-4">High, source-dependent</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Latency</td>
                <td className="py-4 pr-4">~0 ms</td>
                <td className="py-4 pr-4">~30–200 ms</td>
                <td className="py-4">~0 ms (wired)</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Noise blocking</td>
                <td className="py-4 pr-4">Little (open) to some (closed)</td>
                <td className="py-4 pr-4">Active + passive (~30 dB avg)</td>
                <td className="py-4">Deep passive seal</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Power</td>
                <td className="py-4 pr-4">None</td>
                <td className="py-4 pr-4">Battery (radio + ANC)</td>
                <td className="py-4">None</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Convenience</td>
                <td className="py-4 pr-4">Tethered</td>
                <td className="py-4 pr-4">Fully wireless — best</td>
                <td className="py-4">Wired but pocketable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          So what&apos;s the difference?
        </h2>

        <p>
          It&apos;s not really about which one &quot;sounds best&quot; — it&apos;s about what each
          one optimizes for. Bluetooth ANC headphones optimize for <em>convenience</em>: cut the
          cord, kill the airplane drone, accept a lossy codec and some latency as the price.
          Wired headphones optimize for <em>fidelity</em>: keep the signal pure and let the source
          do the heavy lifting. IEMs optimize for <em>control and isolation</em>: a sealed,
          analog, often multi-driver path that&apos;s predictable enough to perform on.
        </p>

        <p>
          Same word, three different machines. Once you can see the signal path, &quot;aren&apos;t
          those just earbuds?&quot; stops being a hard question to answer.
        </p>

        <hr className="my-14 border-zinc-800" />

        <h3 id="sources" className="text-base font-semibold tracking-tight text-zinc-400">
          Sources
        </h3>
        <ol className="mt-4 space-y-2 text-sm text-zinc-400 list-decimal list-inside">
          <li id="src-soundguys">
            SoundGuys —{" "}
            <a href="https://www.soundguys.com/understanding-bluetooth-codecs-15352/" target="_blank" rel="noopener noreferrer" className="text-[#bf00ff] hover:underline">
              Understanding Bluetooth codecs
            </a>
          </li>
          <li id="src-at">
            Audio-Technica —{" "}
            <a href="https://www.audio-technica.com/en-us/support/audio-solutions-question-of-the-week-what-are-the-differences-between-bluetooth-wireless-codecs" target="_blank" rel="noopener noreferrer" className="text-[#bf00ff] hover:underline">
              The differences between Bluetooth wireless codecs
            </a>
          </li>
          <li id="src-hp">
            HP —{" "}
            <a href="https://www.hp.com/us-en/poly/learning-hub/active-versus-passive-noise-cancellation.html" target="_blank" rel="noopener noreferrer" className="text-[#bf00ff] hover:underline">
              Active vs. Passive Noise Cancellation
            </a>
          </li>
        </ol>

        <h3 className="mt-10 text-base font-semibold tracking-tight text-zinc-400">
          Image credits
        </h3>
        <ul className="mt-4 space-y-2 text-xs text-zinc-500">
          {[airpods, sony, bose, sennheiser, iem].map((p) => (
            <li key={p.name}>
              {p.name} —{" "}
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[#bf00ff] hover:underline">
                {p.author}
              </a>
              , {p.license}, via Wikimedia Commons
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Photo({ p }: { p: Product }) {
  return (
    <figure className="m-0">
      <div className="bg-white rounded-lg h-44 flex items-center justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.src} alt={p.alt} loading="lazy" className="max-h-full w-auto object-contain" />
      </div>
      <figcaption className="mt-2 text-center">
        <span className="block text-sm font-medium text-zinc-200">{p.name}</span>
        <span className="block text-xs text-zinc-500">{p.tag}</span>
      </figcaption>
    </figure>
  );
}

function Sup({ href, n }: { href: string; n: number }) {
  return (
    <sup>
      <a href={href} className="text-[#bf00ff] hover:underline no-underline">
        [{n}]
      </a>
    </sup>
  );
}
