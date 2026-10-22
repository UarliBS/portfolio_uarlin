# Portfólio — Warllen Barreiros

Portfólio pessoal desenvolvido com Next.js, apresentando minha atuação em desenvolvimento backend e IA aplicada à engenharia de software, experiências profissionais, formação, projetos e formas de contato.

## Sobre o Projeto

Este portfólio apresenta:

- **Hero Section** — apresentação inicial com animações suaves e chamada para projetos/currículo
- **Sobre Mim** — bio, foto de perfil e contexto da minha jornada na tecnologia
- **Trajetória** — timeline com atuação na Brasil Software e na COUDE Jr, além da formação acadêmica
- **Projetos** — galeria com projetos pessoais, acadêmicos e aplicações reais
- **Tecnologias** — stack técnica organizada por categorias e com ícones
- **Contato** — links para e-mail, LinkedIn e GitHub
- **Internacionalização** — suporte para português e inglês

## Tecnologias Utilizadas

- **Next.js 16** — framework React com App Router
- **React 19** — biblioteca para construção da interface
- **TypeScript** — tipagem estática
- **CSS** — estilização customizada, tema dark e responsividade
- **Vercel** — deploy e hospedagem

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/UarliBS/portfolio_uarlin.git
cd portfolio_uarlin

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Build

```bash
npm run build
npm run start
```

## Estrutura do Projeto

```text
src/
├── app/
│   ├── layout.tsx      # Layout raiz e metadados
│   └── page.tsx        # Página principal
├── components/         # Seções e componentes compartilhados
├── content/portfolio.ts # Conteúdo e traduções PT/EN
├── App.tsx             # Navegação, idioma e composição da página
└── styles.css          # Estilos globais, responsividade e animações

public/
├── WarllenBarreiros-FS.pdf
└── warllen-profile.png
```

## Links

- GitHub: [github.com/UarliBS](https://github.com/UarliBS)
- LinkedIn: [linkedin.com/in/warllenbs](https://www.linkedin.com/in/warllenbs)
- E-mail: [warllen_1404@hotmail.com](mailto:warllen_1404@hotmail.com)

## Deploy

Projeto hospedado na Vercel.

Desenvolvido por Warllen Barreiros © 2026

## Verificação

- `npm run lint`: análise estática com ESLint.
- `npm run typecheck`: verificação de tipos.
- `npm run check`: lint, tipos e build de produção.

## Domínio e compartilhamento

Copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_SITE_URL` com a origem real de produção (incluindo https). Essa variável configura a URL canônica, o sitemap e a referência do sitemap em robots.txt. Sem ela, o sitemap fica vazio para não publicar um domínio incorreto. Configure-a também na hospedagem antes do build.

A imagem de compartilhamento é gerada em `/opengraph-image`. A foto otimizada em WebP e os ícones SVG são servidos localmente; a imagem PNG original permanece disponível como fonte. Os ícones vêm do Simple Icons; consulte `public/tech/README.md` para atribuição e marcas.

O idioma escolhido persiste no navegador. Sem JavaScript, o conteúdo em português continua visível. A navegação mobile oferece menu com estado acessível e fechamento por Escape.
