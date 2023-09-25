import SkillCard from "./SkillCard";
import { skillsData } from "@/data/skillsData";
export default function Skill() {
  return (
    <section className="container flex flex-col pt-[60px] px-[10px]" id="skill">
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          MY SKILLS
        </h1>
        <div className="absolute top-[15px] md:top-[30px] z-1">
          <h2 className="heading">MY SKILLS</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[1rem] justify-center mt-[2rem]">
        {skillsData.map((data) => (
          <SkillCard key={data.name} name={data.name} image={data.image} />
        ))}
      </div>
    </section>
  );
}
