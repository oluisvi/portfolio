import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Projetos", href: "#projects" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 md:mix-blend-difference">
      <div className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#" className="font-heading text-foreground text-lg font-medium tracking-tight">
          LH<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground text-sm font-body tracking-wide uppercase hover:text-accent focus-visible:text-accent focus-visible:outline-none transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden text-foreground font-heading text-sm uppercase focus-visible:text-accent focus-visible:outline-none"
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            role="navigation"
            aria-label="Navegação mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-start justify-center px-8 gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-5xl font-bold text-foreground hover:text-accent focus-visible:text-accent focus-visible:outline-none transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
