"use client";

import { HeartHandshake, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  getJoinedEvents,
  removeJoinedEvent,
  saveJoinedEvent,
  type JoinedEvent,
} from "@/lib/joined-events";

export function JoinEventButton({ event }: { event: JoinedEvent }) {
  const router = useRouter();
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (active) setJoined(getJoinedEvents().some((item) => item._id === event._id));
    });
    return () => {
      active = false;
    };
  }, [event._id]);

  function handleClick() {
    if (isSessionPending) return;

    if (!session) {
      router.push(`/login?redirect=${encodeURIComponent(`/events/${event._id}`)}`);
      return;
    }

    if (joined) {
      removeJoinedEvent(event._id);
      setJoined(false);
      return;
    }

    saveJoinedEvent(event);
    setJoined(true);
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
