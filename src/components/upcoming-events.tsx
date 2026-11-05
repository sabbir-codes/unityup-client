import { Clock3, MapPin } from "lucide-react";

type Event = {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  imageUrl?: string;
  description: string;
  organizer?: string;
};

async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const response = await fetch("http://localhost:5000/events");
    if (!response.ok) throw new Error("Unable to load events");

    const data: Event[] | { events?: Event[] } = await response.json();
    const events = Array.isArray(data) ? data : (data.events ?? []);
    return events
      .filter((event) => event.date && new Date(`${event.date}T23:59:59`) >= new Date())
      .slice(0, 6);
  } catch {
    return [];
  }
}

function eventPresentation(type: string, date: string) {
  const normalized = type.toLowerCase();
  const theme = normalized.includes("plant") || normalized.includes("environment")
    ? "trees"
    : normalized.includes("clean")
      ? "cleanup"
      : normalized.includes("food")
        ? "food"
        : normalized.includes("blood") || normalized.includes("health")
          ? "blood"
          : normalized.includes("winter") || normalized.includes("clothes")
            ? "winter"
            : "boxes";
  const icons: Record<string, string> = { trees: "⚑", cleanup: "♻", food: "⚑", blood: "♢", winter: "❄", boxes: "♡" };
  const eventDate = new Date(`${date}T00:00:00`);
  const days = Math.round((eventDate.getTime() - new Date(new Date().toDateString()).getTime()) / 86400000);
  return {
    theme,
    icon: icons[theme],
    status: days === 0 ? "Today" : days === 1 ? "Tomorrow" : `In ${days} days`,
    day: eventDate.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
    date: eventDate.getDate(),
    month: eventDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
  };
}

function EventIllustration({ theme, imageUrl }: { theme: string; imageUrl?: string }) {
  return (
    <div
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      className={`relative h-[128px] overflow-hidden bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${theme}`}
    >
      <span className="absolute bottom-4 left-0 h-9 w-full rounded-[50%] bg-black/10" />
      {theme === "winter" && (
        <>
          <span className="absolute left-14 top-20 h-3 w-36 rounded bg-[#723c31]" />
          <span className="absolute left-16 top-14 size-5 rounded-sm bg-[#dc1926] shadow-[25px_0_#ffc20a,50px_0_#1879d1,75px_0_#e8499a,100px_0_#723ee0]" />
        </>
      )}
      {theme === "trees" && (
        <>
          <span className="absolute bottom-5 left-14 text-4xl">🌳</span>
          <span className="absolute bottom-5 left-28 text-3xl">🌳</span>
          <span className="absolute bottom-5 left-44 text-4xl">🌳</span>
          <span className="absolute bottom-5 right-12 text-3xl">🌳</span>
        </>
      )}
      {theme === "boxes" && (
        <>
          <span className="absolute bottom-5 left-28 text-6xl">▥</span>
          <span className="absolute bottom-5 left-44 text-5xl">▥</span>
          <span className="absolute right-5 top-8 text-5xl text-[#c90022]">
            ♥
          </span>
        </>
      )}
      {theme === "cleanup" && (
        <>
          <span className="absolute bottom-4 left-20 text-4xl">🗑️</span>
          <span className="absolute bottom-4 left-36 text-4xl">🗑️</span>
          <span className="absolute bottom-4 left-52 text-4xl">🗑️</span>
          <span className="absolute bottom-5 left-5 text-3xl">🌳</span>
        </>
      )}
      {theme === "food" && (
        <>
          <span className="absolute bottom-7 left-12 text-3xl">🍽️</span>
          <span className="absolute bottom-7 left-28 text-3xl">🍽️</span>
          <span className="absolute bottom-7 left-44 text-3xl">🍽️</span>
          <span className="absolute bottom-7 left-60 text-3xl">🍽️</span>
        </>
      )}
      {theme === "blood" && (
        <span className="absolute inset-0 flex items-center justify-center text-6xl font-light text-white">
          ♢
        </span>
      )}
    </div>
  );
}

export async function UpcomingEvents() {
  const events = await getUpcomingEvents();

  return (
    <section
      id="events"
      className="bg-white px-5 pb-20 pt-14 text-[#243047] sm:px-8"
    >
      <div className="mx-auto max-w-[960px]">
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight sm:text-[25px]">
            Recent Upcoming Events
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-[#e60036]" />
          <p className="mt-3 text-[11px] font-medium text-[#647084]">
            The next community drives near you. Pick a cause, show up and make a
            difference.
          </p>
        </div>
        {!events.length ? (
          <p className="rounded-xl border border-[#e2e6e9] bg-[#f7f9fb] p-8 text-center text-[11px] text-[#687486]">
            No upcoming events are available right now.
          </p>
        ) : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            (() => {
              const presentation = eventPresentation(event.type, event.date);
              const organizer = event.organizer || "UnityUp Community";
              return (
            <article
              key={event._id}
              className="group overflow-hidden rounded-xl border border-[#e2e6e9] bg-white shadow-[0_2px_7px_rgba(28,48,68,0.08)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#cbd5dc] hover:shadow-[0_12px_24px_rgba(28,48,68,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative">
                <EventIllustration theme={presentation.theme} imageUrl={event.imageUrl} />
                <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-[12px] font-bold text-[#243047]">
                  {presentation.icon} {event.type}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-[#e60036] px-2 py-1 text-[12px] font-bold text-white">
                  {presentation.status}
                </span>
                <div className="absolute -bottom-4 left-3 w-9 overflow-hidden rounded-lg bg-white text-center shadow-sm">
                  <span className="block bg-[#e60036] py-0.5 text-[12px] font-bold text-white">
                    {presentation.month}
                  </span>
                  <strong className="block text-[11px] leading-5">
                    {presentation.date}
                  </strong>
                  <span className="block pb-1 text-[12px] font-semibold text-[#7e8794]">
                    {presentation.day}
                  </span>
                </div>
              </div>
              <div className="p-3 pt-6">
                <h3 className="truncate text-[12px] font-extrabold">
                  {event.title}
                </h3>
                <p className="mt-2 min-h-8 text-[11px] leading-[1.4] text-[#687486]">
                  {event.description}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] font-medium text-[#4c5869]">
                  <MapPin className="size-3 text-[#e60036]" /> {event.location}
                </div>
                <div className="my-3 border-t border-[#edf0f2]" />
                <div className="flex items-center gap-2 text-[11px] text-[#8a929d]">
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#ffe1e4] font-bold text-[#e60036]">
                    {organizer.charAt(0).toUpperCase()}
                  </span>
                  <span>
                    Organized by
                    <br />
                    <b className="text-[#4b5665]">{organizer}</b>
                  </span>
                  <Clock3 className="ml-auto size-3 text-[#e60036]" />
                </div>
                <a
                  href={`/events/${event._id}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#d90020] py-2 text-[12px] font-bold text-white transition-colors hover:bg-[#b9001b]"
                >
                  View Event <span>→</span>
                </a>
              </div>
            </article>
              );
            })()
          ))}
        </div>}
        <div className="mt-7 text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 rounded-md bg-[#d90020] px-5 py-2 text-[12px] font-bold text-white hover:bg-[#b9001b]"
          >
            View All Events <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
