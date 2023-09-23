import ReviewCard from "./ReviewCard";
import { reviewData } from "@/data/ReviewData";
export default function Review() {
  return (
    <section className="container flex flex-col pt-[60px] px-[10px]">
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          REVIEWS
        </h1>
        <div className="absolute top-[15px] md:top-[30px] z-1">
          <h2 className="heading">REVIEWS</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="mt-[3.5rem] grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] lg:gap-[2rem]">
        {reviewData.map((data) => (
          <ReviewCard
            key={data.id}
            image={data.image}
            name={data.name}
            review={data.review}
            rating={data.rating}
          />
        ))}
      </div>
    </section>
  );
}
