import { ArrowUpRight, Github } from "lucide-react";
import { archiveProjects, projects } from "../data/portfolio";
import ProjectPreview from "./ProjectPreview";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ProjectsSection = () => (
  <section className="section section--work" id="work">
    <div className="shell">
      <Reveal>
        <SectionHeading
          index="01"
          label="Selected work"
          title="Products with depth, not just screens."
          body="Four projects that best represent how I combine interface craft, product thinking and full-stack engineering."
        />
      </Reveal>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article className={`project-row ${index % 2 ? "project-row--reverse" : ""}`} key={project.title}>
            <Reveal className="project-row__visual">
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live project`}>
                <ProjectPreview kind={project.kind} title={project.title} />
              </a>
            </Reveal>

            <Reveal className="project-row__content" delay={0.08}>
              <div className="project-row__topline">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-row__summary">{project.summary}</p>
              <p className="project-row__detail">{project.detail}</p>
              <ul className="project-stack" aria-label={`${project.title} technologies`}>
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="project-row__actions">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live project <ArrowUpRight size={16} />
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <Github size={15} /> Source
                </a>
              </div>
            </Reveal>
          </article>
        ))}
      </div>

      <Reveal className="project-archive">
        <div className="project-archive__intro">
          <span className="micro-label">Archive</span>
          <h3>More experiments & client work</h3>
        </div>
        <div className="project-archive__list">
          {archiveProjects.map((project, index) => (
            <a href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span>0{index + 5}</span>
              <strong>{project.title}</strong>
              <em>{project.category}</em>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProjectsSection;
