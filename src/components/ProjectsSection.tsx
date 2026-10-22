import type { Copy } from "../content/portfolio";
import { Icon } from "./Icon";
import { TechLogo } from "./TechLogo";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection({ t }: { t: Copy }) {
  return (
    <>
      <SectionHeader
        id="projects"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        accent={t.projects.accent}
      />
      <section className="projects">
        {t.projects.items.map((project) => (
          <article className="project-card" data-reveal key={project.name}>
            <div className="project-top">
              <span>{project.status}</span>
              <time>{project.period}</time>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>
                  <TechLogo label={tag} />
                  {tag}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {t.actions.openProject} <Icon name="arrow" />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                className="project-link project-link-secondary"
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" /> {t.actions.repository}
              </a>
            )}
          </article>
        ))}
      </section>
    </>
  );
}
