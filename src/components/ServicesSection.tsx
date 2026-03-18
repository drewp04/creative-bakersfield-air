import { Snowflake, Flame, Wrench, ShieldCheck, Wind, ThermometerSun } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    description: "Expert installation of energy-efficient air conditioning systems for maximum comfort.",
    color: "primary",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description: "Professional furnace and heating installation to keep you warm all winter.",
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description: "Fast, reliable repairs for all HVAC brands. We get your system running again quickly.",
    color: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance",
    description: "Preventative maintenance plans to extend the life of your HVAC equipment.",
    color: "secondary",
  },
  {
    icon: Wind,
    title: "Air Quality",
    description: "Indoor air quality solutions including filtration, purification, and duct cleaning.",
    color: "primary",
  },
  {
    icon: ThermometerSun,
    title: "Smart Thermostats",
    description: "Smart thermostat installation for better control and energy savings.",
    color: "secondary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 uppercase tracking-wider text-foreground">
          Our Services
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: "var(--gradient-fire)" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${
                service.color === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"
              }`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 uppercase tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
