import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

const HeroSignal = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 0.35], [0, 90]);

  return (
    <motion.div className="hero-signal" style={reduceMotion ? undefined : { y: drift }} aria-hidden="true">
      <div className="hero-signal__glow" />
      <div className="hero-signal__rail hero-signal__rail--one" />
      <div className="hero-signal__rail hero-signal__rail--two" />
      <div className="hero-signal__core">
        <span>PRODUCT</span>
        <span>INTERFACE</span>
        <span>SYSTEMS</span>
        <span>AUTOMATION</span>
      </div>
      <motion.div
        className="hero-signal__orbit"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <i />
      </motion.div>
      <div className="hero-signal__caption">BUILD / TEST / SHIP / IMPROVE</div>
    </motion.div>
  );
};

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section-grid" id="top">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          <motion.div
            className="eyebrow-line"
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span /> Building what&apos;s next
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>SOFTWARE</span>
            <span>DEVELOPER</span>
          </motion.h1>

          <motion.p
            className="hero__discipline"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.32 }}
          >
            FRONT-END <b>/</b> FULL STACK <b>/</b> AI-ASSISTED
          </motion.p>

          <motion.p
            className="hero__lede"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.42 }}
          >
            I turn ideas into real digital products through clean interfaces, deliberate systems and production-minded engineering.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.52 }}
          >
            <a className="button button--primary" href="#work">
              View selected work <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="https://github.com/oluisvi" target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
          </motion.div>

          <motion.div
            className="hero__meta"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.64 }}
          >
            <div>
              <span>Based in Brazil</span>
              <strong>Open to remote opportunities worldwide</strong>
            </div>
            <div>
              <span>Building professionally since</span>
              <strong>2024 → now</strong>
            </div>
          </motion.div>
        </div>

        <HeroSignal />
      </div>

      <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
        <span>Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default HeroSection;
