import type { Copy } from "../content/portfolio";
import { Icon } from "./Icon";

export function HeroSection({ t }: { t: Copy }) {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.name}
            <span>{t.hero.surname}</span>
          </h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              {t.actions.projects} <Icon name="arrow" />
            </a>
            <a
              className="button ghost"
              href="/WarllenBarreiros-FS.pdf"
              download
            >
              <Icon name="download" /> {t.actions.resume}
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="orbit" />
          <div className="orbit orbit-secondary" />
          <div className="orbit-dots" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="code-card">
            <div className="card-top">
              <span />
              <span />
              <span />
            </div>
            <div className="code-lines">
              {t.hero.terminal.map((line) => (
                <code key={line}>{line}</code>
              ))}
            </div>
          </div>
        </div>

        <div className="metric-row" data-reveal>
          {t.hero.highlights.map((highlight) => (
            <article className="metric" key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
