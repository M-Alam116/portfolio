import { caseStudies } from "@/data/projectsData";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section
      className="container flex flex-col pt-[60px] px-[10px]"
      id="portfolio"
    >
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[45px] md:text-[90px] font-[700] text-[#151B29] text-center">
          PORTFOLIOS
        </h1>
        <div className="absolute top-[10px] md:top-[30px] z-1">
          <h2 className="heading">PORTFOLIOS</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[2rem] mt-[2rem]">
        {caseStudies.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}