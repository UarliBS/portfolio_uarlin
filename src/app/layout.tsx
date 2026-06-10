import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Warllen Barreiros | Full Stack Developer",
  description:
    "Portfolio de Warllen Barreiros, desenvolvedor Full Stack em formacao com foco em Java, Spring Boot, React e APIs REST.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
