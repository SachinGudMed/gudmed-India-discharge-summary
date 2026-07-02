import {
  Check,
  Video,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar";
import logo from "../assets/FullLogo_Transparent.png";
import FlipCard from "./FlipCard";

const compliance = [
  "NABH Compliant",
  "ABDH Compliant",
  "AIIMS Supported",
  "Insurance / TPA Ready",
  "ISO 27001 Certified",
];

const stats = [
  {
    value: "45→4",
    label: "Minutes Saved Per Discharge",
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
    value: "95%+",
    label: "AI Accuracy",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#2E4168]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-2">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9912A]/30 bg-[#C9912A]/10 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C9912A]" />
              <span className="text-sm font-medium text-[#C9912A]">
                Trusted by 200+ Indian Hospitals
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9912A]">
              AI Powered Clinical Documentation
            </p>

            <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
              Discharge Summaries.
              <br />
              In <span className="text-[#C9912A]">Minutes</span>,
              <br />
              Not Hours.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              GudMed generates structured, NABH & ABDM compliant discharge
              summaries automatically — eliminating documentation burden
              for clinical teams across Indian hospitals.
            </p>

            {/* Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <Check
                    size={15}
                    className="text-[#C9912A]"
                  />
                  <span className="text-sm text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-[#C9912A] px-7 py-4 font-semibold text-[#2E4168] transition hover:bg-[#d9a746]">
                <Video size={18} />
                Book a Live Demo
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-white/20 px-7 py-4 font-medium text-white transition hover:bg-white/10">
                See How It Works
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right - Flip Card */}
          <div className="flex justify-center">
            <FlipCard
              frontImage="/ipd 1 1_page-0001.jpg"
              backImage="/ipdimage2.jpg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl font-black text-[#C9912A]">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">
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