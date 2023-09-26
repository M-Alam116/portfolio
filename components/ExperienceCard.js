import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
export default function ExperienceCard({ role, company, date, desc }) {
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
      className="max-w-[480px] w-full bg-[#101624] px-[1.5rem] py-[2rem] border-[2px] border-primaryColor border-opacity-10 rounded-[10px] hover:border-secondaryColor transition-all duration-1000"
    >
      <h1 className="text-[25px] text-secondaryColor font-[500] leading-[30px]">
        {role}
      </h1>
      <h2 className="text-[16px] text-primaryColor font-[400] leading-[25px] mt-[10px]">
        {company}
      </h2>
      <span className="text-[16px] font-[400] text-primaryColor">{date}</span> 
      <p className="text-[16px] text-primaryColor font-[400] opacity-60 mt-[1.5rem]">
        {desc}
      </p>
    </motion.div>
  );
}
