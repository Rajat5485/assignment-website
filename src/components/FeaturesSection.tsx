import { motion } from "framer-motion";
import { Brain, MessageSquare, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Intelligent algorithms match candidates to roles based on technical skills, certifications, and project experience.",
    color: "bg-primary",
  },
  {
    icon: MessageSquare,
    title: "Automated Screening",
    description: "Conversational AI interviews assess technical competencies and safety compliance before human review.",
    color: "bg-secondary",
  },
  {
    icon: Globe,
    title: "Global Energy Access",
    description: "Connect with specialized energy professionals worldwide across all sectors and project types.",
    color: "bg-accent",
  },
  {
    icon: Clock,
    title: "Streamlined Hiring",
    description: "Reduce time-to-hire with structured candidate profiles and end-to-end contractor management.",
    color: "bg-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="neo-section bg-muted">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Why the industry chooses{" "}
            <span className="bg-secondary px-2 text-secondary-foreground">
              EnergyHire
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            We streamline the complex nature of energy hiring into a simple, efficient workflow.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="neo-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`neo-badge ${feat.color} mb-4 ${feat.color === "bg-secondary" || feat.color === "bg-accent" ? "text-accent-foreground" : "text-primary-foreground"}`}>
                <feat.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                {feat.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
