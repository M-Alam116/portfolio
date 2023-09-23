import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className="container bg-[#070d1b] text-primaryColor sticky top-0 shadow-md z-[999999] px-[10px] sm:px-[55px] py-[15px] text-[18px] font-[500]"
      ref={headerRef}
    >
      <div className="flex justify-between items-center">
        {/* ========== logo ============ */}
        <div className="">
          {/* <Link href="/">
              <Image src="/logo.png" width={100} height={85} alt="logo" />
            </Link> */}
          <h1 className="text-[30px] text-primaryColor opacity-80">Logo</h1>
        </div>

        {/* ========== menu ========== */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu relative flex gap-[30px]">
            <ImCross className="block text-primaryColor absolute top-5 left-5 md:hidden" />
            <Link href="/">
              <li
                className={
                  router.pathname === "/"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Home
              </li>
            </Link>
            <Link href="#about">
              <li
                className={
                  router.pathname === "#about"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                About
              </li>
            </Link>
            <Link href="#services">
              <li
                className={
                  router.pathname === "#services"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Services
              </li>
            </Link>
            <Link href="#skill">
              <li
                className={
                  router.pathname === "#skill"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                My Skills
              </li>
            </Link>
            <Link href="#resume">
              <li
                className={
                  router.pathname === "#resume"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Resume
              </li>
            </Link>
            <Link href="#portfolio">
              <li
                className={
                  router.pathname === "#portfolio"
                    ? "active"
                    : "hover:text-secondaryColor"
                }
              >
                Portfolio
              </li>
            </Link>
            <Link href="#contact">
              <li
                className={
                  router.pathname === "#contact"
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
