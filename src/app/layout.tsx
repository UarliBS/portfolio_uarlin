import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";
import "../styles.css";

const siteUrl = getSiteUrl();
const title = "Warllen Barreiros | Backend e IA aplicada";
const description =
  "Desenvolvedor de software com foco em backend e IA aplicada à engenharia de software. Node.js, TypeScript, Java e Spring Boot, com revisão de código e validação.";

export const metadata: Metadata = {
  title,
  description,
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: "/" } } : {}),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Warllen Barreiros",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
