import {
  Building2,
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Lock,
  Database,
} from "lucide-react";

const complianceItems = [
  {
    icon: Building2,
    title: "NABH — National Accreditation Board for Hospitals",
    description:
      "Discharge documentation aligned with NABH clinical documentation standards. Mandatory fields are automatically populated for accreditation.",
    badge: "NABH Compliance",
  },
  {
  icon: ShieldCheck,
  title: "Government Approved Clinical Documentation Standards",
  description:
    "AI-generated discharge summaries aligned with Government Approved practices, ensuring structured, complete, and standardized clinical records for high-quality patient care.",
    badge: "Govt. Guidelines Aligned"
},
  // {
  //   icon: BadgeCheck,
  //   title: "JCI Accreditation Support",
  //   description:
  //     "Complete, timestamped and digitally signed documentation supporting JCI accreditation audits.",
  //   badge: "JCI Ready",
  // }, 
  {
    icon: CreditCard,
    title: "Insurance & TPA Integration",
    description:
      "ICD-10 coded summaries that reduce claim rejections and accelerate insurance approvals. Compatible with CGHS, ESIC, and private TPAs.",
    badge: "TPA Ready",
  },
  {
    icon: Lock,
    title: "India Data Residency & Security",
    description:
      "Patient information remains secure with India data center hosting and ISO 27001 certified enterprise-grade security controls.",
    badge: "ISO 27001",
  },
  {
    icon: Database,
    title: "ABDM / Health Records Exchange Ready",
    description:
      "Generate structured summaries compatible with Ayushman Bharat Digital Mission (ABDM) and national health information exchange.",
    badge: "ABDM Ready",
  },
];

const ComplianceSection = () => {
  return (
    <section
      id="compliance"
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
          Security and Compliance First
        </span>

        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
          Trusted by Hospitals & Built for Indian Healthcare.
        </h2>

        <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#2E4168]">
          Built for Indian hospitals and designed in alignment with India's healthcare regulations, Gudmed provides structured clinical documentation that supports NABH accreditation, ABDM interoperability, DPDP compliance, insurance claims, and end-to-end encryption.
        </p>

        {/* Cards */}
        <div className="mt-10 sm:mt-14 md:mt-16 grid gap-5 sm:gap-6 md:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {complianceItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#2E4168] bg-[#2E4168] p-6 sm:p-7 md:p-8 transition duration-300 cursor-pointer hover:shadow-lg active:scale-98 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white text-[#2E4168] shrink-0">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 leading-6 sm:leading-7 text-slate-300 text-sm sm:text-base flex-1">
                  {item.description}
                </p>

                {/* Badge */}
                <span className="mt-4 sm:mt-6 inline-block rounded-full border border-[#2E4168] bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#2E4168] w-fit">
                  {item.badge}
                </span>

                {item.title === "India Data Residency & Security" && (
    <span className="mt-4 sm:mt-6 inline-block rounded-full border border-[#2E4168] bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#2E4168] w-fit">
      DPDP Compliant
    </span>
  )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;