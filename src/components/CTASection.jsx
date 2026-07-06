import { ArrowRight, CalendarDays, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#C9912A]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#2E4168]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-[#2E4168] bg-white p-6 sm:p-10 backdrop-blur lg:p-16">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="text-sm font-semibold uppercase text-[#2E4168]">
                Ready To Get Started?
              </span>

              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-5 text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
                Transform Your Hospital's
                <br />
                Discharge Documentation
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#2E4168]">
                Schedule a personalized demo and see how GudMed can
                reduce documentation time, improve compliance and
                accelerate insurance approvals.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[#2E4168]">
                  <CalendarDays
                    size={18}
                    className="text-[#2E4168]"
                  />
                  <span>30-minute live product demo</span>
                </div>

                <div className="flex items-center gap-3 text-[#2E4168]">
                  <Mail
                    size={18}
                    className="text-[#2E4168]"
                  />
                  <span>cs@gudmed.in</span>
                </div>

                <div className="flex items-center gap-3 text-[#2E4168]">
                  <Phone
                    size={18}
                    className="text-[#2E4168]"
                  />
                  <span>+91-9999196828</span>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-[#2E4168]">
                Request a Demo
              </h3>

              <p className="mt-2 text-slate-500">
                Fill in your details and we'll get in touch within one
                business day.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("openModal"));
              }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168]"
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168]"
                />

                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168]"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E4168] px-6 py-4 font-semibold text-white transition cursor-pointer hover:bg-[#1e2d4a]"
                >
                  Request Demo
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