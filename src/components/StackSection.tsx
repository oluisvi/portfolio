import { stackGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const StackSection = () => (
  <section className="section section--stack" id="stack">
    <div className="shell">
      <Reveal>
        <SectionHeading
          index="03"
          label="Technology"
          title="Tools change. Good decisions compound."
          body="The stack below reflects what I actually use across interface engineering, APIs, data, automation and deployment."
        />
      </Reveal>

      <div className="stack-grid">
        {stackGroups.map((group, index) => (
          <Reveal className="stack-group" delay={index * 0.07} key={group.title}>
            <div className="stack-group__heading">
              <span>{group.eyebrow}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.technologies.map((technology, technologyIndex) => (
                <li key={technology}>
                  <span>{String(technologyIndex + 1).padStart(2, "0")}</span>
                  {technology}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StackSection;
