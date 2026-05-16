import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "NomadGo",
    description:
      "NomadGo is a full-stack travel orchestration platform that transforms simple destination ideas into high-fidelity, print-ready editorial itineraries.",
    image: "/images/projects/nomadgooo.png",
    techStack: [
      "Nextjs",
      "Reactjs",
      "TypeScript",
      "Redis",
      "BullMQ",
      "PostgreSQL",
      "Cloudflare R2",
    ],
    liveUrl: "https://nomadgoo.vercel.app",
    githubUrl: "https://github.com/Rupesh-Piwal/nomadgo",
    featured: true,
  },
  {
    id: "2",
    name: "Snapcut",
    description:
      "Snap-Cut is a lightweight Loom alternative that runs entirely in the browser. Users can record their screen, customize the look, and instantly generate a shareable video link — no desktop app required..",
    image: "/images/projects/Snapcut-Banner.png",
    techStack: [
      "Nextjs",
      "AWS",
      "TypeScript",
      "Web Workers",
      "Canvas API",
      "PostgreSQL",
    ],
    liveUrl: "https://snapcutt.vercel.app/",
    githubUrl: "https://github.com/Rupesh-Piwal/snapcut/blob/main/README.md",
    featured: true,
  },
  {
    id: "3",
    name: "VidVault",
    description:
      "Built a reliable system to upload and process videos that handles failures smoothly and provides real-time updates, secure sharing, previews, and instant alerts.",
    image: "/images/projects/vidvault1.png",
    techStack: [
      "Nextjs",
      "AWS",
      "Redis",
      "BullMQ",
      "PostgreSQL",
      "Nodejs",
      "Express",
    ],
    liveUrl: "https://vidsvault.vercel.app",
    githubUrl:
      "https://github.com/Rupesh-Piwal/video-vault/blob/main/README.md",
    featured: true,
  },
  {
    id: "4",
    name: "Finsync",
    description:
      "Built a finance app that tracks spending in real time, scans receipts automatically, sends smart alerts and reports, and stays secure and reliable at scale.",
    image: "/images/projects/finsync1.png",
    techStack: ["Nextjs", "PostgreSQL", "Gemini AI", "Node.js", "Prisma"],
    liveUrl: "https://finsyncai.vercel.app/",
    githubUrl: "https://github.com/Rupesh-Piwal/finsync/blob/main/README.md",
    featured: true,
  },
  {
    id: "5",
    name: "Ichofy",
    description:
      "Built a fast and scalable web app for 1000+ users with real-time chat, smooth state management, and an analytics dashboard that helps make better decisions.",
    image: "/images/projects/ichofy1.png",
    techStack: ["Reactjs", "Zustand", "MongoDB", "Node.js", "Cloudinary"],
    liveUrl: "https://ichofy.onrender.com/",
    githubUrl: "https://github.com/Rupesh-Piwal/Ichofy/blob/main/Readme.md",
    featured: true,
  },
  {
    id: "6",
    name: "Talent Hire",
    description:
      "Built a scalable job board app with secure login, fast pages, and reliable data handling, contributing extensively to its development.",
    image: "/images/projects/TalentHire1.png",
    techStack: ["Nextjs", "TypeScript", "PostgreSQL", "Node.js"],
    liveUrl: "https://talent-hire-xi.vercel.app/",
    githubUrl: "https://github.com/Rupesh-Piwal/TalentHire",
    featured: true,
  },
];
