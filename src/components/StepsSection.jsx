import {
  File,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

const steps = [
  {
    id: "1",
    icon: File,
    title: "Uploading medical and Hospital Documents",
    description:
      "Uploading your medical documents including clinical documents, medical history, prescriptions, reports, scans, nursing documents, nurition documents, medication invoices.",
  },
  {
    id: "2",
    icon: Sparkles,
    title: "AI Generates Structured Summary",
    description:
      "GudMed creates a complete discharge summary including diagnosis, procedures, ICD-10 coding, medications and follow-up plan.",
  },
  {
    id: "3",
    icon: ClipboardCheck,
    title: "Review, Sign & Deliver",
    description:
      "Review in under a minute, digitally sign, and instantly send the summary to your HIS, insurance portal and patient.",
  },
];

const StepsSection = () => {
  return (
    <section
      id="how"
      className="bg-white py-12 sm:py-16 md:py-10 lg:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
          The Solution
        </span>

        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
          Three Steps
          <br className="sm:hidden" />
          {" "}Discharge!
        </h2>

        <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-slate-500">
          GudMed reads the clinical record, structures the summary,
          and delivers automatically.
        </p>

        <div className="mt-10 sm:mt-14 md:mt-16 grid gap-5 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 md:p-8 transition duration-300 hover:-translate-y-1 hover:border-[#2E4168] hover:shadow-xl active:scale-98"
              >
                {/* Number */}
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#2E4168] text-base sm:text-lg font-bold text-white">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mt-5 sm:mt-6 flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-50 text-[#2E4168]">
                  <Icon size={26} />
                </div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl font-bold text-[#2E4168] leading-tight">
                  {step.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;