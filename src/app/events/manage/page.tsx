import Link from "next/link";
import { Suspense } from "react";
import { CirclePlus, Settings2 } from "lucide-react";
import { ManageEventsContainer } from "@/components/manage-events-list";

export const instant = false;

function LoadingEvents() {
  return <div className="h-[380px] w-full max-w-[312px] animate-pulse rounded-xl border border-[#dfe5e7] bg-white" />;
}

export default function ManageEventPage() {
  return (
    <main className="manage-events-page min-h-screen bg-[#f7f9fb] px-5 pb-16 pt-14 text-[#071337] sm:px-10 sm:pt-14">
      <div className="mx-auto max-w-[974px]">
        <header className="border-b border-[#dce4e8] pb-5">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eeebff] px-3 py-1 text-[10px] font-bold text-[#5145cd]">
                <Settings2 className="size-3" /> Organizer Dashboard
              </span>
              <h1 className="mt-3 text-[28px] font-black leading-none tracking-[-0.04em] sm:text-[29px]">
                Manage My Events
              </h1>
              <p className="mt-3 max-w-[500px] text-[11px] leading-relaxed text-[#60798b]">
                View, edit, and manage the social drives you have published. Only you have permission to edit or delete your created initiatives.
              </p>
            </div>
            <Link
              href="/add-event"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#C70013] px-5 text-[11px] font-bold text-white shadow-[0_4px_8px_rgba(199,0,19,0.2)] transition-colors hover:bg-[#a60010]"
            >
              <CirclePlus className="size-3.5" /> Create New Event
            </Link>
          </div>
        </header>

        <section className="mt-8">
          <Suspense fallback={<LoadingEvents />}>
            <ManageEventsContainer />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
