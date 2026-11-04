"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Tag, UserRound } from "lucide-react";

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
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
}

export function EventsLoading() {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-[380px] animate-pulse rounded-xl border border-[#dfe5e7] bg-white" />)}</div>;
}

export function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/events", { cache: "no-store" });
        if (!response.ok) throw new Error("Unable to load events");
        const data: Event[] | { events?: Event[] } = await response.json();
        setEvents(Array.isArray(data) ? data : (data.events ?? []));
      } catch {
        setError("We could not load the events right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) return <EventsLoading />;
  if (error) return <p className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">{error}</p>;
  if (!events.length) return <p className="rounded-xl border border-[#dfe5e7] bg-white p-6 text-center text-sm text-[#667b8b]">No events are available yet.</p>;

  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{events.map((event) => {
    const typeColor = typeStyles[event.type] ?? "text-[#079b8f]";
    return <article key={event._id} className="group overflow-hidden rounded-xl border border-[#dfe5e7] bg-white shadow-[0_2px_6px_rgba(28,48,68,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(28,48,68,0.16)]">
      <div className="relative h-[193px] bg-[#dce7e5] bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl})` }}><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" /><span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold shadow-sm ${typeColor}`}><Tag className="size-3" />{event.type}</span><span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold text-white"><CalendarDays className="size-3 text-[#C70013]" />{formatDate(event.date)}</span></div>
      <div className="flex min-h-[186px] flex-col p-4"><h2 className="truncate text-[14px] font-extrabold text-[#071337]" title={event.title}>{event.title}</h2><div className="mt-2 flex items-center gap-1 text-[10px] text-[#667b8b]"><MapPin className="size-3 text-[#C70013]" /><span className="truncate">{event.location}</span></div><p className="mt-2 line-clamp-2 min-h-8 text-[10px] leading-relaxed text-[#667b8b]">{event.description}</p><div className="my-3 border-t border-[#dce4e7]" /><div className="flex items-center gap-1 text-[10px] text-[#667b8b]"><UserRound className="size-3 text-[#C70013]" />UnityUp Community</div><Link href={`/events/${event._id}`} className="mt-auto flex h-8 items-center justify-center gap-1 rounded-lg bg-[#C70013] text-[11px] font-bold text-white hover:bg-[#a60010]">View Event <ArrowRight className="size-3.5" /></Link></div>
    </article>;
  })}</div>;
}
