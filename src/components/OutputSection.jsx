import {
  FileText,
  Globe,
  Pill,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import FlipCard from "./FlipCard";

const features = [
  {
    icon: FileText,
    title: "Specialty-Specific Templates",
    description:
      "Cardiology, Oncology, Orthopaedics, Neurology, ICU and more with specialty-aware templates.",
  },
  {
    icon: Globe,
    title: "Hindi & English Output",
    description:
      "Generate bilingual discharge summaries for patients and clinicians automatically.",
  },
  {
    icon: Pill,
    title: "Medication Safety Checks",
    description:
      "Verify medications, dosage, allergies and discharge prescriptions before finalizing.",
  },
  {
    icon: Smartphone,
    title: "Patient Delivery",
    description:
      "Instantly share discharge summaries through WhatsApp, SMS or your patient portal.",
  },
];

const OutputSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left - Flip Card */}
        <div className="flex justify-center items-start order-2 lg:order-1">
          <FlipCard
            frontImage="/ipdimage1.jpg"
            backImage="/ipd 1 1_page-0002.jpg"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center order-1 lg:order-2 w-full">
          <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
            AI Generated Output
          </span>

          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
            Every Field.
            <br />
            Every Standard.
            <br />
            Automatically.
          </h2>

          <div className="mt-10 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex gap-3 sm:gap-4 md:gap-5 group"
                >
                  <div className="flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center rounded-xl bg-sky-100 text-[#2E4168] shrink-0 group-hover:shadow-md transition">
                    <Icon size={24} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-base sm:text-lg md:text-lg font-bold text-[#2E4168] leading-tight">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 leading-6 sm:leading-7 text-slate-500 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputSection;