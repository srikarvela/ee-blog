import Image from "next/image";

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Blocks, Hashes, and the Glue Between Them
      </h1>

      <p className="mt-2 text-sm text-zinc-500">Jul 2, 2026</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p className="text-sm text-zinc-500 italic">
          Diary entry. Written the messy way — as I actually figured it out, not cleaned up
          after the fact.
        </p>

        <p>
          I&apos;ve been nodding along to the phrase &quot;a blockchain is a chain of blocks&quot;
          for years without ever asking the obvious question: what actually <em>chains</em> them?
          What&apos;s the glue? Tonight I finally sat down to find out, and I want to write it down
          while the click is still fresh, because it&apos;s one of those ideas that feels like
          magic right up until the second it doesn&apos;t.
        </p>

        <p>
          It turns out you can&apos;t understand the chain until you understand one small,
          beautiful tool first. So that&apos;s where I got stuck, and where I&apos;ll start.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Detour: what even is a hash?
        </h2>

        <p>
          A <strong className="text-white">hash function</strong> takes any input — a word, a
          file, an entire library — and spits out a fixed-size string of characters. The one
          everyone uses in crypto is <strong className="text-white">SHA-256</strong>, and its
          output is always 256 bits, which shows up as 64 hex characters. Doesn&apos;t matter if
          you feed it one letter or a whole novel; you get 64 characters back. Every time.
        </p>

        <p>
          Once I started poking at it, there were really <em>five</em> properties that make it
          work — and every one of them turns out to matter for a blockchain later:
        </p>

        <ul className="space-y-3">
          <li>
            <strong className="text-white">Deterministic.</strong> The same input always produces
            the exact same output. No randomness — hash <code className="text-zinc-200">hello</code>{" "}
            today or next year, you get the identical 64 characters.
          </li>
          <li>
            <strong className="text-white">Fixed size.</strong> One letter or an entire library, the
            output is always 256 bits (64 hex characters). The input length never leaks out.
          </li>
          <li>
            <strong className="text-white">One-way.</strong> Easy to go input → hash. Practically
            impossible to go hash → input. There&apos;s no &quot;un-hash&quot; button.
          </li>
          <li>
            <strong className="text-white">Avalanche.</strong> Change the input by a single bit and
            about <em>half</em> the output bits flip. Tiny cause, total change.
          </li>
          <li>
            <strong className="text-white">Collision-resistant.</strong> Finding two different inputs
            that produce the same hash is, for all practical purposes, impossible. Every fingerprint
            is effectively unique.
          </li>
        </ul>

        <div className="mt-6">
          <Image
            src="/images/posts/blocks-hashes-glue/hash-properties.svg"
            alt="The five properties of SHA-256: deterministic, fixed size, one-way, avalanche, and collision-resistant"
            width={800}
            height={430}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Five guarantees. Avalanche is the one that quietly does the tamper-detection work in a
            chain.
          </p>
        </div>

        <div className="mt-6">
          <Image
            src="/images/posts/blocks-hashes-glue/hash-function.svg"
            alt="A hash function taking any input and producing a fixed 256-bit output, with an avalanche-effect example where hello and Hello produce completely different hashes"
            width={800}
            height={470}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Any input in, a fixed 256-bit fingerprint out — and one changed letter rewrites the
            whole thing.
          </p>
        </div>

        <p>
          I didn&apos;t really believe the avalanche part until I ran it myself. I hashed the word{" "}
          <code className="text-zinc-200">hello</code> and got{" "}
          <code className="text-[#34d399] text-sm">2cf24dba5fb0a30e…938b9824</code>. Then I
          capitalized one letter — <code className="text-zinc-200">Hello</code> — and got{" "}
          <code className="text-[#ef5350] text-sm">185f8db32271fe25…26381969</code>. Not similar.
          Not &quot;mostly the same with a couple different characters.&quot; A totally unrelated
          string. One capital letter. That&apos;s when it clicked that a hash isn&apos;t a summary
          of the input — it&apos;s a <strong className="text-white">fingerprint</strong> of it. Any
          change, however tiny, and you&apos;re looking at a different fingerprint entirely.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          Okay — now the glue
        </h2>

        <p>
          Here&apos;s the part I&apos;d been missing all these years. A{" "}
          <strong className="text-white">block</strong> isn&apos;t just data. Each block stores
          three things: its data (say, some transactions), its own hash, and — this is the whole
          trick — <strong className="text-white">the hash of the block before it</strong>.
        </p>

        <p>
          That&apos;s the chain. Not a physical link, not a pointer in the way I&apos;d imagined —
          just a fingerprint. Block 2 literally writes down Block 1&apos;s fingerprint inside
          itself. Block 3 writes down Block 2&apos;s. And because a block&apos;s hash is computed
          over <em>all</em> its contents — including that copied-in previous fingerprint — the
          blocks are welded together by math.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/blocks-hashes-glue/blockchain-glue.svg"
            alt="A chain of three blocks each storing the previous block's hash, and a tampered version where editing block 2 breaks the link to block 3"
            width={800}
            height={520}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            The top chain is intact — every &quot;prev hash&quot; matches. Edit one old block and
            the mismatch cascades forward instantly.
          </p>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The moment it actually landed
        </h2>

        <p>
          I sat with the diagram for a minute and then it hit me why this is such a big deal.
          Suppose someone wants to quietly rewrite history — go back to an old block and change{" "}
          <code className="text-zinc-200">B pays C 3</code> into{" "}
          <code className="text-[#ef5350]">B pays C 3000</code>. The instant they edit that data,
          the block&apos;s hash changes (avalanche — remember?). But the <em>next</em> block still
          has the <em>old</em> fingerprint written inside it. The two no longer match. The link is
          visibly broken.
        </p>

        <p>
          And it doesn&apos;t stop there. To repair the break, the forger would have to recompute
          the next block&apos;s hash — which changes <em>its</em> fingerprint — which breaks the
          link to the block after that, and so on, all the way to the tip of the chain. One tiny
          edit forces you to redo <em>everything</em> that came after it. That&apos;s what people
          mean when they call a blockchain <strong className="text-white">tamper-evident</strong>.
          You can&apos;t change the past without leaving a trail that screams.
        </p>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          I pulled a block apart — every field
        </h2>

        <p>
          At this point I&apos;d been saying &quot;a block has some data and a couple of
          hashes,&quot; which was clearly hand-wavy. So I opened one up properly. It turns out a
          block splits into two parts: a <strong className="text-white">header</strong> (a small
          bundle of metadata) and a <strong className="text-white">body</strong> (the actual
          transactions). And — this was the detail I&apos;d completely missed — it&apos;s only the{" "}
          <em>header</em> that gets hashed to make the block&apos;s ID.
        </p>

        <div className="mt-6">
          <Image
            src="/images/posts/blocks-hashes-glue/block-anatomy.svg"
            alt="A single block pulled apart into header and body, with every field labeled: block height, previous hash, merkle root, timestamp, nonce, transactions, and the block hash"
            width={800}
            height={580}
            className="rounded-md w-full"
          />
          <p className="mt-2 text-xs italic text-zinc-500 text-center">
            Every field in a block, and the thread that ties the transactions at the bottom to the
            fingerprint that locks the whole thing.
          </p>
        </div>

        <p>Here&apos;s every piece, in plain English:</p>

        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-[#1f9bff]">Block height</strong> — the block&apos;s number, i.e.
            its position in the chain. Block 2 sits between the genesis block and block 3.
          </li>
          <li>
            <strong className="text-white">Header</strong> — the small bundle of metadata that gets
            fed into SHA-256. Everything below except the transactions lives here.
          </li>
          <li>
            <strong className="text-[#34d399]">Previous hash</strong> — the fingerprint of the block
            before this one. This single copied value is the actual glue of the chain.
          </li>
          <li>
            <strong className="text-[#1f9bff]">Merkle root</strong> — one hash that fingerprints{" "}
            <em>all</em> the transactions at once. Instead of stuffing every transaction into the
            header, the block hashes them together into this one value. (A hash of hashes — the same
            idea, nested.)
          </li>
          <li>
            <strong className="text-white">Timestamp</strong> — when the block was created.
          </li>
          <li>
            <strong className="text-[#fbbf24]">Nonce</strong> — a tunable number that miners are
            allowed to change freely. It looks pointless right now; it&apos;s the entire mechanism
            of the next post, proof of work. I&apos;m leaving it as a labeled box for now.
          </li>
          <li>
            <strong className="text-white">Body / transactions</strong> — the actual payload: who
            paid whom. This is the data the whole system exists to record.
          </li>
          <li>
            <strong className="text-[#34d399]">Block hash</strong> — SHA-256 of the header. This is
            the block&apos;s own fingerprint, and the value the <em>next</em> block copies into its
            &quot;previous hash&quot; field.
          </li>
        </ul>

        <p>
          The piece that finally tied it together: the transactions aren&apos;t in the header, so how
          does changing one get caught? Because the header holds the <em>merkle root</em>, and the
          merkle root is a hash of the transactions. Edit a transaction → the merkle root changes →
          the header changes → the block hash changes → the next block&apos;s &quot;previous hash&quot;
          no longer matches. The break propagates up from the data through every field. Nothing can
          quietly change without the fingerprint noticing.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm font-semibold text-zinc-300">Notebook — the one term I had to look up</p>
          <p className="mt-2 text-sm text-zinc-400">
            The very first block has no block before it, so there&apos;s nothing to fingerprint.
            It&apos;s called the <strong className="text-zinc-200">genesis block</strong>, and its
            &quot;prev hash&quot; is just a placeholder of all zeros. Everything else in the chain
            traces back to it.
          </p>
        </div>

        <h2 className="mt-14 text-xl font-semibold tracking-tight text-white">
          The question I&apos;m going to bed with
        </h2>

        <p>
          Here&apos;s where my brain snagged, and I think it&apos;s the good kind of snag. If a
          forger is willing to recompute every block after the one they edited… why can&apos;t
          they? Computers are fast. Recomputing a few hashes isn&apos;t hard. So what actually
          stops someone from rewriting the whole chain and handing me a perfectly consistent fake?
        </p>

        <p>
          I don&apos;t have the answer yet, but I can feel the shape of it: there has to be
          something that makes producing a valid block <em>deliberately expensive</em> — costly
          enough that redoing all of them is hopeless. I&apos;m pretty sure that&apos;s the thing
          everyone calls &quot;proof of work,&quot; and I&apos;m pretty sure that&apos;s the next
          rabbit hole.
        </p>

        <p>
          But that&apos;s for the next entry. Tonight I&apos;m just happy that &quot;chain of
          blocks&quot; finally means something concrete: a stack of fingerprints, each one holding
          the one below it in place.
        </p>

        <hr className="my-14 border-zinc-800" />

        <p className="text-sm text-zinc-400">
          <strong className="text-zinc-300">Next up:</strong> consensus and proof of work — how a
          network with no one in charge agrees on whose version of the chain is real, and why
          faking it costs a fortune.
        </p>
      </div>
    </article>
  );
}
