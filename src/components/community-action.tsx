import { CalendarDays, Heart, MapPin, TreePine, UsersRound } from "lucide-react";

const actionCards = [
  { title: "Winter Clothes Drive", category: "Winter Drive", date: "Nov 15, 2026", location: "Mirpur 10, Dhaka", imagePosition: "center 70%", icon: "♥" },
  { title: "Food Distribution for All", category: "Food Drive", date: "Nov 18, 2026", location: "Mohammadpur, Dhaka", imagePosition: "center 45%", icon: "⚑" },
  { title: "Tree Plantation Drive", category: "Green Initiative", date: "Nov 22, 2026", location: "Uttara, Dhaka", imagePosition: "center 80%", icon: "♣" },
  { title: "Blood Donation Camp", category: "Health Support", date: "Nov 25, 2026", location: "Banani, Dhaka", imagePosition: "center 20%", icon: "✚" },
];

export function CommunityAction() {
  return (
    <section className="relative overflow-hidden bg-[#fff4f3] px-5 pb-16 pt-14 text-[#101b3b] sm:px-8">
      <div className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-[#fbdfe1]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-[#fbdfe1]" />
      <div className="relative mx-auto max-w-[960px]">
        <div className="text-center">
          <div className="mb-2 inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[0.08em] text-[#e60036]"><span className="h-px w-8 bg-[#e60036]" /><span className="rounded-full bg-[#ffe0e4] px-4 py-1.5">COMMUNITY ACTION</span><span className="h-px w-8 bg-[#e60036]" /></div>
          <h2 className="text-3xl font-black tracking-tight sm:text-[31px]">Community in <span className="text-[#e60036]">Action</span> <span className="text-[#e60036]">⌁</span></h2>
          <p className="mt-2 text-[10px] font-medium text-[#647084] sm:text-xs">Moments from volunteer drives, relief distributions, and green initiatives across Dhaka and beyond.</p>
        </div>

        <div className="my-5 flex flex-wrap justify-center gap-2 text-[8px] font-bold">
          <button className="rounded-full bg-[#d90020] px-4 py-2 text-white shadow-sm"><Heart className="mr-1 inline size-3 fill-current" /> All Events</button>
          <button className="rounded-full bg-white px-4 py-2 shadow-sm"><Heart className="mr-1 inline size-3 fill-current" /> Social Welfare</button>
          <button className="rounded-full bg-white px-4 py-2 shadow-sm"><TreePine className="mr-1 inline size-3" /> Environment</button>
          <button className="rounded-full bg-white px-4 py-2 shadow-sm"><UsersRound className="mr-1 inline size-3" /> Community Care</button>
          <button className="rounded-full bg-white px-4 py-2 shadow-sm">✚ Health Support</button>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1.08fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {actionCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-xl bg-white shadow-[0_3px_10px_rgba(70,41,48,0.12)]">
                <div className="relative h-[100px] bg-cover" style={{ backgroundImage: "url('/images/unityup-event-1.jpg')", backgroundPosition: card.imagePosition }}>
                  <span className="absolute left-2 top-2 rounded-full bg-[#d90020] px-2 py-1 text-[8px] font-bold text-white">{card.icon} {card.category}</span>
                  <span className="absolute right-2 top-2 rounded-full bg-[#202a32]/80 px-2 py-1 text-[8px] font-bold text-white"><CalendarDays className="mr-1 inline size-3" />{card.date}</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2.5"><div><h3 className="text-[11px] font-extrabold">{card.title}</h3><p className="mt-1 text-[8px] font-medium text-[#657080]"><MapPin className="mr-1 inline size-3 text-[#d90020]" />{card.location}</p></div><span className="flex size-5 items-center justify-center rounded-full bg-[#d90020] text-sm font-bold text-white">→</span></div>
              </article>
            ))}
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[38%_44%_45%_36%] border-8 border-[#fff4f3] bg-[#e90046] shadow-[0_6px_18px_rgba(70,41,48,0.13)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/unityup-event-1.jpg')" }} />
            <div className="absolute inset-0 bg-[#e90046]/10" />
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3"><span className="hidden h-px w-20 bg-[#e60036] sm:block" /><a href="#events" className="rounded-full bg-[#d90020] px-5 py-2.5 text-[9px] font-bold text-white shadow-md shadow-red-200 hover:bg-[#b9001b]">Explore More Events <span className="ml-2">→</span></a><span className="hidden h-px w-20 bg-[#e60036] sm:block" /></div>
      </div>
    </section>
  );
}
