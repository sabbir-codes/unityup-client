import { requireSession } from "@/lib/require-session"

export const instant = false

export default async function ProtectedAddEventLayout({ children }: LayoutProps<"/add-event">) {
  await requireSession("/add-event")
  return children
}
