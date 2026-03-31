import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ChallengesSection from "@/components/ChallengesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import RolesSection from "@/components/RolesSection";
import CareerSection from "@/components/CareerSection";
import SecuritySection from "@/components/SecuritySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <TrustBar />
      <HeroSection />
      <FeaturesSection />
      <ChallengesSection />
      <ProcessSection />
      <StatsSection />
      <RolesSection />
      <CareerSection />
      <SecuritySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
