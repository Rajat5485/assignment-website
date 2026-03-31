import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";

const SecuritySection = () => {
  const items = [
    { icon: Shield, title: "GDPR Compliant", desc: "Full compliance with global data protection regulations, ensuring privacy and security for all users." },
    { icon: Lock, title: "Encrypted Data Storage", desc: "Bank-level encryption protects sensitive information, from personal details to payment data." },
    { icon: Eye, title: "Transparent Data Usage", desc: "Clear policies and user controls over personal data, with no surprises or hidden practices." },
  ];

  return (
    <section className="neo-section bg-muted">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="neo-badge bg-primary text-primary-foreground">Security & Compliance</span>
        </motion.div>
        <motion.h2
          className="mb-12 font-display text-3xl font-bold text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Enterprise-Grade{" "}
          <span className="bg-accent px-2 text-accent-foreground">Protection</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="neo-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="neo-badge mb-4 bg-foreground text-background">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
