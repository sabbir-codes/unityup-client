"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"

export function GoogleAuthButton({ redirectTo }: { redirectTo?: string }) {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function continueWithGoogle() {
    setIsLoading(true)
    setError("")

    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: addSuccessMarker(redirectTo ?? getRedirectDestination()),
      })

      if (result.error) {
        setError(result.error.message || "Google login is unavailable.")
        setIsLoading(false)
      }
    } catch {
      setError("Google login is unavailable. Check your Google OAuth settings.")
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={continueWithGoogle}
        disabled={isLoading}
        className="flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-[#dce3eb] bg-white text-[11px] font-bold text-[#243047] shadow-sm transition hover:bg-[#f7f9fb] disabled:cursor-wait disabled:opacity-60"
      >
        <span className="text-sm font-black">G</span>
        {isLoading ? "Connecting..." : "Continue with Google"}
      </button>
      {error && <p className="mt-2 text-center text-[10px] text-red-600" role="alert">{error}</p>}
    </div>
  )
}

function getRedirectDestination() {
  const params = new URLSearchParams(window.location.search)
  const destination = params.get("redirect") ?? params.get("callbackUrl")
  return destination?.startsWith("/") && !destination.startsWith("//") ? destination : "/"
}

function addSuccessMarker(destination: string) {
  const separator = destination.includes("?") ? "&" : "?"
  return `${destination}${separator}auth=google-success`
}
