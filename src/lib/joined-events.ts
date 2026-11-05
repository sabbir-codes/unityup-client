export const JOINED_EVENTS_STORAGE_KEY = "unityup-joined-events";

export type JoinedEvent = {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  organizer?: string;
};

export function getJoinedEvents(): JoinedEvent[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(JOINED_EVENTS_STORAGE_KEY);
    const events = stored ? JSON.parse(stored) : [];
    return Array.isArray(events) ? events : [];
  } catch {
    return [];
  }
}

export function saveJoinedEvent(event: JoinedEvent) {
  const events = getJoinedEvents().filter((item) => item._id !== event._id);
  const nextEvents = JSON.stringify([...events, event]);
  window.localStorage.setItem(JOINED_EVENTS_STORAGE_KEY, nextEvents);
  document.cookie = `unityup-joined-events=${encodeURIComponent(nextEvents)}; path=/; max-age=31536000; samesite=lax`;
}

export function removeJoinedEvent(eventId: string) {
  const events = getJoinedEvents().filter((event) => event._id !== eventId);
  const nextEvents = JSON.stringify(events);
  window.localStorage.setItem(JOINED_EVENTS_STORAGE_KEY, nextEvents);
  document.cookie = `unityup-joined-events=${encodeURIComponent(nextEvents)}; path=/; max-age=31536000; samesite=lax`;
}
