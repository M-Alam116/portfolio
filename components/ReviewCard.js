import Image from "next/image";
import Rating from "@mui/material/Rating";
export default function ReviewCard({ image, name, review, rating }) {
  return (
    <div className="group relative max-w-[380px] w-full bg-[#101624] px-[1rem] pb-[2rem] border-[2px] border-primaryColor border-opacity-10 rounded-[10px] hover:border-secondaryColor transition-all duration-500">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 group-hover:border-[2px] group-hover:border-secondaryColor rounded-full transition-all duration-200">
        <Image src={image} width={80} height={80} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center mt-[3rem]">
        <h1 className="text-[18px] text-primaryColor font-[500] group-hover:text-secondaryColor transition-all duration-500">
          {name}
        </h1>
        <Rating value={rating} readOnly />
        <p className="text-[16px] text-primaryColor font-[400] opacity-60 text-center mt-[1.5rem]">
          ❝ {review} ❞
        </p>
      </div>
    </div>
  );
}
