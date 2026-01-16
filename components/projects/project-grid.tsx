import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

export function ProjectGrid() {
    return (
        <section id="projects" className="py-8">
            {/* Projects list - stacked vertically like the reference */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
