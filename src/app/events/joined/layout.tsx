import { requireSession } from "@/lib/require-session"

export const instant = false

export default async function ProtectedJoinedEventsLayout({ children }: LayoutProps<"/events/joined">) {
  await requireSession("/events/joined")
  return children
}
