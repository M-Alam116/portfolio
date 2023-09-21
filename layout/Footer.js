import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="container bg-primaryBg text-primaryColor py-[75px] px-[10px] md:px-[20px]">
      <div className="flex mx-auto w-[95%] h-[1px] bg-white bg-opacity-30 my-[30px]"></div>
      <div className="flex items-center justify-center gap-[30px] mt-[70px]">
        <Link href="/">
          <ImGithub className="w-[35px] h-[35px] cursor-pointer hover:text-secondaryColor" />
        </Link>
        <Link href="/">
          <PiLinkedinLogoBold className="w-[35px] h-[35px] cursor-pointer hover:text-secondaryColor" />
        </Link>
        <Link href="/">
          <MdOutlineEmail className="w-[35px] h-[35px] cursor-pointer hover:text-secondaryColor" />
        </Link>
      </div>
      <div className="mt-[2rem]">
        <h3 className="text-center text-[15px] font-[400] opacity-60">
          © All right reserved by Muhammad Alam {date}
        </h3>
      </div>
    </footer>
  );
}
