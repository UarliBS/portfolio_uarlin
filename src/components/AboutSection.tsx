import type { Copy, Locale } from "../content/portfolio";
import { links } from "../content/portfolio";
import { Icon } from "./Icon";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";

export function AboutSection({ t, locale }: { t: Copy; locale: Locale }) {
  return (
    <>
      <SectionHeader
        id="about"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        accent={t.about.accent}
      />
      <section className="about section-grid">
        <div className="about-text" data-reveal>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="social-row">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              {t.actions.linkedin}
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Icon name="github" />
              {t.actions.github}
            </a>
            <a href={links.email}>
              <Icon name="mail" />
              {t.actions.email}
            </a>
          </div>
        </div>
        <figure className="profile-photo-card" data-reveal>
          <Image
            src="/warllen-profile.webp"
            alt={
              locale === "pt"
                ? "Foto de Warllen Barreiros"
                : "Portrait of Warllen Barreiros"
            }
            width={768}
            height={768}
            sizes="(max-width: 420px) 90vw, 384px"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  );
}
