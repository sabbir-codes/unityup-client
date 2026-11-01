import { Bell, CheckCircle2, Mail } from "lucide-react";

export function SubscribeAlerts() {
  return (
    <section className="bg-[#f8fdfc] px-5 py-10 sm:px-8 sm:py-14">
      <div className="relative mx-auto grid max-w-[960px] overflow-hidden rounded-2xl border border-[#e1f1eb] bg-[#effbf7] shadow-[0_5px_18px_rgba(38,91,81,0.08)] lg:grid-cols-[40%_60%]">
        <div className="pointer-events-none absolute -left-12 -top-16 size-48 rounded-full bg-[#d9f5eb]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 size-56 rounded-full bg-[#d9f5eb]" />

        <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden p-6">
          <div className="absolute bottom-5 left-12 h-5 w-52 rounded-[50%] bg-[#bdebd7] opacity-70 blur-sm" />
          <span className="absolute left-[27%] top-9 rotate-[-18deg] text-5xl text-[#e90046]">➤</span>
          <span className="absolute left-[24%] top-16 text-3xl text-[#efb0bb]">♥</span>
          <span className="absolute left-[18%] top-24 text-xl text-[#efb0bb]">♥</span>
          <div className="relative mt-5 h-28 w-44 rotate-[-5deg] rounded-lg border-2 border-[#d4dbe1] bg-white shadow-[0_8px_12px_rgba(34,72,63,0.14)] before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-0 before:w-0 before:border-x-[87px] before:border-t-[58px] before:border-x-transparent before:border-t-[#eef2f4]">
            <div className="absolute left-1/2 top-8 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#e90046] shadow-md shadow-red-200"><Bell className="size-7 fill-white text-white" /></div>
            <div className="absolute inset-x-4 bottom-2 h-px bg-[#dce2e5]" />
          </div>
          <span className="absolute bottom-8 right-[18%] text-4xl text-[#64bb8c]">⌁</span>
        </div>

        <div className="relative flex flex-col justify-center px-6 pb-8 pt-4 text-center sm:px-10 lg:pb-8 lg:pt-8 lg:text-left">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-[#ffe0e4] px-4 py-1.5 text-[12px] font-extrabold tracking-[0.05em] text-[#d90020] lg:mx-0"><Bell className="size-3 fill-current" /> STAY CONNECTED</div>
          <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-[#101b3b] sm:text-[36px]">Subscribe to Local<br /><span className="text-[#c90022]">Cause Alerts</span></h2>
          <p className="mt-4 max-w-[410px] text-[11px] font-medium leading-relaxed text-[#647084] sm:text-[11px]">Get notified about new events, volunteer opportunities,<br className="hidden sm:block" /> and urgent community causes in your area.</p>
          <form className="mt-5 flex max-w-[440px] flex-col gap-2 sm:flex-row" action="#subscribe">
            <label className="flex h-10 flex-1 items-center gap-2 rounded-full border border-[#d7e1e0] bg-white px-4 text-[11px] text-[#8a949d] shadow-sm"><Mail className="size-4 text-[#526172]" /><span className="sr-only">Email address</span><input type="email" placeholder="Enter your email address..." className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#8a949d]" required /></label>
            <button type="submit" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#d90020] px-6 text-[12px] font-bold text-white shadow-md shadow-red-200 hover:bg-[#b9001b]"><Bell className="size-3.5 fill-current" /> Subscribe</button>
          </form>
          <p className="mt-4 text-[11px] font-medium text-[#687486]"><CheckCircle2 className="mr-1 inline size-3.5 text-[#14956f]" /> We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
}
