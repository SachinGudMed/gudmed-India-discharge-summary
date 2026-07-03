const ScribbleSection = () => {
  return (
    <section id="scribble" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-16 items-center lg:grid-cols-2">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src="/Scribble.png"
              alt="GudMed Prescription Digitization"
              className="w-full max-w-2xl h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              Digital Prescription
            </span>

            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-4 text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
              Prescribe Smarter,
              <br />
              Digitize <span className="text-teal-600">Instantly</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              AI-powered prescription digitization with GudMed converts handwritten prescriptions into structured digital PDFs instantly. Enhance accuracy, reduce errors, and streamline your workflow.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span className="text-slate-700">Handwritten prescription converted into digital PDF instantly with AI</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span className="text-slate-700">AI Technology Enhances Accuracy</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span className="text-slate-700">Smart Recognition of Medicines & Instructions</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span className="text-slate-700">Secure & Cloud Stored</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span className="text-slate-700">Easy Sharing & Access</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-lg bg-teal-600 px-8 py-4 font-semibold text-white transition hover:bg-teal-700">
                Learn More
              </button>
              <button className="rounded-lg border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScribbleSection;
