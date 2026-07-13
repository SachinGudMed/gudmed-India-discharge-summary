import {
  Banknote,
  TrendingDown,
  Clock3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const roiData = [
  {
    icon: Banknote,
    value: "₹10cr+",
    title: "Annual Consultant Time Recovered",
    description:
      "Recover thousands of clinical hours annually by reducing discharge documentation from nearly an hour to just a few minutes.",
    color: "text-[#2E4168]",
    bg: "bg-blue-100",
  },
  {
    icon: TrendingDown,
    value: "25%+",
    title: "Reduction in TPA Rejections",
    description:
      "Structured ICD-coded summaries reduce insurance claim rejections and improve reimbursement timelines.",
    color: "text-[#2E4168]",
    bg: "bg-blue-100",
  },
  {
  icon: TrendingUp,
  value: "98%+",
  title: "Clinical Documentation Accuracy",
  description:
    "AI-generated nursing notes and discharge summaries achieve up to 98% documentation accuracy, reducing manual errors and improving record consistency.",
  color: "text-[#2E4168]",
  bg: "bg-blue-100",
},
  {
    icon: Clock3,
    value: "4 min",
    title: "Average Discharge Completion",
    description:
      "Doctors spend less time documenting and more time caring for patients with AI-assisted summaries.",
    color: "text-[#2E4168]",
    bg: "bg-blue-100",
  },
  {
    icon: ShieldCheck,
    value: "Zero",
    title: "Incomplete Discharge Files",
    description:
      "Mandatory fields are automatically validated before sign-off, ensuring complete documentation every time.",
    color: "text-[#2E4168]",
    bg: "bg-blue-100",
  },
];

const ROISection = () => {
  return (
    <section
      id="roi"
      className="bg-slate-50 py-12 sm:py-16 md:py-10 lg:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <span className="text-xs sm:text-sm font-semibold uppercase text-[#2E4168]">
          Return On Investment
        </span>

        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#2E4168]">
          The Numbers that Matter
          <br />
          to Hospital Leadership
        </h2>

        <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-black">
          GudMed pays for itself by reducing documentation time,
          minimizing insurance delays and improving clinician
          productivity.
        </p>

        {/* Cards */}
        <div className="mt-10 sm:mt-14 md:mt-16 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
          {roiData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg active:scale-98"
              >
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl ${item.bg} shrink-0`}
                >
                  <Icon
                    size={28}
                    className={item.color}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    className={`text-2xl sm:text-3xl md:text-4xl font-black ${item.color}`}
                  >
                    {item.value}
                  </h3>

                  <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-2 sm:mt-3 text-base sm:text-lg md:text-lg font-bold text-[#2E4168] leading-tight">
                    {item.title}
                  </h4>

                  <p className="mt-2 sm:mt-3 leading-6 sm:leading-7 text-slate-500 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ROISection;