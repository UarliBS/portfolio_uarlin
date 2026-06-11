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
  repositoryUrl?: string;
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
    repository: string;
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
      repository: "Ver repositório",
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
          tags: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker", "Cloudflare R2"],
          url: "https://www.buildingus.app",
        },
        {
          name: "E-Commerce Control",
          period: "Out 2025",
          status: "Microsserviços",
          description:
            "Arquitetura de microsserviços em Java/Spring Boot para controle de estoque e vitrine de produtos.",
          bullets: [
            "Dois serviços principais: Warehouse para estoque e Storefront para exibição de produtos.",
            "Comunicação síncrona via HTTP e assíncrona via RabbitMQ/CloudAMQP.",
            "Persistência com Spring Data JPA e H2 para ambiente de teste.",
            "Mapeamento com MapStruct, redução de boilerplate com Lombok e documentação via SpringDoc OpenAPI.",
          ],
          tags: ["Java", "Spring Boot", "RabbitMQ", "JPA", "MapStruct", "OpenAPI"],
          repositoryUrl: "https://github.com/UarliBS/e-commerce_control",
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
          tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Google Maps"],
          repositoryUrl: "https://github.com/UarliBS/LocalInfo-Back",
        },
        {
          name: "Java Bank",
          period: "2025",
          status: "Java",
          description:
            "Sistema bancário em Java desenvolvido para consolidar POO, simulando contas, PIX, investimentos e histórico de transações.",
          bullets: [
            "Criação de contas com saldo inicial, chaves PIX, depósitos, saques e transferências.",
            "Carteiras de investimento com criação, atualização, rendimento e resgate.",
            "Histórico/auditoria de movimentações com Money e MoneyAudit.",
            "Uso de herança, encapsulamento, polimorfismo, records, enums, Streams e exceções customizadas.",
          ],
          tags: ["Java", "Lombok", "OOP", "Streams"],
          repositoryUrl: "https://github.com/UarliBS/Java-Bank",
        },
        {
          name: "Intelligent Customer Service Chatbot",
          period: "2025",
          status: "WhatsApp chatbot",
          description:
            "Chatbot integrado ao WhatsApp para atendimento automatizado de uma oficina mecânica usando Python, Flask e Evolution API.",
          bullets: [
            "Webhook Flask para receber mensagens e responder pelo WhatsApp.",
            "Menu interativo com consulta de serviços, preços e simulação de agendamento.",
            "Evolution API com Baileys, PostgreSQL e Redis via Docker Compose.",
            "Exposição local com ngrok para configurar eventos MESSAGES_UPSERT.",
          ],
          tags: ["Python", "Flask", "WhatsApp", "Evolution API", "Docker", "Redis"],
          repositoryUrl: "https://github.com/UarliBS/intelligent_customer_service_chatbot",
        },
        {
          name: "BI Retail",
          period: "2025",
          status: "Business Intelligence",
          description:
            "Protótipo front-end de Business Intelligence para varejo, feito com HTML, CSS e JavaScript puro.",
          bullets: [
            "Login simulado por cargo com controle de acesso por perfil.",
            "Módulos de vendas, estoque, clientes, campanhas e relatórios de margem.",
            "Filtros globais, gráficos em canvas, tabelas dinâmicas e alertas simulados.",
            "Projeto sem backend, com dados e interações definidos diretamente no front-end.",
          ],
          tags: ["HTML", "CSS", "JavaScript", "Canvas", "Dashboard"],
          repositoryUrl: "https://github.com/UarliBS/BI-System",
        },
      ],
    },
    skills: {
      eyebrow: "Stack técnica",
      title: "O que",
      accent: "uso",
      groups: [
        { title: "Linguagens", items: ["Java 21", "TypeScript", "JavaScript", "Python"] },
        { title: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS"] },
        { title: "Backend", items: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "JPA / Hibernate", "Node.js", "Express", "OAuth2", "JWT"] },
        { title: "Banco de dados", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
        { title: "Infra / Deploy", items: ["Docker", "Vercel", "Render", "Cloudflare R2", "Resend"] },
        { title: "Ferramentas", items: ["Git", "GitHub", "OpenAPI", "Actuator", "Prometheus", "Grafana"] },
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
      repository: "View repository",
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
          tags: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker", "Cloudflare R2"],
          url: "https://www.buildingus.app",
        },
        {
          name: "E-Commerce Control",
          period: "Oct 2025",
          status: "Microservices",
          description:
            "Java/Spring Boot microservices architecture for inventory control and product storefront display.",
          bullets: [
            "Two main services: Warehouse for stock management and Storefront for product display.",
            "Synchronous HTTP communication and asynchronous messaging through RabbitMQ/CloudAMQP.",
            "Persistence with Spring Data JPA and H2 for the test environment.",
            "DTO/entity mapping with MapStruct, boilerplate reduction with Lombok and API docs with SpringDoc OpenAPI.",
          ],
          tags: ["Java", "Spring Boot", "RabbitMQ", "JPA", "MapStruct", "OpenAPI"],
          repositoryUrl: "https://github.com/UarliBS/e-commerce_control",
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
          tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Google Maps"],
          repositoryUrl: "https://github.com/UarliBS/LocalInfo-Back",
        },
        {
          name: "Java Bank",
          period: "2025",
          status: "Java",
          description:
            "Java banking system built to consolidate OOP concepts, simulating accounts, PIX transfers, investments and transaction history.",
          bullets: [
            "Account creation with initial balance, PIX keys, deposits, withdrawals and transfers.",
            "Investment wallets with creation, updates, earnings simulation and withdrawals.",
            "Transaction history/auditing with Money and MoneyAudit.",
            "Use of inheritance, encapsulation, polymorphism, records, enums, Streams and custom exceptions.",
          ],
          tags: ["Java", "Lombok", "OOP", "Streams"],
          repositoryUrl: "https://github.com/UarliBS/Java-Bank",
        },
        {
          name: "Intelligent Customer Service Chatbot",
          period: "2025",
          status: "WhatsApp chatbot",
          description:
            "WhatsApp customer service chatbot for an auto repair shop, built with Python, Flask and Evolution API.",
          bullets: [
            "Flask webhook to receive messages and answer through WhatsApp.",
            "Interactive menu with services, prices and appointment simulation.",
            "Evolution API with Baileys, PostgreSQL and Redis through Docker Compose.",
            "Local exposure with ngrok to configure MESSAGES_UPSERT events.",
          ],
          tags: ["Python", "Flask", "WhatsApp", "Evolution API", "Docker", "Redis"],
          repositoryUrl: "https://github.com/UarliBS/intelligent_customer_service_chatbot",
        },
        {
          name: "BI Retail",
          period: "2025",
          status: "Business Intelligence",
          description:
            "Retail Business Intelligence front-end prototype built with plain HTML, CSS and JavaScript.",
          bullets: [
            "Simulated role-based login with access control by profile.",
            "Sales, inventory, customer, campaign and margin-report modules.",
            "Global filters, canvas charts, dynamic tables and simulated alerts.",
            "No backend dependency, with data and interactions defined directly in the front-end.",
          ],
          tags: ["HTML", "CSS", "JavaScript", "Canvas", "Dashboard"],
          repositoryUrl: "https://github.com/UarliBS/BI-System",
        },
      ],
    },
    skills: {
      eyebrow: "Technical stack",
      title: "What",
      accent: "I use",
      groups: [
        { title: "Languages", items: ["Java 21", "TypeScript", "JavaScript", "Python"] },
        { title: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS"] },
        { title: "Backend", items: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "JPA / Hibernate", "Node.js", "Express", "OAuth2", "JWT"] },
        { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
        { title: "Infra / Deploy", items: ["Docker", "Vercel", "Render", "Cloudflare R2", "Resend"] },
        { title: "Tools", items: ["Git", "GitHub", "OpenAPI", "Actuator", "Prometheus", "Grafana"] },
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
          <figure className="profile-photo-card" data-reveal>
            <img src="/warllen-profile.png" alt="Foto de Warllen Barreiros" />
          </figure>
        </section>

        <SectionHeader
          id="journey"
          eyebrow={t.journey.eyebrow}
          title={t.journey.title}
          accent={t.journey.accent}
        />
        <section className="timeline">
          {t.journey.items.map((item, index) => (
            <article className="timeline-item" data-reveal key={`${item.period}-${item.title}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-period">
                <time>{item.period}</time>
              </div>
              <div className="timeline-content">
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
  const [failed, setFailed] = useState(false);
  const logo = getTechLogo(label);

  if (logo.slug === "local-java-cup") {
    return <JavaCupLogo />;
  }

  if (logo.slug === "local-rabbitmq") {
    return <RabbitMqLogo />;
  }

  if (logo.slug === "local-css3") {
    return <CssLogo />;
  }

  if (logo.slug && !failed) {
    const color = logo.color ?? "4B8CFF";
    return (
      <img
        className="tech-logo"
        src={`https://cdn.simpleicons.org/${logo.slug}/${color}`}
        alt=""
        loading="lazy"
        aria-hidden="true"
        onError={() => setFailed(true)}
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
    ["java", { slug: "local-java-cup" }],
    ["lombok", { fallback: "LB" }],
    ["streams", { fallback: "ST" }],
    ["next.js", { slug: "nextdotjs", color: "FFFFFF" }],
    ["next", { slug: "nextdotjs", color: "FFFFFF" }],
    ["tailwind", { slug: "tailwindcss", color: "06B6D4" }],
    ["pwa", { fallback: "PWA" }],
    ["service worker", { fallback: "SW" }],
    ["typescript", { slug: "typescript", color: "3178C6" }],
    ["python", { slug: "python", color: "3776AB" }],
    ["flask", { slug: "flask", color: "FFFFFF" }],
    ["whatsapp", { slug: "whatsapp", color: "25D366" }],
    ["evolution api", { fallback: "EV" }],
    ["redis", { slug: "redis", color: "FF4438" }],
    ["oop", { fallback: "OO" }],
    ["chatbot", { fallback: "AI" }],
    ["spring security", { slug: "springsecurity", color: "6DB33F" }],
    ["spring data", { slug: "spring", color: "6DB33F" }],
    ["spring boot", { slug: "springboot", color: "6DB33F" }],
    ["oauth2", { fallback: "OA" }],
    ["microservices", { fallback: "MS" }],
    ["node", { slug: "nodedotjs", color: "5FA04E" }],
    ["express", { slug: "express", color: "FFFFFF" }],
    ["react", { slug: "react", color: "61DAFB" }],
    ["mysql", { slug: "mysql", color: "4479A1" }],
    ["postgresql", { slug: "postgresql", color: "4169E1" }],
    ["neon", { fallback: "NE" }],
    ["sql", { fallback: "SQL" }],
    ["dashboard", { fallback: "BI" }],
    ["canvas", { fallback: "CV" }],
    ["data", { fallback: "DB" }],
    ["bi", { fallback: "BI" }],
    ["flyway", { fallback: "FW" }],
    ["mongodb", { slug: "mongodb", color: "47A248" }],
    ["hibernate", { slug: "hibernate", color: "BCAE79" }],
    ["jpa", { slug: "hibernate", color: "BCAE79" }],
    ["docker", { slug: "docker", color: "2496ED" }],
    ["vercel", { slug: "vercel", color: "FFFFFF" }],
    ["render", { slug: "render", color: "46E3B7" }],
    ["cloudflare r2", { slug: "cloudflare", color: "F38020" }],
    ["resend", { fallback: "RS" }],
    ["s3", { slug: "amazons3", color: "569A31" }],
    ["web push", { fallback: "WP" }],
    ["prometheus", { slug: "prometheus", color: "E6522C" }],
    ["grafana", { slug: "grafana", color: "F46800" }],
    ["actuator", { fallback: "AC" }],
    ["playwright", { slug: "playwright", color: "2EAD33" }],
    ["testcontainers", { slug: "testcontainers", color: "2496ED" }],
    ["rabbit", { slug: "local-rabbitmq" }],
    ["cloudamqp", { slug: "local-rabbitmq" }],
    ["google maps", { slug: "googlemaps", color: "4285F4" }],
    ["jwt", { slug: "jsonwebtokens", color: "D63AFF" }],
    ["json", { slug: "json", color: "F5F5F5" }],
    ["github", { slug: "github", color: "FFFFFF" }],
    ["git", { slug: "git", color: "F05032" }],
    ["dbeaver", { fallback: "DB" }],
    ["openapi", { slug: "openapiinitiative", color: "6BA539" }],
    ["bash", { slug: "gnubash", color: "4EAA25" }],
    ["vite", { slug: "vite", color: "646CFF" }],
    ["html", { slug: "html5", color: "E34F26" }],
    ["css", { slug: "local-css3" }],
    ["axios", { slug: "axios", color: "5A29E4" }],
    ["mapstruct", { fallback: "MS" }],
    ["lombok", { fallback: "LB" }],
  ];

  const match = logos.find(([term]) =>
    term.length <= 3 ? normalized === term : normalized.includes(term),
  );
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

function JavaCupLogo() {
  return (
    <svg
      className="tech-logo java-cup-logo"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.6 4.2c2.9 2.4-4.2 4.7-1.8 7.5 1 1.2 2.4 1.8 2.4 1.8s-4.5-.7-5.2-3.1c-.6-2.1 4.1-3.8 4.6-6.2Z"
        fill="#F89820"
      />
      <path
        d="M18.6 2.8c3.4 3.3-5.6 5.4-2.2 9.1.8.9 1.7 1.4 1.7 1.4s-3.1-.4-4.2-2.3c-1.7-2.9 5.2-4.5 4.7-8.2Z"
        fill="#F89820"
      />
      <path
        d="M8.5 17.8c3.9 1.1 10.8.9 14.2-.3.8-.3 1.4-.7 1.4-1.1 0-.8-2.3-1.4-4.2-1.7l.5-.4c3.9.5 6.6 1.6 6.6 3 0 2.4-7.4 4-14.3 3.3-4.6-.5-7.7-1.8-7.7-3.1 0-.9 1.4-1.7 3.9-2.2l-.4.5c-1.2.3-1.9.7-1.9 1.1 0 .3.7.7 1.9.9Z"
        fill="#5382A1"
      />
      <path
        d="M10.2 22.2c4.3.8 9.9.5 13.1-.7 0 0-.5 1.1-5.6 1.9-5.8.9-10.4-.2-10.4-1.5 0-.5.8-.9 2.3-1.2 0 0-.3.3-.4.6-.1.4.3.7 1 .9Z"
        fill="#5382A1"
      />
      <path
        d="M24.5 23.8c-5 2-15.6 1.8-15.6.3 0-.4.6-.8 1.6-1.1 0 0-.3.3-.2.6.4 1 8.2 1.2 14.2.2Z"
        fill="#5382A1"
      />
      <path
        d="M11.2 27.2c4.8.8 12.2-.1 12.4-1.6 0 0 .4.5-.5 1.1-2.1 1.5-10.3 1.8-13.1.5-.9-.4-.5-1 .2-1.4 0 0-.2.8 1 1.4Z"
        fill="#5382A1"
      />
    </svg>
  );
}

function RabbitMqLogo() {
  return (
    <svg className="tech-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M5 6.8C5 5.8 5.8 5 6.8 5h2.4c1 0 1.8.8 1.8 1.8v5.4h2.5V6.8c0-1 .8-1.8 1.8-1.8h2.4c1 0 1.8.8 1.8 1.8v5.4h4.7c1 0 1.8.8 1.8 1.8v10.2c0 1-.8 1.8-1.8 1.8H6.8c-1 0-1.8-.8-1.8-1.8V6.8Z"
        fill="#FF6600"
      />
      <path d="M19.6 17.1h3.7v3.7h-3.7v-3.7Z" fill="#fff" />
      <path d="M13.5 17.1h3.7v3.7h-3.7v-3.7Z" fill="#fff" opacity="0.92" />
    </svg>
  );
}

function CssLogo() {
  return (
    <svg className="tech-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 3h20l-1.8 22.1L16 29l-8.2-3.9L6 3Z" fill="#1572B6" />
      <path d="M16 5v21.8l6.5-3 1.5-18.8H16Z" fill="#33A9DC" />
      <path
        d="M10.1 9.4h11.8l-.3 3.1h-8.1l.2 2.6h7.7l-.6 6.2-4.8 2.1-4.9-2.1-.3-3.5h3.1l.1 1.4 2 .8 2-.8.2-1.5h-7.7l-.8-8.3Z"
        fill="#fff"
      />
    </svg>
  );
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
