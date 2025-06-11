import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
export default function EducationCard({ degree, institution, grade, desc }) {
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
      className="max-w-[470px] w-full bg-[#101624] px-[1.5rem] py-[2rem] border-[2px] border-primaryColor border-opacity-10 rounded-[10px] hover:border-secondaryColor transition-all duration-1000"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-[10px]">
        <div className="">
          <h1 className="text-[25px] text-secondaryColor font-[500] leading-[30px]">
            {degree}
          </h1>
          <h2 className="text-[16px] text-primaryColor font-[400] leading-[20px] mt-[10px]">
            {institution}
          </h2>
        </div>
        <div className="bg-primaryBg p-[10px] shadow-2xl w-fit h-fit">
          <h1 className="text-[16px] text-secondaryColor font-[500] text-center">
            {grade}
          </h1>
        </div>
      </div>
      <p className="text-[16px] text-primaryColor font-[400] opacity-60 mt-[1.5rem]">
        {desc}
      </p>
    </motion.div>
  );
}
