import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section id="projects" className="py-8">
      <h2 className="mb-6 font-[family-name:var(--font-serif)] text-xs md:text-xl tracking-tight text-gray-300">
        Personal Projects
      </h2>
      {/* Projects list - stacked vertically like the reference */}
      <div className="space-y-6 col-span-1 flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
