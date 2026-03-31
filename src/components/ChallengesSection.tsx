import { motion } from "framer-motion";
import { AlertTriangle, Users, FileText, Globe, Clock, Eye, MapPin, HelpCircle, Briefcase, Compass } from "lucide-react";

const employerChallenges = [
  { icon: Users, title: "Talent Shortage", desc: "Critical shortage of experienced engineers and specialized professionals." },
  { icon: AlertTriangle, title: "Niche Requirements", desc: "Highly specific technical skills across multiple energy sub-sectors." },
  { icon: FileText, title: "Contract Complexity", desc: "Project-based workforce with varying contract lengths and requirements." },
  { icon: Globe, title: "Global Competition", desc: "Competing worldwide for qualified, experienced energy professionals." },
  { icon: Clock, title: "Slow Processes", desc: "Extended time-to-hire delays critical project timelines and delivery." },
];

const professionalChallenges = [
  { icon: MapPin, title: "Scattered Opportunities", desc: "Difficulty finding relevant energy roles consolidated in one platform." },
  { icon: HelpCircle, title: "Unclear Expectations", desc: "Inconsistent requirements across different energy sub-sectors." },
  { icon: Briefcase, title: "Resume Complexity", desc: "Structuring technical, project-based resumes for energy sector." },
  { icon: Eye, title: "Limited Visibility", desc: "Hard to connect with employers hiring for contract or project work." },
  { icon: Compass, title: "Compliance Navigation", desc: "Managing complex certifications and regulatory requirements." },
];

const ChallengesSection = () => {
  return (
    <section className="neo-section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Energy Talent is Complex.{" "}
            <span className="bg-primary px-2">Hiring Shouldn't Be.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-muted-foreground">
            The global energy sector is transforming at unprecedented speed. Traditional recruitment methods can't keep pace.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Employer Challenges */}
          <motion.div
            className="neo-card bg-card p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="neo-badge mb-6 bg-accent text-accent-foreground">
              Employer Challenges
            </div>
            <div className="space-y-4">
              {employerChallenges.map((c) => (
                <div key={c.title} className="flex items-start gap-3 border-b border-muted pb-3 last:border-0">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-primary">
                    <c.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground">{c.title}</h4>
                    <p className="font-body text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Challenges */}
          <motion.div
            className="neo-card bg-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="neo-badge mb-6 bg-secondary text-secondary-foreground">
              Professional Challenges
            </div>
            <div className="space-y-4">
              {professionalChallenges.map((c) => (
                <div key={c.title} className="flex items-start gap-3 border-b border-muted pb-3 last:border-0">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-secondary">
                    <c.icon className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground">{c.title}</h4>
                    <p className="font-body text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
