"use client";

import { experienceData } from "@/app/_constant";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import DetailList from "./DetailList";

const ExperienceDetails = ({ position, company, time, work }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 md:w-4/5 mx-auto flex flex-col items-center justify-between"
    >
      <figure className="absolute left-0 stroke-dark dark:stroke-light">
        <svg
          width="75"
          height="75"
          viewBox="0 0 100 100"
          className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        >
          <circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
          />
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-[5px] fill-light dark:fill-dark"
            style={{ pathLength: scrollYProgress }}
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
          />
        </svg>
      </figure>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="sm:ml-4"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <span className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  return (
    <DetailList
      title="Experience"
      data={experienceData}
      DetailComponent={ExperienceDetails}
      className="my-40"
    />
  );
}
