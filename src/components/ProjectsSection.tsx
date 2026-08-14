import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "EcoEduca Platform",
    description: "Plataforma de educação ambiental desenvolvida para concientização de assuntos ecológicos.",
    tags: ["Artificial Inteligence", "Platform", "UX"],
    image: "/assets/ecoeduca.jpeg",
    link: "https://ecoeduca.onrender.com/",
  },
  {
    number: "02",
    title: "Shop.co E-commerce",
    description: "Plataforma de gestão financeira, com integração à OpenFinance e IA.",
    tags: ["Next", "Nest", "Finance", "Fullstack"],
    image: "/assets/atlas.png",
    link: "https://atlas-finance-web.onrender.app/",
  },
  {
    number: "03",
    title: "Shop.co E-commerce",
    description: "Plataforma e-commerce completa com navegação de produtos, filtros e checkout fluido.",
    tags: ["React", "TypeScript", "Tailwind CSS", "API"],
    image: "/assets/shopco.jpeg",
    link: "https://shop-co-ecommerce-three.vercel.app/",
  },
  {
    number: "04",
    title: "UrbanFarme",
    description: "Sistema de gestão agrícola cross-platform com dados em tempo real e integração completa de banco de dados.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    image: "/assets/urbanfarme.jpeg",
    link: "https://fazenda-urbana.onrender.com/",
  },
  {
    number: "05",
    title: "Image Gallery",
    description: "Galeria dinâmica com API externa, layouts responsivos e scroll infinito.",
    tags: ["React", "API Integration", "Responsive"],
    image: "/assets/gallery.jpeg",
    link: "https://gallery-sigma-one-89.vercel.app/",
  },
  {
    number: "06",
    title: "Terras Mil Dashboard",
    description: "Dashboard de operações para agricultura urbana com insights em tempo real.",
    tags: ["React", "Dashboard", "Data Viz"],
    image: "/assets/terrasmil.jpeg",
    link: "https://terras-mil.netlify.app/",
  },
];

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const isFeatured = index === 0;

  if (isFeatured) {
    return (
      <motion.a
        ref={ref}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="block relative group mb-32 md:mb-48"
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-[50vh] md:h-[75vh] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-500" />
        </div>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <span className="text-accent font-heading text-sm tracking-widest">{project.number}</span>
            <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground font-body text-sm md:text-base max-w-sm leading-relaxed md:text-right">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-body text-muted-foreground uppercase tracking-widest border border-border px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </motion.a>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`block relative group mb-24 md:mb-36 ${
        isEven ? "md:ml-0 md:mr-[15%]" : "md:ml-[15%] md:mr-0"
      }`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[40vh] md:h-[55vh] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />

        {/* Overlapping number */}
        <span className="absolute -bottom-6 md:-bottom-10 right-4 md:right-8 font-heading text-[5rem] md:text-[8rem] font-bold text-foreground/10 leading-none select-none">
          {project.number}
        </span>
      </div>

      <div className={`mt-8 ${isEven ? "" : "md:text-right"}`}>
        <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground font-body text-sm md:text-base max-w-md leading-relaxed mt-3 ${isEven ? '' : 'md:ml-auto'}">
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-3 mt-4 ${isEven ? "" : "md:justify-end"}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-body text-muted-foreground uppercase tracking-widest border border-border px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="px-6 md:px-12 py-24 md:py-32">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, x: -60 }}
        animate={titleInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-24 md:mb-32"
      >
        <span className="text-accent font-body text-xs uppercase tracking-[0.3em]">Trabalho selecionado</span>
        <h2 className="font-heading text-5xl md:text-8xl font-bold text-foreground mt-4 tracking-tighter">
          Projetos
        </h2>
      </motion.div>

      {projects.map((project, i) => (
        <ProjectItem key={project.number} project={project} index={i} />
      ))}
    </section>
  );
};

export default ProjectsSection;
