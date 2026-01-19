import { Github } from "lucide-react";
import { BackgroundImageTexture } from "../ui/bg-image-texture";
import ContributionsDisplay from "./GitHubContributions";

const ContributionGraph = () => {
  return (
    <BackgroundImageTexture variant="debut-light" opacity={0.6}>
      <div className="sm:px-12 px-0 mt-4 flex gap-3 item-center ">
        <Github />
        <h2 className="text-white font-(family-name:--font-space-grotesk) sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4 ">
          GitHub Contributions <span className="">●</span> @RupeshPiwal
        </h2>
        <div className="mb-4 sm:mb-6">
          <ContributionsDisplay
            username="Rupesh-Piwal"
            variant="compact"
            className="w-full"
          />
        </div>
      </div>
    </BackgroundImageTexture>
  );
};

export default ContributionGraph;
