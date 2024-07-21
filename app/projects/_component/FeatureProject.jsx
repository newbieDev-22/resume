"use client";

import { GithubIcon } from "@/app/_icon";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function FeatureProject({
  title,
  summary,
  img,
  link,
  frontRepo,
  backRepo,
  testUser,
}) {
  return (
    <article
      className="relative w-full flex items-center justify-between rounded-3xl gap-4
        border border-solid border-dark bg-light shadow-2xl p-8 
        rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 sm:gap-0"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
      rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:!-right-2 
      xs:!h-[102%] xs:!w-full xs:!rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-2/5 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <MotionImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-3/5 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2
            className="my-2 w-full text-left text-4xl font-bold sm:text-xl
           text-primary dark:text-primaryDark"
          >
            {title}
          </h2>
        </Link>

        <p className="py-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

        <h4 className="font-semibold my-2">
          Test User : <span className="font-medium">{testUser}</span>
        </h4>

        <div className="mt-2 flex gap-4 items-center sm:flex-wrap">
          <Link
            href={frontRepo}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <div className="flex gap-2 items-center justify-center">
              <GithubIcon className={"w-10 h-10"} />
              <span className="font-semibold text-dark dark:text-light sm:text-xs">
                Frontend Repo
              </span>
            </div>
          </Link>
          <Link
            href={backRepo}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <div className="flex gap-2 items-center justify-center">
              <GithubIcon className={"w-10 h-10"} />
              <span className="font-semibold text-dark dark:text-light sm:text-xs">
                Backend Repo
              </span>
            </div>
          </Link>
          <Link href={link} target="_blank" className="sm:w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-semibold text-light py-2 px-6 bg-dark rounded-lg
               dark:bg-light dark:text-dark sm:px-4 sm:text-xs sm:w-full"
            >
              See Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </article>
  );
}
