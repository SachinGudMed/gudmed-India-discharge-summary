import {
  Check,
  Database,
  BrainCircuit,
  FileText,
  Smartphone,
  Building2,
  ShieldCheck,
} from "lucide-react";

const integrationFeatures = [
  {
    title: "Works with Existing HIS",
    description:
      "Connect seamlessly HIS,MIS,LIS,RIS or your existing Hospital Information System.",
  },
  {
    title: "HL7 & FHIR Ready",
    description:
      "Industry-standard APIs enable secure clinical data exchange without replacing your current workflows.",
  },
  {
    title: "Insurance Portal Integration",
    description:
      "Automatically submit structured discharge summaries to insurance and TPA systems.",
  },
  {
    title: "Fast Implementation",
    description:
      "Deploy GudMed in weeks with minimal IT effort and zero disruption to hospital operations.",
  },
];

const outputs = [
  {
    icon: FileText,
    label: "Discharge Summary",
    sub: "Back to HIS",
  },
  {
    icon: Smartphone,
    label: "Patient Copy",
    sub: "WhatsApp / SMS",
  },
  {
    icon: Building2,
    label: "Insurance",
    sub: "TPA Portal",
  },
  {
    icon: ShieldCheck,
    label: "ABDM",
    sub: "Health Exchange",
  },
];

const IntegrationSection = () => {
  return (
    <section
      id="integration"
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div className="w-full order-2 lg:order-1">
          <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
            Plug & Play Integration
          </span>

          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
            GudMed Works Inside
            <br />
            your Existing HIS
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-black">
            No rip-and-replace required. GudMed becomes an AI layer
            over your existing hospital systems and automatically
            pushes structured data back into your workflow.
          </p>

          <div className="mt-8 sm:mt-10 md:mt-12 space-y-5 sm:space-y-6">
            {integrationFeatures.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 sm:gap-4 group"
              >
                <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg shrink-0">
                  <Check
                    size={18}
                    className="text-[#2E4168]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-[#2E4168] text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 leading-6 sm:leading-7 text-slate-500 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-7 md:p-8 shadow-lg order-1 lg:order-2 w-full">
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
            Data Flow
          </p>

          {/* HIS */}
          <div className="rounded-2xl border bg-white p-4 sm:p-5">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="rounded-xl bg-slate-100 p-2 sm:p-3 shrink-0">
                <Database className="text-slate-700" size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-[#2E4168] text-sm sm:text-base truncate">
                  Existing HIS
                </h3>
              </div>
            </div>
          </div>

          <div className="py-3 sm:py-4 text-center text-2xl sm:text-3xl text-[#2E4168]">
            ↓
          </div>

          {/* AI */}
          <div className="rounded-2xl border-2 border-[#2E4168] bg-white p-4 sm:p-5">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="rounded-xl bg-slate-100 p-2 sm:p-3 shrink-0">
                <BrainCircuit className="text-[#2E4168]" size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-[#2E4168] text-sm sm:text-base truncate">
                  GudMed AI Engine
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 truncate">
                  Clinical NLP + AI Processing
                </p>
              </div>
            </div>
          </div>

          <div className="py-3 sm:py-4 text-center text-2xl sm:text-3xl text-[#2E4168]">
            ↓
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {outputs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#2E4168] bg-white p-3 sm:p-5 text-center transition hover:shadow-md active:scale-95"
                >
                  <div className="mx-auto mb-2 sm:mb-3 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-100">
                    <Icon
                      size={20}
                      className="text-[#2E4168]"
                    />
                  </div>

                  <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-semibold text-[#2E4168] text-xs sm:text-sm leading-tight">
                    {item.label}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;