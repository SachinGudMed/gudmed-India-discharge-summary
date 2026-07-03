import {
  Mic,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

const steps = [
  {
    id: "1",
    icon: Mic,
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
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
          The Solution
        </span>

        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
          Three Steps
          Discharge!
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
          GudMed reads the clinical record, structures the summary,
          and delivers automatically.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl"
              >
                {/* Number */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E4168] text-lg font-bold text-[#C9912A]">
                  {step.id}
                </div>

                {/* Icon */}

                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon size={28} />
                </div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-6 text-xl font-bold text-[#2E4168]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
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