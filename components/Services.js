import { FaFigma } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
export default function Services() {
  return (
    <section className="container flex flex-col py-[30px] px-[10px]">
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
        <div className="group max-w-[380px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 px-[1rem] py-[2rem] rounded-md">
          <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 50 50"
              className="h-[60px] w-[60px] fill-current  text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500"
            >
              <path d="M 5 2 C 3.347656 2 2 3.347656 2 5 L 2 35 C 2 36.652344 3.347656 38 5 38 L 45 38 C 46.652344 38 48 36.652344 48 35 L 48 5 C 48 3.347656 46.652344 2 45 2 Z M 7 7 L 43 7 L 43 33 L 7 33 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 20 39 L 20 43 L 30 43 L 30 39 Z M 10 40 C 9.703125 40 9.410156 40.117188 9.21875 40.34375 L 4.21875 46.34375 C 3.96875 46.644531 3.929688 47.085938 4.09375 47.4375 C 4.257813 47.789063 4.613281 48 5 48 L 45 48 C 45.386719 48 45.742188 47.789063 45.90625 47.4375 C 46.070313 47.085938 46.027344 46.644531 45.78125 46.34375 L 40.78125 40.34375 C 40.589844 40.117188 40.296875 40 40 40 L 32 40 L 32 45 L 18 45 L 18 40 Z"></path>
            </svg>
          </div>
          <h1 className="text-[18px] sm:text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
            Frontend Web Development
          </h1>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
            I offer front-end development services to bring client's designs to
            life, making sure your website not only looks great but functions
            smoothly too.
          </p>
        </div>

        <div className="group max-w-[380px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 px-[1rem] py-[2rem] rounded-md">
          <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
            <DiNodejs className="h-[80px] w-[80px] text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500" />
          </div>
          <h1 className="text-[18px] sm:text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
            Backend Web Development
          </h1>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
            I provide back-end development expertise to handle the
            behind-the-scenes functionality of your website, ensuring it runs
            efficiently and securely.
          </p>
        </div>

        <div className="group max-w-[380px] bg-[#101624] w-full flex flex-col items-center justify-center gap-[1rem] border-[2px] border-primaryColor border-opacity-10 px-[1rem] py-[2rem] rounded-md">
          <div className="w-[100px] h-[100px] rounded-[100px] border-[2px] bg-primaryBg border-primaryColor group-hover:border-secondaryColor transition-all duration-500 border-opacity-10 flex items-center justify-center">
            <FaFigma className="h-[60px] w-[60px] text-primaryColor opacity-30 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-500" />
          </div>
          <h1 className="text-[18px] sm:text-[24px] font-[500] text-primaryColor group-hover:text-secondaryColor transition-all duration-500">
            Web Design
          </h1>
          <p className="text-[16px] font-[400] text-primaryColor opacity-60 text-center">
            I design websites from scratch when clients don't have one yet. I
            make sure the design looks good and works well, creating a unique
            online presence for them.
          </p>
        </div>
      </div>
    </section>
  );
}
