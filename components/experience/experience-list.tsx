import { ExperienceCard } from "./experience-card";
import { experiences } from "@/data/experience";

export function ExperienceList() {
  return (
    <section id="experience" className="py-8">
      {/* Section Header */}
      <h2 className="mb-6 text-[16px] md:text-xl tracking-tight text-gray-300">
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
