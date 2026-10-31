import Image from "next/image";
import Link from "next/link";
import { CalendarDays, LogIn, Moon } from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 bg-dark/50 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-white" aria-label="UnityUp home">
          <Image
            src="/images/unityup.png"
            alt=""
            width={100}
            height={100}
            className="h-40 w-40 object-cover object-center"
          />
          <span className="-ml-12 leading-none">
            <span className="block text-sm font-bold tracking-[0.32em] text-[#f7255d]">
              UnityUp
            </span>
            <span className="mt-1 block text-[10px] font-bold tracking-[0.08em] text-white/80">
              BETTER FUTURE
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-semibold sm:gap-4 sm:text-sm">
          <a
            href="#events"
            className="hidden items-center gap-2 text-white transition-colors hover:text-[#f7255d] sm:flex"
          >
            <CalendarDays className="size-4" />
            Upcoming Events
          </a>
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="text-white transition-colors hover:text-[#f7255d]"
          >
            <Moon className="size-4 fill-current" />
          </button>
          <a
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#e90046] px-3 py-2 text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#c9003e]"
          >
            <LogIn className="size-3.5" />
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
