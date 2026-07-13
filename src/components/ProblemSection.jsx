import {
  UserRound,
  FileWarning,
  Globe,
  ShieldAlert,
} from "lucide-react";

const challenges = [
  {
    icon: UserRound,
    title: "Consultant Time Wasted on Paperwork",
    description:
      "Senior consultants spend 45–90 minutes per discharge on documentation instead of patient care.",
  },
  {
    icon: FileWarning,
    title: "Insurance Pre-Auth Delays",
    description:
      "Incomplete discharge summaries delay TPA approvals and increase claim rejections.",
  },
  {
    icon: Globe,
    title: "Multi-Speciality Discharges",
    description:
      "Hospitals requires muti-speciality specific discharges which GudMed provides automatically ex:- NEUROLOGY discharges, CARDIOLOGY discharges, ONCOLOGY discharges, PAEDIATRIC discharges and rest other departments.",
  },
  {
    icon: ShieldAlert,
    title: "TPA & CGHS Rejections",
    description:
      "Inconsistent documentation increases document rejections and payment delays for patient and hospitals this increases burden on recovery, GudMed provides Approved documents along with compliance for NABH audit risks.",
  },
];

const timeline = [
  {
    label: "Morning Discharges (8 AM - 12 PM)",
    value: "6 hrs",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-400/30",
    textColor: "text-red-300",
  },
  {
    label: "Afternoon Discharges",
    value: "4 hrs",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30",
    textColor: "text-red-300",
  },
  {
    label: "Emergency Late Discharges",
    value: "3 hrs",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30",
    textColor: "text-red-300",
  },
  {
    label: "Incomplete Next Morning",
    value: "8 Pending",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-400/30",
    textColor: "text-red-300",
  },
  {
    label: "TPA Resubmissions & Penalties",
    value: "₹3.8L/mo",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
    textColor: "text-red-300",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
          The Challenge
        </span>

        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
          Indian Hospitals Lose Hours Daily
          <br className="hidden sm:block" />
          to Manual Discharge Documentation
        </h2>

        <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-slate-500">
          Documentation delays affect hospital revenue and clinician productivity,
          insurance processing, patient experience and regulatory
          compliance. Critical for NABH certification and TPA claims.
        </p>

        {/* Grid */}
        <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-3 sm:gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition hover:shadow-md active:scale-98"
                >
                  <div className="flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-[#2E4168]">
                    <Icon
                      className="text-white"
                      size={20}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-sm sm:text-base md:text-lg font-bold text-[#2E4168] leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#2E4168] p-5 sm:p-7 md:p-8 text-white shadow-lg sm:shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide sm:tracking-[0.15em] text-white px-1">
              Typical Day • 100 Bed Hospital
            </p>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-xl border px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-xs sm:text-sm ${item.borderColor} ${item.bgColor}`}
                >
                  <span className="text-white/80 min-w-0 flex-1">
                    {item.label}
                  </span>

                  <span className="rounded-full px-2 sm:px-3 py-1 text-xs font-semibold bg-red-300 text-black ml-2 shrink-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Lost Time */}
            <div className="mt-6 sm:mt-8 rounded-xl border border-red-400/30 bg-red-500/10 p-4 sm:p-5 md:p-6 text-center">
              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl sm:text-3xl md:text-4xl font-black text-red-400">
                13 hrs
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/60">
                Clinical time lost daily
              </p>
            </div>

            {/* GudMed */}
            <div className="mt-4 sm:mt-5 rounded-xl border border-emerald-400/30 bg-white p-4 sm:p-5 md:p-6 text-center">
              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xl sm:text-2xl md:text-3xl font-black text-gray-700">
                With <span style={{ color: '#2E4168' }}>GudMed</span> 52 min
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-black">
                All discharge summaries completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;