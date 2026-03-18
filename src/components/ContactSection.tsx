import { Phone, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 uppercase tracking-wider text-foreground">
          Contact Us
        </h2>
        <div className="w-24 h-1 mx-auto mb-16 rounded-full" style={{ background: "var(--gradient-fire)" }} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Phone, label: "Call Us", value: "(661) 345-6450", href: "tel:6613456450" },
            { icon: MapPin, label: "Location", value: "Bakersfield, CA", href: null },
            { icon: Clock, label: "Hours", value: "Mon–Sat: 7AM–7PM", href: null },
            { icon: Mail, label: "License", value: "CA Lic. #929843", href: null },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center p-8 rounded-xl border border-border bg-background">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">{item.label}</h3>
              {item.href ? (
                <a href={item.href} className="text-foreground font-semibold text-lg hover:text-primary transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground font-semibold text-lg">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:6613456450"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-lg font-display text-xl uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-fire)" }}
          >
            <Phone className="w-6 h-6" />
            Call Now for a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
