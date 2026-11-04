import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CirclePlus,
  Home,
  ListTodo,
  UserRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="site-navbar fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex h-18 max-w-full items-center justify-between rounded-full border border-slate-100 bg-white/95 px-4 shadow-[0_8px_24px_rgba(20,31,61,0.12)] backdrop-blur sm:px-7">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="UnityUp home"
        >
          <span className="relative size-9 overflow-hidden">
            <Image
              src="/images/unityup-mark.png"
              alt="UnityUp logo"
              fill
              sizes="36px"
              className="object-contain"
            />
          </span>
          <span className="text-[20px] font-extrabold tracking-tight text-[#101b3b]">
            Unity<span className="text-[#e90046]">Up</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 text-[12px] font-bold text-[#17213d] lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-full bg-[#e90046] px-3 py-2 text-white"
          >
            <Home className="size-4 fill-current" /> Home
          </Link>
          <Link
            href="/events"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <CalendarDays className="size-4" /> Events{" "}
          </Link>
          <Link
            href="/add-event"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <CirclePlus className="size-4 fill-current" /> Create Event
          </Link>
          <Link
            href="/events/manage"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <ListTodo className="size-4" /> Manage Events
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/events/manage"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#e90046] px-4 py-2 text-[12px] font-bold text-white shadow-lg shadow-red-200 transition-colors hover:bg-[#c9003e]"
          >
            <UserRound className="size-4 fill-current" />
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
