import type { Copy } from "../content/portfolio";
import { TechLogo } from "./TechLogo";
import { SectionHeader } from "./SectionHeader";

export function SkillsSection({ t }: { t: Copy }) {
  return (
    <>
      <SectionHeader
        id="skills"
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        accent={t.skills.accent}
      />
      <p className="skills-description">{t.skills.description}</p>
      <section className="skills">
        {t.skills.groups.map((group) => (
          <article className="skill-group" data-reveal key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>
                  <TechLogo label={item} />
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
