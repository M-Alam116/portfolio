import { educationData } from "@/data/educationData";
import EducationCard from "./EducationCard";
export default function Education() {
  return (
    <div className="w-full flex justify-evenly items-center lg:items-stretch flex-col lg:flex-row gap-[2rem] mt-[2rem]">
      {educationData.map((data) => (
        <EducationCard
          key={data.id}
          degree={data.degree}
          institution={data.institution}
          grade={data.grade}
          desc={data.desc}
        />
      ))}
    </div>
  );
}
