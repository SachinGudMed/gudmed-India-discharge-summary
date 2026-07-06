import { ArrowRight, CalendarDays, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute -left-32 sm:-left-20 top-0 h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-[#C9912A]/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 sm:-right-20 bottom-0 h-40 w-40 sm:h-80 sm:w-80 rounded-full bg-[#2E4168]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2E4168] bg-white p-6 sm:p-8 md:p-10 lg:p-16 shadow-lg backdrop-blur">
          <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
            {/* Left */}
            <div className="w-full">
              <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
                Ready To Get Started?
              </span>

              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
                Transform Your Hospital's
                <br />
                Discharge Documentation
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#2E4168]">
                Schedule a personalized demo and see how GudMed can
                reduce documentation time, improve compliance and
                accelerate insurance approvals.
              </p>

              <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 text-[#2E4168] text-sm sm:text-base">
                  <CalendarDays
                    size={18}
                    className="text-[#2E4168] shrink-0"
                  />
                  <span>30-minute live product demo</span>
                </div>

                <div className="flex items-center gap-3 text-[#2E4168] text-sm sm:text-base break-all">
                  <Mail
                    size={18}
                    className="text-[#2E4168] shrink-0"
                  />
                  <span>cs@gudmed.in</span>
                </div>

                <div className="flex items-center gap-3 text-[#2E4168] text-sm sm:text-base break-all">
                  <Phone
                    size={18}
                    className="text-[#2E4168] shrink-0"
                  />
                  <span>+91-9999196828</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-xl border border-slate-100 w-full">
              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xl sm:text-2xl font-bold text-[#2E4168]">
                Request a Demo
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Fill in your details and we'll get in touch within one
                business day.
              </p>

              <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5" onSubmit={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("openModal"));
              }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-12"
                  required
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-12"
                  required
                />

                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-12"
                  required
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E4168] px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition cursor-pointer hover:bg-[#1e2d4a] active:scale-95 min-h-12"
                >
                  Request Demo
                  <ArrowRight size={16} />
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