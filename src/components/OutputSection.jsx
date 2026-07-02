import {
  FileText,
  Globe,
  Pill,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

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
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Preview */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {/* Header */}

          <div className="flex items-center justify-between bg-[#2E4168] px-6 py-5">
            <h4 className="font-semibold text-white">
              GudMed AI — Discharge Summary
            </h4>

            <span className="rounded-full bg-[#C9912A]/20 px-3 py-1 text-xs font-semibold text-[#C9912A]">
              DHA Compliant
            </span>
          </div>

          {/* Body */}

          <div className="space-y-6 p-6">
            <div className="border-b pb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Primary Diagnosis
              </p>

              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-2 font-semibold text-slate-800">
                Acute ST-Elevation Myocardial Infarction (STEMI)
              </h3>

              <span className="mt-3 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 size={14} />
                ICD-10 : I21.0
              </span>
            </div>

            <div className="border-b pb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Procedures
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Emergency PCI performed with LAD drug-eluting stent.
                Successful reperfusion achieved without complications.
              </p>
            </div>

            <div className="border-b pb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Discharge Medications
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Aspirin 100mg • Clopidogrel • Atorvastatin •
                Bisoprolol • Ramipril
              </p>
            </div>

            <div className="border-b pb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Follow-up Plan
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Cardiology review after 7 days with repeat Echo
                after six weeks.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Patient Instructions
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Low sodium diet, avoid strenuous activity for two
                weeks and continue prescribed medications.
              </p>
            </div>

            {/* Footer badges */}

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                ✓ Insurance Ready
              </span>

              <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                ✓ Hindi Translation
              </span>
            </div>
          </div>
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