import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/data/experienceData";
export default function Experience() {
  return (
    <div className="w-full flex justify-evenly items-center lg:items-stretch flex-col lg:flex-row gap-[2rem] mt-[2rem]">
      {experienceData.map((data) => (
        <ExperienceCard
          key={data.id}
          role={data.role}
          company={data.company}
          type={data.type}
          date={data.date}
          desc={data.desc}
        />
      ))}
    </div>
  );
}
