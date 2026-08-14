import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-40 relative">
      <div className="w-full h-px bg-border mb-24" />

      <div ref={ref} className="max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-body text-xs uppercase tracking-[0.3em]">Contato</span>

          <h2 className="font-heading text-5xl md:text-[8rem] font-bold text-foreground mt-6 tracking-tighter leading-[0.9]">
            Vamos trabalhar
            <br />
            <span className="text-stroke">juntos</span>
          </h2>

          <p className="font-body text-muted-foreground text-base md:text-lg max-w-md mt-8 leading-relaxed">
            Estou aberto a projetos freelance, oportunidades full-time e colaborações. Vamos construir algo incrível.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row gap-6 md:gap-12"
        >
          <a
            href="https://github.com/oluisvi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-lg md:text-2xl text-foreground hover:text-accent transition-colors duration-300 group"
          >
            GitHub
            <span className="block h-px w-0 group-hover:w-full bg-accent transition-all duration-500" />
          </a>
          <a
            href="https://linkedin.com/in/oluisvi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-lg md:text-2xl text-foreground hover:text-accent transition-colors duration-300 group"
          >
            LinkedIn
            <span className="block h-px w-0 group-hover:w-full bg-accent transition-all duration-500" />
          </a>
          <a
            href="mailto:oluisvipersonal@gmail.com"
            className="font-heading text-lg md:text-2xl text-foreground hover:text-accent transition-colors duration-300 group"
          >
            Email
            <span className="block h-px w-0 group-hover:w-full bg-accent transition-all duration-500" />
          </a>
          <a
            href="https://wa.me/5512992568583"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-lg md:text-2xl text-foreground hover:text-accent transition-colors duration-300 group"
          >
            WhatsApp
            <span className="block h-px w-0 group-hover:w-full bg-accent transition-all duration-500" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 md:mt-48 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <p className="text-xs font-body text-muted-foreground uppercase tracking-widest">
          © 2026 Luís Henrique
        </p>
        <p className="text-xs font-body text-muted-foreground uppercase tracking-widest">
          Feito com convicção
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
