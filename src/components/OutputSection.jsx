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
    <section className="bg-gradient-to-b from-sky-50 to-white py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left - Flip Card */}

        <div className="flex justify-center">
          <FlipCard
            frontImage="/ipdimage1.jpg"
            backImage="/ipd 1 1_page-0002.jpg"
          />
        </div>

        {/* Right */}

        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            AI Generated Output
          </span>

          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-4 text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
            Every Field.
            <br />
            Every Standard.
            <br />
            Automatically.
          </h2>

          <div className="mt-12 space-y-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex gap-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-teal-600">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-lg font-bold text-[#2E4168]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
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