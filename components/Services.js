import ServicesCard from "./ServicesCard";
import { servicesData } from "@/data/servicesData";
export default function Services() {
  return (
    <section
      className="container flex flex-col pt-[60px] px-[10px]"
      id="services"
    >
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          SERVICES
        </h1>
        <div className="absolute top-[15px] md:top-[30px] z-1">
          <h2 className="heading">SERVICES</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2rem] place-items-center mt-[2rem]">
        {servicesData.map((data) => (
          <ServicesCard
            key={data.id}
            image={data.image}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </section>
  );
}
