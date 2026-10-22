import type { Copy } from "../content/portfolio";
import { TechLogo } from "./TechLogo";
import { SectionHeader } from "./SectionHeader";

export function JourneySection({ t }: { t: Copy }) {
  return (
    <>
      <SectionHeader
        id="journey"
        eyebrow={t.journey.eyebrow}
        title={t.journey.title}
        accent={t.journey.accent}
      />
      <section className="timeline">
        {t.journey.items.map((item) => (
          <article
            className="timeline-item"
            data-reveal
            key={`${item.period}-${item.title}`}
          >
            <time>{item.period}</time>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span>{item.place}</span>
              <p>{item.description}</p>
              {item.details?.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
              {item.tags && (
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      <TechLogo label={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
