import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Banner />
    </main>
  );
}
