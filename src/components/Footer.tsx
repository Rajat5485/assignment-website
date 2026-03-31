import { Zap } from "lucide-react";

const Footer = () => {
  const columns = [
    {
      title: "Products",
      links: ["AI Matching", "Resume Builder", "Contractor Management", "Compliance"],
    },
    {
      title: "Sectors",
      links: ["Oil & Gas", "Nuclear", "Renewables", "Power Systems"],
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Documentation", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Privacy Policy"],
    },
  ];

  return (
    <footer className="neo-section bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold">
              <div className="inline-flex items-center border-[3px] border-background px-2 py-1 shadow-[2px_2px_0px] shadow-background">
                <Zap className="h-5 w-5" />
              </div>
              EnergyHire
            </a>
            <p className="mt-4 font-body text-sm opacity-80">
              AI-powered energy recruitment platform connecting talent with critical projects worldwide.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm opacity-70 transition-opacity hover:opacity-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t-[3px] border-background/30 pt-8 text-center font-body text-sm opacity-70">
          © 2026 EnergyHire. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
