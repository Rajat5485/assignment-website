import { motion } from "framer-motion";
import { Search, FileEdit, Check } from "lucide-react";

const CareerSection = () => {
  const cards = [
    {
      icon: Search,
      title: "Find Energy Jobs",
      desc: "Browse live vacancies across oil & gas, nuclear, renewables, and power sectors with clear requirements.",
      items: ["Oil & gas engineering roles", "Nuclear energy projects", "Renewable energy assignments", "Power infrastructure projects"],
      cta: "View All Energy Jobs",
      color: "bg-primary",
    },
    {
      icon: FileEdit,
      title: "Energy Resume Builder",
      desc: "Create ATS-optimized resumes designed for energy sector hiring managers and technical recruiters.",
      items: ["Technical expertise showcase", "Project & asset experience", "Certifications & compliance", "International work history"],
      cta: "Build Your Resume",
      color: "bg-secondary",
    },
  ];

  return (
    <section className="neo-section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="neo-badge bg-accent text-accent-foreground">For Professionals</span>
        </motion.div>
        <motion.h2
          className="mb-12 font-display text-3xl font-bold text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Build Your Energy{" "}
          <span className="bg-primary px-2">Career</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="neo-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`neo-badge ${card.color} mb-4 ${card.color === "bg-secondary" ? "text-secondary-foreground" : "text-primary-foreground"}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold text-foreground">{card.title}</h3>
              <p className="mb-6 font-body text-sm text-muted-foreground">{card.desc}</p>
              <ul className="mb-6 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <Check className="h-4 w-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="neo-btn-secondary inline-block text-sm">
                {card.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
