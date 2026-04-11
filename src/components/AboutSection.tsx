import { CheckCircle } from "lucide-react";

const reasons = [
  "Licensed & Insured — CA Lic. #929843",
  "Serving Bakersfield & All of Kern County",
  "Same-Day & Emergency Service Available",
  "Free Estimates on New System Installs",
  "100% Satisfaction Guaranteed",
  "All Major Brands Serviced & Installed",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs uppercase tracking-widest mb-3" style={{ color: "#FF6A1A" }}>
              About Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-foreground mb-4 leading-none">
              Why Choose Creative?
            </h2>
            <div className="w-20 h-1 mb-8 rounded-full" style={{ background: "var(--gradient-ice)" }} />
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Creative Heating &amp; Air has been proudly serving the Bakersfield community with top-quality HVAC
              services. Our certified technicians are committed to delivering exceptional comfort solutions
              at competitive prices — with the honesty and speed you deserve.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              We know Bakersfield summers hit hard and winter nights can catch you off guard. That's why
              we're ready when you need us most — same day, no runaround.
            </p>
          </div>

          <div className="space-y-3">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-opacity-60 transition-colors"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#3B9EFF" }} />
                <span className="text-foreground font-body font-medium text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
