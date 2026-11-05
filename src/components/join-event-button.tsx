"use client";

import { HeartHandshake, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import {
  getJoinedEvents,
  removeJoinedEvent,
  saveJoinedEvent,
  type JoinedEvent,
} from "@/lib/joined-events";

export function JoinEventButton({ event }: { event: JoinedEvent }) {
  const { isPending: isSessionPending } = authClient.useSession();
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadJoinedStatus() {
      const joinedEvents = await Promise.resolve(getJoinedEvents());
      if (active) {
        setJoined(joinedEvents.some((item) => item._id === event._id));
      }
    }

    loadJoinedStatus();

    return () => {
      active = false;
    };
  }, [event._id]);

  function handleClick() {
    if (isSessionPending) return;

    if (joined) {
      removeJoinedEvent(event._id);
      setJoined(false);
      toast.add({ title: "Event cancelled", description: `You left ${event.title}.`, type: "success" });
      return;
    }

    saveJoinedEvent(event);
    setJoined(true);
    toast.add({ title: "Event joined", description: `You joined ${event.title}.`, type: "success" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isSessionPending}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#C70013] px-5 text-[11px] font-bold text-white shadow-[0_4px_8px_rgba(199,0,19,0.2)] transition-colors hover:bg-[#a60010] disabled:cursor-wait disabled:opacity-60"
    >
      {!isSessionPending && (joined ? <X className="size-3.5" /> : <HeartHandshake className="size-3.5" />)}
      {isSessionPending ? "Checking..." : joined ? "Cancel Event" : "Join Event"}
    </button>
  );
}
