import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Mail,
  MapPin,
  Share2,
  Tag,
  UserRound,
  UsersRound,
} from "lucide-react";
import { JoinEventButton } from "@/components/join-event-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type EventDetails = {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  organizer?: string;
  organizerEmail?: string;
  volunteersJoined?: number;
  volunteers?: string[];
};

const fallbackImage = "/images/unityup-event-1.jpg";
export const instant = false;

function formatDate(date: string) {
  if (!date) return "Date to be announced";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

async function getEvent(id: string): Promise<EventDetails> {


  const jwtToken = await auth.api.getToken({
    headers: await headers()
  });

  console.log(jwtToken?.token); 

  const response = await fetch(`http://localhost:5000/events/${id}`, {
    headers: {
      authorization: jwtToken?.token,
    },
  });

  if (!response.ok) throw new Error("Unable to load this event");

  const data = await response.json();
  return data.event ?? data;
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let event: EventDetails | null = null;
  let error = false;

  try {
    event = await getEvent(id);
  } catch {
    error = true;
  }

  if (error || !event) {
    return (
      <main className="event-details-page flex min-h-screen items-center justify-center bg-[#f6fafb] px-5 text-[#071337]">
        <div className="rounded-2xl border border-[#dce5e8] bg-white p-8 text-center shadow-[0_10px_26px_rgba(20,45,60,0.1)]">
          <h1 className="text-lg font-extrabold">Event not found</h1>
          <p className="mt-2 text-sm text-[#667b8b]">
            We could not load this community event.
          </p>
          <Link
            href="/events"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#C70013]"
          >
            <ArrowLeft className="size-4 text-[#C70013]" /> Back to events
          </Link>
        </div>
      </main>
    );
  }

  const organizer = event.organizer || "UnityUp Community";
  const organizerEmail = event.organizerEmail || "community@unityup.org";
  const joined = event.volunteersJoined ?? 2;
  const volunteers = event.volunteers ?? [
    "Community volunteer",
    "UnityUp member",
  ];

  return (
    <main className="event-details-page min-h-screen bg-[#f6fafb] px-4 py-6 text-[#071337] sm:px-8 sm:py-7">
      <div className="mx-auto max-w-[960px]">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#385170] transition-colors hover:text-[#C70013]"
        >
          <ArrowLeft className="size-3.5 text-[#C70013]" /> Back to Upcoming
          Events
        </Link>

        <section className="mt-7 overflow-hidden rounded-[18px] border border-[#dce5e8] bg-white shadow-[0_12px_24px_rgba(24,42,50,0.16)]">
          <div
            className="relative flex h-[292px] items-end bg-cover bg-center sm:h-[292px]"
            style={{
              backgroundImage: `url(${event.imageUrl || fallbackImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
            <span className="absolute left-5 top-5 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#243047] shadow-sm">
              <Tag className="size-3 text-[#C70013]" />{" "}
              {event.type || "Community Drive"}
            </span>
            <div className="relative z-10 p-5 sm:p-6">
              <h1 className="max-w-[600px] text-[26px] font-black leading-tight tracking-[-0.04em] text-white sm:text-[29px]">
                {event.title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] font-medium text-white">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#C70013]" />{" "}
                  {event.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-[#C70013]" />{" "}
                  {formatDate(event.date)}
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="flex flex-col gap-3 rounded-xl border border-[#dce7e9] bg-[#f7fbfc] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#dff7f5]">
                  <UsersRound className="size-5 text-[#C70013]" />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold text-[#071337]">
                    {joined} Volunteers Joined
                  </p>
                  <p className="text-[10px] text-[#667b8b]">
                    Sign up to join hands for this drive
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  aria-label="Share event"
                  className="flex size-9 items-center justify-center rounded-lg border border-[#dce5e8] bg-white text-[#C70013] transition-colors hover:border-[#C70013]"
                >
                  <Share2 className="size-3.5" />
                </button>
                <JoinEventButton event={event} />
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_217px]">
              <article>
                <h2 className="text-[14px] font-extrabold">
                  About this Social Initiative
                </h2>
                <p className="mt-4 text-[11px] leading-relaxed text-[#60798b]">
                  {event.description ||
                    "Join us in making a positive difference in the community."}
                </p>
                <div className="my-4 border-t border-[#dce5e8]" />
                <h3 className="text-[10px] font-bold uppercase tracking-wide text-[#55748a]">
                  Volunteer Guidelines
                </h3>
                <ul className="mt-2 space-y-1.5 text-[10px] leading-relaxed text-[#60798b]">
                  <li className="flex gap-2">
                    <span className="text-[#C70013]">•</span> Please arrive 15
                    minutes before the scheduled time at the designated
                    location.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C70013]">•</span> Wear comfortable
                    clothing suitable for physical social work and distribution.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C70013]">•</span> Bring any
                    pre-coordinated items requested by the organizer.
                  </li>
                </ul>
              </article>

              <aside className="space-y-4">
                <div className="rounded-xl border border-[#dce5e8] p-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-wide text-[#55748a]">
                    Initiative Organizer
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#dff7f5] text-[#C70013]">
                      <UserRound className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-bold">
                        {organizer}
                      </p>
                      <p className="flex items-center gap-1 truncate text-[9px] text-[#60798b]">
                        <Mail className="size-2.5 text-[#C70013]" />{" "}
                        {organizerEmail}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 border-t border-[#dce5e8] pt-2 text-[9px] text-[#60798b]">
                    <Check className="mr-1 inline size-3 text-[#C70013]" />{" "}
                    Verified Platform Member
                  </div>
                </div>

                <div className="rounded-xl border border-[#dce5e8] p-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-wide text-[#55748a]">
                    Confirmed Volunteers ({volunteers.length})
                  </h3>
                  <div className="mt-3 space-y-2">
                    {volunteers.slice(0, 3).map((volunteer) => (
                      <p
                        key={volunteer}
                        className="flex items-center gap-2 text-[10px] font-medium"
                      >
                        <span className="flex size-5 items-center justify-center rounded-full bg-[#e8eef2] text-[#C70013]">
                          <UserRound className="size-3" />
                        </span>
                        {volunteer}
                      </p>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
