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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-8 sm:pt-12 md:pt-16 lg:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center lg:grid-cols-2">
          {/* Left */}
          <div className="w-full">
            {/* Badge */}
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9912A]/30 bg-gray-100 px-3 sm:px-5 py-2 text-xs sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#2E4168] shrink-0" />
              <span className="font-medium text-[#2E4168]">
                Trusted by 50+ Hospitals Across India
              </span>
            </div>

            <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
              AI Powered Clinical Documentation
            </p>

            <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight text-[#2E4168]">
              Generate Accurate Discharge Summaries in Minutes
            </h1>

            <p className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#2E4168]">
              GudMed generates structured, NABH & ABDM compliant discharge
              summaries automatically — eliminating documentation burden
              for clinical teams specially for doctors and nurses across Indian hospitals.
            </p>

            {/* Pills */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
              {compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-[#2E4168] bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm cursor-pointer hover:bg-white/10 transition"
                >
                  <Check
                    size={14}
                    className="text-[#2E4168] shrink-0"
                  />
                  <span className="text-[#2E4168]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 min-h-12">
              <button
                onClick={onDemoClick}
                className="flex items-center justify-center sm:justify-start gap-2 rounded-lg bg-[#2E4168] px-5 sm:px-6 lg:px-7 py-3 sm:py-3 lg:py-4 font-semibold text-white text-sm sm:text-base transition cursor-pointer hover:bg-[#1e2d4a] active:scale-95 min-h-12 sm:min-h-auto"
              >
                <Video size={18} />
                Book a Live Demo
              </button>
            </div>
          </div>

          {/* Right - Flip Card */}
          <div className="flex justify-center lg:justify-end lg:self-start w-full">
            <FlipCard
              frontImage="/Written.jpg"
              backImage="/Digital.jpg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 border-t border-[#2E4168] pt-8 sm:pt-10 md:pt-12 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="w-full min-h-20 sm:min-h-24 flex flex-col justify-center">
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#2E4168]">
                {stat.value}
              </h2>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm uppercase tracking-wide text-[#2E4168] leading-tight px-2">
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