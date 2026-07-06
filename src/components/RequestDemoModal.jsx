import { X, ArrowRight } from "lucide-react";

const RequestDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6">
      <div className="relative w-full max-w-md rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 sm:right-6 top-4 sm:top-6 text-slate-400 transition hover:text-slate-600 cursor-pointer p-1 hover:bg-slate-100 rounded-lg"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="pr-6">
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xl sm:text-2xl font-black leading-tight text-[#2E4168]">
            Ready to Transform
            <br />
            Your Hospital?
          </h2>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-500">
            Schedule a personalized demo and see how GudMed reduces documentation time and improves compliance.
          </p>

          <form className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 sm:py-3.5 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-11 sm:h-12"
              required
            />

            <input
              type="email"
              placeholder="Work Email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 sm:py-3.5 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-11 sm:h-12"
              required
            />

            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 sm:py-3.5 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-11 sm:h-12"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 sm:py-3.5 text-sm sm:text-base outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20 h-11 sm:h-12"
              required
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E4168] px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition cursor-pointer hover:bg-[#1f2d47] active:scale-95 min-h-11 sm:min-h-12"
            >
              Schedule Demo
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-4 sm:mt-5 text-center text-xs text-slate-500">
            We'll get back to you within one business day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoModal;
