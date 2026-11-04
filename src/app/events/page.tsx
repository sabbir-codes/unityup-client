import { Suspense } from "react";
import { EventsList, EventsLoading } from "@/components/events-list";

export const instant = false;

export default function AllEventsPage() {
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

        <Suspense fallback={<EventsLoading />}>
          <EventsList />
        </Suspense>
      </div>
    </main>
  );
}
