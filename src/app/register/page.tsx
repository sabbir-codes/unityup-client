"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import {
  ArrowRight,
  Eye,
  EyeOff,
  HeartHandshake,
  Image as ImageIcon,
  LockKeyhole,
  Mail,
  UserRound,
  X,
} from "lucide-react"
import type { FormEvent } from "react"

const accent = "#C70013"

type RegisterForm = {
  name: string
  email: string
  photo: string
  password: string
}

const initialForm: RegisterForm = {
  name: "",
  email: "",
  photo: "",
  password: "",
}

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState<RegisterForm>(initialForm)
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  function updateField(field: keyof RegisterForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setSubmitted(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.name.trim() || !form.email || !form.password) return
    setIsSubmitting(true)
    setError("")

    try {
      const result = await authClient.signUp.email({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        image: form.photo.trim() || undefined,
      })

      if (result.error) {
        setError(result.error.message || "Unable to create your account.")
        return
      }

      setSubmitted(true)
      router.replace(getRedirectDestination())
      router.refresh()
    } catch {
      setError("Unable to create your account. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const passwordRules = [
    { label: "At least one uppercase letter (A-Z)", valid: /[A-Z]/.test(form.password) },
    { label: "At least one lowercase letter (a-z)", valid: /[a-z]/.test(form.password) },
    { label: "Minimum 6 characters length", valid: form.password.length >= 6 },
  ]

  return (
    <main className="register-page flex min-h-[calc(100vh-70px)] items-start justify-center bg-[#f7f9fb] px-4 pb-10 pt-[58px] font-sans text-[#071337]">
      <section className="w-full max-w-[358px] rounded-[18px] border border-[#dce3eb] bg-white px-[26px] pb-[25px] pt-[26px] shadow-[0_14px_22px_rgba(20,31,61,0.14)]">
        <div className="text-center">
          <div
            className="mx-auto flex size-10 items-center justify-center rounded-[12px] text-white shadow-sm"
            style={{ backgroundColor: accent }}
          >
            <HeartHandshake className="size-5" strokeWidth={2.3} />
          </div>
          <h1 className="mt-1 text-[24px] font-black tracking-[-0.7px]">
            Create Account
          </h1>
          <p className="mt-1 text-[11px] text-[#60798b]">
            Join the community and start driving social change
          </p>
        </div>

        <form className="mt-[23px] space-y-[13px]" onSubmit={handleSubmit}>
          <FormField label="Full Name" htmlFor="name">
            <InputWithIcon
              icon={<UserRound />}
              id="name"
              placeholder="Tanvir Ahmed"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
            />
          </FormField>

          <FormField label="Email Address" htmlFor="email">
            <InputWithIcon
              icon={<Mail />}
              id="email"
              type="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
          </FormField>

          <FormField label="Profile Photo URL" htmlFor="photo">
            <InputWithIcon
              icon={<ImageIcon />}
              id="photo"
              placeholder="https://example.com/avatar.jpg"
              value={form.photo}
              onChange={(event) => updateField("photo", event.target.value)}
            />
            <p className="mt-1 text-[9px] text-[#60798b]">Optional: Leave empty for default avatar</p>
          </FormField>

          <FormField label="Password" htmlFor="password">
            <div className="relative">
              <InputWithIcon
                icon={<LockKeyhole />}
                id="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(event) => updateField("password", event.target.value)}
                className="pr-9"
                required
                minLength={6}
                pattern="(?=.*[A-Z])(?=.*[a-z]).{6,}"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((visible) => !visible)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#60798b]"
              >
                {showPassword ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-[9px] leading-[13px] text-[#60798b]">
              {passwordRules.map((rule) => (
                <Rule key={rule.label} valid={rule.valid}>{rule.label}</Rule>
              ))}
            </ul>
          </FormField>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-[9px] flex h-9 w-full items-center justify-center gap-2 rounded-lg text-[11px] font-bold text-white shadow-[0_3px_5px_rgba(199,0,19,0.2)] transition hover:brightness-90"
            style={{ backgroundColor: accent }}
          >
            {isSubmitting ? "Creating account..." : "Register"}
            {!isSubmitting && <ArrowRight className="size-3.5" />}
          </button>
        </form>

        {error && <p className="mt-3 text-center text-[10px] font-semibold text-red-600" role="alert">{error}</p>}
        {submitted && (
          <p className="mt-3 text-center text-[10px] font-semibold text-green-600" role="status">
            Account created successfully!
          </p>
        )}

        <p className="mt-[17px] text-center text-[9px] text-[#60798b]">
          Already have an account?{" "}
          <a href="/login" className="font-bold hover:underline" style={{ color: accent }}>
            Login here
          </a>
        </p>
      </section>
    </main>
  )
}

function getRedirectDestination() {
  // Keep the destination internal so registration cannot be used for an open
  // redirect. Links can use ?redirect=/events (or ?callbackUrl=...).
  const params = new URLSearchParams(window.location.search)
  const requestedDestination = params.get("redirect") ?? params.get("callbackUrl")

  if (requestedDestination?.startsWith("/") && !requestedDestination.startsWith("//")) {
    return requestedDestination
  }

  if (document.referrer) {
    try {
      const referrer = new URL(document.referrer)
      if (referrer.origin === window.location.origin && referrer.pathname !== "/register") {
        return `${referrer.pathname}${referrer.search}${referrer.hash}`
      }
    } catch {
      // Fall back to the home page when the referrer is not a valid URL.
    }
  }

  return "/"
}

function FormField({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-[9px] font-bold text-[#071337]">
        {label}
      </label>
      {children}
    </div>
  )
}

function InputWithIcon({ icon, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#60798b] [&_svg]:size-3.5">
        {icon}
      </span>
      <input
        {...props}
        className={`h-[35px] w-full rounded-[10px] border border-[#dce3eb] bg-[#f7f9fb] px-9 text-[10px] text-[#071337] shadow-[0_1px_3px_rgba(20,31,61,0.14)] outline-none placeholder:text-[#71849a] focus:border-[#C70013] focus:ring-2 focus:ring-[#C70013]/10 ${className}`}
      />
    </div>
  )
}

function Rule({ children, valid }: { children: React.ReactNode; valid: boolean }) {
  return (
    <li className={`flex items-center gap-1.5 ${valid ? "text-green-600" : ""}`}>
      {valid ? <span className="flex size-3 items-center justify-center text-[10px]">✓</span> : <X className="size-3 text-[#91a2b2]" />}
      {children}
    </li>
  )
}
