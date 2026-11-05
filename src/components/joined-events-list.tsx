import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, MapPin, Tag } from "lucide-react";
import { getJoinedEvents } from "@/lib/joined-events-server";

const fallbackImage = "/images/unityup-event-1.jpg";

function formatDate(date: string) {
  if (!date) return "Date to be announced";
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export async function JoinedEventsList() {
  const events = await getJoinedEvents();

  if (!events.length) {
    return (
      <div className="rounded-xl border border-[#dce5e8] bg-white p-8 text-center">
        <p className="text-sm font-bold text-[#071337]">You have not joined any events yet.</p>
        <Link href="/events" className="mt-4 inline-flex rounded-lg bg-[#079b8f] px-5 py-2 text-xs font-bold text-white hover:bg-[#067f76]">
          Browse events
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[...events].sort((a, b) => a.date.localeCompare(b.date)).map((event) => (
        <article key={event._id} className="overflow-hidden rounded-xl border border-[#dce5e8] bg-white shadow-[0_2px_6px_rgba(28,48,68,0.12)]">
          <div className="relative h-[193px] bg-[#dce7e5] bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl || fallbackImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#e00046] shadow-sm"><Tag className="size-3" />{event.type || "Community Drive"}</span>
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold text-white"><CalendarDays className="size-3 text-[#079b8f]" />{formatDate(event.date)}</span>
          </div>
          <div className="flex min-h-[186px] flex-col p-4">
            <h2 className="truncate text-[14px] font-extrabold text-[#071337]" title={event.title}>{event.title}</h2>
            <div className="mt-2 flex items-center gap-1 text-[10px] text-[#667b8b]"><MapPin className="size-3 text-[#079b8f]" /><span className="truncate">{event.location}</span></div>
            <p className="mt-3 line-clamp-2 min-h-8 text-[10px] leading-relaxed text-[#667b8b]">You have signed up as a confirmed volunteer for this initiative.</p>
            <div className="my-3 border-t border-[#dce4e7]" />
            <p className="flex items-center gap-1 text-[10px] font-bold text-[#079b8f]"><CheckCircle2 className="size-3" /> Joined {formatDate(event.date)}</p>
            <Link href={`/events/${event._id}`} className="mt-auto flex h-8 items-center justify-center gap-1 rounded-lg bg-[#079b8f] text-[11px] font-bold text-white hover:bg-[#067f76]">View Event <ArrowRight className="size-3.5" /></Link>
          </div>
        </article>
      ))}
    </div>
  );
}
