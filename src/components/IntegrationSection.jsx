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
    label: "NABIDH",
    sub: "Health Exchange",
  },
];

const IntegrationSection = () => {
  return (
    <section
      id="integration"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 md:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}

        <div>
          <span className="text-sm font-semibold uppercase text-[#2E4168]">
            Plug & Play Integration
          </span>

          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-4 text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
            GudMed Works Inside
            <br />
            your Existing HIS
          </h2>

          <p className="mt-6 text-lg leading-8 text-black">
            No rip-and-replace required. GudMed becomes an AI layer
            over your existing hospital systems and automatically
            pushes structured data back into your workflow.
          </p>

          <div className="mt-10 space-y-6">
            {integrationFeatures.map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg">
                  <Check
                    size={18}
                    className="text-[#2E4168]"
                  />
                </div>

                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-[#2E4168]">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
          <p className="mb-8 text-sm font-semibold uppercase text-[#2E4168]">
            Data Flow
          </p>

          {/* HIS */}

          <div className="rounded-2xl border bg-white p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-slate-100 p-3">
                <Database className="text-slate-700" />
              </div>

              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-[#2E4168]">
                  Existing HIS
                </h3>
              </div>
            </div>
          </div>

          <div className="py-4 text-center text-3xl text-[#2E4168]">
            ↓
          </div>

          {/* AI */}

          <div className="rounded-2xl border-2 border-[#2E4168] bg-white p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-slate-100 p-3">
                <BrainCircuit className="text-[#2E4168]" />
              </div>

              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-[#2E4168]">
                  GudMed AI Engine
                </h3>

                <p className="text-sm text-slate-500">
                  Clinical NLP + AI Processing
                </p>
              </div>
            </div>
          </div>

          <div className="py-4 text-center text-3xl text-[#2E4168]">
            ↓
          </div>

          {/* Outputs */}

          <div className="grid grid-cols-2 gap-4">
            {outputs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#2E4168] bg-white p-5 text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                    <Icon
                      size={22}
                      className="text-[#2E4168]"
                    />
                  </div>

                  <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-semibold text-[#2E4168]">
                    {item.label}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
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