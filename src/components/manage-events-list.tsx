"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Edit3,
  Image as ImageIcon,
  MapPin,
  Tag,
  Trash2,
  Type,
  UserRound,
  X,
  TriangleAlert,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Event = {
  _id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};

const fallbackImage = "/images/unityup-event-1.jpg";

function formatDate(date: string) {
  if (!date) return "Date to be announced";
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block text-[10px] font-bold text-[#071337]">
        {label}
      </Label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#60798b] [&>svg]:size-3.5">
            {icon}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

function EditEventDialog({
  event,
  onClose,
  onSave,
}: {
  event: Event | null;
  onClose: () => void;
  onSave: (event: Event) => Promise<void>;
}) {
  const [draft, setDraft] = useState<Event | null>(event);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const update = (field: keyof Event, value: string) => {
    setDraft((current) => (current ? { ...current, [field]: value } : current));
  };

  return (
    <Dialog open={Boolean(event)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100vh-2rem)] max-w-[538px] overflow-y-auto rounded-[18px] border border-[#d9e1e6] bg-white p-6 shadow-[0_18px_50px_rgba(20,30,40,0.28)] sm:p-7"
      >
        <div className="flex items-start justify-between border-b border-[#dce4e8] pb-4">
          <div>
            <DialogTitle className="text-[17px] font-extrabold text-[#071337]">
              Update Event
            </DialogTitle>
            <DialogDescription className="mt-1 text-[10px] text-[#60798b]">
              Modify the details for your social service initiative
            </DialogDescription>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="text-[#60798b] hover:text-[#C70013]"
          >
            <X className="size-4" />
          </button>
        </div>

        {draft && (
          <form
            className="mt-5 space-y-3.5"
            onSubmit={async (submitEvent) => {
              submitEvent.preventDefault();
              setIsSaving(true);
              setSaveError("");
              try {
                await onSave(draft);
              } catch {
                setSaveError("Unable to save changes. Please try again.");
              } finally {
                setIsSaving(false);
              }
            }}
          >
            <Field label="Title" icon={<Type />}>
              <Input
                value={draft.title}
                onChange={(e) => update("title", e.target.value)}
                className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-sm"
                required
              />
            </Field>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Event Type" icon={<Tag />}>
                <select
                  value={draft.type}
                  onChange={(e) => update("type", e.target.value)}
                  className="h-9 w-full rounded-md border border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] text-[#33466a] shadow-sm outline-none focus:border-[#C70013]"
                >
                  <option>Donation</option>
                  <option>Cleanup</option>
                  <option>Tree Planting</option>
                  <option>Food Distribution</option>
                  <option>Plantation</option>
                </select>
              </Field>
              <Field label="Event Date" icon={<CalendarDays />}>
                <Input
                  type="date"
                  value={draft.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-sm"
                  required
                />
              </Field>
            </div>
            <Field label="Location" icon={<MapPin />}>
              <Input
                value={draft.location}
                onChange={(e) => update("location", e.target.value)}
                className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-sm"
                required
              />
            </Field>
            <Field label="Thumbnail Image URL" icon={<ImageIcon />}>
              <Input
                type="url"
                value={draft.imageUrl}
                onChange={(e) => update("imageUrl", e.target.value)}
                className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-sm"
                required
              />
            </Field>
            <Field label="Description">
              <Textarea
                value={draft.description}
                onChange={(e) => update("description", e.target.value)}
                className="min-h-[98px] resize-y border-[#d9e2ec] bg-[#f8fafc] text-[11px] shadow-sm"
                required
              />
            </Field>
            {saveError && (
              <p
                role="alert"
                className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[10px] text-red-700"
              >
                {saveError}
              </p>
            )}
            <div className="flex justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSaving}
                className="h-8 rounded-lg border border-[#d9e2ec] bg-white px-4 text-[10px] font-bold text-[#33466a] hover:bg-[#f8fafc]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="h-8 rounded-lg bg-[#079b8f] px-5 text-[10px] font-bold text-white shadow-[0_3px_6px_rgba(7,155,143,0.25)] hover:bg-[#067d74] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function DeleteEventDialog({
  event,
  onClose,
  onConfirm,
}: {
  event: Event | null;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  return (
    <AlertDialog
      open={Boolean(event)}
      onOpenChange={(open) => !open && onClose()}
    >
      <AlertDialogContent className="max-w-[390px] rounded-2xl border border-[#dce5e8] bg-white p-5">
        <AlertDialogHeader className="sm:place-items-start sm:text-left">
          <AlertDialogMedia className="bg-[#fff1f3] text-[#C70013]">
            <TriangleAlert className="size-5" />
          </AlertDialogMedia>
          <AlertDialogTitle className="text-[16px] font-extrabold text-[#071337]">
            Delete this event?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[11px] leading-relaxed text-[#60798b]">
            This will permanently delete{" "}
            <strong className="text-[#071337]">{event?.title}</strong>. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {deleteError && (
          <p
            role="alert"
            className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[10px] text-red-700"
          >
            {deleteError}
          </p>
        )}
        <AlertDialogFooter className="mt-2 border-0 bg-transparent p-0 sm:mx-0 sm:mb-0 sm:px-0 sm:pb-0">
          <AlertDialogCancel
            disabled={isDeleting}
            className="h-8 rounded-lg text-[10px]"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isDeleting}
            className="h-8 rounded-lg bg-[#C70013] text-[10px] text-white hover:bg-[#a60010]"
            onClick={async (clickEvent) => {
              clickEvent.preventDefault();
              setIsDeleting(true);
              setDeleteError("");
              try {
                await onConfirm();
              } catch {
                setDeleteError(
                  "Unable to delete this event. Please try again.",
                );
                setIsDeleting(false);
              }
            }}
          >
            {isDeleting ? "Deleting..." : "Delete Event"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function ManageEventsList({
  events: initialEvents,
}: {
  events: Event[];
}) {
  const [events, setEvents] = useState(initialEvents);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deletingEvent, setDeletingEvent] = useState<Event | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event._id}
            className="w-full max-w-[312px] overflow-hidden rounded-xl border border-[#dfe5e7] bg-white shadow-[0_2px_5px_rgba(28,48,68,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(28,48,68,0.15)]"
          >
            <div
              className="relative h-[193px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${event.imageUrl || fallbackImage})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#e4f8ef] px-2.5 py-1 text-[10px] font-bold text-[#079b8f] shadow-sm">
                <Tag className="size-3 text-[#C70013]" />{" "}
                {event.type || "Community Drive"}
              </span>
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold text-white">
                <CalendarDays className="size-3 text-[#C70013]" />{" "}
                {formatDate(event.date)}
              </span>
            </div>
            <div className="flex min-h-[181px] flex-col p-4">
              <h2
                className="truncate text-[14px] font-extrabold text-[#071337]"
                title={event.title}
              >
                {event.title}
              </h2>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-[#667b8b]">
                <MapPin className="size-3 text-[#C70013]" />
                <span className="truncate">{event.location}</span>
              </div>
              <p className="mt-2 line-clamp-1 text-[10px] leading-relaxed text-[#667b8b]">
                {event.description || "Community initiative details"}
              </p>
              <div className="my-3 border-t border-[#dce4e7]" />
              <div className="flex items-center gap-1 text-[10px] text-[#667b8b]">
                <UserRound className="size-3 text-[#C70013]" /> UnityUp
                Community
              </div>
              <div className="mt-auto flex gap-2 pt-3">
                <Link
                  href={`/events/${event._id}`}
                  className="flex h-7 flex-1 items-center justify-center rounded-lg bg-[#eff4f8] text-[10px] font-bold text-[#071337]"
                >
                  View
                </Link>
                <button
                  type="button"
                  onClick={() => setEditingEvent(event)}
                  className="inline-flex h-7 items-center gap-1 rounded-lg border border-[#dbe2ff] bg-[#f2f4ff] px-3 text-[10px] font-bold text-[#5965e8]"
                >
                  <Edit3 className="size-3" /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => setDeletingEvent(event)}
                  className="inline-flex h-7 items-center gap-1 rounded-lg border border-[#f4d8df] bg-[#fff1f3] px-3 text-[10px] font-bold text-[#e11d48]"
                >
                  <Trash2 className="size-3" /> Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <EditEventDialog
        key={editingEvent?._id ?? "closed"}
        event={editingEvent}
        onClose={() => setEditingEvent(null)}
        onSave={async (updatedEvent) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/events/${updatedEvent._id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: updatedEvent.title,
                type: updatedEvent.type,
                date: updatedEvent.date,
                location: updatedEvent.location,
                imageUrl: updatedEvent.imageUrl,
                description: updatedEvent.description,
              }),
            },
          );

          if (!response.ok) throw new Error("Unable to update event");

          const data: { event?: Event } = await response.json();
          const savedEvent = data.event ?? updatedEvent;
          setEvents((current) =>
            current.map((event) =>
              event._id === savedEvent._id ? savedEvent : event,
            ),
          );
          setEditingEvent(null);
        }}
      />
      <DeleteEventDialog
        key={deletingEvent?._id ?? "delete-closed"}
        event={deletingEvent}
        onClose={() => setDeletingEvent(null)}
        onConfirm={async () => {
          if (!deletingEvent) return;

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/events/${deletingEvent._id}`,
            {
              method: "DELETE",
            },
          );

          if (!response.ok) throw new Error("Unable to delete event");

          setEvents((current) =>
            current.filter((event) => event._id !== deletingEvent._id),
          );
          setDeletingEvent(null);
        }}
      />
    </>
  );
}

export function ManageEventsContainer() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
        if (!response.ok) throw new Error("Unable to load events");
        const data: Event[] | { events?: Event[] } = await response.json();
        setEvents(Array.isArray(data) ? data : (data.events ?? []));
      } catch {
        setError(
          "We could not load your events right now. Please try again later.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[380px] w-full max-w-[312px] animate-pulse rounded-xl border border-[#dfe5e7] bg-white" />
    );
  }

  if (error) {
    return (
      <p className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
        {error}
      </p>
    );
  }

  if (!events.length) {
    return (
      <div className="rounded-xl border border-[#dfe5e7] bg-white p-10 text-center text-sm text-[#667b8b]">
        You have not created any events yet.
      </div>
    );
  }

  return <ManageEventsList events={events} />;
}
