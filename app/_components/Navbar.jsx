"use client";

import Link from "next/link";
import { GithubIcon, GmailIcon, LinkedInIcon, Logo, MoonIcon, SunIcon } from "../_icon";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import IconButton from "./IconButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark 
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] duration-300 ease-in-out ${
        pathname === href ? "w-full" : "w-0"
      }  dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, toggle, className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] duration-300 ease-in-out ${
        pathname === href ? "w-full" : "w-0"
      }  dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    document.body.addEventListener("keydown", handleEscPress);
    return () => document.body.removeEventListener("keydown", handleEscPress);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className="w-full h-[100px] px-32 
     py-8 font-medium flex items-center 
    justify-between dark:bg-dark dark:text-light relative z-10 lg:px-16 md:px-12 sm:!px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex outline:none focus:outline-none"
        onClick={handleClick}
      >
        <span
          className={`bg-dark outline:none focus:outline-none dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark outline:none focus:outline-none dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark outline:none focus:outline-none dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>

        <Logo />

        <nav className="flex items-center justify-center flex-wrap gap-4">
          <motion.a
            href={process.env.NEXT_PUBLIC_GITHUB_LINK}
            target={"_blank"}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton text="Github" color="bg-gray-700">
              <GithubIcon className={"w-8 h-6"} />
            </IconButton>
          </motion.a>
          <motion.a
            href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
            target={"_blank"}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton text="LinkedIn" color="bg-[#0a66c2]">
              <div className="w-8 h-6">
                <LinkedInIcon />
              </div>
            </IconButton>
          </motion.a>
          <motion.a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            target={"_blank"}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton text="Gmail" color="bg-rose-400">
              <GmailIcon className={"w-8 h-6"} />
            </IconButton>
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1 w-10 h-10 
            ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <div className="hidden lg:block">
        <Logo onClick={handleClose} />
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col gap-8 justify-between items-center 
fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md
py-32"
        >
          <nav className="flex flex-col justify-center items-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-4 sm:gap-2">
            <motion.a
              href={process.env.NEXT_PUBLIC_GITHUB_LINK}
              target={"_blank"}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
            >
              <IconButton text="Github" color="bg-gray-700">
                <GithubIcon className={"w-8 h-6"} />
              </IconButton>
            </motion.a>
            <motion.a
              href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
              target={"_blank"}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
            >
              <IconButton text="LinkedIn" color="bg-[#0a66c2]">
                <div className="w-8 h-6">
                  <LinkedInIcon />
                </div>
              </IconButton>
            </motion.a>
            <motion.a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              target={"_blank"}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
            >
              <IconButton text="Gmail" color="bg-rose-400">
                <GmailIcon className={"w-8 h-6"} />
              </IconButton>
            </motion.a>
            <button
              className={`ml-3 sm:ml-0 flex items-center justify-center rounded-full p-1 w-10 h-10 
      ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
                handleClose();
              }}
            >
              {theme === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
