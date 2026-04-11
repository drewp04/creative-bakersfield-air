import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

declare global {
  interface Window { HCPWidget: { openModal: () => void }; }
}

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Ambient glow effects */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 animate-glow-pulse"
        style={{ background: "#3B9EFF", filter: "blur(120px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-glow-pulse"
        style={{ background: "#FF6A1A", filter: "blur(120px)", animationDelay: "2s" }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-up">
          <img
            src={logo}
            alt="Creative Heating & Air"
            className="w-full max-w-sm mb-8 drop-shadow-2xl"
          />
        </div>

        {/* Badge */}
        <div
          className="animate-fade-up-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display uppercase tracking-widest mb-6"
          style={{ background: "rgba(59,158,255,0.12)", border: "1px solid rgba(59,158,255,0.3)", color: "#3B9EFF" }}
        >
          Kern County's Trusted HVAC Experts · Lic. #929843
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-2 font-display text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-6">
          Comfort in{" "}
          <span style={{ color: "#3B9EFF" }}>Every</span>{" "}
          <span style={{ color: "#FF6A1A" }}>Season.</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-delay-3 font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Bakersfield's brutal summers and cool winter nights — we keep your home comfortable year-round.
          Fast response, fair pricing, done right the first time.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-4 mb-10">
          <button
            data-token="e62a04b6077d41d0924c161ec3bca8d7"
            data-orgname="Creative-Air-Coniditioning-and-Heating"
            className="hcp-button inline-flex items-center justify-center gap-3 px-8 py-4 rounded text-lg text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "var(--gradient-fire)" }}
            onClick={() => window.HCPWidget?.openModal()}
          >
            Book a Service Online
          </button>
          <a
            href="sms:6613456450"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded font-display text-lg uppercase tracking-wider border-2 transition-all hover:scale-[1.02]"
            style={{ borderColor: "#3B9EFF", color: "#3B9EFF" }}
          >
            <Phone className="w-5 h-5" />
            (661) 345-6450
          </a>
        </div>

        {/* Trust bar */}
        <div className="animate-fade-up-delay-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-display uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-2">
            <span style={{ color: "#3B9EFF" }}>✓</span> Licensed &amp; Insured
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: "#3B9EFF" }}>✓</span> Same-Day Available
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: "#3B9EFF" }}>✓</span> All Major Brands
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: "#3B9EFF" }}>✓</span> Free Estimates
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
