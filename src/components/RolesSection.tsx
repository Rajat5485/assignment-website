import { motion } from "framer-motion";
import { Flame, Atom, Wind, Zap, Wrench, HardHat } from "lucide-react";

const roles = [
  { icon: Flame, title: "Oil & Gas Engineering", desc: "Reliable, safety-driven engineering solutions for oil, gas, and energy infrastructure.", color: "bg-primary" },
  { icon: Atom, title: "Nuclear Energy", desc: "Advanced engineering and technical solutions for safe, efficient nuclear power infrastructure.", color: "bg-accent" },
  { icon: Wind, title: "Renewable Energy", desc: "Sustainable engineering and project delivery for solar, wind, and clean energy infrastructure.", color: "bg-secondary" },
  { icon: Zap, title: "Power Systems & Grid", desc: "Resilient transmission, substations, and distribution systems for reliable power delivery.", color: "bg-primary" },
  { icon: Wrench, title: "Technical & Operations", desc: "Expert planning, engineering control, and operational excellence.", color: "bg-secondary" },
  { icon: HardHat, title: "Safety & Project Management", desc: "Safe, compliant, and on-time project delivery through disciplined execution.", color: "bg-accent" },
];

const RolesSection = () => {
  return (
    <section className="neo-section bg-muted">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="neo-badge bg-primary text-primary-foreground">Energy Expertise</span>
        </motion.div>
        <motion.h2
          className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Roles We Cover Across All{" "}
          <span className="bg-secondary px-2 text-secondary-foreground">Energy Sectors</span>
        </motion.h2>
        <p className="mb-12 max-w-3xl font-body text-lg text-muted-foreground">
          From oil & gas to renewables, nuclear to hydrogen—find specialised talent across the entire energy spectrum.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="neo-card group cursor-pointer p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`neo-badge ${role.color} mb-4 ${role.color === "bg-secondary" || role.color === "bg-accent" ? "text-accent-foreground" : "text-primary-foreground"}`}>
                <role.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{role.title}</h3>
              <p className="mb-4 font-body text-sm text-muted-foreground">{role.desc}</p>
              <span className="font-display text-sm font-bold text-secondary underline">
                View All Roles →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
