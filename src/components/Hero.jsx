import {
  Check,
  Video,
  ArrowRight,
} from "lucide-react";
import FlipCard from "./FlipCard";

const compliance = [
  "NABH Compliant",
  "ABDM Compliant",
  "AIIMS Supported",
  "Insurance & TPA Documentation",
  "ISO 27001 Certified",
];

const stats = [
  // {
  //   value: "Hours",
  //   label: "Saves 4hrs in your discharge.",
  // },
  {
    value: "45min → 4min",
    label: "Minutes Saved Per Discharge",
    // label: "Get Your Discharge Ready Within Minutes",
  },
  {
    value: "100%",
    label: "Structured & ICD-10 Coded",
  },
  {
    value: "Zero",
    label: "Manual Typing Required",
  },
  {
    value: "98%+",
    label: "AI Accuracy",
  },
];

const Hero = ({ onDemoClick }) => {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 pt-12 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 items-center lg:grid-cols-2">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9912A]/30 bg-gray-100 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#2E4168]" />
              <span className="text-sm font-medium text-[#2E4168]">
                Trusted by 50+ Hospitals Across India
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase text-[#2E4168]">
              AI Powered Clinical Documentation
            </p>

            <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="max-w-4xl text-5xl font-black leading-tight text-[#2E4168] md:text-7xl">
              {/* Discharge Summaries. */}
              {/* Get Your Discharge Ready Within Minutes */}
              {/* AI-Powered Discharge Summaries for Modern Hospitals */}
              {/* Complete Discharge Summaries in Just Minutes */}
              {/* Spend More Time with Patients, Less Time on Documentation */}
              Generate Accurate Discharge Summaries in Minutes
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#2E4168]">
              GudMed generates structured, NABH & ABDM compliant discharge
              summaries automatically — eliminating documentation burden
              for clinical teams specially for doctors and nurses across Indian hospitals.
            </p>

            {/* Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-[#2E4168] bg-white/5 px-4 py-2 cursor-pointer"
                >
                  <Check
                    size={15}
                    className="text-[#2E4168]"
                  />
                  <span className="text-sm text-[#2E4168]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={onDemoClick}
                className="flex items-center justify-center sm:justify-start gap-2 rounded-lg bg-[#2E4168] px-6 sm:px-7 py-3 sm:py-4 font-semibold text-white transition cursor-pointer"
              >
                <Video size={18} />
                Book a Live Demo
              </button>
            </div>
          </div>

          {/* Right - Flip Card */}
          <div className="flex justify-center lg:justify-end lg:self-start">
            <FlipCard
              frontImage="/Written.jpg"
              backImage="/Digital.jpg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#2E4168] pt-10 place-items-center text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl font-black text-[#2E4168]">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs uppercase tracking-wide text-[#2E4168]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;