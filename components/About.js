import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className="container flex flex-col pt-[60px] px-[10px]" id="about">
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          ABOUT ME
        </h1>
        <div className="absolute top-[15px] md:top-[30px] z-1">
          <h2 className="heading">ABOUT ME</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        <div className="w-full hidden md:flex justify-center">
          <div className="bg-[#0a1121] shadow-2xl drop-shadow-2xl rounded-[20px] border-[2px] border-white border-opacity-30 h-fit">
            <Image
              src="/images/pic.png"
              width={470}
              height={600}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center mt-[30px] md:mt-0">
          <h1 className="text-[36px] font-[400] text-primaryColor leading-[40px]">
            Hi There! I'm{" "}
            <span className="font-[600] opacity-80">Muhammad Alam</span>
          </h1>
          <h2 className="text-[24px] font-[500] text-secondaryColor my-[10px] leading-[30px]">
            MERN Stack Web Developer
          </h2>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60">
            I am Muhammad Alam, a dedicated student pursuing a degree in
            Software Engineering at the University of Engineering and
            Technology, Taxila. I have a strong passion for web development, and
            I specialize in building full-stack web applications using the MERN
            stack.{" "}
          </p>
          <div className="flex flex-col gap-[15px] mt-[20px]">
            <div className="flex gap-[52px] sm:gap-[85px]">
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                Email
              </span>
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                : malam53345@gmail.com
              </span>
            </div>
            <div className="flex gap-[57px] sm:gap-[90px]">
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                From
              </span>
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                : Pakistan
              </span>
            </div>
            <div className="flex gap-[18px] sm:gap-[50px]">
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                Language
              </span>
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                : English, Urdu
              </span>
            </div>
            <div className="flex gap-[20px] sm:gap-[55px]">
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                Freelance
              </span>
              <span className="text-[16px] font-[400] text-primaryColor opacity-60">
                : Available
              </span>
            </div>
          </div>
          <div className="mt-[3rem]">
            <Link href="CV.pdf" target="_blank">
              <button className="btn">Download CV</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
