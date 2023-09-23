import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
export default function Contact() {
  return (
    <section
      className="container flex flex-col pt-[60px] px-[10px]"
      id="contact"
    >
      <div className="flex flex-col mx-auto justify-center items-center relative">
        <h1 className="text-[55px] md:text-[90px] font-[700] text-[#151B29] text-center">
          CONTACT
        </h1>
        <div className="absolute top-[15px] md:top-[30px] z-1">
          <h2 className="heading">CONTACT ME</h2>
          <div className="w-[170px] h-[2px] bg-[#3f4551] flex justify-center">
            <div className="h-[2px] w-[80px] bg-secondaryColor"></div>
          </div>
        </div>
      </div>

      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-[3rem]">
        <div className="w-full">
          <h1 className="text-[30px] font-[400] text-primaryColor mb-[2rem]">
            Just say Hello
          </h1>
          <form className="flex flex-col gap-[2rem]">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-[15px] py-[12px] text-[16px] text-primaryColor text-opacity-60 bg-[#101624] border-[1px] border-primaryColor border-opacity-10 rounded-md focus:border-none outline-none focus:outline-[1px] focus:outline-secondaryColor transition-all duration-200"
            />

            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-[15px] py-[12px] text-[16px] text-primaryColor text-opacity-60 bg-[#101624] border-[1px] border-primaryColor border-opacity-10 rounded-md focus:border-none outline-none focus:outline-[1px] focus:outline-secondaryColor transition-all duration-200"
            />

            <input
              type="text"
              required
              placeholder="Your Subject"
              className="w-full px-[15px] py-[12px] text-[16px] text-primaryColor text-opacity-60 bg-[#101624] border-[1px] border-primaryColor border-opacity-10 rounded-md focus:border-none outline-none focus:outline-[1px] focus:outline-secondaryColor transition-all duration-200"
            />

            <textarea
              rows="6"
              required
              placeholder="Your Message"
              className="resize-none w-full px-[15px] py-[12px] text-[16px] text-primaryColor text-opacity-60 bg-[#101624] border-[1px] border-primaryColor border-opacity-10 rounded-md focus:border-none outline-none focus:outline-[1px] focus:outline-secondaryColor transition-all duration-200"
            ></textarea>

            <button type="submit" className="btn sm:w-fit">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full">
          <h1 className="text-[30px] font-[400] text-primaryColor">
            Contact Info
          </h1>

          <div className="mt-[1.5rem] flex flex-col gap-[1.5rem]">
            <p className="text-[16px] text-primaryColor font-[400] opacity-60">
              Get in touch now for web development services that suits your
              needs.
            </p>

            <div className="flex gap-[1rem] items-center">
              <div className="group w-[50px] h-[50px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
                <MdEmail className="w-[25px] h-[25px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="">
                <h1 className="text-[22px] font-[400] text-primaryColor">
                  Email
                </h1>
                <p className="text-[16px] font-[400] text-primaryColor opacity-60">
                  malam53345@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-[1rem] items-center">
              <div className="group w-[50px] h-[50px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
                <MdLocationOn className="w-[25px] h-[25px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="">
                <h1 className="text-[22px] font-[400] text-primaryColor">
                  Address
                </h1>
                <p className="text-[16px] font-[400] text-primaryColor opacity-60">
                  Pakistan
                </p>
              </div>
            </div>

            <p className="text-[16px] text-primaryColor font-[400] opacity-60">
              Visite my social profile and get connected
            </p>
            <div className="flex gap-[20px] items-center">
              <Link
                href="https://www.linkedin.com/in/muhammad-alam-666099262/"
                target="_blank"
              >
                <div className="group w-[60px] h-[60px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
                  <AiFillLinkedin className="w-[30px] h-[30px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>

              <Link href="https://github.com/M-Alam116" target="_blank">
                <div className="group w-[60px] h-[60px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
                  <AiFillGithub className="w-[30px] h-[30px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>

              <Link
                href="https://mail.google.com/mail/u/0/?view=cm&to=malam53345@gmail.com"
                target="_blank"
              >
                <div className="group w-[60px] h-[60px] grid place-items-center border-[1px] border-primaryColor hover:border-secondaryColor border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer transition-all duration-300">
                  <MdEmail className="w-[30px] h-[30px] text-primaryColor opacity-60 group-hover:text-secondaryColor group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
