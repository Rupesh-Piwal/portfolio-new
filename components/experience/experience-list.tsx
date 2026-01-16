import { ExperienceCard } from "./experience-card";
import { experiences } from "@/data/experience";

export function ExperienceList() {
    return (
        <section id="experience" className="py-8">
            {/* Section Header */}
            <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-text-muted">
                Professional Experience
            </h2>

            {/* Experience Cards */}
            <div className="space-y-4">
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </section>
    );
}
