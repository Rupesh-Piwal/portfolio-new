import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "VidVault",
    description:
      "Engineered a scalable video upload system with AWS S3 presigned URLs and multipart uploads, ensuring resumable and failure-safe uploads.Built resilient background jobs with BullMQ + Redis (idempotency, exponential backoff), offloaded heavy tasks to workers, and delivered a real-time dashboard with secure share links, previews, and instant alerts.",
    image: "/images/vidvault.png",
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
    id: "2",
    name: "Finsync",
    description:
      "Built an AI-powered finance app with real-time tracking, smart budgeting, and dynamic dashboards.Used Gemini 1.5 Flash for 90%+ accurate receipt scanning and auto-logging of transactions.Automated alerts, reminders, and reports using Inngest to boost engagement and retention.Secured access with Arcjet rate limiting and bot protection for safe, scalable performance.",
    image: "/images/finsync.png",
    techStack: ["Nextjs", "PostgreSQL", "Gemini AI", "Node.js", "Prisma"],
    liveUrl: "https://finsyncai.vercel.app/",
    githubUrl: "https://github.com/Rupesh-Piwal/finsync/blob/main/README.md",
    featured: true,
  },
  {
    id: "3",
    name: "Ichofy",
    description:
      "Architected a high-performance MERN web app for 1000+ users with optimized queries and Zustand state management. Built a WebSocket chat with sub-50ms latency. Developed an analytics dashboard using MongoDB Aggregation, automating reports and improving decision-making.",
    image: "/images/ichofy.png",
    techStack: ["Reactjs", "Zustand", "MongoDB", "Node.js", "Cloudinary"],
    liveUrl: "https://ichofy.onrender.com/",
    githubUrl: "https://github.com/Rupesh-Piwal/Ichofy/blob/main/Readme.md",
    featured: true,
  },
  {
    id: "4",
    name: "Talent Hire",
    description:
      "Developed Talent Hire, a scalable Job Board Platform using Next.js, PostgreSQL, Prisma ORM, and Clerk Auth for server-side rendering, efficient data handling, and secure user authentication, contributing to 80+ commits.",
    image: "/images/talenthire.png",
    techStack: ["Nextjs", "TypeScript", "PostgreSQL", "Node.js"],
    liveUrl: "https://talent-hire-xi.vercel.app/",
    githubUrl: "https://github.com/Rupesh-Piwal/TalentHire",
    featured: true,
  },
];
