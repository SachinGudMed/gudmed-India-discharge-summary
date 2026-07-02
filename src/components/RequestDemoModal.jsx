import { X, ArrowRight } from "lucide-react";

const RequestDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-slate-400 transition hover:text-slate-600 cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-black leading-tight text-[#2E4168]">
            Ready to Transform
            <br />
            Your Hospital?
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Schedule a personalized demo and see how GudMed reduces documentation time and improves compliance.
          </p>

          <form className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20"
              required
            />

            <input
              type="email"
              placeholder="Work Email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20"
              required
            />

            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E4168] focus:ring-2 focus:ring-[#2E4168]/20"
              required
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E4168] px-6 py-4 font-semibold text-white transition hover:bg-[#1f2d47] cursor-pointer"
            >
              Schedule Demo
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            We'll get back to you within one business day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoModal;
