import Image from "next/image";
export default function SkillCard({ name, image }) {
  return (
    <div className="group w-[160px] border-[2px] border-primaryColor border-opacity-20 hover:border-secondaryColor transition-all duration-500 rounded-lg flex flex-col items-center justify-evenly gap-[10px] p-[1rem] shadow-2xl drop-shadow-2xl">
      <Image src={image} width={70} height={70} alt="" />
      <h1 className="text-[16px] font-[700] text-primaryColor tracking-wide group-hover:text-secondaryColor">
        {name}
      </h1>
    </div>
  );
}
