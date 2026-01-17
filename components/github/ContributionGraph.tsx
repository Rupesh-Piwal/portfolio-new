import ContributionsDisplay from "./GitHubContributions";

const ContributionGraph = () => {
  return (
    <div className="sm:px-12 px-0 mt-4">
      <h2 className="text-base font-(family-name:--font-instrument-serif) sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 px-4">
        GitHub Contributions <span className="opacity-20">●</span> @RupeshPiwal
      </h2>
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
