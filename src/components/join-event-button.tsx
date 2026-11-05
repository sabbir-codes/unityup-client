"use client";

import { HeartHandshake, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getJoinedEvents,
  removeJoinedEvent,
  saveJoinedEvent,
  type JoinedEvent,
} from "@/lib/joined-events";

export function JoinEventButton({ event }: { event: JoinedEvent }) {
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
      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#C70013] px-5 text-[11px] font-bold text-white shadow-[0_4px_8px_rgba(199,0,19,0.2)] transition-colors hover:bg-[#a60010]"
    >
      {joined ? <X className="size-3.5" /> : <HeartHandshake className="size-3.5" />}
      {joined ? "Cancel Event" : "Join Event"}
    </button>
  );
}
