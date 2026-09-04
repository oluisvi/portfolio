import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section className="section section--about" id="about">
    <div className="shell">
      <Reveal>
        <SectionHeading
          index="04"
          label="About"
          title="Front-End sensitivity. Full Stack context."
          body="I like building products where interface, systems and the way people actually use software are treated as one problem."
        />
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-story">
          <p className="about-story__lead">
            I&apos;m Luis Henrique, a Software Developer from Brazil focused on Front-End engineering with hands-on Full Stack experience.
          </p>
          <p>
            My work spans product interfaces, APIs, databases, cloud services, automation and production delivery. I&apos;ve built finance products, operational SaaS, commerce experiences and websites for real businesses.
          </p>
          <p>
            I&apos;m currently studying Computer Science and continuously experimenting with AI-assisted software development to improve iteration speed without lowering the engineering bar.
          </p>
          <div className="about-story__links">
            <a href="https://github.com/oluisvi" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a href="https://www.linkedin.com/in/oluisvi" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </Reveal>

        <Reveal className="experience-list" delay={0.08}>
          <span className="micro-label">Experience</span>
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>

      <Reveal className="about-principles">
        <div><span>01</span><strong>Clarity before complexity</strong></div>
        <div><span>02</span><strong>Product before decoration</strong></div>
        <div><span>03</span><strong>Performance is part of design</strong></div>
        <div><span>04</span><strong>Ship, learn, improve</strong></div>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;
