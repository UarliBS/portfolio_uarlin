"use client";

import { useState } from "react";
import Image from "next/image";

type TechLogoData = {
  slug?: string;
  color?: string;
  fallback?: string;
};

export function TechLogo({ label }: { label: string }) {
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
    return (
      <Image
        width={18}
        height={18}
        unoptimized
        className="tech-logo"
        src={`/tech/${logo.slug}.svg`}
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
    ["s3", { fallback: "S3" }],
    ["web push", { fallback: "WP" }],
    ["prometheus", { slug: "prometheus", color: "E6522C" }],
    ["grafana", { slug: "grafana", color: "F46800" }],
    ["actuator", { fallback: "AC" }],
    ["playwright", { fallback: "PW" }],
    ["testcontainers", { fallback: "TC" }],
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
    <svg
      className="tech-logo"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      className="tech-logo"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 3h20l-1.8 22.1L16 29l-8.2-3.9L6 3Z" fill="#1572B6" />
      <path d="M16 5v21.8l6.5-3 1.5-18.8H16Z" fill="#33A9DC" />
      <path
        d="M10.1 9.4h11.8l-.3 3.1h-8.1l.2 2.6h7.7l-.6 6.2-4.8 2.1-4.9-2.1-.3-3.5h3.1l.1 1.4 2 .8 2-.8.2-1.5h-7.7l-.8-8.3Z"
        fill="#fff"
      />
    </svg>
  );
}
