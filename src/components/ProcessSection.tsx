import { motion } from "framer-motion";
import { FileText, Brain, BarChart3, Settings } from "lucide-react";

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Post Your Energy Role",
    desc: "Create detailed job postings with technical requirements, certifications, and project specifics across all energy sectors.",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI Screens Candidates",
    desc: "Our conversational AI conducts intelligent first-round interviews, assessing technical competencies and safety compliance.",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Review & Select",
    desc: "Access standardized candidate profiles with structured data. Compare qualified candidates side-by-side.",
  },
  {
    icon: Settings,
    num: "04",
    title: "Onboard & Manage",
    desc: "Complete the full contractor lifecycle: contracts, payroll, compliance, documentation, and payments—all from one platform.",
  },
];

const ProcessSection = () => {
  return (
    <section className="neo-section bg-foreground text-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center border-[3px] border-background px-3 py-1 font-display text-sm font-bold shadow-[2px_2px_0px] shadow-background">
            For Employers
          </span>
        </motion.div>
        <motion.h2
          className="mb-12 font-display text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hire Energy Talent,{" "}
          <span className="bg-primary text-primary-foreground px-2">Powered by AI</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="border-[3px] border-background p-6 shadow-[4px_4px_0px] shadow-background transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px] hover:shadow-background"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary font-display text-lg font-bold text-primary-foreground">
                  {step.num}
                </span>
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{step.title}</h3>
              <p className="font-body text-sm opacity-80">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
