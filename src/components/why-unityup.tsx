import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Connect People",
    description: "Join a growing community of changemakers and like-minded individuals.",
    linkClass: "text-[#14956f]",
    iconClass: "bg-[#d7f7e9] text-[#159c75]",
    cardClass: "bg-[#effcf6]",
    Icon: UsersRound,
  },
  {
    number: "02",
    title: "Discover Events",
    description: "Find upcoming social initiatives and community service events near you.",
    linkClass: "text-[#e60036]",
    iconClass: "bg-[#ffe0e4] text-[#e60036]",
    cardClass: "bg-[#fff0f2]",
    Icon: CalendarDays,
  },
  {
    number: "03",
    title: "Make an Impact",
    description: "Be part of meaningful actions that create a positive difference in society.",
    linkClass: "text-[#14956f]",
    iconClass: "bg-[#d7f7e9] text-[#159c75]",
    cardClass: "bg-[#effcf6]",
    Icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Stay Informed",
    description: "Get real-time updates on events, progress, and community activities.",
    linkClass: "text-[#e60036]",
    iconClass: "bg-[#ffe0e4] text-[#e60036]",
    cardClass: "bg-[#fff0f2]",
    Icon: ShieldCheck,
  },
];

export function WhyUnityUp() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fdfc] px-5 pb-20 pt-12 text-[#101b3b] sm:px-8 sm:pt-16">
      <div className="pointer-events-none absolute -left-16 -top-20 size-52 rounded-full bg-[#e5f7f0] opacity-80" />
      <div className="pointer-events-none absolute right-[-4rem] top-28 size-32 rounded-full bg-[#fff0f2] opacity-80" />

      <div className="relative mx-auto max-w-[960px]">
        <div className="mb-7 text-center">
          <div className="mb-2 inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[0.03em] text-[#e60036]">
            <span className="h-px w-10 bg-[#e60036]" />
            <span className="rounded-full bg-[#ffe0e4] px-4 py-1.5">WHY UNITYUP</span>
            <span className="h-px w-10 bg-[#e60036]" />
          </div>
          <h2 className="text-2xl font-black tracking-tight sm:text-[27px]">
            Built for a Stronger <span className="text-[#e60036]">Community</span>
          </h2>
          <p className="mt-1 text-[10px] font-medium text-[#647084] sm:text-xs">
            Discover, participate, and create positive change with UnityUp&apos;s powerful features.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ number, title, description, linkClass, iconClass, cardClass, Icon }) => (
            <article key={title} className={`relative min-h-[138px] overflow-hidden rounded-xl border border-white/80 p-3 shadow-[0_4px_14px_rgba(36,77,76,0.07)] ${cardClass}`}>
              <div className="absolute right-3 top-3 rounded-full bg-white/70 px-2 py-1 text-[9px] font-bold text-[#159c75]">{number}</div>
              <div className={`mb-2 flex size-10 items-center justify-center rounded-lg ${iconClass}`}>
                <Icon className="size-6" />
              </div>
              <h3 className="text-[11px] font-extrabold">{title}</h3>
              <p className="mt-1 max-w-[185px] text-[9px] leading-[1.35] text-[#596579]">{description}</p>
              <a href="#events" className={`mt-2 inline-flex items-center gap-1 text-[8px] font-extrabold ${linkClass}`}>
                Learn more <ArrowRight className="size-3" />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(175deg,transparent_48%,#d9f5eb_49%,#d9f5eb_75%,transparent_76%),linear-gradient(5deg,transparent_45%,#d9f5eb_46%,#d9f5eb_76%,transparent_77%)] opacity-80" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-12 w-52 -translate-x-1/2 rounded-[50%_50%_0_0] border-t-2 border-[#9fdec6] opacity-70" />
    </section>
  );
}
