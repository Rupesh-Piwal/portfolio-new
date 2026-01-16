import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Rupesh Piwal",
  role: "Web/Browser Engineer",
  location: "Pune",
  locationIcon: "map-pin",
  bio: "I build interactive web apps using TypeScript, React, Next.js, and Tailwind CSS. With a focus on UI design. Enthusiastic about creating seamless user experiences, driven by a keen eye for design.",
  avatar: "/images/Goat.jpg",
  available: true,
  availableText: "Available for Work",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/rupeshpiwal",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rupeshpiwal",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rupeshpiwal",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:rupesh@example.com",
      icon: "mail",
    },
  ],
};

export const CONTRIBUTION_LEVELS = {
  0: "var(--contrib-0)",
  1: "var(--contrib-1)",
  2: "var(--contrib-2)",
  3: "var(--contrib-3)",
  4: "var(--contrib-4)",
} as const;

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;
