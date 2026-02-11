
import { Container } from "@/components/layout/container";
import { HeroCard } from "@/components/hero/hero-card";
import { ExperienceList } from "@/components/experience/experience-list";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Connect } from "@/components/footer/connect";
import ContributionGraph from "@/components/github/ContributionGraph";

export default function Home() {
  return (
    <>
      <main className=" mx-auto max-w-205 min-h-screen pb-16 bg-[#000000]">
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
