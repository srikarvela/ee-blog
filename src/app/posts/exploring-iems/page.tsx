import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Exploring IEMs
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Jun 24, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          A few months after my first post on IEMs, I'm still in the rabbit hole — just
          deeper. What started as curiosity about why my AudioSense T800s sounded different
          from every earbud I'd owned turned into a real exploration: not just{" "}
          <em>what</em> the hardware is, but what these things are actually like to live
          with, and how the people who depend on them professionally think about them. So
          this post looks at IEMs through three lenses — the technical difference, the human
          experience, and the process of measuring and tuning them.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          1. The technical difference
        </h2>

        <p>
          The thing that separates an IEM from a normal earbud isn't the size or the price —
          it's the seal. An IEM forms an airtight seal inside the ear canal, and that single
          design choice changes the physics of everything downstream. With a proper seal,
          the ear tips prevent external noise from interfering with the sound and the bass
          response is reinforced rather than leaking away{" "}
          <Sup href="#src-plunge" n={1} />. Sweetwater puts a number on the isolation: a good
          seal acts like a high-quality earplug, passively blocking up to roughly 30 dB of
          outside noise <Sup href="#src-sweetwater" n={2} />.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/exploring-iems/iem-seal-isolation.svg"
            alt="Comparison of a loose earbud leaking sound versus a sealed IEM retaining bass and blocking noise"
            width={800}
            height={440}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            A loose earbud leaks bass out and lets noise in. A sealed IEM keeps both under
            control — which is why the same set sounds the same every time you wear it.
          </p>
        </div>

        <p>
          How much isolation you actually get is mostly a function of depth. Etymotic's
          deep-canal insert earphones quote 30+ dB of external noise exclusion with
          deeply-sealed foam tips — they compare it to a single-wall recording booth — plus
          70+ dB of isolation between the two ears <Sup href="#src-etymotic" n={6} />. Shure
          rates their sound-isolating earphones at up to 37 dB of stage-noise reduction{" "}
          <Sup href="#src-shure" n={5} />. That's the same passive attenuation a good earplug
          gives you, which is exactly the point: the seal pulls double duty as hearing
          protection.
        </p>

        <p>
          Behind the seal, the actual sound is produced by drivers, and the driver type is
          where most of the engineering lives. The science-of-IEMs literature breaks these
          into three families <Sup href="#src-plunge" n={1} />:
        </p>

        <p>
          <strong className="text-white">Dynamic drivers</strong> are miniature loudspeakers —
          a diaphragm attached to a voice coil that moves within a magnetic field. Because the
          diaphragm moves a meaningful volume of air, they deliver powerful, physical-feeling
          bass. <strong className="text-white">Balanced armatures</strong> are more compact and
          more sensitive: a tiny armature pivots within a magnetic field and drives a small
          diaphragm. They move very little air but resolve fine detail efficiently, which is
          why multi-driver IEMs use several of them for mids and highs. {" "}
          <strong className="text-white">Electrostatic drivers</strong>, found in premium sets,
          move a charged diaphragm with an electrostatic field and are prized for extremely
          accurate, detailed reproduction.
        </p>

        <p>
          When an IEM packs multiple drivers, a crossover network splits the audio signal into
          frequency bands and routes each band to the driver that handles it best{" "}
          <Sup href="#src-plunge" n={1} />. That's the whole reason a hybrid IEM exists: let a
          dynamic driver own the bass, let balanced armatures own everything above it, and use a
          passive filter to stitch the bands together.
        </p>

        <h3 className="mt-12 text-lg font-semibold tracking-tight text-white">
          Driver Comparison
        </h3>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Driver</th>
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Mechanism</th>
                <th className="py-3 pr-4 text-left font-medium text-zinc-300">Strengths</th>
                <th className="py-3 text-left font-medium text-zinc-300">Weaknesses</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Dynamic</td>
                <td className="py-4 pr-4">Voice coil moving a diaphragm in a magnetic field</td>
                <td className="py-4 pr-4">Deep bass, physical impact, easy to drive</td>
                <td className="py-4">One driver covers a very wide range</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Balanced Armature</td>
                <td className="py-4 pr-4">Pivoting armature driving a small diaphragm</td>
                <td className="py-4 pr-4">Efficient, detailed, compact</td>
                <td className="py-4">Narrow bandwidth, weak sub-bass alone</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Electrostatic</td>
                <td className="py-4 pr-4">Electrostatic field moving a charged diaphragm</td>
                <td className="py-4 pr-4">Extremely accurate, detailed highs</td>
                <td className="py-4">Premium-only, needs special drive circuitry</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          2. The human experience
        </h2>

        <p>
          The spec sheet only tells you so much. The more interesting question is what these
          are actually like to use — and the people with the strongest opinions are working
          musicians, because for them monitoring is the difference between a good night and a
          miserable one. Reading through first-hand accounts from performers{" "}
          <Sup href="#src-se" n={3} />, a consistent picture emerges.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/exploring-iems/iem-stage-monitoring.svg"
            alt="Diagram comparing floor wedge monitors with in-ear monitors on stage"
            width={800}
            height={430}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The shift from floor wedges to in-ears is the same idea as the seal — contain the
            sound, control it, and stop fighting the room.
          </p>
        </div>

        <p>
          Process-wise, running in-ears live is its own small system. A complete setup is
          three pieces — a rack-mounted transmitter near the mixing desk, a body-pack receiver
          on the performer's belt, and the earphones themselves — and one transmitter can feed
          several packs the same mix <Sup href="#src-shure" n={5} />. Shure's systems run in
          stereo, mono, or a "mix" mode where the performer controls the balance between two
          channels themselves <Sup href="#src-shure" n={5} />. The whole reason the gear exists
          is to end what engineers call "more me syndrome" — the volume war where every musician
          keeps asking the wedges for more of themselves until the stage is deafening{" "}
          <Sup href="#src-shure" n={5} />.
        </p>

        <p>
          On the upside, the wins are real and repeatable. A cellist who plays live with rock
          bands called in-ears "nothing short of a blessing": with conventional wedge monitors
          feedback is a constant threat, but with in-ears it's rarely an issue, and being able
          to clearly hear your own notes makes intonation far less dangerous{" "}
          <Sup href="#src-se" n={3} />. A bassist in a four-piece described losing the stage
          monitors entirely — a cleaner stage, customizable personal mixes, and crucially much
          lower listening levels that protect hearing, to the point of no longer needing speaker
          cabinets at all <Sup href="#src-se" n={3} />. That hearing-protection angle is the one
          Sweetwater calls the single most important benefit: by sealing the ear canal, IEMs let
          you keep your monitor mix at a safe volume and avoid the fatigue and long-term damage of
          a loud stage <Sup href="#src-sweetwater" n={2} />.
        </p>

        <p>
          But the exploration gets honest in the cons, and these surprised me more. Several
          performers describe in-ears as a <em>solitary</em> experience — even with an ambient
          audience mic, cutting yourself off from the room feels weird and removes performance
          cues you didn't realize you relied on <Sup href="#src-se" n={3} />. A saxophonist
          reported the "fingers-in-your-ears" effect when singing, which deeper-fitting molded
          tips only partly fixed. And in at least one widely-cited case, the change in feedback
          even altered <em>how</em> someone performed: Opeth's Mikael Åkerfeldt reportedly
          struggled with death-growl vocals live on in-ears because the sound fed back to him was
          of a different nature and demanded a different reaction <Sup href="#src-se" n={3} />.
          Add the practical friction — they're expensive, you really shouldn't share them, and
          they add a more complex signal path with a genuine learning curve — and it's clear
          these aren't a plug-and-play upgrade <Sup href="#src-se" n={3} />.
        </p>

        <p>
          That tension — better control and protection, at the cost of feel and simplicity — is
          also why fit matters. Most IEMs ship as universal-fit, but professionals often move to
          custom molds for a perfect seal, better isolation, and improved soundstage; and the
          wired-vs-wireless choice comes down to whether you stay put (wired: reliable, no
          batteries) or move around the stage (wireless) <Sup href="#src-sweetwater" n={2} />.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          3. The process: measuring and tuning
        </h2>

        <p>
          Here's where the EE side of me got genuinely excited. If the sound is the result of a
          sealed acoustic system plus drivers plus a crossover, then you should be able to{" "}
          <em>measure</em> it — and the pros do. 64 Audio's walkthrough of IEM measurement frames
          it less as a way to judge how something sounds and more as a maintenance and
          troubleshooting tool, with a key mantra: <em>consistency over accuracy</em>. You measure
          a known-good unit to capture a "golden trace," then measure against it later to diagnose
          faults in the IEM or anywhere in the signal chain <Sup href="#src-64audio" n={4} />.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/exploring-iems/iem-measurement-rig.svg"
            alt="Signal chain for measuring an IEM: IEM into a 711 coupler into a measurement mic into an audio interface running FFT software, with a pink-noise reference loopback"
            width={800}
            height={420}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The measurement rig: the IEM plays into a 711 coupler, a mic captures the result, and
            FFT software compares it against a reference signal to produce the frequency response.
          </p>
        </div>

        <p>
          The rig is surprisingly approachable: a measurement microphone, an audio interface, and
          FFT software. The microphone is the debated part. The standard is an occluded-ear
          simulator — IEC 60711, later updated to IEC 60318-4, which extended the usable range to
          100 Hz–16 kHz — colloquially called the <strong className="text-white">711 coupler</strong>.
          It's widely accepted by manufacturers, reviewers, and even Harman's preference research{" "}
          <Sup href="#src-64audio" n={4} />. The measurement itself is a transfer function: a dual-FFT
          mode that plays a reference signal like pink noise, loops it back as the reference, and
          compares it against what the mic captures — giving you the response of the whole chain{" "}
          <Sup href="#src-64audio" n={4} />.
        </p>

        <p>
          The part that finally made frequency-response graphs click for me: an IEM bypasses the
          outer ear (the pinna), which normally adds its own resonances to everything we hear. The
          concha and ear canal contribute peaks around 5 kHz and 2 kHz respectively, and a
          well-designed IEM deliberately rebuilds bumps near those regions so it sounds natural
          rather than like sound injected straight into your canal <Sup href="#src-64audio" n={4} />.
          That's also why a target curve like Harman's — derived from listening tests on the 711
          coupler and meant to represent the preference of at least 64% of people — can't just be
          copied blindly: it's heavily smoothed, and matching it above ~5 kHz is genuinely hard{" "}
          <Sup href="#src-64audio" n={4} />.
        </p>

        <p>
          And the target keeps evolving. In a 2024 AES study, Sean Olive tested five different
          in-ear target curves on the Brüel &amp; Kjær 5128 simulator; the Harman IE 2019 and
          SoundGuys curves landed in a statistical tie — within 0.28 points on a 100-point scale —
          and together were preferred by 72% of listeners <Sup href="#src-soundguys" n={7} />. The
          takeaway isn't that one curve won. It's that "neutral" is itself a moving, actively
          researched target, not a fixed line on a graph.
        </p>

        <p>
          The honest caveat the engineers themselves stress: don't get too caught up in the shape
          of the graph. IEM positioning, ambient noise, and even which coupler you use can shift the
          data in ways that don't match what you'd actually hear <Sup href="#src-64audio" n={4} />.
          Which loops right back to the human-experience section — the measurement is a tool, not the
          verdict. The verdict is still your ears.
        </p>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (Optional EE Context)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          One technical thread worth pulling, because it connects "the source matters" to actual
          circuit behavior: the interaction between a source's output impedance and an IEM's
          impedance curve.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          A balanced-armature IEM's impedance isn't flat — it varies with frequency. Driving a
          frequency-dependent load from a source with non-zero output impedance is a voltage divider
          that shifts with frequency:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`V_IEM(ω) = V_source · Z_IEM(ω) / (Z_out + Z_IEM(ω))`}
        </pre>

        <p className="mt-6 text-sm text-zinc-300">
          The deviation in dB relative to an ideal zero-impedance source:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`ΔdB(ω) = 20 · log10( Z_IEM(ω) / (Z_out + Z_IEM(ω)) )`}
        </pre>

        <p className="mt-6 text-sm text-zinc-400">
          A 10 Ω source against a BA IEM that swings from 8 Ω to 40 Ω gives a ΔdB swing of roughly
          4 dB across the band — audible, measurable, and entirely a function of the source. The
          rule of thumb is to keep output impedance below one-eighth of the IEM's rated impedance.
          It's also why some IEMs even ship in multiple impedance versions — Etymotic's ER3C, for
          instance, comes in 10 Ω and 50 Ω variants <Sup href="#src-etymotic" n={6} />.
        </p>

        <hr className="my-14 border-zinc-800" />

        <h3 id="sources" className="text-base font-semibold tracking-tight text-zinc-400">
          Sources
        </h3>

        <ol className="mt-4 space-y-2 text-sm text-zinc-400 list-decimal list-inside">
          <li id="src-plunge">
            Plunge Audio —{" "}
            <a
              href="https://plungeaudio.com/blogs/news/science-behind-iems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              The Science Behind IEMs
            </a>
          </li>
          <li id="src-sweetwater">
            Sweetwater —{" "}
            <a
              href="https://www.sweetwater.com/insync/in-ear-monitors-demystified/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              In-Ear Monitors Demystified
            </a>
          </li>
          <li id="src-se">
            Music: Practice &amp; Theory (Stack Exchange) —{" "}
            <a
              href="https://music.stackexchange.com/questions/23928/pros-cons-of-in-ear-monitors-iem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              Pros &amp; cons of in-ear monitors (IEM)
            </a>
          </li>
          <li id="src-64audio">
            64 Audio —{" "}
            <a
              href="https://blog.64audio.com/measuring-in-ear-monitors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              Measuring In-Ear Monitors
            </a>
          </li>
          <li id="src-shure">
            Shure —{" "}
            <a
              href="https://www.shure.com/en-US/insights/an-introduction-to-in-ear-monitoring"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              An Introduction to In-Ear Monitoring
            </a>
          </li>
          <li id="src-etymotic">
            Etymotic —{" "}
            <a
              href="https://etymotic.com/product/er3c-insert-earphones/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              ER3C Insert Earphones
            </a>
          </li>
          <li id="src-soundguys">
            SoundGuys —{" "}
            <a
              href="https://www.soundguys.com/harman-target-soundguys-preference-curve-validated-125420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bf00ff] hover:underline"
            >
              Harman Target &amp; SoundGuys Preference Curve validated for in-ears
            </a>
          </li>
        </ol>
      </div>
    </article>
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
