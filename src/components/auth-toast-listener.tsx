"use client"

import { useEffect } from "react"
import { toast } from "@/components/ui/toast"

export function AuthToastListener() {
  useEffect(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.get("auth") !== "google-success") return

    toast.add({
      title: "Google login successful",
      description: "Welcome to UnityUp.",
      type: "success",
    })
    url.searchParams.delete("auth")
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`)
  }, [])

  return null
}
