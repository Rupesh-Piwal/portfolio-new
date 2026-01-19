import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-bg-secondary overflow-hidden transition-all hover:border-gray-medium hover:-translate-y-0.5">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative aspect-video md:aspect-auto md:w-[45%] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between p-6 md:w-[55%]">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-text-primary">
                {project.name}
              </h3>

              <div className="flex items-center gap-2 shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-bg-primary px-2.5 py-1.5 text-xs text-text-secondary hover:text-text-primary hover:border-gray-medium transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-bg-primary px-2.5 py-1.5 text-xs text-text-secondary hover:text-text-primary hover:border-gray-medium transition-colors"
                  >
                    <Github className="h-3 w-3" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="tech" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
