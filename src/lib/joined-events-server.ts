import { cookies } from "next/headers";
import type { JoinedEvent } from "@/lib/joined-events";

const JOINED_EVENTS_COOKIE = "unityup-joined-events";

export async function getJoinedEvents(): Promise<JoinedEvent[]> {
  const cookieStore = await cookies();
  const value = cookieStore.get(JOINED_EVENTS_COOKIE)?.value;

  if (!value) return [];

  try {
    const events = JSON.parse(decodeURIComponent(value));
    return Array.isArray(events) ? events : [];
  } catch {
    return [];
  }
}
