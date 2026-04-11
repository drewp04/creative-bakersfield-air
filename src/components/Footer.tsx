const Footer = () => (
  <footer className="py-10 px-4 bg-background border-t border-border">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div>
          <div className="font-display text-2xl font-black uppercase tracking-wider mb-1">
            <span style={{ color: "#3B9EFF" }}>Creative</span>
            <span className="text-foreground"> Heating</span>
            <span style={{ color: "#FF6A1A" }}> &amp; Air</span>
          </div>
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Comfort in Every Season
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm font-display uppercase tracking-widest text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="tel:6613456450" className="hover:text-foreground transition-colors" style={{ color: "#3B9EFF" }}>
            (661) 345-6450
          </a>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-muted-foreground text-xs font-body">
          &copy; {new Date().getFullYear()} Creative Heating &amp; Air. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs font-body">
          CA Contractor License #929843 &middot; Bakersfield, CA &middot; Kern County
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
