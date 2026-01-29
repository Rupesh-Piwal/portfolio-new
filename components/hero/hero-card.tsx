import Image from "next/image";
import { MapPin, FileText, Github, Linkedin, Mail, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "./availability-badge";
import { siteConfig } from "@/lib/constants";
import { AnimatedTextSlider } from "@/components/animated-text-slider";

export function HeroCard() {
  return (
    <section className="lg:py-8">
      <div className="glass-card glass-card-hover glass-border-glow rounded-2xl lg:p-6 pt-6 sm:p-8">
        {/* Top section: Avatar + Info */}
        <div className="flex flex-row gap-6 ">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="h-20 w-20 overflow-hidden rounded-xl border border-border">
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
          <div className="flex flex-col justify-center ">
            {/* Name */}
            <h1 className="text-[20px] lg:text-3xl font-bold text-text-primary">
              {siteConfig.name}
            </h1>

            {/* Role */}
            {/* <WordRotate
              words={["Browser Engineer", "Fullstack Engineer", "History Nerd"]}
            /> */}

            <AnimatedTextSlider
              texts={[
                "Browser Engineer",
                "Full-Stack Developer",
                "Detail Oriented",
              ]}
            />

            {/* Location + Availability */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-text-secondary">
                <MapPin className="h-3 w-3 lg:h-4 lg:w-4" />

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
          {/* {siteConfig.bio} */}I build interactive web apps using{" "}
          <span className="text-white font-mono font-semibold">TypeScript</span>
          , <span className="text-white font-mono font-semibold"> React</span>,{" "}
          <span className="text-white font-mono font-semibold"> Nextjs</span>,
          and Tailwind CSS. With a focus on UI design. Enthusiastic about
          creating seamless user experiences, driven by a keen eye for design.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a href={siteConfig.socials.find((s) => s.name === "Email")?.url}>
              <Mail className="h-4 w-4" />
              E-Mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
