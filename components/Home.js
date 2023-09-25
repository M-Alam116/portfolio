import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Home() {
  const { ref } = useScroll();

  const firstMainDivInitial = { x: -1000 };
  const firstMainDivAnimate = { x: 0 };
  const secondMainDivInitial = { x: 1000 };
  const secondMainDivAnimate = { x: 0 };
  
  return (
    <section className="container bg-primaryBg grid grid-cols-1 gap-[3rem] lg:gap-[10px] lg:grid-cols-2 px-[10px] pt-[30px]">
      <div
        className="flex flex-col justify-center mx-auto pt-[2rem] lg:pt-0"
      >
        <span className="text-[28px] font-[400] text-secondaryColor">
          Hello, I'm
        </span>
        <h1 className="text-[45px] sm:text-[60px] font-[700] text-primaryColor opacity-50 leading-[50px] sm:leading-[60px] my-[10px]">
          Muhammad <br /> Alam
        </h1>
        <h2 className="text-[28px] font-[400]">
          <span className="text-primaryColor opacity-60">And I'm a</span>{" "}
          <span className="text-secondaryColor">MERN Stack Web Developer</span>
        </h2>

        <div className="flex items-center gap-[1rem] my-[2rem]">
          <Link
            href="https://www.linkedin.com/in/muhammad-alam-666099262/"
            target="_blank"
          >
            <div className="group w-[60px] h-[60px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
              <AiFillLinkedin className="w-[30px] h-[30px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
            </div>
          </Link>

          <Link href="https://github.com/M-Alam116" target="_blank">
            <div className="group w-[60px] h-[60px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
              <AiFillGithub className="w-[30px] h-[30px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
            </div>
          </Link>

          <Link
            href="https://mail.google.com/mail/u/0/?view=cm&to=malam53345@gmail.com"
            target="_blank"
          >
            <div className="group w-[60px] h-[60px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
              <MdEmail className="w-[30px] h-[30px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-[1rem]">
          <Link href="#contact">
            <button className="btn px-[50px]">Hire Me</button>
          </Link>
        </div>
      </div>
      <div
        className="w-full flex justify-center lg:justify-end items-center"
      >
        <div className="">
          <Image src="/images/pic.png" width={500} height={700} alt="" />
        </div>
      </div>
    </section>
  );
}
