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
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: TrendingDown,
    value: "25%",
    title: "Reduction in TPA Rejections",
    description:
      "Structured ICD-coded summaries reduce insurance claim rejections and improve reimbursement timelines.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
  icon: TrendingUp,
  value: "98%",
  title: "Clinical Documentation Accuracy",
  description:
    "AI-generated nursing notes and discharge summaries achieve up to 98% documentation accuracy, reducing manual errors and improving record consistency.",
  color: "text-blue-600",
  bg: "bg-blue-100",
},
  {
    icon: Clock3,
    value: "4 min",
    title: "Average Discharge Completion",
    description:
      "Doctors spend less time documenting and more time caring for patients with AI-assisted summaries.",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    icon: ShieldCheck,
    value: "Zero",
    title: "Incomplete Discharge Files",
    description:
      "Mandatory fields are automatically validated before sign-off, ensuring complete documentation every time.",
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
];

const ROISection = () => {
  return (
    <section
      id="roi"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
          Return On Investment
        </span>

        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-4 text-4xl font-black leading-tight text-[#2E4168] md:text-5xl">
          The Numbers That Matter
          <br />
          To Hospital Leadership
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
          GudMed pays for itself by reducing documentation time,
          minimizing insurance delays and improving clinician
          productivity.
        </p>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:gap-8 md:grid-cols-2">
          {roiData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon
                    size={30}
                    className={item.color}
                  />
                </div>

                {/* Content */}

                <div className="flex-1">
                  <h3
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    className={`text-4xl font-black ${item.color}`}
                  >
                    {item.value}
                  </h3>

                  <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 text-lg font-bold text-[#2E4168]">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-500">
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