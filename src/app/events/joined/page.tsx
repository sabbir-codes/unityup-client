import { JoinedEventsList } from "@/components/joined-events-list";

export const metadata = { title: "Joined Events" };
export const instant = false;

export default function JoinedEventsPage() {
  return (
    <main className="min-h-screen bg-[#f7fafb] px-5 py-10 text-[#071337] sm:px-8">
      <div className="mx-auto max-w-[974px]">
        <header className="mb-8 border-b border-[#dce5e8] pb-5">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#dff7f5] px-2.5 py-1 text-[10px] font-bold text-[#079b8f]"><CheckCircle2Icon /> My Volunteer Commitments</span>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Joined Events</h1>
          <p className="mt-2 max-w-[500px] text-[11px] font-medium leading-relaxed text-[#667b8b]">Here are all the social development and community service drives you have signed up for, sorted by event date.</p>
        </header>
        <JoinedEventsList />
      </div>
    </main>
  );
}

function CheckCircle2Icon() {
  return <span className="flex size-3 items-center justify-center rounded-full border border-[#079b8f] text-[8px]">✓</span>;
}
