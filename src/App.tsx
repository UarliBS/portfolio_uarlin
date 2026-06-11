"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "pt" | "en";

type Project = {
  name: string;
  period: string;
  status: string;
  description: string;
  bullets: string[];
  tags: string[];
};

type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

type Copy = {
  nav: string[];
  actions: {
    projects: string;
    contact: string;
    github: string;
    linkedin: string;
    email: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    surname: string;
    role: string;
    description: string;
    metrics: { value: string; label: string }[];
    terminal: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    accent: string;
    paragraphs: string[];
  };
  journey: {
    eyebrow: string;
    title: string;
    accent: string;
    items: TimelineItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    accent: string;
    items: Project[];
  };
  skills: {
    eyebrow: string;
    title: string;
    accent: string;
    groups: { title: string; items: string[] }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    accent: string;
    text: string;
  };
};

const links = {
  github: "https://github.com/UarliBS",
  linkedin: "https://www.linkedin.com/in/warllenbs",
  email: "mailto:warllen_1404@hotmail.com",
};

const copy: Record<Locale, Copy> = {
  pt: {
    nav: ["Sobre", "Projetos", "Skills", "Contato"],
    actions: {
      projects: "Ver projetos",
      contact: "Entrar em contato",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    hero: {
      eyebrow: "Desenvolvedor Full Stack em formação",
      name: "Warllen",
      surname: "Barreiros",
      role: "Java • Spring Boot • React • APIs REST",
      description:
        "Construo aplicações web com foco em backend, modelagem de dados e integrações reais. Estou em formação em Engenharia de Software e busco evoluir em ambientes colaborativos, práticos e bem estruturados.",
      metrics: [
        { value: "2+", label: "projetos completos" },
        { value: "12+", label: "tecnologias na stack" },
        { value: "C1", label: "inglês" },
      ],
      terminal: [
        "const profile = 'fullstack';",
        "stack.use(['Java', 'Spring Boot', 'React']);",
        "api.design('REST', { auth: 'JWT' });",
        "deploy.with('Git', 'Docker', 'learning mindset');",
      ],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Quem",
      accent: "sou eu",
      paragraphs: [
        "Sou desenvolvedor Full Stack em formação, com base sólida em Java, Spring Boot, bancos SQL e NoSQL. Gosto de transformar requisitos em APIs bem estruturadas, fluxos claros e interfaces que funcionam sem complicação.",
        "Minha jornada passa por projetos acadêmicos e pessoais com REST APIs, autenticação JWT, integração com front-end, Google Maps API, RabbitMQ, JPA e boas práticas com Git/GitHub.",
        "Atualmente curso Engenharia de Software na UNIFAN e busco uma oportunidade para aplicar meus conhecimentos, aprender com times experientes e crescer com responsabilidade.",
      ],
    },
    journey: {
      eyebrow: "Trajetória",
      title: "Minha",
      accent: "jornada",
      items: [
        {
          period: "Ago 2025 - Jul 2029",
          title: "Engenharia de Software",
          place: "UNIFAN - Centro Universitário Nobre",
          description:
            "Formação em andamento com foco em lógica de programação, arquitetura de computadores, algoritmos, estruturas de dados e machine learning.",
        },
        {
          period: "Ago 2022 - Dez 2023",
          title: "Análise e Desenvolvimento de Sistemas",
          place: "Escola Técnica SENAI",
          description:
            "Base prática em POO, desenvolvimento web full stack, bancos SQL/NoSQL e versionamento com Git e GitHub.",
        },
        {
          period: "2023 - Atual",
          title: "Projetos acadêmicos e pessoais",
          place: "Java, Spring Boot, React, Node.js",
          description:
            "Desenvolvimento de aplicações com APIs REST, autenticação, microsserviços, integrações assíncronas e modelagem de dados.",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Em",
      accent: "produção",
      items: [
        {
          name: "E-Commerce Control",
          period: "Out 2025",
          status: "Microsserviços",
          description:
            "Arquitetura de microsserviços em Java para controle de estoque e exibição de produtos em e-commerce.",
          bullets: [
            "Endpoints REST para produtos e estoque.",
            "Integração assíncrona entre serviços via RabbitMQ.",
            "Persistência e testes com JPA e H2.",
            "MapStruct, Lombok, OpenAPI e estrutura modular.",
          ],
          tags: [
            "Java",
            "Spring Boot",
            "JPA",
            "RabbitMQ",
            "MapStruct",
            "OpenAPI",
            "H2",
          ],
        },
        {
          name: "LocalInfo",
          period: "Jun 2023 - Dez 2023",
          status: "Full Stack",
          description:
            "Plataforma web para conectar usuários a estabelecimentos locais, com busca, divulgação e mapa interativo.",
          bullets: [
            "Autenticação, cadastro e controle por nível de usuário.",
            "Integração entre backend, rotas, carrossel e dados de mapa.",
            "Google Maps API e rotas dinâmicas por estabelecimento.",
            "Melhorias em controllers e estrutura de rotas.",
          ],
          tags: [
            "React",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Google Maps",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Stack técnica",
      title: "O que",
      accent: "uso",
      groups: [
        { title: "Linguagens", items: ["Java", "JavaScript", "Python", "HTML", "CSS", "Bash"] },
        { title: "Frontend", items: ["React", "Vite", "React Router", "Axios", "CSS"] },
        { title: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST", "Web API", "JWT"] },
        { title: "Dados", items: ["MySQL", "MongoDB", "DBeaver", "JSON", "H2"] },
        { title: "Ferramentas", items: ["Git", "GitHub", "Docker", "RabbitMQ", "OpenAPI"] },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos",
      accent: "conversar",
      text: "Estou aberto a oportunidades para aprender, contribuir e construir produtos reais com bons times.",
    },
  },
  en: {
    nav: ["About", "Projects", "Skills", "Contact"],
    actions: {
      projects: "View projects",
      contact: "Get in touch",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
    hero: {
      eyebrow: "Full Stack Developer in training",
      name: "Warllen",
      surname: "Barreiros",
      role: "Java • Spring Boot • React • REST APIs",
      description:
        "I build web applications with focus on backend, data modeling and real integrations. I am studying Software Engineering and looking to grow in collaborative, practical and well-structured teams.",
      metrics: [
        { value: "2+", label: "completed projects" },
        { value: "12+", label: "technologies in stack" },
        { value: "C1", label: "english" },
      ],
      terminal: [
        "const profile = 'fullstack';",
        "stack.use(['Java', 'Spring Boot', 'React']);",
        "api.design('REST', { auth: 'JWT' });",
        "deploy.with('Git', 'Docker', 'learning mindset');",
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Who",
      accent: "I am",
      paragraphs: [
        "I am a Full Stack Developer in training, with a solid foundation in Java, Spring Boot, SQL and NoSQL databases. I enjoy turning requirements into well-structured APIs, clear flows and interfaces that work without friction.",
        "My journey includes academic and personal projects with REST APIs, JWT authentication, front-end integration, Google Maps API, RabbitMQ, JPA and good practices with Git/GitHub.",
        "I am currently studying Software Engineering at UNIFAN and looking for an opportunity to apply my knowledge, learn from experienced teams and grow with responsibility.",
      ],
    },
    journey: {
      eyebrow: "Journey",
      title: "My",
      accent: "path",
      items: [
        {
          period: "Aug 2025 - Jul 2029",
          title: "Software Engineering",
          place: "UNIFAN - Centro Universitário Nobre",
          description:
            "Ongoing degree focused on programming logic, computer architecture, algorithms, data structures and machine learning.",
        },
        {
          period: "Aug 2022 - Dec 2023",
          title: "Systems Analysis and Development",
          place: "SENAI Technical School",
          description:
            "Practical foundation in OOP, full-stack web development, SQL/NoSQL databases and version control with Git and GitHub.",
        },
        {
          period: "2023 - Present",
          title: "Academic and personal projects",
          place: "Java, Spring Boot, React, Node.js",
          description:
            "Applications with REST APIs, authentication, microservices, asynchronous integrations and data modeling.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "In",
      accent: "production",
      items: [
        {
          name: "E-Commerce Control",
          period: "Oct 2025",
          status: "Microservices",
          description:
            "Java microservices architecture for inventory control and product display in an e-commerce platform.",
          bullets: [
            "REST endpoints for product and stock management.",
            "Asynchronous service integration with RabbitMQ.",
            "Persistence and tests with JPA and H2.",
            "MapStruct, Lombok, OpenAPI and modular structure.",
          ],
          tags: ["Java", "Spring Boot", "JPA", "RabbitMQ", "MapStruct", "OpenAPI", "H2"],
        },
        {
          name: "LocalInfo",
          period: "Jun 2023 - Dec 2023",
          status: "Full Stack",
          description:
            "Web platform that connects users to local businesses, with search, promotion plans and an interactive map.",
          bullets: [
            "Authentication, registration and role-based access.",
            "Backend integration with routes, carousel and map data.",
            "Google Maps API and dynamic routes by business ID.",
            "Improvements in controllers and route structure.",
          ],
          tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Google Maps"],
        },
      ],
    },
    skills: {
      eyebrow: "Technical stack",
      title: "What",
      accent: "I use",
      groups: [
        { title: "Languages", items: ["Java", "JavaScript", "Python", "HTML", "CSS", "Bash"] },
        { title: "Frontend", items: ["React", "Vite", "React Router", "Axios", "CSS"] },
        { title: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST", "Web API", "JWT"] },
        { title: "Data", items: ["MySQL", "MongoDB", "DBeaver", "JSON", "H2"] },
        { title: "Tools", items: ["Git", "GitHub", "Docker", "RabbitMQ", "OpenAPI"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's",
      accent: "talk",
      text: "I am open to opportunities to learn, contribute and build real products with good teams.",
    },
  },
};

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = copy[locale];
  const navTargets = useMemo(() => ["about", "projects", "skills", "contact"], []);

  useReveal();

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <a className="brand" href="#top" aria-label="Warllen Barreiros">
          WARLLEN BARREIROS
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          {t.nav.map((item, index) => (
            <a href={`#${navTargets[index]}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="locale-switch" aria-label="Language selector">
          <button
            className={locale === "pt" ? "active" : ""}
            type="button"
            onClick={() => setLocale("pt")}
          >
            PT
          </button>
          <button
            className={locale === "en" ? "active" : ""}
            type="button"
            onClick={() => setLocale("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main id="top">
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
                {t.actions.projects}
              </a>
              <a className="button ghost" href={links.email}>
                {t.actions.contact}
              </a>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="orbit" />
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
            {t.hero.metrics.map((metric) => (
              <article className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

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
                {t.actions.linkedin}
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                {t.actions.github}
              </a>
              <a href={links.email}>{t.actions.email}</a>
            </div>
          </div>
          <div className="profile-card" data-reveal>
            <span className="profile-label">Feira de Santana, BA</span>
            <strong>Full Stack</strong>
            <p>Java / Spring Boot / React / Node.js</p>
            <div className="profile-grid">
              <span>REST</span>
              <span>JWT</span>
              <span>SQL</span>
              <span>NoSQL</span>
            </div>
          </div>
        </section>

        <SectionHeader
          id="journey"
          eyebrow={t.journey.eyebrow}
          title={t.journey.title}
          accent={t.journey.accent}
        />
        <section className="timeline">
          {t.journey.items.map((item) => (
            <article className="timeline-item" data-reveal key={`${item.period}-${item.title}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <span>{item.place}</span>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </section>

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
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <SectionHeader
          id="skills"
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          accent={t.skills.accent}
        />
        <section className="skills">
          {t.skills.groups.map((group) => (
            <article className="skill-group" data-reveal key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="contact" id="contact" data-reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>
            {t.contact.title} <span>{t.contact.accent}</span>
          </h2>
          <p>{t.contact.text}</p>
          <div className="hero-actions">
            <a className="button primary" href={links.email}>
              {t.actions.email}
            </a>
            <a className="button ghost" href={links.linkedin} target="_blank" rel="noreferrer">
              {t.actions.linkedin}
            </a>
            <a className="button ghost" href={links.github} target="_blank" rel="noreferrer">
              {t.actions.github}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Warllen Barreiros</span>
        <span>warllen_1404@hotmail.com</span>
      </footer>
    </div>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  accent,
}: {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="section-header" id={id} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </div>
  );
}

export default App;
