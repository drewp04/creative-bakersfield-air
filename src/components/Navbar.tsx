import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-display text-lg uppercase tracking-wider text-foreground font-bold">
          Creative <span className="text-primary">Heating</span> & <span className="text-secondary">Air</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:6613456450" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display uppercase tracking-wider text-primary-foreground" style={{ background: "var(--gradient-fire)" }}>
            <Phone className="w-4 h-4" /> (661) 345-6450
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="tel:6613456450" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display uppercase tracking-wider text-primary-foreground" style={{ background: "var(--gradient-fire)" }}>
            <Phone className="w-4 h-4" /> (661) 345-6450
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
