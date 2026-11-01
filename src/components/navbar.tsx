import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  CirclePlus,
  Home,
  Info,
  Mail,
  Search,
  UserRound,
} from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-8">
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
          <a
            href="#home"
            className="flex items-center gap-1.5 rounded-full bg-[#e90046] px-3 py-2 text-white"
          >
            <Home className="size-4 fill-current" /> Home
          </a>
          <a
            href="#events"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <CalendarDays className="size-4" /> Events{" "}
            <ChevronDown className="size-4" />
          </a>
          <a
            href="#create-event"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <CirclePlus className="size-4 fill-current" /> Create Event
          </a>
          <a
            href="#about"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <Info className="size-4 fill-current" /> About
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 hover:text-[#e90046]"
          >
            <Mail className="size-4 fill-current" /> Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden h-8 w-38 items-center gap-2 rounded-full bg-[#f5f6f8] px-3 text-[11px] text-slate-400 sm:flex">
            <Search className="size-4 text-[#17213d]" /> Search events...
          </div>
          <a
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#e90046] px-4 py-2 text-[12px] font-bold text-white shadow-lg shadow-red-200 transition-colors hover:bg-[#c9003e]"
          >
            <UserRound className="size-4 fill-current" />
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
