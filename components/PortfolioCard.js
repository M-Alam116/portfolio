import { useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal, BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function PortfolioCard({
  title,
  image,
  link,
  description,
  features,
  techStack,
}) {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
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
      className="group bg-[#101624] hover:bg-[#0b101a] shadow-2xl max-w-[380px] w-full flex flex-col items-center py-[2.5rem] px-[1rem] rounded-[20px] cursor-pointer transition-all duration-1000"
    >
      <div className="rounded-[12px] relative overflow-hidden w-full">
        <div className="overlay group-hover:opacity-100"></div>
        <Image
          src={image}
          width={300}
          height={350}
          alt=""
          className="rounded-[12px] group-hover:scale-105 transition-all duration-1000 w-full h-full object-top aspect-video"
        />

        <Link href={link} target="_blank">
          <div className="hidden z-10 bg-secondaryColor w-[170px] group-hover:flex justify-center items-center gap-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 rounded-md">
            <button className="text-[16px] font-[500]">Live Preview</button>
            <BiLinkExternal className="w-[20px] h-[20px]" />
          </div>
        </Link>
      </div>

      <h1 className="text-[24px] font-[600] text-primaryColor text-center leading-[25px] mt-[2rem] group-hover:text-secondaryColor transition-all duration-1000">
        {title}
      </h1>

      <p className="text-gray-300 text-center mt-2 text-sm">{description}</p>

      <button
        className="mt-4 text-secondaryColor flex items-center gap-1 text-sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <BiChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Show details</span>
            <BiChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 w-full">
          <div className="mb-4">
            <h3 className="text-secondaryColor font-semibold mb-2">
              Features:
            </h3>
            <ul className="list-disc pl-5 text-gray-300 text-sm">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-secondaryColor font-semibold mb-2">
              Tech Stack:
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
