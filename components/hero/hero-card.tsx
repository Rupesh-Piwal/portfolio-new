import Image from "next/image";
import { MapPin, FileText, Github, Linkedin, Mail, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "./availability-badge";
import { siteConfig } from "@/lib/constants";

export function HeroCard() {
    return (
        <section className="py-8">
            <div className="rounded-2xl border border-border bg-bg-secondary p-6 sm:p-8">
                {/* Top section: Avatar + Info */}
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Avatar */}
                    <div className="shrink-0">
                        <div className="h-24 w-24 overflow-hidden rounded-xl border border-border">
                            <Image
                                src={siteConfig.avatar}
                                alt={siteConfig.name}
                                width={96}
                                height={96}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-3">
                        {/* Name */}
                        <h1 className="text-2xl font-bold text-text-primary">
                            {siteConfig.name}
                        </h1>

                        {/* Role */}
                        <p className="font-mono text-base text-text-secondary">
                            {siteConfig.role}
                        </p>

                        {/* Location + Availability */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1.5 text-text-secondary">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">{siteConfig.location}</span>
                            </div>
                            <AvailabilityBadge
                                available={siteConfig.available}
                                text={siteConfig.availableText}
                            />
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <p className="mt-6 text-text-secondary leading-relaxed">
                    {siteConfig.bio}
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button asChild>
                        <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" />
                            Resume
                        </a>
                    </Button>

                    <Button asChild>
                        <a
                            href={siteConfig.socials.find((s) => s.name === "GitHub")?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4" />
                            Github
                        </a>
                    </Button>

                    <Button asChild>
                        <a
                            href={siteConfig.socials.find((s) => s.name === "LinkedIn")?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>
                    </Button>

                    <Button asChild>
                        <a
                            href={siteConfig.socials.find((s) => s.name === "Email")?.url}
                        >
                            <Mail className="h-4 w-4" />
                            E-Mail
                        </a>
                    </Button>

                    {/* Theme toggle placeholder - disabled */}
                    <Button variant="outline" disabled className="opacity-50">
                        <Sun className="h-4 w-4" />
                        light/dark
                    </Button>
                </div>
            </div>
        </section>
    );
}
