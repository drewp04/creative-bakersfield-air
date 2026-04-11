import { openHCPModal } from "@/lib/hcp";
import { Phone, MapPin, Clock, Award } from "lucide-react";

declare global {
  interface Window { HCPWidget: { openModal: () => void }; }
}

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs uppercase tracking-widest mb-3" style={{ color: "#FF6A1A" }}>
            Get In Touch
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-fire)" }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { icon: Phone, label: "Text Us", value: "(661) 345-6450", href: "sms:6613456450", color: "#3B9EFF" },
            { icon: MapPin, label: "Location", value: "Bakersfield, CA", href: null, color: "#FF6A1A" },
            { icon: Clock, label: "Hours", value: "Mon–Sat: 7AM–7PM", href: null, color: "#3B9EFF" },
            { icon: Award, label: "License", value: "CA Lic. #929843", href: null, color: "#FF6A1A" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-7 rounded-xl border border-border bg-background hover:border-opacity-60 transition-colors"
            >
              <div
                className="w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: `${item.color}18`, color: item.color }}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {item.label}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-foreground font-display font-bold text-lg uppercase tracking-wide hover:opacity-80 transition-opacity"
                  style={{ color: item.color }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground font-display font-bold text-lg uppercase tracking-wide">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(59,158,255,0.08), rgba(255,106,26,0.08))", border: "1px solid rgba(59,158,255,0.15)" }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-foreground mb-3">
            Ready to Book?
          </h3>
          <p className="text-muted-foreground mb-8 font-body">
            Schedule online in minutes or give us a call — same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-token="e62a04b6077d41d0924c161ec3bca8d7"
              data-orgname="Creative-Air-Coniditioning-and-Heating"
              className="hcp-button inline-flex items-center justify-center gap-3 px-10 py-4 rounded text-lg text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-fire)" }}
              onClick={() => openHCPModal()}
            >
              Book Online Now
            </button>
            <a
              href="sms:6613456450"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded font-display text-lg uppercase tracking-wider border-2 transition-all hover:opacity-80"
              style={{ borderColor: "#3B9EFF", color: "#3B9EFF" }}
            >
              <Phone className="w-5 h-5" />
              Text Us — Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
