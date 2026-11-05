import { requireSession } from "@/lib/require-session"

export const instant = false

export default async function ProtectedManageEventsLayout({ children }: LayoutProps<"/events/manage">) {
  await requireSession("/events/manage")
  return children
}
