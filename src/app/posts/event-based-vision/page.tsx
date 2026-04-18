import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Event-Based Vision
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Apr 8, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          A headline stopped me mid-scroll a few weeks ago: <em>"Boston Dynamics' new robot
          tracks a thrown object faster than any high-speed camera can."</em> The detail buried
          in the third paragraph was the part that actually got me — they weren't using a
          faster frame rate. They were using a camera that doesn't have frame rates at all.
        </p>

        <p>
          Your retina doesn't send a full image to your brain 30 times a second. It sends
          signals only when something changes. Motion, contrast shifts, new edges — that's
          what travels down the optic nerve. The static parts of a scene are essentially
          silent. That asymmetry is the core idea behind event-based vision.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          What an event camera actually does
        </h2>

        <p>
          An event camera — also called a dynamic vision sensor, or DVS — replaces the
          global shutter with something fundamentally different. Each pixel operates
          independently. When a pixel detects a change in log luminance above a threshold,
          it fires an event. That event carries four pieces of information: x position,
          y position, timestamp, and polarity (was it brighter or darker?).
        </p>

        <p>
          Nothing else gets sent. Pixels that didn't change produce no output at all. The
          result isn't a video stream — it's a sparse, asynchronous stream of events, each
          timestamped with microsecond resolution.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          The pixel circuit
        </h3>

        <p>
          At the hardware level, each pixel contains a photodiode, a logarithmic amplifier,
          a differencing circuit, and a pair of comparators — one for positive changes, one
          for negative. When the log-domain voltage difference crosses either threshold, the
          pixel fires asynchronously and resets itself.
        </p>

        <p>
          There's no clock synchronizing readout. No row-by-row scanning. Each pixel is
          essentially its own small analog circuit making a local decision and broadcasting
          it independently. The chip's output is closer to a neural spike train than a
          traditional image sensor output.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Why the log domain matters
        </h3>

        <p>
          Conventional sensors operate in the linear domain — output voltage is proportional
          to incident light. The problem is that natural scenes span many orders of magnitude
          in brightness. A single linear sensor can't cover full sunlight and deep shadow
          simultaneously without saturating one end.
        </p>

        <p>
          Event cameras work in log luminance. A doubling of light intensity produces the
          same incremental output regardless of the absolute intensity level. That's why
          event cameras achieve dynamic ranges exceeding 120 dB, compared to roughly 60 dB
          for a typical CMOS sensor. They can operate comfortably from a dimly lit room to
          direct sunlight with no adjustment.
        </p>

        <h3 className="mt-12 text-lg font-semibold tracking-tight text-white">
          Event-Based Vision vs. Frame-Based Vision
        </h3>

        <div className="mt-6">
          <Image
            src="/images/posts/event-based-vision/event_camera_vs_frame_camera.svg"
            alt="Event camera vs frame camera comparison diagram"
            width={800}
            height={450}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Frame cameras sample every pixel on a fixed clock. Event cameras fire only where luminance changes — asynchronously, per pixel.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">
                  Property
                </th>
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">
                  Frame Camera
                </th>
                <th className="py-3 pr-4 text-left font-medium text-zinc-300">
                  Event Camera
                </th>
                <th className="py-3 text-left font-medium text-zinc-300">
                  Why It Matters
                </th>
              </tr>
            </thead>

            <tbody className="align-top">
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Readout</td>
                <td className="py-4 pr-4">All pixels, every frame</td>
                <td className="py-4 pr-4">Only changed pixels</td>
                <td className="py-4">Drastically reduces redundant data</td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Timing</td>
                <td className="py-4 pr-4">Synchronous (global shutter)</td>
                <td className="py-4 pr-4">Asynchronous per-pixel</td>
                <td className="py-4">Microsecond temporal resolution</td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Latency</td>
                <td className="py-4 pr-4">~33 ms at 30 fps</td>
                <td className="py-4 pr-4">&lt;1 ms</td>
                <td className="py-4">Critical for fast control loops</td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Dynamic Range</td>
                <td className="py-4 pr-4">~60 dB</td>
                <td className="py-4 pr-4">&gt;120 dB</td>
                <td className="py-4">Works across sun and shadow simultaneously</td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Power</td>
                <td className="py-4 pr-4">Proportional to resolution</td>
                <td className="py-4 pr-4">Proportional to scene activity</td>
                <td className="py-4">Idle scenes consume near-zero power</td>
              </tr>

              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Motion Blur</td>
                <td className="py-4 pr-4">Significant at high speed</td>
                <td className="py-4 pr-4">None</td>
                <td className="py-4">Events encode exact moments of change</td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Output Format</td>
                <td className="py-4 pr-4">Dense pixel grid (image)</td>
                <td className="py-4 pr-4">Sparse event stream (x, y, t, p)</td>
                <td className="py-4">Requires new processing pipelines</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The tradeoffs are real
        </h2>

        <p>
          Event cameras don't slot cleanly into existing vision pipelines. The output isn't
          an image — it's a point cloud in time. Every algorithm built for frames needs to
          be rethought. Reconstructing texture, running standard object detectors, even just
          visualizing what the sensor sees requires new representations.
        </p>

        <p>
          There's also noise. Low-contrast scenes produce background activity — random events
          from thermal noise in the pixel circuits. The threshold that triggers an event is
          set globally, so scenes with very subtle motion can be buried in noise, while
          high-contrast scenes generate huge event volumes that stress downstream bandwidth.
        </p>

        <p>
          And they don't replace frame cameras. For anything that needs texture, color, or
          absolute intensity — identifying objects, reading text, understanding material
          appearance — events give you none of that directly. The two sensor types are
          genuinely complementary.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Where event cameras are actually useful
        </h2>

        <p>
          The applications that benefit most are the ones where conventional cameras genuinely
          struggle. High-speed robotics, where a 33 ms frame delay is too slow to react.
          Autonomous vehicles in variable lighting, where HDR performance matters more than
          texture resolution. Low-power embedded vision, where the sensor can sit nearly idle
          until something moves.
        </p>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Event-Camera SLAM
        </h3>

        <p>
          One of the most compelling applications is simultaneous localization and mapping —
          SLAM. Traditional visual SLAM pipelines stall in low light or during fast motion
          because frames blur and feature tracking breaks down. Event cameras sidestep both
          problems: there's no exposure time to cause blur, and the microsecond timestamps
          let the system track edges through aggressive rotations and velocity changes that
          would completely defeat a frame-based tracker.
        </p>

        <p>
          The pipeline works by treating the incoming event stream as a continuous source of
          edge information. Events cluster along moving contours in the scene, so the system
          tracks those contours over time to estimate camera pose, then fuses the pose
          estimates into a map — without ever waiting for a frame boundary.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/event-based-vision/event_slam_pipeline.svg"
            alt="Event-camera SLAM pipeline diagram"
            width={800}
            height={450}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The event-camera SLAM loop: raw events feed into pose tracking and map updates continuously, with no frame synchronization required.
          </p>
        </div>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          Optical Flow via Time Surfaces
        </h3>

        <p>
          Estimating optical flow — the per-pixel velocity field across a scene — is where
          event cameras particularly shine. The standard approach with frames computes flow
          by comparing intensity values between two exposures, which means any motion faster
          than the frame interval produces aliasing or blur.
        </p>

        <p>
          The time-surface method replaces that entirely. For each pixel, a time surface
          stores the timestamp of the most recent event at that location. The result is a
          2D map where recent activity is bright and older activity has decayed — a local
          memory of where motion just was. Optical flow is then computed by finding how
          those surfaces shift over small time windows, giving you a dense velocity estimate
          that updates with every incoming event rather than once per frame.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/event-based-vision/event_optical_flow_time_surface.svg"
            alt="Time-surface optical flow diagram"
            width={800}
            height={450}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            A time surface encodes recency of events per pixel. Shifting that surface over a short window yields optical flow without frames.
          </p>
        </div>

        <p>
          Neuromorphic computing research is another natural fit. Event cameras produce data
          that maps directly onto spiking neural network inputs — same sparse, asynchronous,
          event-driven structure. Running SNN inference on event data on low-power neuromorphic
          hardware is an actual end-to-end bio-inspired pipeline, not just a loose analogy.
        </p>

        <p>
          The hardware is there. The challenge right now is mostly algorithmic — building
          processing and learning frameworks that actually take advantage of the event format
          instead of converting everything back to frames and throwing it into a standard CNN.
        </p>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (Optional EE Context)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          The event generation model is worth writing down explicitly. It's clean and shows
          exactly what the pixel circuit is computing.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          A pixel at position (x, y) fires a positive event when the change in log luminance
          exceeds the threshold C, and a negative event when it drops below −C:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`Δ log L(x, y, t) = log L(x, y, t) − log L(x, y, t_last) ≥ ±C`}
        </pre>

        <p className="mt-6 text-sm text-zinc-300">
          The log domain operation is implemented in silicon using a subthreshold MOSFET
          biased in weak inversion, where drain current has an exponential relationship to
          gate voltage — giving you the log-domain behavior in analog before any digital
          processing:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`I_D = I_0 · exp(V_GS / nV_T)`}
        </pre>

        <p className="mt-6 text-sm text-zinc-400">
          The differencing and threshold comparison happen on-chip per pixel, which is why
          the sensor can react asynchronously with microsecond latency — there's no central
          readout waiting to poll the pixel. The decision is made locally in analog.
        </p>
      </div>
    </article>
  );
}
