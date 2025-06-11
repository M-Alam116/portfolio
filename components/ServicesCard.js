import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export default function ServicesCard({ image, title, desc }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5, 1"],
  });
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="group max-w-[380px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 hover:border-secondaryColor transition-all duration-1000 px-[1rem] py-[2rem] rounded-md self-stretch"
    >
      <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
        <Image src={image} width={60} height={50} alt="" />
      </div>
      <h1 className="text-[18px] text-center sm:text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
        {title}
      </h1>
      <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
        {desc}
      </p>
    </motion.div>
  );
}
