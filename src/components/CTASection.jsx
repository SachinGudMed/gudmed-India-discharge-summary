import { ArrowRight, CalendarDays, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#2E4168] py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#C9912A]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9912A]">
                Ready To Get Started?
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                Transform Your Hospital's
                <br />
                Discharge Documentation
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Schedule a personalized demo and see how GudMed can
                reduce documentation time, improve compliance and
                accelerate insurance approvals.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <CalendarDays
                    size={18}
                    className="text-[#C9912A]"
                  />
                  <span>30-minute live product demo</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Mail
                    size={18}
                    className="text-[#C9912A]"
                  />
                  <span>cs@gudmed.in</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone
                    size={18}
                    className="text-[#C9912A]"
                  />
                  <span>India • Pan-India Support</span>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#2E4168]">
                Request a Demo
              </h3>

              <p className="mt-2 text-slate-500">
                Fill in your details and we'll get in touch within one
                business day.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600"
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600"
                />

                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9912A] px-6 py-4 font-semibold text-[#2E4168] transition hover:bg-[#d9a746]"
                >
                  Schedule Demo
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;