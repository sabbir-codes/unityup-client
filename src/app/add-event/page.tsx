"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  CalendarDays,
  CirclePlus,
  Image as ImageIcon,
  MapPin,
  Tag,
  Type,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";

type EventForm = {
  title: string;
  type: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};

const initialForm: EventForm = {
  title: "",
  type: "Donation",
  date: "",
  location: "",
  imageUrl: "",
  description: "",
};

export default function AddEventPage() {
  const router = useRouter();
  const [form, setForm] = useState<EventForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (field: keyof EventForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("http://localhost:5000/add-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Unable to create event");
      }

      toast.add({
        title: "Event created successfully",
        description: "Your community event is now available to volunteers.",
        type: "success",
      });
      router.push("/events");
    } catch {
      setSubmitError(
        "We could not create your event. Please check your details and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="add-event-page min-h-screen bg-[#f7f9fc] px-5 pb-9 pt-5 text-[#071337] sm:px-8">
      <div className="mx-auto max-w-[540px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#385170] transition-colors hover:text-[#C70013]"
        >
          <span className="text-sm leading-none">←</span> Back to Upcoming
          Events
        </Link>

        <section className="mt-5 rounded-[18px] border border-[#dce4ed] bg-white px-7 py-8 shadow-[0_12px_20px_rgba(24,42,66,0.14)] sm:px-[30px]">
          <Badge className="h-[18px] gap-1 rounded-full bg-[#fff0f1] px-2.5 text-[10px] font-bold text-[#C70013] hover:bg-[#fff0f1]">
            <UsersRound /> Social Service Drive
          </Badge>

          <h1 className="mt-2 text-[22px] font-extrabold leading-tight tracking-[-0.04em] text-[#071337]">
            Create a Community Event
          </h1>
          <p className="mt-1 text-[11px] text-[#687b99]">
            Organize a local relief effort, environmental cleanup, or community
            support drive.
          </p>

          <form className="mt-6 space-y-[15px]" onSubmit={handleSubmit}>
            <Field label="Event Title" required icon={<Type />}>
              <Input
                required
                name="title"
                value={form.title}
                onChange={(event) => update("title", event.target.value)}
                placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
                className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-[0_1px_3px_rgba(20,40,60,0.14)] placeholder:text-[#8293ae]"
              />
            </Field>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Event Type" required icon={<Tag />}>
                <Select
                  value={form.type}
                  onValueChange={(value) => update("type", value ?? "")}
                >
                  <SelectTrigger className="h-9 w-full border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] text-[#33466a] shadow-[0_1px_3px_rgba(20,40,60,0.14)]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Donation">Donation</SelectItem>
                    <SelectItem value="Cleanup">Cleanup</SelectItem>
                    <SelectItem value="Tree Planting">Tree Planting</SelectItem>
                    <SelectItem value="Food Distribution">
                      Food Distribution
                    </SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Event Date" required icon={<CalendarDays />}>
                <Input
                  required
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={(event) => update("date", event.target.value)}
                  className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] text-[#33466a] shadow-[0_1px_3px_rgba(20,40,60,0.14)]"
                />
                <p className="mt-1.5 text-[9px] text-[#687b99]">
                  Dates must be in the future (today or later)
                </p>
              </Field>
            </div>

            <Field label="Location / Venue" required icon={<MapPin />}>
              <Input
                required
                name="location"
                value={form.location}
                onChange={(event) => update("location", event.target.value)}
                placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-[0_1px_3px_rgba(20,40,60,0.14)] placeholder:text-[#8293ae]"
              />
            </Field>

            <Field label="Thumbnail Image URL" required icon={<ImageIcon />}>
              <Input
                required
                type="url"
                name="imageUrl"
                value={form.imageUrl}
                onChange={(event) => update("imageUrl", event.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="h-9 border-[#d9e2ec] bg-[#f8fafc] pl-8 text-[11px] shadow-[0_1px_3px_rgba(20,40,60,0.14)] placeholder:text-[#8293ae]"
              />
              <p className="mt-1.5 text-[9px] text-[#5f7895]">
                Quick photo presets:{" "}
                <span className="text-[#C70013]">Winter Clothes</span>{" "}
                <span className="mx-1">•</span>{" "}
                <span className="text-[#C70013]">Blanket Relief</span>{" "}
                <span className="mx-1">•</span>{" "}
                <span className="text-[#C70013]">Cleanup</span>{" "}
                <span className="mx-1">•</span>{" "}
                <span className="text-[#C70013]">Tree Plantation</span>
              </p>
            </Field>

            <Field label="Event Description" required>
              <Textarea
                required
                name="description"
                value={form.description}
                onChange={(event) => update("description", event.target.value)}
                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                className="min-h-[94px] resize-y border-[#d9e2ec] bg-[#f8fafc] text-[11px] leading-relaxed shadow-[0_1px_3px_rgba(20,40,60,0.14)] placeholder:text-[#8293ae]"
              />
            </Field>

            <div className="flex items-center justify-between rounded-lg border border-[#d9e2ec] bg-[#f8fafc] px-3 py-3 text-[9px] text-[#526987]">
              <span>Organizer Email attached:</span>
              <strong className="text-[9px] text-[#071337]">
                kyboxugo@mailinator.com
              </strong>
            </div>

            {submitError && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[10px] text-red-700"
              >
                {submitError}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-9 w-full rounded-lg bg-[#C70013] text-[11px] font-bold text-white shadow-[0_3px_5px_rgba(199,0,19,0.25)] hover:bg-[#a60010]"
            >
              <CirclePlus className="size-3.5" />
              {isSubmitting ? "Creating Event..." : "Create Event"}
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  required,
  icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1 block text-[10px] font-bold text-[#071337]">
        {label} {required && <span className="text-[#e33d50]">*</span>}
      </Label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-2.5 top-1/2 z-10 -translate-y-1/2 text-[#7186a3] [&>svg]:size-3">
            {icon}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}
