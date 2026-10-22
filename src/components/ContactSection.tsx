import type { Copy } from "../content/portfolio";
import { links } from "../content/portfolio";
import { Icon } from "./Icon";

export function ContactSection({ t }: { t: Copy }) {
  return (
    <>
      <section className="contact" id="contact" data-reveal>
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2>
          {t.contact.title} <span>{t.contact.accent}</span>
        </h2>
        <p>{t.contact.text}</p>
        <div className="hero-actions">
          <a className="button primary" href={links.email}>
            <Icon name="mail" />
            {t.actions.email}
          </a>
          <a
            className="button ghost"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" />
            {t.actions.linkedin}
          </a>
          <a
            className="button ghost"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            {t.actions.github}
          </a>
        </div>
      </section>
    </>
  );
}
