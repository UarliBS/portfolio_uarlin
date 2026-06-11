"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "pt" | "en";
type IconName =
  | "arrow"
  | "download"
  | "mail"
  | "github"
  | "linkedin"
  | "code"
  | "server"
  | "database"
  | "tool"
  | "shield"
  | "cloud"
  | "api";

type TechLogoData = {
  slug?: string;
  color?: string;
  fallback?: string;
};

type Project = {
  name: string;
  period: string;
  status: string;
  description: string;
  bullets: string[];
  tags: string[];
  url?: string;
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
    resume: string;
    openProject: string;
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
      resume: "Download CV",
      openProject: "Abrir projeto",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    hero: {
      eyebrow: "Desenvolvedor Full Stack",
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
          name: "Building Us",
          period: "2026",
          status: "PWA full stack",
          description:
            "PWA para casais gerenciarem metas compartilhadas, rotinas, tarefas, check-ins mensais e planos futuros.",
          bullets: [
            "Frontend mobile-first em Next.js/React com suporte PT/EN, service worker e fila offline.",
            "Backend Java 21/Spring Boot com JWT, rotação de refresh token, OAuth2 e e-mail de verificação.",
            "Modelo de domínio para casais, metas, tarefas, check-ins, notificações, conquistas e arquivo.",
            "PostgreSQL com Flyway, Docker Compose, Web Push, Actuator, Prometheus e Grafana.",
          ],
          tags: ["Next.js", "PWA", "Spring Boot", "PostgreSQL", "Flyway", "Web Push", "Docker"],
          url: "https://www.buildingus.app",
        },
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
        { title: "Linguagens", items: ["Java", "JavaScript", "Python"] },
        { title: "Frameworks", items: ["Spring Boot", "Spring Security", "Node.js", "Express", "React"] },
        { title: "Banco de dados", items: ["MySQL", "MongoDB", "H2", "JPA / Hibernate"] },
        { title: "Infraestrutura", items: ["Docker", "RabbitMQ", "REST APIs", "Google Maps API"] },
        { title: "Segurança", items: ["JWT", "Web API", "JSON"] },
        { title: "Ferramentas", items: ["Git", "GitHub", "DBeaver", "OpenAPI", "Bash"] },
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
      resume: "Download resume",
      openProject: "Open project",
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
          name: "Building Us",
          period: "2026",
          status: "Full-stack PWA",
          description:
            "PWA for couples to manage shared goals, routines, tasks, monthly check-ins and future plans.",
          bullets: [
            "Mobile-first Next.js/React frontend with PT/EN support, service worker and offline queue.",
            "Java 21/Spring Boot backend with JWT, refresh-token rotation, OAuth2 and email verification.",
            "Domain model for couples, goals, tasks, check-ins, notifications, achievements and archives.",
            "PostgreSQL with Flyway, Docker Compose, Web Push, Actuator, Prometheus and Grafana.",
          ],
          tags: ["Next.js", "PWA", "Spring Boot", "PostgreSQL", "Flyway", "Web Push", "Docker"],
          url: "https://www.buildingus.app",
        },
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
        { title: "Languages", items: ["Java", "JavaScript", "Python"] },
        { title: "Frameworks", items: ["Spring Boot", "Spring Security", "Node.js", "Express", "React"] },
        { title: "Databases", items: ["MySQL", "MongoDB", "H2", "JPA / Hibernate"] },
        { title: "Infrastructure", items: ["Docker", "RabbitMQ", "REST APIs", "Google Maps API"] },
        { title: "Security", items: ["JWT", "Web API", "JSON"] },
        { title: "Tools", items: ["Git", "GitHub", "DBeaver", "OpenAPI", "Bash"] },
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
                {t.actions.projects} <Icon name="arrow" />
              </a>
              <a className="button ghost" href="/WarllenBarreiros-FS.pdf" download>
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
                  <span key={tag}>
                    <TechLogo label={tag} />
                    {tag}
                  </span>
                ))}
              </div>
              {project.url && (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  {t.actions.openProject} <Icon name="arrow" />
                </a>
              )}
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
                  <span key={item}>
                    <TechLogo label={item} />
                    {item}
                  </span>
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
              <Icon name="mail" />
              {t.actions.email}
            </a>
            <a className="button ghost" href={links.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              {t.actions.linkedin}
            </a>
            <a className="button ghost" href={links.github} target="_blank" rel="noreferrer">
              <Icon name="github" />
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

function TechLogo({ label }: { label: string }) {
  const logo = getTechLogo(label);

  if (logo.slug) {
    const color = logo.color ?? "4B8CFF";
    return (
      <img
        className="tech-logo"
        src={`https://cdn.simpleicons.org/${logo.slug}/${color}`}
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
    );
  }

  return (
    <span className="tech-logo-fallback" aria-hidden="true">
      {logo.fallback ?? label.slice(0, 2).toUpperCase()}
    </span>
  );
}

function getTechLogo(label: string): TechLogoData {
  const normalized = label.toLowerCase();

  const logos: Array<[string, TechLogoData]> = [
    ["javascript", { slug: "javascript", color: "F7DF1E" }],
    ["java", { slug: "openjdk", color: "ED8B00" }],
    ["next.js", { slug: "nextdotjs", color: "FFFFFF" }],
    ["next", { slug: "nextdotjs", color: "FFFFFF" }],
    ["pwa", { slug: "pwa", color: "5A0FC8" }],
    ["typescript", { slug: "typescript", color: "3178C6" }],
    ["python", { slug: "python", color: "3776AB" }],
    ["spring security", { slug: "springsecurity", color: "6DB33F" }],
    ["spring boot", { slug: "springboot", color: "6DB33F" }],
    ["node", { slug: "nodedotjs", color: "5FA04E" }],
    ["express", { slug: "express", color: "FFFFFF" }],
    ["react", { slug: "react", color: "61DAFB" }],
    ["mysql", { slug: "mysql", color: "4479A1" }],
    ["postgresql", { slug: "postgresql", color: "4169E1" }],
    ["flyway", { slug: "flyway", color: "CC0200" }],
    ["mongodb", { slug: "mongodb", color: "47A248" }],
    ["hibernate", { slug: "hibernate", color: "BCAE79" }],
    ["jpa", { slug: "hibernate", color: "BCAE79" }],
    ["docker", { slug: "docker", color: "2496ED" }],
    ["s3", { slug: "amazons3", color: "569A31" }],
    ["web push", { slug: "webpush", color: "339933" }],
    ["prometheus", { slug: "prometheus", color: "E6522C" }],
    ["grafana", { slug: "grafana", color: "F46800" }],
    ["rabbit", { slug: "rabbitmq", color: "FF6600" }],
    ["google maps", { slug: "googlemaps", color: "4285F4" }],
    ["jwt", { slug: "jsonwebtokens", color: "D63AFF" }],
    ["json", { slug: "json", color: "F5F5F5" }],
    ["github", { slug: "github", color: "FFFFFF" }],
    ["git", { slug: "git", color: "F05032" }],
    ["dbeaver", { slug: "dbeaver", color: "897263" }],
    ["openapi", { slug: "openapiinitiative", color: "6BA539" }],
    ["bash", { slug: "gnubash", color: "4EAA25" }],
    ["vite", { slug: "vite", color: "646CFF" }],
    ["html", { slug: "html5", color: "E34F26" }],
    ["css", { slug: "css", color: "663399" }],
    ["axios", { slug: "axios", color: "5A29E4" }],
    ["mapstruct", { fallback: "MS" }],
    ["lombok", { fallback: "LB" }],
  ];

  const match = logos.find(([term]) => normalized.includes(term));
  if (match) {
    return match[1];
  }

  if (normalized.includes("rest")) {
    return { fallback: "API" };
  }

  if (normalized.includes("web api")) {
    return { fallback: "API" };
  }

  if (normalized.includes("h2")) {
    return { fallback: "H2" };
  }

  return { fallback: label.slice(0, 2).toUpperCase() };
}

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-6 0C8 2 7 2 7 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 6 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.5 2-5-2-7-2" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01" />
          <path d="M7 17h.01" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case "tool":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-3-3 2.6-2.6z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M17.5 19H8a5 5 0 1 1 1.1-9.88A7 7 0 0 1 22 12.5 4.5 4.5 0 0 1 17.5 19z" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M8 9H4v6h4" />
          <path d="M16 9h4v6h-4" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case "code":
    default:
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
  }
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
