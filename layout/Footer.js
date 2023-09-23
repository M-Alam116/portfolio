import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="container bg-primaryBg text-primaryColor py-[40px] px-[10px] md:px-[20px]">
      <div className="flex mx-auto w-[95%] h-[1px] bg-white bg-opacity-30 my-[30px]"></div>
      <div className="mt-[2rem] flex flex-col justify-center items-center gap-[1rem]">
        <div className="">
          <Link href="/">
            <Image src="/logo3.png" width={170} height={120} alt="logo" />
          </Link>
        </div>
        <h3 className="text-center text-[15px] font-[400] opacity-60">
          © All right reserved by Muhammad Alam {date}
        </h3>
      </div>
    </footer>
  );
}
