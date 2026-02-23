import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
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
    githubUrl:
      "https://github.com/Rupesh-Piwal/video-vault/blob/main/README.md",
    featured: true,
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
    name: "Ichofy",
    description:
      "Built a fast and scalable web app for 1000+ users with real-time chat, smooth state management, and an analytics dashboard that helps make better decisions.",
    image: "/images/ichofy1.png",
    techStack: ["Reactjs", "Zustand", "MongoDB", "Node.js", "Cloudinary"],
    liveUrl: "https://ichofy.onrender.com/",
    githubUrl: "https://github.com/Rupesh-Piwal/Ichofy/blob/main/Readme.md",
    featured: true,
  },
  {
    id: "5",
    name: "Talent Hire",
    description:
      "Built a scalable job board app with secure login, fast pages, and reliable data handling, contributing extensively to its development.",
    image: "/images/talenthire1.png",
    techStack: ["Nextjs", "TypeScript", "PostgreSQL", "Node.js"],
    liveUrl: "https://talent-hire-xi.vercel.app/",
    githubUrl: "https://github.com/Rupesh-Piwal/TalentHire",
    featured: true,
  },
];
