import { Github } from "lucide-react";
import { BackgroundImageTexture } from "../ui/bg-image-texture";
import ContributionsDisplay from "./GitHubContributions";

const ContributionGraph = () => {
  return (
    
      <div className="sm:px-12 px-0 mt-4">
        <div className="flex flex-row items-center mb-4 px-4 gap-2 ">
          <Github />
          <h2 className="text-white font-(family-name:--font-space-grotesk) sm:text-xl leading-relaxed -tracking-[0.01em] ">
            GitHub Contributions <span className="">●</span>
            <a
              className="text-slate-700"
              href="https://github.com/Rupesh-Piwal"
            >
              @RupeshPiwal
            </a>
          </h2>
        </div>
        <div className="mb-4 sm:mb-6">
          <ContributionsDisplay
            username="Rupesh-Piwal"
            variant="compact"
            className="w-full"
          />
        </div>
      </div>
    
  );
};

export default ContributionGraph;
