import scribble from "../assets/Scribble.png"

const ScribbleSection = () => {
  return (
    <section id="scribble" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-16 items-start lg:grid-cols-2">
          {/* Left - Image */}
          <div className="flex justify-center mt-8">
            <img
              src={scribble}
              alt="GudMed Prescription Digitization"
              className="w-full max-w-2xl h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-sm font-semibold uppercase text-black">
              AI Prescription Digitization
            </span>

            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-4 text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
              Prescribe Smarter,
              <br />
              Digitize <span className="text-[#2E4168]">Instantly</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Scribble by GudMed enables doctors to continue writing prescriptions in their
              natural handwriting while our AI system instantly digitizes them in the
              background. Using a simple tab at the point of care,
              handwritten prescriptions are captured, processed through clinical AI, and
              converted into structured, hospital-ready digital records. The system
              preserves your existing prescription style while intelligently extracting
              medicines, dosage, and instructions, ensuring accuracy, consistency, and
              seamless integration with your hospital workflow.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Use your IPAD or Tab to scribe in your Own clinical and nursing Format.</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Use your own Stationery, Forms, templates, and Document shapes to make notes and prescriptions.</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Recognize Medicines, Scans, Reports, vitals, Procedures, test variables and clinical instructions automatically.</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Secure your Documents, Notes, prescriptions and Document types without changing anything.</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700"> Share prescriptions instantly across departments and patients.</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-lg border border-[#2E4168] px-8 py-4 font-semibold text-slate-700 transition hover:bg-[#2E4168] hover:text-white">
                Schedule a Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScribbleSection;
