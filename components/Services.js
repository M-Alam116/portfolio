import { FaFigma } from "react-icons/fa";
import Image from "next/image";
export default function Services() {
  return (
    <section className="container flex flex-col py-[30px] px-[10px]">
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          SERVICES
        </h1>
        <div className="absolute top-[15px] md:top-[30px] z-1">
          <h2 className="heading">SERVICES</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-evenly items-center">
        <div className="group max-w-[370px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 px-[1rem] py-[2rem] rounded-md">
          <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
            {/* <FaFigma className="h-[60px] w-[60px] text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500" /> */}
            <Image
              src="/images/frontend.png"
              width={60}
              height={60}
              alt=""
              className="h-[60px] w-[60px] text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500"
            />
          </div>
          <h1 className="text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
            UI/UX Design
          </h1>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
            Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
            sittem elit inuning utsed sittem.
          </p>
        </div>

        <div className="group max-w-[370px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 px-[1rem] py-[2rem] rounded-md">
          <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
            <FaFigma className="h-[60px] w-[60px] text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500" />
          </div>
          <h1 className="text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
            UI/UX Design
          </h1>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
            Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
            sittem elit inuning utsed sittem.
          </p>
        </div>

        <div className="group max-w-[370px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 px-[1rem] py-[2rem] rounded-md">
          <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
            <FaFigma className="h-[60px] w-[60px] text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500" />
          </div>
          <h1 className="text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
            Web Design
          </h1>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
            Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
            sittem elit inuning utsed sittem.
          </p>
        </div>
      </div>
    </section>
  );
}
