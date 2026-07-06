import scribble from "../assets/Scribble.png"

const ScribbleSection = () => {
  return (
    <section id="scribble" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-16 items-center lg:grid-cols-2">
          {/* Left - Image */}
          <div className="flex justify-center">
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
              GudMed converts handwritten prescriptions into structured digital records using clinical AI. The platform improves readability, reduces documentation errors, simplifies medicine tracking, and makes prescriptions easy to store, search, and share across hospital systems.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Convert handwritten prescriptions into structured digital records</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Improve prescription readability and reduce medication errors</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Recognize medicines, dosage, and clinical instructions automatically</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700">Securely store prescriptions in the patient's digital record</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#2E4168]">
                  <span className="text-[#2E4168]font-bold">✓</span>
                </div>
                <span className="text-slate-700"> Share prescriptions instantly across departments and patients</span>
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
