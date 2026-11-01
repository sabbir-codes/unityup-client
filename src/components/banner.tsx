import {
  ArrowRight,
  CalendarDays,
  CalendarPlus,
  Heart,
  Leaf,
  Users,
  type LucideIcon,
} from "lucide-react";

const stats: [string, string, LucideIcon][] = [
  ["1,200+", "Active Volunteers", Users],
  ["550+", "Upcoming Events", CalendarDays],
  ["200+", "Communities Impacted", Heart],
  ["100%", "Community Driven", Leaf],
];

export function Banner() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fff8f7] px-5 pb-32 pt-28 text-[#101b3b] sm:px-8"
    >
      <div className="pointer-events-none absolute -left-20 top-24 size-48 rounded-full border-30 border-[#fbd5d9] opacity-70" />
      <div className="pointer-events-none absolute -right-24 -bottom-32 h-64 w-[65%] rotate-[-8deg] rounded-[50%] bg-[#ed0a26]" />
      <div className="relative z-10 mx-auto grid min-h-142.5 max-w-250 items-center lg:grid-cols-[47%_53%]">
        <div className="relative z-10 max-w-122.5 py-8 text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ffdce1] px-4 py-2 text-[12px] font-extrabold text-[#bd1830]">
            <Leaf className="size-4 fill-current" /> Together for a Better
            Tomorrow
          </div>

          <h1 className="text-[43px] font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-[60px]">
            Small Actions
            <span className="block bg-linear-to-r from-[#f21b32] via-[#df1025] to-[#b90031] bg-clip-text text-transparent">
              United People
            </span>
            <span className="block">Lasting Impact</span>
          </h1>

          <p className="mt-6 max-w-110 text-[11px] font-medium leading-relaxed text-[#27324c] sm:text-[11px]">
            Discover local social initiatives, join community service events,
            and connect with people who care about making a difference.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e90046] px-5 py-3 text-[12px] font-bold text-white shadow-lg shadow-red-200 transition-colors hover:bg-[#c9003e]"
            >
              <CalendarDays className="size-4" /> Explore Events{" "}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#create-event"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e90046] bg-white px-5 py-3 text-[12px] font-bold text-[#17213d] transition-colors hover:bg-red-50"
            >
              <CalendarPlus className="size-4 text-[#e90046]" /> Create an Event
            </a>
          </div>
        </div>

        <div className="relative h-97.5 self-end overflow-hidden rounded-tl-[180px] rounded-bl-[110px] rounded-br-[35%] rounded-tr-[35%] bg-[#e90046] shadow-[-20px_20px_0_#ffd7dc] sm:h-117.5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/unityup-event-1.jpg')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[#e90046]/10"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 grid w-[calc(100%-2.5rem)] max-w-175 -translate-x-1/2 grid-cols-2 rounded-full bg-white px-4 py-4 shadow-[0_10px_30px_rgba(20,31,61,0.15)] sm:grid-cols-4 sm:px-7">
        {stats.map(([value, label, Icon]) => (
          <div
            key={label as string}
            className="flex items-center justify-center gap-2 border-slate-200 px-2 py-1 text-[#101b3b] sm:border-r last:border-0"
          >
            <Icon className="hidden size-6 shrink-0 text-[#e90046] sm:block" />
            <span>
              <strong className="block text-lg font-black sm:text-xl">
                {value}
              </strong>
              <span className="block text-[12px] font-semibold">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
