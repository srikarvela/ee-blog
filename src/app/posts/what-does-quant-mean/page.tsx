import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        What Does &quot;Quant&quot; Even Mean?
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Jul 14, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p className="text-sm text-zinc-500 italic">
          Diary entry. Part three of the trading climb — finally chasing down the actual word,
          &quot;quant,&quot; and why anyone would trade with code instead of instinct.
        </p>

        <p>
          I&apos;ve spent two entries learning what a market is and how the order book works, but
          I&apos;ve been dodging the word that started this whole thing: <strong className="text-white">quant</strong>.
          It gets thrown around like everyone agrees on what it means, and I nodded along for months.
          Tonight I actually pinned it down, and the answer is simpler — and more interesting — than I
          expected.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          It starts with a fork: who decides the trade?
        </h2>

        <p>
          There are two fundamentally different ways to trade, and the whole idea of &quot;quant&quot;
          lives on one side of the split.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-does-quant-mean/discretionary-vs-systematic.svg"
            alt="Discretionary trading (a human deciding each trade by judgment) versus systematic quant trading (rules run by code)"
            width={800}
            height={470}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Discretionary is a person making the call. Systematic — &quot;quant&quot; — is rules,
            data, and code making it.
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          <li>
            <strong className="text-[#fbbf24]">Discretionary trading</strong> — a human decides each
            trade using judgment, experience, news, and gut. Flexible and context-aware, but
            emotional, inconsistent, and nearly impossible to scale or test.
          </li>
          <li>
            <strong className="text-[#1f9bff]">Systematic (quant) trading</strong> — the rules are
            decided in advance and executed by code, the exact same way every time. That&apos;s the
            core of it: <em>quant is systematic trading</em> — replacing gut calls with a repeatable,
            data-driven process.
          </li>
        </ul>

        <p>
          So &quot;quant&quot; (short for quantitative) isn&apos;t some exotic thing. It just means
          you&apos;ve written your trading decisions down as precise, testable rules instead of
          keeping them in your head.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Why trade with code at all?
        </h2>

        <p>
          This was my real question. If a great human trader has intuition a program can&apos;t, why
          hand it to a machine? The answers stacked up fast: code is{" "}
          <strong className="text-white">repeatable</strong> (no bad mornings), it&apos;s{" "}
          <strong className="text-white">unemotional</strong> (it won&apos;t panic-sell), it{" "}
          <strong className="text-white">scales</strong> (one program can watch thousands of
          instruments at once), it&apos;s <strong className="text-white">fast</strong> (reacts in
          microseconds), and — the one that really got me — it&apos;s{" "}
          <strong className="text-white">testable</strong>. You can run a coded strategy against years
          of history before risking a cent. You can&apos;t rewind time to test a gut feeling.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The word I kept tripping on: &quot;signal&quot;
        </h2>

        <p>
          Every quant conversation is full of the word <strong className="text-white">signal</strong>,
          and I&apos;d been treating it as vague magic. It isn&apos;t. A signal is just a number,
          computed from data, that leans the decision one way or the other. Here&apos;s the classic
          teaching example — a fast moving average crossing a slow one:
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-does-quant-mean/signal-to-trade.svg"
            alt="A price chart with a fast and slow moving average; where the fast average crosses above the slow it triggers a buy signal, and below it triggers a sell, flowing data to signal to rule to trade"
            width={800}
            height={470}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Data → signal → rule → trade. The signal here is simply &quot;fast average minus slow
            average.&quot;
          </p>
        </div>

        <p>
          When the fast average climbs above the slow one, recent prices are rising faster than the
          longer trend — a hint of upward momentum, so the rule buys. When it drops below, momentum is
          fading, so it sells. The predictive edge a signal gives you has its own name:{" "}
          <strong className="text-white">alpha</strong>. A signal with real alpha nudges you toward
          profitable trades more often than chance; most candidate signals have none, and finding the
          rare ones that do is basically the entire job.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          From signal to strategy to a whole pipeline
        </h2>

        <p>
          One signal isn&apos;t a strategy. A <strong className="text-white">strategy</strong> is the
          full set of rules that turns signals into actual positions — <em>what</em> to trade,{" "}
          <em>which</em> direction, and <em>how much</em>. And before any real money moves, a quant
          runs a <strong className="text-white">backtest</strong>: replaying the strategy over
          historical data to estimate how it would have done (while staying paranoid about fooling
          yourself — a strategy tuned too perfectly to the past often falls apart live).
        </p>

        <p>
          Zoom all the way out and a quant firm is really running one loop, over and over:
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-does-quant-mean/quant-pipeline.svg"
            alt="The quant pipeline: data, signals, strategy/model, risk and sizing, execution, market, with feedback looping back to data, and a numbered legend explaining each stage"
            width={800}
            height={560}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The systematic loop, every stage in code — and the reason speed becomes everything.
          </p>
        </div>

        <p>Every box in that loop is an entity worth naming:</p>

        <ol className="mt-4 space-y-3 list-decimal list-inside">
          <li>
            <strong className="text-white">Data</strong> — the raw inputs: prices, order books, news,
            anything measurable that might carry information.
          </li>
          <li>
            <strong className="text-white">Signals</strong> — numbers derived from that data that hint
            at what happens next (the moving-average crossover was one).
          </li>
          <li>
            <strong className="text-white">Strategy / model</strong> — the logic that combines signals
            into a target position: buy or sell, and how strongly.
          </li>
          <li>
            <strong className="text-white">Risk &amp; sizing</strong> — the guardrails that decide how
            much to actually bet, so a single wrong call can&apos;t wipe you out.
          </li>
          <li>
            <strong className="text-white">Execution</strong> — placing the resulting orders into the
            order book — exactly the machinery from the last entry, with all its spread and slippage.
          </li>
          <li>
            <strong className="text-white">Market → feedback</strong> — the trades hit the market,
            fills and profit/loss come back, fresh data flows in, and the loop runs again.
          </li>
        </ol>

        <p>
          That&apos;s &quot;quant&quot; in one picture. It also quietly answers where this series is
          going: if the whole game is running that loop and reacting to signals, then whoever runs it{" "}
          <em>fastest</em> reacts first — and being first is worth money. That&apos;s the thread I&apos;m
          pulling next.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Every entity, in one place
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Entity</th>
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Plain English</th>
                <th className="py-3 text-left font-medium text-zinc-300">Why it matters</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Discretionary</td>
                <td className="py-4 pr-4">A human decides each trade</td>
                <td className="py-4">Flexible, but emotional and untestable</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Systematic / quant</td>
                <td className="py-4 pr-4">Rules run by code, the same way every time</td>
                <td className="py-4">Repeatable, scalable, testable</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Signal</td>
                <td className="py-4 pr-4">A number from data that hints at what&apos;s next</td>
                <td className="py-4">The raw ingredient of every strategy</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Alpha</td>
                <td className="py-4 pr-4">A signal&apos;s real predictive edge</td>
                <td className="py-4">Rare, and the whole point of the search</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Strategy</td>
                <td className="py-4 pr-4">Rules mapping signals to positions</td>
                <td className="py-4">Turns a hint into what/which/how much</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Backtest</td>
                <td className="py-4 pr-4">Replaying a strategy over history</td>
                <td className="py-4">Estimates edge before risking money</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Risk &amp; sizing</td>
                <td className="py-4 pr-4">How much to bet on each position</td>
                <td className="py-4">Keeps one loss from ending the game</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (is the edge even real?)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          Two small formulas finally made &quot;signal&quot; and &quot;is this any good?&quot; concrete
          for me.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          The crossover signal is literally just a subtraction — positive means lean long, negative
          means lean short:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`signal(t) = fastMA(t) − slowMA(t)`}
        </pre>

        <p className="mt-6 text-sm text-zinc-300">
          And to judge whether a strategy&apos;s returns are actually worth the risk (not just luck),
          quants lean on the Sharpe ratio — average return per unit of volatility:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`Sharpe = (R_strategy − R_riskfree) / σ_returns`}
        </pre>

        <p className="mt-6 text-sm text-zinc-400">
          A higher Sharpe means steadier, more reliable edge; a strategy that makes money only by
          taking wild swings scores poorly. It&apos;s the number that separates a real signal from a
          lucky streak — and the thing every backtest is ultimately chasing.
        </p>

        <hr className="my-14 border-zinc-800" />

        <p className="text-sm text-zinc-400">
          <strong className="text-zinc-300">Next up:</strong> why speed is money — how being even a
          microsecond faster through that loop turns into a real, bankable edge, and why that pressure
          eventually pushes the whole thing down into hardware.
        </p>
      </div>
    </article>
  );
}
