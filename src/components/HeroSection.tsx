import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="neo-section overflow-hidden">
      <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="neo-badge mb-6 bg-primary">
            <Sparkles className="mr-2 h-4 w-4" />
            Energy Recruitment Reimagined
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Power the Future.{" "}
            <span className="bg-secondary px-2 text-secondary-foreground">
              Transform
            </span>{" "}
            Energy Hiring.
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg text-muted-foreground">
            From oil & gas to renewables, nuclear to hydrogen—connect specialized
            energy talent with critical projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="neo-btn-primary">
              Hire Contractors
            </a>
            <a href="#" className="neo-btn-outline">
              Build Your Energy Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="neo-card overflow-hidden p-0">
            <img
              src={heroDashboard}
              alt="Energy hiring platform dashboard"
              width={1024}
              height={768}
              className="w-full"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 neo-badge bg-accent text-accent-foreground">
            ✓ Credentials Verified
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
