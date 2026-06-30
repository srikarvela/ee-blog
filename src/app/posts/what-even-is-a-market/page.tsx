import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        What Even Is a Market?
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Jun 30, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          New direction for this blog. So far I&apos;ve been poking at hardware I could hold —
          IEMs, cameras, the physical stuff. But there&apos;s a corner of electrical engineering
          I keep circling back to: the custom silicon behind high-frequency trading. FPGAs and
          ASICs that fire orders in <em>nanoseconds</em>, built for one purpose — to be faster
          than everyone else.
        </p>

        <p>
          I want to understand that hardware. The problem is, I hit a wall the moment I started:
          I don&apos;t actually know how trading works. And you can&apos;t design hardware for a
          race if you don&apos;t understand the race. So this is post one of a long climb, and
          I&apos;m starting at the very bottom — honestly, as a beginner — with the most basic
          question there is. What <em>is</em> a market?
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          A market is just a meeting place
        </h2>

        <p>
          Strip away the screens and the jargon, and a market is anywhere buyers and sellers
          come together to exchange something for a price. A farmers&apos; market and a stock
          exchange have the exact same skeleton: people who want to buy, people who want to
          sell, and a price they agree on. The New York Stock Exchange is fundamentally a much
          faster, much bigger version of two people haggling over a used bike.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The atom of a market is a trade
        </h2>

        <p>
          If a market is the system, a single <strong className="text-white">trade</strong> is
          its atom — the smallest event that actually matters. And a trade only needs three
          things: someone willing to buy, someone willing to sell, and a price they both accept.
        </p>

        <p>
          The part that took me a second to internalize: neither side will trade at <em>any</em>
          price. A buyer has a ceiling — the most they&apos;ll pay. A seller has a floor — the
          least they&apos;ll accept. A trade can only happen when those overlap: when the most
          the buyer will pay is at least as high as the least the seller will take.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-even-is-a-market/trade-anatomy.svg"
            alt="A buyer willing to pay up to $102 and a seller willing to accept from $98 overlap in an agreement zone, and a trade happens at $100"
            width={800}
            height={420}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            No overlap, no trade. When the buyer&apos;s ceiling clears the seller&apos;s floor,
            any price in between works — and one of them becomes the deal.
          </p>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Where does the price come from?
        </h2>

        <p>
          Here&apos;s what surprised me most: nobody sets the &quot;real&quot; price. There&apos;s
          no official value stamped on a stock. The price is simply wherever the most recent buyer
          and seller agreed — and it&apos;s constantly moving as new people show up with different
          ceilings and floors. This emergent, tug-of-war process even has a name:{" "}
          <strong className="text-white">price discovery</strong>.
        </p>

        <p>
          If lots of buyers suddenly want in, they start outbidding each other and the price
          drifts up. If sellers are desperate to get out, they undercut each other and it drifts
          down. The price is just the running scoreboard of that contest. It isn&apos;t the value
          of the thing — it&apos;s the value of the thing <em>to the people trading it right now</em>.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Bid, ask, and the spread
        </h2>

        <p>
          Zoom into any single moment and you don&apos;t see one price — you see two. The highest
          price any buyer is currently offering is the <strong className="text-white">bid</strong>.
          The lowest price any seller is currently asking is the{" "}
          <strong className="text-white">ask</strong> (or &quot;offer&quot;). The gap between them
          is the <strong className="text-white">spread</strong>.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-even-is-a-market/bid-ask-ladder.svg"
            alt="Sellers' asks stacked above and buyers' bids stacked below, with the spread as the gap between the best ask and best bid"
            width={800}
            height={460}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            You buy at the ask and sell at the bid. The spread is the small toll for trading
            immediately instead of waiting for someone to meet your price.
          </p>
        </div>

        <p>
          That detail matters more than it looks. If you buy right now and sell right back, you
          lose the spread — so a market where the spread is tiny is a cheaper, friendlier place to
          trade. Keep this in your back pocket; spreads come back in a big way once speed enters
          the picture.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Liquidity: can you actually get out?
        </h2>

        <p>
          The last basic idea is <strong className="text-white">liquidity</strong> — how easily
          you can buy or sell without shoving the price around. A market with tons of orders
          packed closely together is <em>liquid</em>: you can trade a lot, instantly, near the
          current price. A market with only a few scattered orders is <em>illiquid</em>: trying to
          buy might force you to reach for far more expensive sellers, moving the price as you go.
        </p>

        <p>
          Liquidity is the quiet thing that makes everything else work, and it&apos;s deeply tied
          to speed — which is exactly where this series is headed.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Every piece, labeled
        </h2>

        <p>
          I want to slow down and name every single entity, because once I could see all the
          pieces at once, the whole thing stopped feeling mysterious. Let&apos;s start one level
          deeper than the trade: the <strong className="text-white">order</strong>.
        </p>

        <p>
          An <strong className="text-white">order</strong> is a single instruction to buy or sell.
          It&apos;s the true atom — a trade is just what happens when two opposing orders meet. And
          every order is made of exactly four things.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-even-is-a-market/order-anatomy.svg"
            alt="An order ticket broken into side, size, price, and time, each labeled with a plain-English explanation"
            width={800}
            height={440}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            One order: a side, a size, a price, and a timestamp. Every market is millions of these,
            sorted.
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          <li>
            <strong className="text-[#34d399]">Side</strong> — buy or sell. The direction. A buy
            order joins the demand; a sell order joins the supply.
          </li>
          <li>
            <strong className="text-[#1f9bff]">Size</strong> — the quantity, in shares or contracts.
            How much you want to trade at your price.
          </li>
          <li>
            <strong className="text-white">Price</strong> — the <em>limit</em>: the worst price
            you&apos;ll accept. A buyer&apos;s limit is a ceiling; a seller&apos;s is a floor.
          </li>
          <li>
            <strong className="text-[#fbbf24]">Time</strong> — when the order arrived. At the same
            price, whoever got there first gets filled first. This <em>time priority</em> is small
            now and enormous later — it&apos;s the entire reason speed becomes a weapon.
          </li>
        </ul>

        <p>
          Now stack a bunch of those orders up by price and you get the full picture. Here is one
          frozen moment of a market, with every entity called out:
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/what-even-is-a-market/market-snapshot.svg"
            alt="A market snapshot showing asks above and bids below, with numbered labels for order, price level, size, best ask, best bid, spread, mid-price, and last trade"
            width={800}
            height={540}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Eight pieces. Sellers above, buyers below, and everything else is bookkeeping on these.
          </p>
        </div>

        <ol className="mt-6 space-y-3 list-decimal list-inside">
          <li>
            <strong className="text-white">Order</strong> — one resting instruction sitting in the
            market, waiting for someone to trade against it.
          </li>
          <li>
            <strong className="text-white">Price level</strong> — a single row: one price, plus{" "}
            <em>all</em> the orders parked at that exact price added together.
          </li>
          <li>
            <strong className="text-white">Size / depth</strong> — how much is available at a level
            (the bar length). Big bars mean lots is on offer there.
          </li>
          <li>
            <strong className="text-[#ef5350]">Best ask</strong> — the lowest price any seller is
            currently willing to take. If you buy right now, you buy here.
          </li>
          <li>
            <strong className="text-[#34d399]">Best bid</strong> — the highest price any buyer is
            currently offering. If you sell right now, you sell here.
          </li>
          <li>
            <strong className="text-white">Spread</strong> — the gap between best ask and best bid.
            Here that&apos;s $100.02 − $100.00 = $0.02.
          </li>
          <li>
            <strong className="text-white">Mid-price</strong> — the point exactly halfway between
            best bid and best ask ($100.01). A convenient single &quot;price&quot; when there are
            really two.
          </li>
          <li>
            <strong className="text-white">Last trade</strong> — the most recent price two orders
            actually agreed on. This is usually the number you see quoted as &quot;the price.&quot;
          </li>
        </ol>

        <p>
          That&apos;s genuinely the entire cast. A market is buyers and sellers posting orders;
          those orders pile into price levels; the best of each side defines the bid, the ask, and
          the spread between them; and every time two of them meet, a trade prints a new last
          price. Nothing else is hiding.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The words, in one place
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Term</th>
                <th className="py-3 pr-4 text-left font-semibold text-[#bf00ff]">Plain English</th>
                <th className="py-3 text-left font-medium text-zinc-300">Why it matters</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Order</td>
                <td className="py-4 pr-4">One instruction to buy or sell (side, size, price, time)</td>
                <td className="py-4">The true atom — trades are orders meeting</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Trade</td>
                <td className="py-4 pr-4">A buyer and seller agreeing on a price</td>
                <td className="py-4">The single event a market is built from</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Bid</td>
                <td className="py-4 pr-4">Highest price a buyer is offering</td>
                <td className="py-4">The price you can sell into right now</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Ask</td>
                <td className="py-4 pr-4">Lowest price a seller is asking</td>
                <td className="py-4">The price you can buy at right now</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Spread</td>
                <td className="py-4 pr-4">The gap between bid and ask</td>
                <td className="py-4">The cost of trading immediately</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Mid-price</td>
                <td className="py-4 pr-4">Halfway between bid and ask</td>
                <td className="py-4">A single stand-in for &quot;the&quot; price</td>
              </tr>
              <tr className="border-b border-zinc-900">
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Price discovery</td>
                <td className="py-4 pr-4">How a price emerges from buyers and sellers</td>
                <td className="py-4">Why prices move with no one in charge</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-semibold text-[#bf00ff]">Liquidity</td>
                <td className="py-4 pr-4">How easily you can trade without moving price</td>
                <td className="py-4">Quietly makes a market usable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-14 border-zinc-800" />

        <h3 className="text-base font-semibold tracking-tight text-zinc-400">
          Math Corner (the first two formulas)
        </h3>

        <p className="mt-4 text-sm text-zinc-400">
          Almost nothing here was quantitative — which is the point; the basics aren&apos;t. But
          two tiny definitions are the first real handles, and everything quant gets built on top
          of them.
        </p>

        <p className="mt-6 text-sm text-zinc-300">
          The spread is just the distance between the best ask and the best bid:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`spread = ask − bid`}
        </pre>

        <p className="mt-6 text-sm text-zinc-300">
          And the mid-price — a common stand-in for &quot;the&quot; price when there are really
          two — sits exactly between them:
        </p>

        <pre className="mt-4 text-sm text-zinc-300 text-center">
{`mid = (ask + bid) / 2`}
        </pre>

        <p className="mt-6 text-sm text-zinc-400">
          Trivial as they look, these are the seeds. The entire game later is about watching these
          two numbers move and reacting before anyone else can.
        </p>

        <hr className="my-14 border-zinc-800" />

        <p className="text-sm text-zinc-400">
          <strong className="text-zinc-300">Next up:</strong> the order book — the actual data
          structure exchanges use to track every resting bid and ask. That&apos;s where the bid,
          ask, and spread stop being a snapshot and become a living, churning machine — and where
          the mechanics that matter for speed really begin.
        </p>
      </div>
    </article>
  );
}
