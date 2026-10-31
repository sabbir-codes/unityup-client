import { ArrowRight, CalendarPlus } from "lucide-react";

const stats = [
  ["1,200+", "Connecting Communities"],
  ["550+", "Inspiring Change"],
  ["200+", "Making an Impact"],
  ["100%", "Community Driven"],
];

export function Banner() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#202124] px-5 pb-28 pt-24 text-center text-white sm:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/unityup-event-1.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-1 mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="mb-7 rounded-full border border-white/70 bg-linear-to-r from-[#e90046] to-[#ba003d] px-7 py-1.5 text-xs font-bold tracking-[0.14em] shadow-lg sm:text-sm">
          <span aria-hidden="true">✦</span> Together For A Better Tomorrow
        </div>

        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.08] tracking-wide sm:text-6xl lg:text-[68px]">
          Small Actions.
          <span className="mt-2 block text-[#e90046]  [-webkit-text-stroke:1px_white]">
            Lasting Impact</span>
        </h1>

        <p className="mt-6 max-w-2xl text-[11px] leading-relaxed tracking-wide text-white/90 sm:text-sm">
          Discover Local Social Initiatives, Join Community Service Events, And Connect With People Who Care About Making A
          Difference. Together, We Can Build Stronger Communities And Create A Better Future For Everyone.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#events"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#e90046] px-5 py-2.5 text-xs font-bold transition-colors hover:bg-[#c9003e]"
          >
            Explore Upcoming Events <ArrowRight className="size-4" />
          </a>
          <a
            href="#create-event"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#e90046] px-5 py-2.5 text-xs font-bold transition-colors hover:bg-[#c9003e]"
          >
            Create an Event <CalendarPlus className="size-3.5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-1 grid w-[calc(100%-2.5rem)] max-w-5xl -translate-x-1/2 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-t-lg bg-white px-2 py-5 text-[#c90046] shadow-xl sm:py-6">
            <strong className="block text-3xl font-black sm:text-4xl">{value}</strong>
            <span className="mt-1 block text-[10px] font-semibold sm:text-xs">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
