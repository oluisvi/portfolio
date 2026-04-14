import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python"],
  Tools: ["Git", "GitHub", "Figma", "Vercel", "Docker"],
};

const experience = [
  { role: "English & Programming Teacher", company: "DiscoverON", period: "Set 2025 – Presente" },
  { role: "Volunteer Web Developer", company: "Frontend Fusion", period: "Jun 2025 – Presente" },
  { role: "Fullstack Developer", company: "Freelancer", period: "Abr 2024 – Presente" },
  { role: "Fullstack Developer Intern", company: "Compass UOL", period: "Out 2024 – Abr 2025" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-40 relative">
      {/* Divider */}
      <div className="w-full h-px bg-border mb-24 md:mb-32" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 max-w-[1400px]">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <span className="text-accent font-body text-xs uppercase tracking-[0.3em]">Sobre</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mt-4 tracking-tighter">
            Luís
            <br />
            Henrique
          </h2>
        </motion.div>

        {/* Bio text - offset */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 md:col-start-5 md:mt-16"
        >
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            Sou Luís Henrique, Fullstack Developer do Brasil. Construo aplicações que vão para produção e resolvem problemas reais.
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
            Do estágio na Compass UOL ao freelancing e ensino de programação, trabalhei em todo o ciclo de produto — projetando APIs, integrando bancos de dados e entregando experiências polidas.
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
            Atualmente explorando soluções com IA e automação, sempre focado em código limpo que gera impacto.
          </p>
        </motion.div>

        {/* Experience - far right, intentionally offset */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:col-span-3 md:col-start-10 md:mt-32"
        >
          <span className="text-xs font-body text-muted-foreground uppercase tracking-[0.3em] block mb-8">Experiência</span>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.role} className="border-l border-border pl-4">
                <p className="font-heading text-sm font-medium text-foreground">{exp.role}</p>
                <p className="text-xs text-accent font-body mt-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{exp.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        ref={techRef}
        initial={{ opacity: 0, y: 60 }}
        animate={techInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mt-32 md:mt-48 max-w-[1400px]"
      >
        <div className="w-full h-px bg-border mb-16" />
        <span className="text-xs font-body text-muted-foreground uppercase tracking-[0.3em]">Tech Stack</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-6">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-body text-muted-foreground uppercase tracking-widest border border-border px-4 py-2 hover:text-accent hover:border-accent transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
