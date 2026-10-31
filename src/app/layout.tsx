import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "[LocalHost] UnityUp | Social Development Events Platform",
    template: "%s | UnityUp",
  },
  description:
    "UnityUp is a community-driven social development platform where people can discover, create, and join meaningful community service events to make a positive impact.",
  keywords: [
    "UnityUp",
    "Social Development",
    "Community Service",
    "Social Events",
    "Volunteer Events",
    "Community Engagement",
    "Event Management",
    "Social Impact",
    "Volunteer Opportunities",
  ],
  applicationName: "UnityUp",
  openGraph: {
    title: "UnityUp | Bringing Communities Together",
    description:
      "Discover local community events, join social initiatives, and make a positive difference together.",
    siteName: "UnityUp",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
