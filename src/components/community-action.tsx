"use client";

import Autoplay from "embla-carousel-autoplay";
import { CalendarDays, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const actionCards = [
  {
    title: "Winter Clothes Drive",
    category: "Winter Drive",
    date: "Nov 15, 2026",
    location: "Mirpur 10, Dhaka",
    imagePosition: "center 70%",
    icon: "♥",
  },
  {
    title: "Food Distribution for All",
    category: "Food Drive",
    date: "Nov 18, 2026",
    location: "Mohammadpur, Dhaka",
    imagePosition: "center 45%",
    icon: "⚑",
  },
  {
    title: "Tree Plantation Drive",
    category: "Green Initiative",
    date: "Nov 22, 2026",
    location: "Uttara, Dhaka",
    imagePosition: "center 80%",
    icon: "♣",
  },
  {
    title: "Blood Donation Camp",
    category: "Health Support",
    date: "Nov 25, 2026",
    location: "Banani, Dhaka",
    imagePosition: "center 20%",
    icon: "✚",
  },
  {
    title: "Community Food Distribution",
    category: "Food Relief",
    date: "Nov 28, 2026",
    location: "Mohammadpur, Dhaka",
    imagePosition: "center",
    icon: "🍱",
  },
  {
    title: "Winter Clothes Distribution",
    category: "Social Welfare",
    date: "Dec 02, 2026",
    location: "Mirpur 10, Dhaka",
    imagePosition: "center 35%",
    icon: "🧥",
  },
  {
    title: "Community Tree Plantation",
    category: "Environment",
    date: "Dec 05, 2026",
    location: "Uttara, Dhaka",
    imagePosition: "center",
    icon: "🌱",
  },
];

export function CommunityAction() {
  return (
    <section className="relative overflow-hidden bg-[#fff4f3] px-5 pb-16 pt-14 text-[#101b3b] sm:px-8">
      <div className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-[#fbdfe1]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-[#fbdfe1]" />
      <div className="relative mx-auto max-w-240">
        <div className="text-center my-5">
          <div className="mb-2 inline-flex items-center gap-3 text-[12px] font-extrabold tracking-[0.08em] text-[#e60036]">
            <span className="h-px w-8 bg-[#e60036]" />
            <span className="rounded-full bg-[#ffe0e4] px-4 py-1.5">
              COMMUNITY ACTION
            </span>
            <span className="h-px w-8 bg-[#e60036]" />
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-[31px]">
            Community in <span className="text-[#e60036]">Action</span>{" "}
            <span className="text-[#e60036]">⌁</span>
          </h2>
          <p className="mt-2 text-[11px] font-medium text-[#647084] sm:text-[11px]">
            Moments from volunteer drives, relief distributions, and green
            initiatives across Dhaka and beyond.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2000 })]}
          className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] lg:w-full"
        >
          <CarouselContent className="-ml-3">
            {actionCards.map((card) => (
              <CarouselItem
                key={card.title}
                className="pl-3 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="overflow-hidden rounded-xl bg-white shadow-[0_3px_10px_rgba(70,41,48,0.12)]">
                  <div
                    className="relative h-25 bg-cover"
                    style={{
                      backgroundImage: "url('/images/unityup-event-1.jpg')",
                      backgroundPosition: card.imagePosition,
                    }}
                  >
                    <span className="absolute left-2 top-2 rounded-full bg-[#d90020] px-2 py-1 text-[12px] font-bold text-white">
                      {card.icon} {card.category}
                    </span>
                    <span className="absolute right-2 top-2 rounded-full bg-[#202a32]/80 px-2 py-1 text-[12px] font-bold text-white">
                      <CalendarDays className="mr-1 inline size-3" />
                      {card.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2.5">
                    <div>
                      <h3 className="text-[12px] font-extrabold">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium text-[#657080]">
                        <MapPin className="mr-1 inline size-3 text-[#d90020]" />
                        {card.location}
                      </p>
                    </div>
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#d90020] text-[12px] font-bold text-white">
                      →
                    </span>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 border-[#f5cdd2] bg-white text-[#d90020] hover:bg-[#fff0f1] lg:hidden" />
          <CarouselNext className="-right-10 border-[#f5cdd2] bg-white text-[#d90020] hover:bg-[#fff0f1] lg:hidden" />
        </Carousel>

        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="hidden h-px w-20 bg-[#e60036] sm:block" />
          <a
            href="#events"
            className="rounded-full bg-[#d90020] px-5 py-2.5 text-[12px] font-bold text-white shadow-md shadow-red-200 hover:bg-[#b9001b]"
          >
            Explore More Events <span className="ml-2">→</span>
          </a>
          <span className="hidden h-px w-20 bg-[#e60036] sm:block" />
        </div>
      </div>
    </section>
  );
}
