import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="contact__glow" aria-hidden="true" />
    <div className="shell">
      <Reveal className="contact__header">
        <span className="micro-label">Let&apos;s build together</span>
        <h2>BUILD SOMETHING<br /><em>WORTH REMEMBERING.</em></h2>
        <p>
          Open to software development opportunities, product collaborations and conversations about technology, design and better ways to build.
        </p>
      </Reveal>

      <Reveal className="contact__actions" delay={0.08}>
        <a className="button button--primary button--large" href="mailto:oluisvipersonal@gmail.com">
          Start a conversation <ArrowUpRight size={18} />
        </a>
        <div className="contact__socials" aria-label="Social links">
          <a href="https://github.com/oluisvi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/oluisvi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:oluisvipersonal@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
      </Reveal>

      <footer className="footer">
        <div className="brand brand--footer">
          <span className="brand__name">OLUISVI</span>
          <span className="brand__dot" aria-hidden="true" />
        </div>
        <p>© 2026 Luis Henrique Vieira. Built with intention.</p>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  </section>
);

export default ContactSection;
