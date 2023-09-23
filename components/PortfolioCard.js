import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
export default function PortfolioCard({ title, image, link }) {
  return (
    <div className="group bg-[#101624] hover:bg-[#0b101a] shadow-2xl max-w-[380px] w-full flex flex-col items-center py-[2.5rem] rounded-[20px] cursor-pointer">
      <div className="rounded-[12px] relative overflow-hidden">
        <div className="overlay group-hover:opacity-100"></div>
        <Image
          src={image}
          width={300}
          height={350}
          alt=""
          className="rounded-[12px] group-hover:scale-105 transition-all duration-1000"
        />

        <Link href={link}>
          <div className="hidden z-10 bg-secondaryColor w-[170px] group-hover:flex justify-center items-center gap-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 rounded-md">
            <button className="text-[16px] font-[500]">Live Preview</button>
            <BiLinkExternal className="w-[20px] h-[20px]" />
          </div>
        </Link>
      </div>
      <h1 className="text-[24px] font-[600] text-primaryColor text-center leading-[25px] mt-[2rem] group-hover:text-secondaryColor transition-all duration-1000">
        {title}
      </h1>
    </div>
  );
}
