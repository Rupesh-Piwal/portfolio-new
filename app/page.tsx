import { Container } from "@/components/layout/container";
import { HeroCard } from "@/components/hero/hero-card";
import { ContributionGraph } from "@/components/github/contribution-graph";
import { ExperienceList } from "@/components/experience/experience-list";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Connect } from "@/components/footer/connect";

export default function Home() {
  return (
    <>
      <main className=" mx-auto max-w-3xl min-h-screen pb-16 border border-red-300">
        <Container>
          <HeroCard />
          <ContributionGraph />
          <ExperienceList />
          <ProjectGrid />
          <Connect />
        </Container>
      </main>
    </>
  );
}
