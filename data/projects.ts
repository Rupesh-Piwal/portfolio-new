import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "secure2fa",
        name: "Secure2FA",
        description:
            "A robust two-factor authentication system implementing Time-based One-Time Password (TOTP) for enhanced application security.",
        image: "/images/projects/secure2fa.png",
        techStack: ["JavaScript", "React", "Node.js", "MongoDB", "Java", "SpringBoot", "Spring Security"],
        liveUrl: "https://secure2fa.demo.com",
        githubUrl: "https://github.com/rupeshpiwal/secure2fa",
        featured: true,
    },
    {
        id: "blogzone",
        name: "BlogZone",
        description:
            "About Blog Zone: Blog Zone is a modern platform designed to empower writers, bloggers, and content creators to share their stories with the world.",
        image: "/images/projects/blogzone.png",
        techStack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://blogzone.demo.com",
        githubUrl: "https://github.com/rupeshpiwal/blogzone",
        featured: true,
    },
];
