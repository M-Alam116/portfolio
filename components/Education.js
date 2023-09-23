export default function Education() {
  return (
    <div className="w-full flex justify-evenly items-center lg:items-stretch flex-col lg:flex-row gap-[2rem] mt-[2rem]">
      <div className="max-w-[470px] w-full bg-[#101624] px-[1.5rem] py-[2rem] border-[2px] border-primaryColor border-opacity-10 rounded-[10px] hover:border-secondaryColor transition-all duration-500">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-[10px]">
          <div className="">
            <h1 className="text-[25px] text-secondaryColor font-[500] leading-[30px]">
              BSc Software Engineering
            </h1>
            <h2 className="text-[16px] text-primaryColor font-[400] leading-[20px] mt-[10px]">
              University of Engineering and Technology, Taxila (2021 - present)
            </h2>
          </div>
          <div className="bg-primaryBg p-[10px] shadow-2xl w-[80px] h-fit">
            <h1 className="text-[16px] text-secondaryColor font-[500] text-center">
              3.75/4
            </h1>
          </div>
        </div>
        <p className="text-[16px] text-primaryColor font-[400] opacity-60 mt-[1.5rem]">
          I am currently pursuing a degree in software engineering at the
          University of Engineering and Technology, Taxila, where I'm honing my
          skills in the world of technology and innovation.
        </p>
      </div>

      <div className="max-w-[470px] w-full bg-[#101624] px-[1.5rem] py-[2rem] border-[2px] border-primaryColor border-opacity-10 rounded-[10px] hover:border-secondaryColor transition-all duration-500">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-[10px]">
          <div className="">
            <h1 className="text-[25px] text-secondaryColor font-[500] leading-[30px]">
              HSSC
            </h1>
            <h2 className="text-[16px] text-primaryColor font-[400] leading-[20px] mt-[10px]">
              IMPC-H8-Islamabad (2019 - 2021)
            </h2>
          </div>
          <div className="bg-primaryBg p-[10px] shadow-2xl w-[80px] h-fit">
            <h1 className="text-[16px] text-secondaryColor font-[500] text-center">
              1033/1100
            </h1>
          </div>
        </div>
        <p className="text-[16px] text-primaryColor font-[400] opacity-60 mt-[1.5rem]">
          I completed my HSSC (Higher Secondary School Certificate) from IMPC-H8
          in Islamabad.
        </p>
      </div>
    </div>
  );
}
