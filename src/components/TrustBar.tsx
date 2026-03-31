import { ThumbsUp, Star, Shield } from "lucide-react";

const TrustBar = () => {
  const items = [
    { icon: ThumbsUp, text: "Trusted by 100,000+ job seekers" },
    { icon: Star, text: "4.6/5 stars", highlight: true },
    { icon: Shield, text: "GDPR certified data protection" },
  ];

  return (
    <div className="neo-section bg-muted">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 px-4 py-3 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <item.icon className="h-4 w-4" />
            {item.highlight && (
              <span className="text-primary">★★★★★</span>
            )}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
