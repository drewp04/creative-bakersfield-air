import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}>
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-[120px] animate-glow-pulse"
        style={{ background: "hsl(205 90% 55%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-[120px] animate-glow-pulse"
        style={{ background: "hsl(25 95% 53%)" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <img src={logo} alt="Creative Air Conditioning and Heating logo" className="w-full max-w-lg mb-8" />

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-body">
          Bakersfield's trusted HVAC experts. We deliver reliable heating and cooling solutions 
          for homes and businesses throughout Kern County.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="tel:6613456450"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-display text-lg uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-fire)" }}
          >
            <Phone className="w-5 h-5" />
            (661) 345-6450
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-display text-lg uppercase tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Our Services
          </a>
        </div>

        <p className="text-muted-foreground text-sm">CA License #929843</p>
      </div>
    </section>
  );
};

export default HeroSection;
