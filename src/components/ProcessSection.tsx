import { process } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ProcessSection = () => (
  <section className="section section--process" id="process">
    <div className="shell">
      <Reveal>
        <SectionHeading
          index="02"
          label="How I build"
          title="From ambiguity to something that ships."
          body="A structured workflow that keeps product intent, interface quality and engineering constraints connected from the start."
        />
      </Reveal>

      <Reveal className="process-track">
        <div className="process-track__line" aria-hidden="true" />
        {process.map((step, index) => (
          <article className="process-step" key={step.number}>
            <div className={`process-step__node ${index === 2 ? "process-step__node--focus" : ""}`}>
              <i />
            </div>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </Reveal>

      <Reveal className="ai-note">
        <span className="micro-label">AI-assisted development</span>
        <p>
          I use AI as an engineering accelerator for research, decomposition, iteration and validation — while keeping product decisions, architecture and quality explicit.
        </p>
      </Reveal>
    </div>
  </section>
);

export default ProcessSection;
