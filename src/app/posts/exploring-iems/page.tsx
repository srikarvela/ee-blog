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
          from every earbud I'd owned turned into a full audit of driver technology, source
          matching, and what "tuning" actually means at the circuit level. This is where
          that audit landed.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Driver types, revisited properly
        </h2>

        <p>
          I touched on dynamic drivers and balanced armatures in the first post, but I
          glossed over the mechanics. After spending more time with both, the differences
          matter more than I initially gave them credit for.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Dynamic drivers
        </h3>

        <p>
          A dynamic driver is a miniaturized loudspeaker. A voice coil sits in a magnetic
          gap and moves a diaphragm via Lorentz force. The diaphragm pushes air directly
          into the ear canal. Because the diaphragm can be large relative to the IEM shell,
          it moves a meaningful volume of air — which is why DDs tend to have strong,
          physical-feeling bass. The tradeoff is that a single driver covering 20 Hz to
          20 kHz has to do a lot of mechanical work across a very wide range, and the
          diaphragm's mass and compliance don't behave identically at every frequency.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Balanced armatures
        </h3>

        <p>
          A balanced armature is a different mechanism entirely. A tiny armature sits
          balanced between two magnetic poles. When current flows through the coil wound
          around it, the armature tips toward one pole and drives a pin connected to a
          small diaphragm. The whole system moves very little air, but it does so with
          high precision and efficiency — which is why BAs are loud from very low-power
          sources and resolve fine detail well.
        </p>

        <p>
          The downside is bandwidth. Each BA is physically optimized for a narrow frequency
          range. Sub-bass extension in a single BA is genuinely poor — the armature can't
          move enough air at low frequencies to produce the same physical pressure a dynamic
          driver can. This is why multi-driver IEMs pair a DD for low end with one or more
          BAs handling mids and highs.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Planar magnetic and electrostatic
        </h3>

        <p>
          Two more driver types show up in higher-end IEMs. Planar magnetic drivers use a
          thin membrane with a printed conductor trace suspended in a magnetic field. Current
          through the trace creates a force distributed across the entire membrane surface,
          rather than from a single voice coil point. The result is very low distortion at
          high volumes and fast transient response — but the efficiency is low enough that
          planars are hard to drive from a phone output.
        </p>

        <p>
          Electrostatic drivers use a charged membrane sandwiched between two stators.
          Electrostatic force moves the membrane. There's essentially no mass to the moving
          element, which gives them extraordinary high-frequency extension and resolution.
          The catch: they require a bias voltage of several hundred volts, which means the
          IEM cable needs to carry that voltage from a dedicated energizer or a hybrid amp
          stage built into the source. Not something you run off a headphone jack.
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
                <td className="py-4 pr-4">Lorentz force on voice coil</td>
                <td className="py-4 pr-4">Deep bass, physical impact, easy to drive</td>
                <td className="py-4">Higher distortion at extremes</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Balanced Armature</td>
                <td className="py-4 pr-4">Tipping armature in magnetic gap</td>
                <td className="py-4 pr-4">Efficient, detailed, compact</td>
                <td className="py-4">Narrow bandwidth, poor sub-bass</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Planar Magnetic</td>
                <td className="py-4 pr-4">Distributed force on membrane trace</td>
                <td className="py-4 pr-4">Low distortion, fast transients</td>
                <td className="py-4">Low efficiency, harder to drive</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Electrostatic</td>
                <td className="py-4 pr-4">Electrostatic force on biased membrane</td>
                <td className="py-4 pr-4">Extreme HF extension, near-zero mass</td>
                <td className="py-4">Requires high-voltage energizer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          What tuning actually is
        </h2>

        <p>
          "Tuning" is the word the IEM community uses to describe a set's overall frequency
          response shape. A warm tune has elevated bass and recessed treble. A bright tune
          has prominent upper frequencies and leaner low end. Neutral aims for a flat response
          relative to some diffuse-field or free-field target. But the word "tuning" hides a
          lot of engineering.
        </p>

        <p>
          For a multi-driver IEM, frequency response is shaped by three things working together:
          the crossover network, the acoustic bore geometry, and any damping material placed in
          the sound tube. The crossover — a passive filter network, usually RC or LC — determines
          which driver handles which frequency band and where the handoff happens. If the crossover
          is poorly designed, you get phase problems at the crossover frequency: the two drivers
          are both active in the same range and their outputs partially cancel. That shows up as a
          dip in the frequency response and a smeared transient in that band.
        </p>

        <p>
          The bore and nozzle geometry act as an acoustic low-pass filter. A narrow, long nozzle
          attenuates high frequencies more than a short, wide one. Tuning filters — small mesh
          or foam inserts — add controlled resistance to the sound path and roll off specific
          frequency ranges. Some manufacturers ship IEMs with swappable filters precisely because
          these acoustic resistances are easy to change without touching the driver or crossover.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Source matching and output impedance
        </h2>

        <p>
          This is the part that surprised me most when I started measuring things. Most IEM
          reviews treat the source as irrelevant — just plug it in and listen. But the source's
          output impedance interacts directly with the IEM's impedance curve, and for multi-BA
          IEMs that interaction can be significant.
        </p>

        <p>
          A balanced armature IEM's impedance is not flat. It varies with frequency, often
          by a factor of five or more between the peaks and dips. When a source with non-zero
          output impedance drives a load with a varying impedance, the voltage delivered to the
          load changes with frequency — exactly like a voltage divider that shifts with
          frequency. The result is coloration: the frequency response you measure at the IEM
          is not the response the manufacturer designed for. A source with a 10 Ω output
          impedance driving a 16 Ω nominal BA IEM can shift the bass and treble balance by
          several dB.
        </p>

        <p>
          The general rule is output impedance should be below one-eighth of the IEM's rated
          impedance. For a 16 Ω IEM that means under 2 Ω at the output. Modern dedicated DAC/amp
          dongles hit well below 1 Ω. Phone headphone jacks vary widely — some are under 1 Ω,
          some are 3–5 Ω, and a few older designs are over 10 Ω.
        </p>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (Optional EE Context)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          The output impedance interaction is a straightforward voltage divider, but it's worth
          writing out because the frequency dependence is what makes it non-obvious.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          The voltage delivered to the IEM load as a function of frequency:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`V_IEM(ω) = V_source · Z_IEM(ω) / (Z_out + Z_IEM(ω))`}
        </pre>

        <p className="mt-6 text-sm text-zinc-300">
          If Z_IEM is flat (resistive), the ratio is constant and source impedance only
          affects level. But if Z_IEM(ω) varies — as it does for BA drivers — the ratio
          varies with frequency. The change in dB relative to a zero-impedance source is:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`ΔdB(ω) = 20 · log10( Z_IEM(ω) / (Z_out + Z_IEM(ω)) )`}
        </pre>

        <p className="mt-6 text-sm text-zinc-400">
          Plugging in a 10 Ω source impedance against a BA IEM that swings from 8 Ω to
          40 Ω gives a ΔdB swing of roughly 4 dB across the band — audible and measurable,
          and entirely a function of the source, not the IEM.
        </p>
      </div>
    </article>
  );
}
