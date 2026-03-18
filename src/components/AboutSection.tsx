import { CheckCircle } from "lucide-react";

const reasons = [
  "Licensed & Insured (CA Lic. #929843)",
  "Serving Bakersfield & Kern County",
  "24/7 Emergency Service Available",
  "Free Estimates on New Systems",
  "100% Satisfaction Guaranteed",
  "All Major Brands Serviced",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-wider text-foreground">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 mb-8 rounded-full" style={{ background: "var(--gradient-ice)" }} />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Creative Air Conditioning and Heating has been proudly serving the Bakersfield community 
              with top-quality HVAC services. Our team of certified technicians is committed to 
              delivering exceptional comfort solutions at competitive prices.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
