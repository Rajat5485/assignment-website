import { useState } from "react";
import { Moon, Sun, Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const Navbar = ({ isDark, toggleDark }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="neo-section sticky top-0 z-50 bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
          <div className="neo-badge bg-primary">
            <Zap className="h-5 w-5" />
          </div>
          EnergyHire
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {["Products", "Sectors", "Job Openings", "Resources"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 font-display text-sm font-semibold text-foreground transition-colors hover:bg-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleDark}
            className="neo-card flex h-10 w-10 items-center justify-center bg-background p-0"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a href="#" className="neo-btn-outline text-sm">
            Recruit Talent
          </a>
          <a href="#" className="neo-btn-primary text-sm">
            Explore Jobs
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDark}
            className="neo-card flex h-10 w-10 items-center justify-center bg-background p-0"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="neo-card flex h-10 w-10 items-center justify-center bg-background p-0"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t-[3px] border-foreground bg-background px-4 pb-4 md:hidden">
          {["Products", "Sectors", "Job Openings", "Resources"].map((item) => (
            <a
              key={item}
              href="#"
              className="block border-b border-muted px-4 py-3 font-display text-sm font-semibold text-foreground"
            >
              {item}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="#" className="neo-btn-outline text-center text-sm">Recruit Talent</a>
            <a href="#" className="neo-btn-primary text-center text-sm">Explore Jobs</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
