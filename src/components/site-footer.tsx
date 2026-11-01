import Image from "next/image";
import { ArrowRight, Heart, MapPin, Send, UsersRound, Zap } from "lucide-react";

const quickLinks = ["Browse Events", "Create an Event", "About UnityUp", "Our Impact", "Contact Us"];
const resources = ["Help Center", "Community Guidelines", "For Organizers", "FAQs", "Privacy Policy"];

function BrandMark() {
  return <span className="relative inline-block size-12"><Image src="/images/unityup-mark.png" alt="UnityUp logo" fill sizes="48px" className="object-contain" /></span>;
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-white px-5 pt-5 text-[#17213d] sm:px-8">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-[28px] bg-[#fff0f1] px-6 py-6 shadow-sm sm:px-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#f8c4ca] [clip-path:polygon(0_42%,12%_67%,25%_35%,40%_72%,55%_42%,70%_75%,84%_38%,100%_62%,100%_100%,0_100%)]" />
        <div className="relative flex flex-col items-center justify-between gap-5 lg:flex-row">
          <div className="flex items-center gap-4"><BrandMark /><span className="hidden h-12 w-px bg-[#e60036] sm:block" /><div><h2 className="text-xl font-black sm:text-2xl">Be a Part of Something <span className="text-[#d90020] underline decoration-2 underline-offset-4">Bigger</span></h2><p className="mt-1 text-[11px] text-[#647084]">Get the latest events, community updates, and opportunities to make an impact.</p></div></div>
          <form className="flex w-full max-w-[480px] gap-2 sm:w-auto" action="#subscribe"><label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 text-[11px] text-[#7a8492] sm:w-48"><Send className="size-3.5" /><span className="sr-only">Email address</span><input type="email" placeholder="Enter your email address..." className="min-w-0 flex-1 bg-transparent outline-none" required /></label><button type="submit" className="inline-flex h-10 items-center gap-2 rounded-full bg-[#d90020] px-5 text-[12px] font-bold text-white shadow-md shadow-red-200 hover:bg-[#b9001b]">Subscribe <ArrowRight className="size-3.5" /></button></form>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1120px] gap-9 py-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.25fr]">
        <div><div className="flex items-center gap-2"><BrandMark /><span className="text-3xl font-extrabold tracking-tight">Unity<span className="text-[#e60036]">Up</span></span></div><p className="mt-3 max-w-[260px] text-[11px] leading-relaxed text-[#667183]">A community-driven platform connecting compassionate citizens with local initiatives to create a better tomorrow.</p><p className="mt-4 text-[12px] font-semibold"><MapPin className="mr-2 inline size-4 text-[#d90020]" />Dhaka, Bangladesh</p></div>
        <FooterList title="Quick Links" icon={<span className="flex size-7 items-center justify-center rounded-full bg-[#d90020] text-white">↗</span>} items={quickLinks} />
        <FooterList title="Resources" icon={<span className="flex size-7 items-center justify-center rounded-full bg-[#d90020] text-white"><Zap className="size-4 fill-current" /></span>} items={resources} />
        <div><h3 className="flex items-center gap-2 text-base font-extrabold"><span className="flex size-7 items-center justify-center rounded-full bg-[#d90020] text-white"><UsersRound className="size-4" /></span>Connect With Us</h3><p className="mt-3 text-[11px] text-[#667183]">Follow us for updates and community stories.</p><div className="mt-4 flex gap-2"><Social label="f" /><Social label="𝕏" /><Social label="▶" /><Social label="in" /><Social label="◉" /></div></div>
      </div>

      <div className="relative border-t border-[#eadfe0] py-4 text-[11px] text-[#354053]"><div className="pointer-events-none absolute inset-x-[-5%] bottom-[-3rem] h-16 bg-[#e90046] [clip-path:polygon(0_65%,12%_38%,25%_74%,40%_34%,55%_70%,70%_35%,84%_74%,100%_40%,100%_100%,0_100%)]" /><div className="relative mx-auto flex max-w-[1120px] flex-col justify-between gap-2 sm:flex-row"><span>© 2026 UnityUp. All rights reserved. <b className="mx-3">|</b> Together for a Better Tomorrow <Heart className="ml-1 inline size-3 fill-[#d90020] text-[#d90020]" /></span><span>Made with <Heart className="mx-1 inline size-3 fill-[#d90020] text-[#d90020]" /> in Bangladesh</span></div></div>
    </footer>
  );
}

function FooterList({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return <div><h3 className="flex items-center gap-2 text-base font-extrabold">{icon}{title}</h3><ul className="mt-3 space-y-2 text-[11px] text-[#354053]">{items.map((item) => <li key={item}><a href="#home" className="hover:text-[#d90020]"><ArrowRight className="mr-2 inline size-3 text-[#d90020]" />{item}</a></li>)}</ul></div>;
}

function Social({ label }: { label: string }) {
  return <a href="#contact" aria-label={`UnityUp ${label}`} className="flex size-9 items-center justify-center rounded-xl bg-[#ffe4e7] text-[12px] font-extrabold text-[#d90020] hover:bg-[#ffd1d7]">{label}</a>;
}
