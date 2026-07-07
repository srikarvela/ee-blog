import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        The Order Book: Where Trades Actually Match
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Jul 7, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p className="text-sm text-zinc-500 italic">
          Diary entry, part two of the trading climb. Still learning out loud, still writing it
          down as it clicks.
        </p>

        <p>
          Last time I got as far as &quot;a market is buyers and sellers agreeing on a price,&quot;
          and I left myself a note: the bid, the ask, and the spread aren&apos;t really a frozen
          snapshot — they come from something living underneath. Tonight I went looking for that
          something, and it has a name I&apos;d heard a hundred times without understanding: the{" "}
          <strong className="text-white">order book</strong>.
        </p>

        <p>
          Here&apos;s the thing that made me grin as a mostly-EE, slightly-CS person: the order
          book is <em>literally a data structure</em>. I&apos;d been imagining some abstract cloud
          of &quot;supply and demand.&quot; It&apos;s not. It&apos;s two sorted lists.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Two sorted lists, facing each other
        </h2>

        <p>
          Every exchange keeps, for each thing you can trade, a running list of all the orders
          people have posted but that haven&apos;t traded yet. Buy orders go on one side, sell
          orders on the other. Each side is kept sorted so the <em>best</em> price sits at the
          inside edge, right next to the other side.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/the-order-book/order-book-anatomy.svg"
            alt="An order book shown as two sorted lists: the ask side sorted low to high and the bid side sorted high to low, with a numbered legend for order book, ask side, bid side, price level, best ask, best bid, spread, and depth"
            width={800}
            height={560}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The whole thing, labeled. Two lists, each sorted so the best price is at the inside.
          </p>
        </div>

        <p>Let me name every piece, because seeing them all at once is what made it real for me:</p>

        <ol className="mt-4 space-y-3 list-decimal list-inside">
          <li>
            <strong className="text-white">Order book</strong> — the full collection of resting
            orders for one instrument, kept continuously sorted by price.
          </li>
          <li>
            <strong className="text-[#ef5350]">Ask side</strong> — all the sell orders, sorted
            lowest-price-first. The cheapest seller is the most competitive, so it sits at the inside.
          </li>
          <li>
            <strong className="text-[#34d399]">Bid side</strong> — all the buy orders, sorted
            highest-price-first. The buyer offering the most is the most competitive, so it sits at
            the inside.
          </li>
          <li>
            <strong className="text-white">Price level</strong> — one row of the book: a single
            price plus the total size of every order sitting at that price.
          </li>
          <li>
            <strong className="text-[#ef5350]">Best ask</strong> — the lowest sell price currently
            available. If you buy immediately, this is where you buy.
          </li>
          <li>
            <strong className="text-[#34d399]">Best bid</strong> — the highest buy price currently
            available. If you sell immediately, this is where you sell.
          </li>
          <li>
            <strong className="text-white">Spread / top of book</strong> — the best bid and best ask
            together are the &quot;top of book&quot; (you&apos;ll also hear BBO — best bid and offer).
            The gap between them is the spread.
          </li>
          <li>
            <strong className="text-white">Depth</strong> — how much size is stacked up, level by
            level, as you move away from the top. A deep book has lots resting near the top; a thin
            one drops off fast.
          </li>
        </ol>

        <p>
          That last one, depth, is the idea I&apos;d never had a word for, and it ends up mattering
          a lot in a minute.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The distinction I&apos;d been totally missing: two kinds of orders
        </h2>

        <p>
          I always thought &quot;placing an order&quot; was one thing. Turns out there are two
          fundamentally different kinds, and the difference is the whole personality of the market.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/the-order-book/limit-vs-market.svg"
            alt="Comparison of a limit order that rests in the book and adds liquidity as a maker, versus a market order that crosses the spread immediately and removes liquidity as a taker"
            width={800}
            height={470}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            A limit order picks the price and waits; a market order picks the speed and pays.
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          <li>
            <strong className="text-[#34d399]">Limit order</strong> — you name a price limit. A buy
            limit will only fill at your price or lower; a sell limit at your price or higher. If
            nothing on the other side matches yet, your order doesn&apos;t vanish — it{" "}
            <em>rests</em> in the book at your price and waits. That resting order is what everyone
            else sees as a bid or an ask.
          </li>
          <li>
            <strong className="text-[#ef5350]">Market order</strong> — you don&apos;t name a price at
            all. You just say &quot;do it now,&quot; and it executes immediately against the best
            prices already sitting in the book. Fast and certain to fill — but you take whatever
            price the book is offering.
          </li>
        </ul>

        <p>
          The clean way I finally filed it away: a limit order gives you <strong className="text-white">price
          certainty but not execution certainty</strong> (you might wait forever). A market order
          gives you <strong className="text-white">execution certainty but not price certainty</strong>{" "}
          (you fill now, at who-knows-what). You can&apos;t have both.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Maker vs. taker
        </h2>

        <p>
          That split has a second name that shows up everywhere, so I want to pin it down. When you
          post a resting limit order, you&apos;re <strong className="text-white">adding</strong>{" "}
          liquidity to the book — you&apos;re a <strong className="text-[#34d399]">maker</strong>.
          When you send a market order that trades against a resting order, you&apos;re{" "}
          <strong className="text-white">removing</strong> liquidity — you&apos;re a{" "}
          <strong className="text-[#ef5350]">taker</strong>. Exchanges care about this distinction
          enough that they often charge takers a fee and pay makers a small rebate, precisely
          because resting orders are what makes a market usable for everyone else.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          How a trade actually matches
        </h2>

        <p>
          So what happens the instant an order arrives? There&apos;s a piece of software called the{" "}
          <strong className="text-white">matching engine</strong> whose entire job is to take
          incoming orders and pair them against the book by a strict rule:{" "}
          <strong className="text-white">price-time priority</strong>. Best price gets matched
          first; among orders at the same price, whoever got there first gets filled first (plain
          old first-in-first-out).
        </p>

        <p>
          I traced one all the way through to make sure I actually believed it. Say a market order
          comes in to buy 250, and the ask side isn&apos;t deep enough at the top to cover it:
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/the-order-book/matching-walkthrough.svg"
            alt="A market buy order for 250 walking up the ask side: filling 100 at 100.02, 100 at 100.04, and 50 of 200 at 100.06, producing an average fill price of 100.036 and demonstrating slippage"
            width={800}
            height={520}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The order eats the cheapest asks first and &quot;walks up&quot; the book until it&apos;s
            full — paying more at each step.
          </p>
        </div>

        <p>
          Walking through it: the engine fills 100 shares at the best ask of $100.02, empties that
          level, moves to $100.04 and takes another 100, then needs just 50 more and takes them from
          the 200 sitting at $100.06 — a <strong className="text-white">partial fill</strong> of
          that level, leaving 150 still resting. Add it up and you bought 250 shares, but at an{" "}
          <em>average</em> price of $100.036, not the $100.02 you saw at the top.
        </p>

        <p>
          That gap has a name too: <strong className="text-white">slippage</strong>. It&apos;s what
          you pay for demanding size <em>right now</em> from a book that wasn&apos;t deep enough to
          give it to you at the best price. Suddenly &quot;depth&quot; from earlier isn&apos;t
          abstract — a thin book means a market order climbs fast and slippage bites; a deep book
          barely moves. This was the moment the whole thing stopped being vocabulary and started
          being <em>mechanics</em>.
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
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Order book</td>
                <td className="py-4 pr-4">All resting orders, sorted by price</td>
                <td className="py-4">The core data structure of every exchange</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Limit order</td>
                <td className="py-4 pr-4">Trade at my price or better, else wait</td>
                <td className="py-4">Price certainty; rests and adds liquidity</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Market order</td>
                <td className="py-4 pr-4">Trade now at the best available price</td>
                <td className="py-4">Execution certainty; takes liquidity</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Maker / taker</td>
                <td className="py-4 pr-4">Who adds vs. removes liquidity</td>
                <td className="py-4">Drives exchange fees and rebates</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Matching engine</td>
                <td className="py-4 pr-4">Software that pairs incoming orders</td>
                <td className="py-4">Enforces the rules, order by order</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Price-time priority</td>
                <td className="py-4 pr-4">Best price first, then earliest first</td>
                <td className="py-4">Why being fast (and early) pays off</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Partial fill</td>
                <td className="py-4 pr-4">Only part of an order executes</td>
                <td className="py-4">The rest rests or keeps walking</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Slippage</td>
                <td className="py-4 pr-4">Worse average price from walking the book</td>
                <td className="py-4">The real cost of demanding size instantly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (putting a number on slippage)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          The walkthrough had one real calculation worth writing out, because it&apos;s the first
          time the mechanics turned into a formula.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          When a market order fills across several levels, the price you actually pay is the
          size-weighted average of every piece it took:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`avg fill = Σ(size_i × price_i) / Σ(size_i)`}
        </pre>

        <p className="mt-6 text-sm text-zinc-300">
          For the buy of 250:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`(100·100.02 + 100·100.04 + 50·100.06) / 250 = 100.036`}
        </pre>

        <p className="mt-6 text-sm text-zinc-400">
          Slippage is just that average minus the price you saw at the top ($100.036 − $100.02 =
          $0.016 per share). It grows with your size and shrinks with the book&apos;s depth — which
          is exactly why, later in this series, being able to <em>see and react to</em> the book
          faster than everyone else turns into an enormous advantage.
        </p>

        <hr className="my-14 border-zinc-800" />

        <p className="text-sm text-zinc-400">
          <strong className="text-zinc-300">Next up:</strong> what &quot;quant&quot; even means —
          why some firms stop trading by hand and start trading with code, turning this whole
          churning order book into a problem for algorithms instead of instincts.
        </p>
      </div>
    </article>
  );
}
