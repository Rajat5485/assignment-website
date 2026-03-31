import { motion } from "framer-motion";
import { TrendingDown, Users, Brain, ShieldCheck } from "lucide-react";

const CtaSection = () => {
  const stats = [
    { icon: TrendingDown, value: "85%", label: "Reduction in time-to-hire" },
    { icon: Users, value: "10k+", label: "Verified Professionals" },
    { icon: Brain, value: "AI", label: "Powered Matching" },
    { icon: ShieldCheck, value: "100%", label: "Bank-Level Security" },
  ];

  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Ready to Transform{" "}
            <span className="bg-primary text-primary-foreground px-2">Energy Hiring?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg opacity-90">
            Whether you're powering critical infrastructure or advancing your energy career, EnergyHire connects you faster and smarter.
          </p>

          <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-[3px] border-secondary-foreground p-4 shadow-[4px_4px_0px] shadow-secondary-foreground"
              >
                <s.icon className="mx-auto mb-2 h-6 w-6" />
                <div className="font-display text-3xl font-bold">{s.value}</div>
                <div className="font-body text-xs opacity-80">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="neo-btn-primary">
              Post Energy Roles
            </a>
            <a
              href="#"
              className="border-[3px] border-secondary-foreground bg-secondary-foreground px-6 py-3 font-display font-bold text-secondary shadow-[4px_4px_0px_hsl(var(--primary))] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_hsl(var(--primary))]"
            >
              Explore Energy Jobs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
