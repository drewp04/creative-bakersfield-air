import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

declare global {
  interface Window { HCPWidget: { openModal: () => void }; }
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* HouseCall Pro script */}
      <script
        async
        src="https://online-booking.housecallpro.com/script.js?token=e62a04b6077d41d0924c161ec3bca8d7&orgName=Creative-Air-Coniditioning-and-Heating"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="font-display text-xl uppercase tracking-wider font-black">
            <span style={{ color: "#3B9EFF" }}>Creative</span>
            <span className="text-foreground"> Heating</span>
            <span style={{ color: "#FF6A1A" }}> &amp; Air</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="sms:6613456450"
              className="inline-flex items-center gap-2 px-4 py-2 rounded font-display text-sm uppercase tracking-wider border transition-colors"
              style={{ borderColor: "#3B9EFF", color: "#3B9EFF" }}
            >
              <Phone className="w-3.5 h-3.5" />
              Text Us
            </a>
            <button
              data-token="e62a04b6077d41d0924c161ec3bca8d7"
              data-orgname="Creative-Air-Coniditioning-and-Heating"
              className="hcp-button inline-flex items-center gap-2 px-5 py-2 rounded text-sm text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-fire)" }}
              onClick={() => window.HCPWidget?.openModal()}
            >
              Book Online
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-1">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 pb-5 pt-2 space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="sms:6613456450"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded font-display text-sm uppercase tracking-wider border"
                style={{ borderColor: "#3B9EFF", color: "#3B9EFF" }}
              >
                <Phone className="w-4 h-4" />
                Text Us — (661) 345-6450
              </a>
              <button
                data-token="e62a04b6077d41d0924c161ec3bca8d7"
                data-orgname="Creative-Air-Coniditioning-and-Heating"
                className="hcp-button w-full py-2.5 rounded text-sm text-white"
                style={{ background: "var(--gradient-fire)" }}
                onClick={() => window.HCPWidget?.openModal()}
              >
                Book Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
