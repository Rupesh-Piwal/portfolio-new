import Image from "next/image";
import { Twitter, Github, FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { BackgroundImageTexture } from "../ui/bg-image-texture";

export function Connect() {
  return (
    <BackgroundImageTexture variant="fabric-of-squares" opacity={0.7}>
      <div className="rounded-2xl border border-border p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Let's Connect
            </h2>
            <p className="text-text-secondary mb-6">
              Feel free to reach out through any of these platforms
            </p>

            {/* Social buttons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <Button asChild size="sm">
                <a
                  href={
                    siteConfig.socials.find((s) => s.name === "Twitter")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </Button>

              <Button asChild size="sm">
                <a
                  href={
                    siteConfig.socials.find((s) => s.name === "GitHub")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button asChild size="sm">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              <Button asChild size="sm">
                <a
                  href={
                    siteConfig.socials.find((s) => s.name === "LinkedIn")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Profile image with status */}
          <div className="relative shrink-0">
            <div className="h-32 w-32 overflow-hidden rounded-xl border border-border shadow-lg">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-secondary">
              ✨ Currently Building
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageTexture>
  );
}
