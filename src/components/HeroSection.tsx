import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[100svh] md:min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background accent line */}
      <div className="absolute top-0 right-[20%] w-px h-full bg-border opacity-30" />
      <div className="absolute top-0 right-[60%] w-px h-full bg-border opacity-15" />

      <div className="relative z-10 max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground font-body text-sm md:text-base uppercase tracking-[0.3em] mb-8"
        >
          Fullstack Developer — Brasil
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-bold text-foreground leading-[0.85] tracking-tighter"
        >
          <span className="block text-[clamp(3rem,12vw,11rem)]">
            Eu construo
          </span>
          <span className="block text-[clamp(3rem,12vw,11rem)] ml-[5vw] md:ml-[10vw]">
            produtos
          </span>
          <span className="block text-[clamp(2rem,7vw,6rem)] text-stroke mt-2 ml-[2vw]">
            que resolvem problemas reais
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
            React, Node.js e aplicações com IA.
            <br />
            Transformando requisitos complexos em software pronto para produção.
          </p>

          <div className="flex gap-12 font-heading">
            <div>
              <span className="text-3xl md:text-5xl font-bold text-foreground">6+</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Projetos</p>
            </div>
            <div>
              <span className="text-3xl md:text-5xl font-bold text-foreground">1+</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Ano exp.</p>
            </div>
            <div>
              <span className="text-3xl md:text-5xl font-bold text-foreground">5+</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Tecnologias</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-6 md:right-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-16 bg-muted-foreground"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
