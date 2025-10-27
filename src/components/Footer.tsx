const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden border-t border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-t from-space-darker to-space-dark" />
      
      <div className="container relative z-10">
        <div className="text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Allan C. Godinez</span>. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion and futuristic vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
