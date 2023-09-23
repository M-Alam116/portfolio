import Image from "next/image";
import { SiExpress } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
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
        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/html.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            HTML
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/css.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            CSS
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/js.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            JAVASCRIPT
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/ts.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            TYPESCRIPT
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/react.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            REACT JS
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/nextjs.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            NEXT JS
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[30px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/tailwind.png" width={70} height={70} alt="" />
          <h1 className="text-[15px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            TAILWIND CSS
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/bootstrap.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            BOOTSTRAP
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/material.png" width={70} height={70} alt="" />
          <h1 className="text-[17px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            MATERIAL UI
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[30px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/nodejs.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            NODE JS
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/mongodb.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            MONGODB
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <SiExpress className="h-[70px] w-[70px] text-primaryColor opacity-50" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            EXPRESS JS
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/firebase.png" width={100} height={100} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            FIREBASE
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/figma.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            FIGMA
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <BsGithub className="h-[70px] w-[70px] text-primaryColor" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            GITHUB
          </h1>
        </div>

        <div className="group w-[150px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-center gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
          <Image src="/images/git.png" width={70} height={70} alt="" />
          <h1 className="text-[18px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
            GIT
          </h1>
        </div>
      </div>
    </section>
  );
}
