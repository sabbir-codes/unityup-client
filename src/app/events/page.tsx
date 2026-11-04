import { ArrowRight, CalendarDays, MapPin, Tag, UserRound } from "lucide-react";

const EVENTS_URL = "http://localhost:5000/events";
export const instant = false;

type Event = {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};
const typeStyles: Record<string, string> = {
  Donation: "text-[#e00046]",
  Education: "text-[#f39a00]",
  Environment: "text-[#079b8f]",
  "Health Support": "text-[#1677e8]",
  "Food Distribution": "text-[#079b8f]",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

async function getEvents(): Promise<Event[]> {
  const res = await fetch(EVENTS_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Unable to load events");

  const data: Event[] | { events?: Event[] } = await res.json();
  return Array.isArray(data) ? data : (data.events ?? []);
}

function EventCard({ event }: { event: Event }) {
  const typeColor = typeStyles[event.type] ?? "text-[#079b8f]";

  return (
    <article className="group overflow-hidden rounded-xl border border-[#dfe5e7] bg-white shadow-[0_2px_6px_rgba(28,48,68,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(28,48,68,0.16)]">
      <div
        className="relative h-[193px] bg-[#dce7e5] bg-cover bg-center"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold shadow-sm ${typeColor}`}
        >
          <Tag className="size-3" />
          {event.type}
        </span>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold text-white">
          <CalendarDays className="size-3 text-[#C70013]" />
          {formatDate(event.date)}
        </span>
      </div>

      <div className="flex min-h-[186px] flex-col p-4">
        <h2
          className="truncate text-[14px] font-extrabold text-[#071337]"
          title={event.title}
        >
          {event.title}
        </h2>
        <div className="mt-2 flex items-center gap-1 text-[10px] text-[#667b8b]">
          <MapPin className="size-3 text-[#C70013]" />
          <span className="truncate">{event.location}</span>
        </div>
        <p className="mt-2 line-clamp-2 min-h-8 text-[10px] leading-relaxed text-[#667b8b]">
          {event.description}
        </p>
        <div className="my-3 border-t border-[#dce4e7]" />
        <div className="flex items-center gap-1 text-[10px] text-[#667b8b]">
          <UserRound className="size-3 text-[#C70013]" />
          UnityUp Community
        </div>
        <button
          type="button"
          className="mt-auto flex h-8 items-center justify-center gap-1 rounded-lg bg-[#C70013] text-[11px] font-bold text-white transition-colors hover:bg-[#a60010]"
        >
          View Event <ArrowRight className="size-3.5" />
        </button>
      </div>
    </article>
  );
}

export default async function AllEventsPage() {
  let events: Event[] = [];
  let error = "";

  try {
    events = await getEvents();
  } catch {
    error = "We could not load the events right now. Please try again later.";
  }

  return (
    <main className="min-h-screen bg-[#f7fafb] px-5 py-10 text-[#071337] sm:px-8">
      <div className="mx-auto max-w-[974px]">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            All Community Events
          </h1>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-[#C70013]" />
          <p className="mt-3 text-[11px] font-medium text-[#667b8b]">
            Find an opportunity to make a difference in your community.
          </p>
        </header>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
            {error}
          </p>
        )}

        {!error && events.length === 0 && (
          <p className="rounded-xl border border-[#dfe5e7] bg-white p-6 text-center text-sm text-[#667b8b]">
            No events are available yet.
          </p>
        )}

        {!error && events.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
