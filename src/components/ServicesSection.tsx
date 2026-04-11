import { openHCPModal } from "@/lib/hcp";
import { Snowflake, Flame, Wrench, ShieldCheck, Wind, ThermometerSun } from "lucide-react";

declare global {
  interface Window { HCPWidget: { openModal: () => void }; }
}

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    description: "Expert installation of energy-efficient air conditioning systems sized right for your home.",
    color: "blue",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description: "Professional furnace and heating installation to keep your family warm all winter long.",
    color: "orange",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description: "Fast, reliable repairs for all HVAC brands. We diagnose it right and fix it the first time.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance",
    description: "Preventative tune-up plans that extend equipment life and catch problems before they cost you.",
    color: "orange",
  },
  {
    icon: Wind,
    title: "Air Quality",
    description: "Indoor air quality solutions — filtration, purification, and duct cleaning for cleaner air.",
    color: "blue",
  },
  {
    icon: ThermometerSun,
    title: "Smart Thermostats",
    description: "Smart thermostat installation for better control, lower bills, and remote management.",
    color: "orange",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs uppercase tracking-widest mb-3" style={{ color: "#3B9EFF" }}>
            What We Do
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-dual)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-7 rounded-xl border border-border bg-background hover:border-opacity-80 transition-all duration-300 hover:-translate-y-1"
              style={{ "--hover-color": service.color === "blue" ? "#3B9EFF" : "#FF6A1A" } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: service.color === "blue" ? "rgba(59,158,255,0.12)" : "rgba(255,106,26,0.12)",
                  color: service.color === "blue" ? "#3B9EFF" : "#FF6A1A",
                }}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA below services */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-5 font-body">
            Not sure what you need? We'll diagnose it for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-token="e62a04b6077d41d0924c161ec3bca8d7"
              data-orgname="Creative-Air-Coniditioning-and-Heating"
              className="hcp-button inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded text-base text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-fire)" }}
              onClick={() => openHCPModal()}
            >
              Book a Service
            </button>
            <a
              href="sms:6613456450"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-display text-base uppercase tracking-wider border transition-colors"
              style={{ borderColor: "#3B9EFF", color: "#3B9EFF" }}
            >
              Text (661) 345-6450
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
