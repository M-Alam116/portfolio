import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
export default function Resume() {
  const [tab, setTab] = useState(true);

  const handleEducation = () => {
    setTab(true);
  };

  const handleExperience = () => {
    setTab(false);
  };

  return (
    <section
      className="container flex flex-col pt-[60px] px-[10px]"
      id="resume"
    >
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          RESUME
        </h1>
        <div className="absolute top-[15px] md:top-[30px]">
          <h2 className="heading">RESUME</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="flex gap-[2rem] justify-center my-[2rem]">
        <div
          className="group w-[200px] py-[15px] bg-[#101624] shadow-2xl grid place-items-center rounded-md cursor-pointer"
          onClick={handleEducation}
        >
          <h1
            className={`text-[20px] font-[500] ${
              tab
                ? "text-secondaryColor opacity-100"
                : "text-primaryColor opacity-70"
            }  tracking-wide group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300`}
          >
            Education
          </h1>
        </div>

        <div
          className="group w-[200px] py-[15px] bg-[#101624] shadow-2xl grid place-items-center rounded-md cursor-pointer"
          onClick={handleExperience}
        >
          <h1
            className={`text-[20px] font-[500] ${
              !tab
                ? "text-secondaryColor opacity-100"
                : "text-primaryColor opacity-70"
            }  tracking-wide group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300`}
          >
            Experience
          </h1>
        </div>
      </div>

      <div className="w-full">{tab ? <Education /> : <Experience />}</div>
    </section>
  );
}
