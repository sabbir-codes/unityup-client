"use client"

import { ArrowRight, HeartHandshake, LockKeyhole, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"
import { authClient } from "@/lib/auth-client"
import { GoogleAuthButton } from "@/components/google-auth-button"

const accent = "#C70013"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const result = await authClient.signIn.email({
        email: email.trim(),
        password,
      })

      if (result.error) {
        setError(result.error.message || "Invalid email or password.")
        return
      }

      router.replace(getRedirectDestination())
      router.refresh()
    } catch {
      setError("Unable to log in. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-70px)] items-start justify-center bg-[#f7f9fb] px-4 pb-10 pt-[58px] font-sans text-[#071337]">
      <section className="w-full max-w-[358px] rounded-[18px] border border-[#dce3eb] bg-white px-[26px] pb-[25px] pt-[26px] shadow-[0_14px_22px_rgba(20,31,61,0.14)]">
        <div className="text-center">
          <div className="mx-auto flex size-10 items-center justify-center rounded-[12px] text-white shadow-sm" style={{ backgroundColor: accent }}>
            <HeartHandshake className="size-5" strokeWidth={2.3} />
          </div>
          <h1 className="mt-1 text-[24px] font-black tracking-[-0.7px]">Welcome Back</h1>
          <p className="mt-1 text-[11px] text-[#60798b]">Log in to continue making a difference</p>
        </div>

        <div className="mt-[23px]">
          <GoogleAuthButton />
          <div className="my-4 flex items-center gap-2 text-[9px] text-[#91a2b2]">
            <span className="h-px flex-1 bg-[#e5eaf0]" /> or continue with email <span className="h-px flex-1 bg-[#e5eaf0]" />
          </div>
        </div>

        <form className="space-y-[15px]" onSubmit={handleSubmit}>
          <label className="block text-[9px] font-bold" htmlFor="email">Email Address</label>
          <div className="relative -mt-[11px]">
            <Mail className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[#60798b]" />
            <input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" className="h-[35px] w-full rounded-[10px] border border-[#dce3eb] bg-[#f7f9fb] px-9 text-[10px] outline-none focus:border-[#C70013] focus:ring-2 focus:ring-[#C70013]/10" />
          </div>

          <label className="block text-[9px] font-bold" htmlFor="password">Password</label>
          <div className="relative -mt-[11px]">
            <LockKeyhole className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[#60798b]" />
            <input id="password" type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className="h-[35px] w-full rounded-[10px] border border-[#dce3eb] bg-[#f7f9fb] px-9 text-[10px] outline-none focus:border-[#C70013] focus:ring-2 focus:ring-[#C70013]/10" />
          </div>

          <button type="submit" disabled={isSubmitting} className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-lg text-[11px] font-bold text-white shadow-[0_3px_5px_rgba(199,0,19,0.2)] transition hover:brightness-90 disabled:cursor-wait disabled:opacity-60" style={{ backgroundColor: accent }}>
            {isSubmitting ? "Logging in..." : "Login"}
            {!isSubmitting && <ArrowRight className="size-3.5" />}
          </button>
        </form>

        {error && <p className="mt-3 text-center text-[10px] font-semibold text-red-600" role="alert">{error}</p>}
        <p className="mt-[17px] text-center text-[9px] text-[#60798b]">
          Don&apos;t have an account? <a href="/register" className="font-bold hover:underline" style={{ color: accent }}>Register here</a>
        </p>
      </section>
    </main>
  )
}

function getRedirectDestination() {
  const params = new URLSearchParams(window.location.search)
  const destination = params.get("redirect") ?? params.get("callbackUrl")
  return destination?.startsWith("/") && !destination.startsWith("//") ? destination : "/"
}
