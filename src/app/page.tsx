import { Banner } from "@/components/banner";
import { WhyUnityUp } from "@/components/why-unityup";
import { UpcomingEvents } from "@/components/upcoming-events";
import { CommunityAction } from "@/components/community-action";
import { SubscribeAlerts } from "@/components/subscribe-alerts";

export const instant = false;

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Banner />
      <WhyUnityUp />
      <UpcomingEvents />
      <CommunityAction />
      <SubscribeAlerts />
    </main>
  );
}
