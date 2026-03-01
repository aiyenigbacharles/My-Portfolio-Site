const Footer = () => {
  return (
    <>
      <div className="h-12 diagonal-stripes" />
      <footer className="portfolio-container py-6 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} • Built by Charles
        </p>
      </footer>
    </>
  );
};

export default Footer;
