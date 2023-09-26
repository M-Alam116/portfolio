import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = [
  //       "home",
  //       "about",
  //       "services",
  //       "skill",
  //       "resume",
  //       "portfolio",
  //       "contact",
  //     ];
  //     const scrollPosition = window.scrollY + window.innerHeight * 0.1;

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const { offsetTop, offsetHeight } = element;
  //         if (
  //           scrollPosition >= offsetTop &&
  //           scrollPosition < offsetTop + offsetHeight
  //         ) {
  //           setActiveSection(section);
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   setTimeout(() => {
  //     handleScroll();
  //   }, 1000);

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      className="container bg-[#070d1b] text-primaryColor sticky top-0 shadow-md z-[99] px-[10px] sm:px-[55px] py-[15px] text-[18px] font-[500]"
      ref={headerRef}
    >
      <div className="flex justify-between items-center">
        {/* ========== logo ============ */}
        <div className="">
          <Link href="/">
            {/* <h1 className="text-[40px] font-[700] text-secondaryColor">Logo</h1> */}
            <Image src="/logo3.png" width={170} height={40} alt="logo" />
          </Link>
        </div>

        {/* ========== menu ========== */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu relative flex gap-[30px]">
            <ImCross className="block text-primaryColor absolute top-5 left-5 md:hidden" />
            <Link href="/" onClick={() => handleMenuItemClick("home")}>
              <li
                className={
                  activeSection === "home"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Home
              </li>
            </Link>
            <Link href="#about" onClick={() => handleMenuItemClick("about")}>
              <li
                className={
                  activeSection === "about"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                About
              </li>
            </Link>
            <Link
              href="#services"
              onClick={() => handleMenuItemClick("services")}
            >
              <li
                className={
                  activeSection === "services"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Services
              </li>
            </Link>
            <Link href="#skill" onClick={() => handleMenuItemClick("skill")}>
              <li
                className={
                  activeSection === "skill"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                My Skills
              </li>
            </Link>
            <Link href="#resume" onClick={() => handleMenuItemClick("resume")}>
              <li
                className={
                  activeSection === "resume"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Resume
              </li>
            </Link>
            <Link
              href="#portfolio"
              onClick={() => handleMenuItemClick("portfolio")}
            >
              <li
                className={
                  activeSection === "portfolio"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Portfolio
              </li>
            </Link>
            <Link
              href="#contact"
              onClick={() => handleMenuItemClick("contact")}
            >
              <li
                className={
                  activeSection === "contact"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <span className="hamburger" onClick={toggleMenu}>
          <BiMenu className="w-8 h-8 cursor-pointer text-primaryColor" />
        </span>
      </div>
    </header>
  );
}
