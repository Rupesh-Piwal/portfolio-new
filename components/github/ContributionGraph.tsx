import { Github } from "lucide-react";
import ContributionsDisplay from "./GitHubContributions";

const ContributionGraph = () => {
  return (
    <div className="sm:px-12 px-0 mt-4">
      <div className="flex flex-row items-center mb-4 px-4 gap-2 ">
        <Github />
        <h2 className="text-[14px] md:text-xl tracking-tight text-gray-300 font-thin">
          GitHub Contributions <span className="">● </span>
          <a className="text-slate-800" href="https://github.com/Rupesh-Piwal">
            @rupeshPiwal
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
