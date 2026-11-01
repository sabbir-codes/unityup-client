import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import { WhyUnityUp } from "@/components/why-unityup";
import { UpcomingEvents } from "@/components/upcoming-events";
import { CommunityAction } from "@/components/community-action";
import { SubscribeAlerts } from "@/components/subscribe-alerts";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Banner />
      <WhyUnityUp />
      <UpcomingEvents />
      <CommunityAction />
      <SubscribeAlerts />
      <SiteFooter />
    </main>
  );
}
