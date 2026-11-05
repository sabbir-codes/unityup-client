"use client";

import Link from "next/link";
import {
  ChevronDown,
  CirclePlus,
  LogOut,
  ListTodo,
  UserRound,
} from "lucide-react";
import { useState } from "react";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Open profile menu"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="flex items-center gap-1.5 rounded-full p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
      >
        <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#079b8f] bg-gradient-to-br from-[#c6e8f3] via-[#587b9e] to-[#17213d] text-white shadow-sm">
          <UserRound className="size-5" />
        </span>
        <ChevronDown className={`size-3.5 text-[#079b8f] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border border-[#dce5e8] bg-white shadow-[0_8px_20px_rgba(20,45,60,0.18)] dark:border-slate-600 dark:bg-slate-800">
          <div className="border-b border-[#dce5e8] px-4 py-3 dark:border-slate-600">
            <p className="truncate text-[12px] font-extrabold text-[#071337] dark:text-white">Community Member</p>
            <p className="truncate text-[10px] text-[#667b8b] dark:text-slate-300">community@unityup.org</p>
          </div>
          <div className="py-1.5">
            <MenuLink href="/add-event" icon={<CirclePlus />} label="Create Event" onClick={() => setOpen(false)} />
            <MenuLink href="/events/manage" icon={<ListTodo />} label="Manage Events" onClick={() => setOpen(false)} />
            <MenuLink href="/events/joined" icon={<UserRound />} label="Joined Events" onClick={() => setOpen(false)} />
          </div>
          <div className="border-t border-[#dce5e8] py-1.5 dark:border-slate-600">
            <button type="button" onClick={() => setOpen(false)} className="flex w-full items-center gap-2 px-4 py-2 text-left text-[11px] font-medium text-[#e90046] transition-colors hover:bg-[#fff0f1]">
              <LogOut className="size-3.5" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuLink({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-2 px-4 py-2 text-[11px] font-medium text-[#243047] transition-colors hover:bg-[#f1fbfa] hover:text-[#079b8f] dark:text-slate-100 dark:hover:bg-slate-700">
      <span className="text-[#079b8f] [&_svg]:size-3.5">{icon}</span>{label}
    </Link>
  );
}
