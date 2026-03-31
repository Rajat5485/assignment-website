import { motion } from "framer-motion";
import { TrendingDown, Globe, DollarSign, ShieldCheck, ArrowRight, FileText, Award, Briefcase, BookOpen } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="neo-section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="neo-badge bg-secondary text-secondary-foreground">Why EnergyHire?</span>
        </motion.div>
        <motion.h2
          className="mb-12 font-display text-3xl font-bold text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Future of Energy{" "}
          <span className="bg-primary px-2">Recruitment</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Employers */}
          <motion.div
            className="neo-card p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">For Energy Employers</h3>
            <p className="mb-8 font-body text-sm text-muted-foreground">
              Whether you're managing upstream oil & gas operations, commissioning nuclear facilities, or developing renewable energy projects—EnergyHire accelerates your talent acquisition.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingDown, stat: "85%", label: "Reduction in time-to-hire" },
                { icon: Globe, stat: "Global", label: "Access across all sectors" },
                { icon: DollarSign, stat: "Lower", label: "Recruitment costs" },
                { icon: ShieldCheck, stat: "Auto", label: "Compliance & documentation" },
              ].map((item) => (
                <div key={item.label} className="border-[3px] border-foreground p-3">
                  <item.icon className="mb-2 h-5 w-5 text-secondary" />
                  <div className="font-display text-2xl font-bold text-foreground">{item.stat}</div>
                  <div className="font-body text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professionals */}
          <motion.div
            className="neo-card p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">For Energy Professionals</h3>
            <p className="mb-8 font-body text-sm text-muted-foreground">
              From early-career field engineers to experienced energy consultants—connect with opportunities aligned to your expertise across all energy sub-sectors.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ArrowRight, stat: "Direct", label: "Access to verified employers" },
                { icon: FileText, stat: "Smart", label: "Industry-specific resume tools" },
                { icon: Award, stat: "Clear", label: "Project-based opportunities" },
                { icon: BookOpen, stat: "Growth", label: "Career development resources" },
              ].map((item) => (
                <div key={item.label} className="border-[3px] border-foreground p-3">
                  <item.icon className="mb-2 h-5 w-5 text-accent" />
                  <div className="font-display text-2xl font-bold text-foreground">{item.stat}</div>
                  <div className="font-body text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
