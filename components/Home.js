import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
export default function Home() {
  return (
    <section className="container bg-primaryBg grid grid-cols-1 gap-[3rem] lg:gap-[10px] lg:grid-cols-2 px-[10px] pt-[30px]">
      <div className="flex flex-col justify-center mx-auto pt-[2rem] lg:pt-0">
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
          <Link href="/">
            <ImGithub className="w-[35px] h-[35px] cursor-pointer text-primaryColor hover:text-secondaryColor" />
          </Link>
          <Link href="/">
            <PiLinkedinLogoBold className="w-[35px] h-[35px] cursor-pointer text-primaryColor hover:text-secondaryColor" />
          </Link>
          <Link href="/">
            <MdOutlineEmail className="w-[40px] h-[40px] cursor-pointer text-primaryColor hover:text-secondaryColor" />
          </Link>
        </div>

        <div className="flex items-center gap-[1rem]">
          <Link href="#contact">
            <button className="btn px-[50px]">Hire Me</button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end items-center">
        <div className="">
          <Image src="/images/pic.png" width={500} height={700} alt="" />
        </div>
      </div>
    </section>
  );
}
