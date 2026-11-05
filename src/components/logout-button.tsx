"use client"

import { LogOut, LoaderCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/components/ui/toast"

type LogoutButtonProps = {
  className?: string
  onComplete?: () => void
}

export function LogoutButton({ className = "", onComplete }: LogoutButtonProps) {
  const router = useRouter()
  const { data: session, isPending: isSessionPending } = authClient.useSession()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [error, setError] = useState("")

  if (isSessionPending || !session) return null

  async function handleLogout() {
    if (isLoggingOut) return

    setIsLoggingOut(true)
    setError("")

    try {
      const result = await authClient.signOut()
      if (result.error) {
        setError(result.error.message || "Unable to log out")
        return
      }

      onComplete?.()
      toast.add({ title: "Logged out successfully", description: "See you again soon.", type: "success" })
      router.replace("/")
      router.refresh()
    } catch {
      setError("Unable to log out. Please try again.")
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoggingOut}
        aria-busy={isLoggingOut}
        className={className}
      >
        {isLoggingOut ? <LoaderCircle className="size-3.5 animate-spin" /> : <LogOut className="size-3.5" />}
        {isLoggingOut ? "Logging out..." : "Logout"}
      </button>
      {error && <p className="mt-1 px-4 text-[10px] text-red-600" role="alert">{error}</p>}
    </>
  )
}
