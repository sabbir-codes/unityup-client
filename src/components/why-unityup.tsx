"use client";

import {
  ArrowRight,
  CalendarPlus,
  ClipboardList,
  ChartNoAxesCombined,
  HandHeart,
  Network,
  Compass,
  Sparkles,
  Sprout,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const benefits = [
  {
    number: "05",
    title: "Create Initiatives",
    description:
      "Turn your ideas into meaningful community events and inspire others to take action.",
    linkClass: "text-[#e60036]",
    iconClass: "bg-[#ffe0e4] text-[#e60036]",
    cardClass: "bg-[#fff0f2]",
    Icon: CalendarPlus,
  },
  {
    number: "06",
    title: "Manage Events",
    description:
      "Organize your initiatives, update event details, and manage your activities with ease.",
    linkClass: "text-[#14956f]",
    iconClass: "bg-[#d7f7e9] text-[#159c75]",
    cardClass: "bg-[#effcf6]",
    Icon: ClipboardList,
  },
  {
    number: "07",
    title: "Track Participation",
    description:
      "Keep track of the community events you've joined and stay connected with your commitments.",
    linkClass: "text-[#e60036]",
    iconClass: "bg-[#ffe0e4] text-[#e60036]",
    cardClass: "bg-[#fff0f2]",
    Icon: ChartNoAxesCombined,
  },
  {
    number: "08",
    title: "Support Local Causes",
    description:
      "Discover opportunities to support local communities through volunteering and social initiatives.",
    linkClass: "text-[#14956f]",
    iconClass: "bg-[#d7f7e9] text-[#159c75]",
    cardClass: "bg-[#effcf6]",
    Icon: HandHeart,
  },
  {
    number: "09",
    title: "Build Connections",
    description:
      "Meet people who share your passion for social development and community welfare.",
    linkClass: "text-[#e60036]",
    iconClass: "bg-[#ffe0e4] text-[#e60036]",
    cardClass: "bg-[#fff0f2]",
    Icon: Network,
  },
  {
    number: "10",
    title: "Explore Opportunities",
    description:
      "Find new ways to contribute your time, skills, and energy to causes that matter.",
    linkClass: "text-[#14956f]",
    iconClass: "bg-[#d7f7e9] text-[#159c75]",
    cardClass: "bg-[#effcf6]",
    Icon: Compass,
  },
  {
    number: "11",
    title: "Make Every Day Count",
    description:
      "Discover meaningful ways to turn everyday kindness into lasting community impact.",
    linkClass: "text-[#e60036]",
    iconClass: "bg-[#ffe0e4] text-[#e60036]",
    cardClass: "bg-[#fff0f2]",
    Icon: Sparkles,
  },
  {
    number: "12",
    title: "Grow Together",
    description:
      "Be part of a movement where shared efforts create stronger and more caring communities.",
    linkClass: "text-[#14956f]",
    iconClass: "bg-[#d7f7e9] text-[#159c75]",
    cardClass: "bg-[#effcf6]",
    Icon: Sprout,
  },
];

export function WhyUnityUp() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fdfc] px-5 pb-20 pt-12 text-[#101b3b] sm:px-8 sm:pt-16">
      <div className="pointer-events-none absolute -left-16 -top-20 size-52 rounded-full bg-[#e5f7f0] opacity-80" />
      <div className="pointer-events-none absolute right-[-4rem] top-28 size-32 rounded-full bg-[#fff0f2] opacity-80" />

      <div className="relative mx-auto max-w-[960px]">
        <div className="mb-7 text-center">
          <div className="mb-2 inline-flex items-center gap-3 text-[12px] font-extrabold tracking-[0.03em] text-[#e60036]">
            <span className="h-px w-10 bg-[#e60036]" />
            <span className="rounded-full bg-[#ffe0e4] px-4 py-1.5">
              WHY UNITYUP
            </span>
            <span className="h-px w-10 bg-[#e60036]" />
          </div>
          <h2 className="text-[30px] font-black tracking-tight">
            Built for a Stronger{" "}
            <span className="text-[#e60036]">Community</span>
          </h2>
          <p className="mt-1 text-[11px] font-medium text-[#647084]">
            Discover, participate, and create positive change with
            UnityUp&apos;s powerful features.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2000 })]}
          className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] lg:w-full"
        >
          <CarouselContent className="-ml-3">
            {benefits.map(
              ({
                number,
                title,
                description,
                linkClass,
                iconClass,
                cardClass,
                Icon,
              }) => (
                <CarouselItem
                  key={title}
                  className="pl-3 sm:basis-1/2 lg:basis-1/4"
                >
                  <article
                    className={`relative min-h-[220px] overflow-hidden rounded-xl border border-white/80 p-4 shadow-[0_4px_14px_rgba(36,77,76,0.07)] ${cardClass}`}
                  >
                    <div className="absolute right-3 top-3 rounded-full bg-white/70 px-2 py-1 text-[12px] font-bold text-[#159c75]">
                      {number}
                    </div>
                    <div
                      className={`mb-2 flex size-10 items-center justify-center rounded-lg ${iconClass}`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-[12px] font-extrabold">{title}</h3>
                    <p className="mt-1 max-w-[185px] text-[11px] leading-[1.35] text-[#596579]">
                      {description}
                    </p>
                    <a
                      href="#events"
                      className={`mt-2 inline-flex items-center gap-1 text-[12px] font-extrabold ${linkClass}`}
                    >
                      Learn more <ArrowRight className="size-3" />
                    </a>
                  </article>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
          <CarouselPrevious className="-left-10 border-[#d6eee5] bg-white text-[#159c75] hover:bg-[#effcf6] lg:hidden" />
          <CarouselNext className="-right-10 border-[#d6eee5] bg-white text-[#159c75] hover:bg-[#effcf6] lg:hidden" />
        </Carousel>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(175deg,transparent_48%,#d9f5eb_49%,#d9f5eb_75%,transparent_76%),linear-gradient(5deg,transparent_45%,#d9f5eb_46%,#d9f5eb_76%,transparent_77%)] opacity-80" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-12 w-52 -translate-x-1/2 rounded-[50%_50%_0_0] border-t-2 border-[#9fdec6] opacity-70" />
    </section>
  );
}
