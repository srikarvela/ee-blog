export type Tag = "IEM" | "QUANT" | "VISION";

export type Post = {
  slug: string;
  title: string;
  date: string;
  blurb: string;
  tags: Tag[];
};

// Tailwind classes for each tag's chip. Add new tags here as topics grow.
export const TAG_STYLES: Record<Tag, string> = {
  IEM: "border-yellow-400/40 bg-yellow-400/10 text-yellow-400",
  QUANT: "border-[#1f9bff]/50 bg-[#1f9bff]/10 text-[#1f9bff]",
  VISION: "border-[#c4b5fd]/50 bg-[#c4b5fd]/10 text-[#c4b5fd]",
};

// Newest first — order here is the display order.
export const posts: Post[] = [
  {
    slug: "what-even-is-a-market",
    title: "What Even Is a Market?",
    date: "Jun 30, 2026",
    blurb:
      "Post one of a long climb toward trading hardware — starting where it has to start: buyers, sellers, price, and what actually happens when a trade happens.",
    tags: ["QUANT"],
  },
  {
    slug: "whats-the-difference",
    title: "What’s the Difference?",
    date: "Jun 26, 2026",
    blurb:
      "IEMs vs. Bluetooth ANC vs. wired headphones — AirPods Pro, Sony, Bose, and what the signal path, codecs, and latency actually reveal.",
    tags: ["IEM"],
  },
  {
    slug: "exploring-iems",
    title: "Exploring IEMs",
    date: "Jun 24, 2026",
    blurb:
      "Three lenses on in-ear monitors — the technical seal-and-driver story, what performers actually report, and how the pros measure and tune them.",
    tags: ["IEM"],
  },
  {
    slug: "event-based-vision",
    title: "Event-Based Vision",
    date: "Apr 8, 2026",
    blurb:
      "Instead of capturing frames, event cameras fire per-pixel signals the moment luminance changes — asynchronous, sparse, and microsecond-precise.",
    tags: ["VISION"],
  },
  {
    slug: "asked-for-headphones-what-is-this",
    title: "I asked for headphones — what is this?",
    date: "Feb 1, 2026",
    blurb:
      "An EE-first encounter with IEMs, impedance, and why audio suddenly clicked.",
    tags: ["IEM"],
  },
];

// All tags that appear on at least one post, in first-seen order.
export const allTags: Tag[] = posts
  .flatMap((p) => p.tags)
  .filter((t, i, arr) => arr.indexOf(t) === i);
