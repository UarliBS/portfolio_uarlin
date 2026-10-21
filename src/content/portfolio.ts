export type Locale = "pt" | "en";
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
  details?: string[];
  tags?: string[];
};

export type Copy = {
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
    highlights: { value: string; label: string }[];
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
    description: string;
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

export const links = {
  github: "https://github.com/UarliBS",
  linkedin: "https://www.linkedin.com/in/warllenbs",
  email: "mailto:warllen_1404@hotmail.com",
};

export const copy: Record<Locale, Copy> = {
  pt: {
    nav: ["Sobre", "Experiência", "Projetos", "Tecnologias", "Contato"],
    actions: {
      projects: "Ver projetos",
      contact: "Entrar em contato",
      resume: "Download CV",
      openProject: "Ver projeto",
      repository: "Ver repositório",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    hero: {
      eyebrow: "Desenvolvedor de software",
      name: "Warllen",
      surname: "Barreiros",
      role: "Backend · Desenvolvimento assistido por IA",
      description:
        "Desenvolvo aplicações e APIs com foco em regras de negócio, dados e integrações. Utilizo agentes e ferramentas de IA no planejamento, na implementação e nos testes, com revisão de código e validação dos resultados.",
      terminal: [
        "focus = ['backend', 'AI-assisted dev'];",
        "stack = ['Node.js', 'TypeScript', 'Java'];",
        "agents.use({ context, skills, tools });",
        "workflow.finish({ tests, humanReview });",
      ],
      highlights: [
        {
          value: "4+",
          label: "projetos completos",
        },
        {
          value: "12+",
          label: "tecnologias na stack",
        },
        {
          value: "2+",
          label: "anos de estudos práticos",
        },
      ],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Quem",
      accent: "sou eu",
      paragraphs: [
        "Sou formado em Análise e Desenvolvimento de Sistemas e graduando em Engenharia de Software. Meu foco é desenvolvimento backend e IA aplicada à engenharia de software.",
        "Atuo como Estagiário de Desenvolvimento na Brasil Software e Desenvolvedor de Back-end na COUDE Jr, trabalhando com aplicações, APIs, regras de negócio, bancos de dados e testes automatizados.",
        "Exploro agentes especializados, skills personalizadas e ferramentas como Claude, Codex e ChatGPT para apoiar o planejamento técnico, a implementação, a investigação de erros, a refatoração e a documentação.",
        "Integro essas ferramentas a fluxos estruturados, com instruções, contexto de projeto e integrações via MCP. Mantenho supervisão humana, revisão do código e validação das soluções: fornecer contexto e verificar resultados fazem parte do desenvolvimento.",
        "Minha stack inclui Node.js, TypeScript, NestJS, PHP, Laravel, Java, Spring Boot, PostgreSQL, Redis e Docker.",
      ],
    },
    journey: {
      eyebrow: "Experiência e formação",
      title: "Minha",
      accent: "trajetória",
      items: [
        {
          period: "Atual",
          title: "Estagiário de Desenvolvimento",
          place: "Brasil Software",
          description:
            "Desenvolvimento de aplicações independentes para problemas específicos de mercado, integradas a sistemas ERP e gerenciadas por workspaces.",
          details: [
            "Implementação e evolução de funcionalidades, validação do comportamento das aplicações, investigação de logs e resolução de falhas de integração.",
            "Uso de IA, agentes e skills para apoiar o desenvolvimento e as correções, com revisão de código, testes manuais e automatizados, documentação técnica e configuração de ambientes.",
          ],
          tags: [
            "Flutter",
            "Node.js",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Jest",
            "Flutter Test",
            "Docker",
            "APIs REST",
            "Jira",
            "Claude",
            "Codex",
          ],
        },
        {
          period: "Atual",
          title: "Desenvolvedor de Back-end",
          place: "COUDE Jr",
          description:
            "Desenvolvimento e evolução de um CRM educacional para centralizar informações de alunos, matrículas, leads e processos administrativos.",
          details: [
            "Implementação de regras de negócio, integração com banco de dados e testes automatizados. Configuração do ambiente backend com PHP 8.4 FPM.",
            "Implementação de rate limiting no login: 5 requisições por 60 segundos por combinação de e-mail normalizado e IP, com resposta HTTP 429, mensagem JSON e cabeçalho Retry-After.",
            "Colaboração em equipe com Scrum, Git, branches, pull requests e code reviews, incluindo integração entre módulos e entendimento dos requisitos da escola.",
          ],
          tags: [
            "PHP 8.4",
            "Laravel",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Nginx",
            "Postman",
          ],
        },
        {
          period: "Em curso",
          title: "Engenharia de Software",
          place: "UNIFAN - Centro Universitário Nobre",
          description:
            "Graduação em andamento, complementando a prática de desenvolvimento com fundamentos de engenharia de software.",
        },
        {
          period: "Concluído",
          title: "Análise e Desenvolvimento de Sistemas",
          place: "Escola Técnica SENAI",
          description:
            "Formação concluída, com base em programação orientada a objetos, desenvolvimento web e bancos de dados.",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Meus projetos",
      accent: "pessoais",
      items: [
        {
          name: "BuildingUS",
          period: "2026",
          status: "Projeto pessoal full stack",
          description:
            "Plataforma full stack pessoal desenvolvida com Java, Spring Boot, Next.js, React, TypeScript e PostgreSQL.",
          bullets: [
            "Backend com Java e Spring Boot.",
            "Frontend com Next.js, React e TypeScript.",
            "PostgreSQL como banco de dados.",
            "O projeto envolve segurança, testes, observabilidade e infraestrutura de deploy.",
          ],
          tags: [
            "Java",
            "Spring Boot",
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
          ],
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
          tags: [
            "Java",
            "Spring Boot",
            "RabbitMQ",
            "JPA",
            "MapStruct",
            "OpenAPI",
          ],
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
          tags: [
            "React",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
            "Google Maps",
          ],
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
          tags: [
            "Python",
            "Flask",
            "WhatsApp",
            "Evolution API",
            "Docker",
            "Redis",
          ],
          repositoryUrl:
            "https://github.com/UarliBS/intelligent_customer_service_chatbot",
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
      eyebrow: "Tecnologias e ferramentas",
      title: "Conhecimentos",
      accent: "na prática",
      description:
        "Ferramentas que conheço, organizadas por área. As tecnologias utilizadas em cada experiência estão indicadas na trajetória profissional.",
      groups: [
        {
          title: "Backend",
          items: [
            "Node.js",
            "TypeScript",
            "NestJS",
            "Java",
            "Spring Boot",
            "PHP",
            "Laravel",
          ],
        },
        {
          title: "Frontend / Full stack",
          items: ["React", "Next.js", "TypeScript"],
        },
        {
          title: "Dados / ORM",
          items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
        },
        {
          title: "Testes / APIs",
          items: ["Jest", "Flutter Test", "Postman", "APIs REST"],
        },
        {
          title: "Infra / Ferramentas",
          items: ["Docker", "Nginx", "Git", "GitHub", "Jira"],
        },
        {
          title: "IA aplicada",
          items: [
            "Claude",
            "Codex",
            "ChatGPT",
            "Agentes especializados",
            "Skills personalizadas",
            "Instruções e contexto de projeto",
            "Integrações via MCP",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contatos",
      title: "Entre em contato",
      accent: "comigo",
      text: "Aberto a conexões e conversas sobre engenharia de software, desenvolvimento backend, agentes de IA e automação do desenvolvimento.",
    },
  },
  en: {
    nav: ["About", "Experience", "Projects", "Technologies", "Contact"],
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
      eyebrow: "Software Developer",
      name: "Warllen",
      surname: "Barreiros",
      role: "Backend · AI-Assisted Development",
      description:
        "I develop applications and APIs focused on business rules, data and integrations. I use AI agents and tools for planning, implementation and testing, with code review and validation of the results.",
      terminal: [
        "focus = ['backend', 'AI-assisted dev'];",
        "stack = ['Node.js', 'TypeScript', 'Java'];",
        "agents.use({ context, skills, tools });",
        "workflow.finish({ tests, humanReview });",
      ],
      highlights: [
        {
          value: "4+",
          label: "completed projects",
        },
        {
          value: "12+",
          label: "technologies in stack",
        },
        {
          value: "2+",
          label: "years of practical study",
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Who",
      accent: "I am",
      paragraphs: [
        "I have a degree in Systems Analysis and Development and am studying Software Engineering. My focus is backend development and AI applied to software engineering.",
        "I work as a Development Intern at Brasil Software and a Backend Developer at COUDE Jr, working on applications, APIs, business rules, databases and automated tests.",
        "I explore specialized agents, custom skills and tools such as Claude, Codex and ChatGPT to support technical planning, implementation, debugging, refactoring and documentation.",
        "I integrate these tools into structured workflows using instructions, project context and MCP integrations. I maintain human oversight, code review and solution validation: providing context and checking results are part of the development process.",
        "My stack includes Node.js, TypeScript, NestJS, PHP, Laravel, Java, Spring Boot, PostgreSQL, Redis and Docker.",
      ],
    },
    journey: {
      eyebrow: "Experience and education",
      title: "My",
      accent: "journey",
      items: [
        {
          period: "Current",
          title: "Development Intern",
          place: "Brasil Software",
          description:
            "Development of independent applications for specific market needs, integrated with ERP systems and managed through workspaces.",
          details: [
            "Implementation and evolution of features, application behavior validation, log investigation and resolution of integration issues.",
            "Use of AI tools, agents and skills to support development and fixes, with code review, manual and automated testing, technical documentation and development environment setup.",
          ],
          tags: [
            "Flutter",
            "Node.js",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Jest",
            "Flutter Test",
            "Docker",
            "REST APIs",
            "Jira",
            "Claude",
            "Codex",
          ],
        },
        {
          period: "Current",
          title: "Backend Developer",
          place: "COUDE Jr",
          description:
            "Development and evolution of an educational CRM to centralize student information, enrollment, leads and administrative processes.",
          details: [
            "Implementation of business rules, database integration and automated tests. Backend environment setup with PHP 8.4 FPM.",
            "Login rate limiting: 5 requests per 60 seconds for each normalized email and IP combination, with an HTTP 429 response, a JSON message and the Retry-After header.",
            "Team collaboration using Scrum, Git, branches, pull requests and code reviews, including module integration and understanding the school’s requirements.",
          ],
          tags: [
            "PHP 8.4",
            "Laravel",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Nginx",
            "Postman",
          ],
        },
        {
          period: "In progress",
          title: "Software Engineering",
          place: "UNIFAN - Centro Universitário Nobre",
          description:
            "Ongoing degree, complementing practical development work with software engineering fundamentals.",
        },
        {
          period: "Completed",
          title: "Systems Analysis and Development",
          place: "SENAI Technical School",
          description:
            "Completed studies with a foundation in object-oriented programming, web development and databases.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "My personal",
      accent: "projects",
      items: [
        {
          name: "BuildingUS",
          period: "2026",
          status: "Personal full-stack project",
          description:
            "Personal full-stack platform developed with Java, Spring Boot, Next.js, React, TypeScript and PostgreSQL.",
          bullets: [
            "Backend with Java and Spring Boot.",
            "Frontend with Next.js, React and TypeScript.",
            "PostgreSQL database.",
            "The project involves security, testing, observability and deployment infrastructure.",
          ],
          tags: [
            "Java",
            "Spring Boot",
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
          ],
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
          tags: [
            "Java",
            "Spring Boot",
            "RabbitMQ",
            "JPA",
            "MapStruct",
            "OpenAPI",
          ],
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
          tags: [
            "React",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
            "Google Maps",
          ],
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
          tags: [
            "Python",
            "Flask",
            "WhatsApp",
            "Evolution API",
            "Docker",
            "Redis",
          ],
          repositoryUrl:
            "https://github.com/UarliBS/intelligent_customer_service_chatbot",
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
      eyebrow: "Technologies and tools",
      title: "Practical",
      accent: "knowledge",
      description:
        "Tools I know, organized by area. The technologies used in each role are listed in the professional experience section.",
      groups: [
        {
          title: "Backend",
          items: [
            "Node.js",
            "TypeScript",
            "NestJS",
            "Java",
            "Spring Boot",
            "PHP",
            "Laravel",
          ],
        },
        {
          title: "Frontend / Full stack",
          items: ["React", "Next.js", "TypeScript"],
        },
        {
          title: "Data / ORM",
          items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
        },
        {
          title: "Testing / APIs",
          items: ["Jest", "Flutter Test", "Postman", "REST APIs"],
        },
        {
          title: "Infra / Tools",
          items: ["Docker", "Nginx", "Git", "GitHub", "Jira"],
        },
        {
          title: "Applied AI",
          items: [
            "Claude",
            "Codex",
            "ChatGPT",
            "Specialized agents",
            "Custom skills",
            "Instructions and project context",
            "MCP integrations",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contacts",
      title: "Let's",
      accent: "talk",
      text: "Open to connections and conversations about software engineering, backend development, AI agents and development automation.",
    },
  },
};
