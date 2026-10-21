"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { copy, type Locale } from "./content/portfolio";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { JourneySection } from "./components/JourneySection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

let memoryLocale: Locale = "pt";

function readLocale(): Locale {
  try {
    const saved = localStorage.getItem("portfolio-locale");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* Storage can be disabled. */
  }
  return memoryLocale;
}

function subscribeLocale(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-locale-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-locale-change", onChange);
  };
}

function useReveal(locale: Locale) {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight)
        element.classList.add("reveal-pending");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
  }, [locale]);
}

function App() {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readLocale,
    () => "pt" as Locale,
  );
  const t = copy[locale];
  const navTargets = ["about", "journey", "projects", "skills", "contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  function changeLocale(next: Locale) {
    memoryLocale = next;
    setMenuOpen(false);
    try {
      localStorage.setItem("portfolio-locale", next);
    } catch {
      /* Use the in-memory preference when storage is unavailable. */
    }
    window.dispatchEvent(new Event("portfolio-locale-change"));
  }

  useReveal(locale);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <a className="skip-link" href="#main-content">
        {locale === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <header
        className="nav"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
            document.getElementById("menu-toggle")?.focus();
          }
        }}
      >
        <a className="brand" href="#top" aria-label="Warllen Barreiros">
          WARLLEN BARREIROS
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (locale === "pt" ? "Fechar" : "Close") : "Menu"}
        </button>
        <nav
          id="main-nav"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          aria-label={
            locale === "pt" ? "Navegação principal" : "Main navigation"
          }
        >
          {t.nav.map((item, index) => (
            <a
              href={`#${navTargets[index]}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div
          className="locale-switch"
          role="group"
          aria-label={locale === "pt" ? "Selecionar idioma" : "Select language"}
        >
          <button
            className={locale === "pt" ? "active" : ""}
            type="button"
            aria-pressed={locale === "pt"}
            lang="pt-BR"
            aria-label="Português"
            onClick={() => changeLocale("pt")}
          >
            PT
          </button>
          <button
            className={locale === "en" ? "active" : ""}
            type="button"
            aria-pressed={locale === "en"}
            lang="en"
            aria-label="English"
            onClick={() => changeLocale("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <div id="top" />
        <HeroSection t={t} />

        <AboutSection t={t} locale={locale} />

        <JourneySection t={t} />

        <ProjectsSection t={t} />

        <SkillsSection t={t} />

        <ContactSection t={t} />
      </main>

      <footer>
        <span>Warllen Barreiros</span>
        <span>warllen_1404@hotmail.com</span>
      </footer>
    </div>
  );
}

export default App;
