// Portfolio TypeScript Interfaces

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  type: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  details: string[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  locationIcon: string;
  bio: string;
  avatar: string;
  available: boolean;
  availableText: string;
  resumeUrl: string;
  socials: SocialLink[];
}
