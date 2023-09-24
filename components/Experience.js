import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5, 1"],
  });
  return (
    <div className="w-full flex justify-center items-center mt-[2rem]">
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="max-w-[480px] w-full bg-[#101624] px-[1.5rem] py-[2rem] border-[2px] border-primaryColor border-opacity-10 rounded-[10px] hover:border-secondaryColor transition-all duration-1000"
      >
        <h1 className="text-[25px] text-secondaryColor font-[500] leading-[30px]">
          Web Developer
        </h1>
        <h2 className="text-[16px] text-primaryColor font-[400] leading-[25px] mt-[10px]">
          Da Wedding Whisper (StartUp) <br /> (April 2023 - present )
        </h2>
        <p className="text-[16px] text-primaryColor font-[400] opacity-60 mt-[1.5rem]">
          I am currently working as a Front-End Web Developer at Da Wedding
          Whisper, a startup, where I focus on creating visually appealing and
          user-friendly website.
        </p>
      </motion.div>
    </div>
  );
}
