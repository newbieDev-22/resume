"use client";

import { backEndSkillList, frontEndSkillList, otherSkillList } from "@/app/_constant";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [inView, controls]);

  return (
    <>
      <h2 className="font-bold text-8xl mb-16 mt-40 md:mt-20 w-full text-center md:text-6xl xs:text-4xl md:mb:8 ">
        Skills
      </h2>
      <div className="flex flex-col gap-4" ref={ref}>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-2xl">Front-end</h3>
          <motion.div
            className="flex gap-4 flex-wrap py-2 items-center"
            variants={variants}
            initial="initial"
            animate={controls}
          >
            {frontEndSkillList.map((skill, index) => (
              <motion.div
                key={skill + "-" + index}
                className="rounded px-3 py-2 font-semibold text-sm cursor-pointer bg-dark/90 text-light
           hover:bg-light hover:text-dark dark:bg-light/90 dark:text-dark
            hover:dark:bg-dark hover:dark:text-light border border-solid border-transparent hover:dark:border-light/75"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  transition: { type: "spring", stiffness: 200, damping: 25 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Back-end</h3>
          <motion.div
            className="flex gap-4 flex-wrap py-2 items-center"
            variants={variants}
            initial="initial"
            animate={controls}
          >
            {backEndSkillList.map((skill, index) => (
              <motion.div
                key={skill + "-" + index}
                className="rounded px-3 py-2 font-semibold text-sm cursor-pointer bg-dark/90 text-light
           hover:bg-light hover:text-dark dark:bg-light/90 dark:text-dark
            hover:dark:bg-dark hover:dark:text-light border border-solid border-transparent hover:dark:border-light/75"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  transition: { type: "spring", stiffness: 200, damping: 25 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Others</h3>
          <motion.div
            className="flex gap-4 flex-wrap py-2 items-center"
            variants={variants}
            initial="initial"
            animate={controls}
          >
            {otherSkillList.map((skill, index) => (
              <motion.div
                key={skill + "-" + index}
                className="rounded px-3 py-2 font-semibold text-sm cursor-pointer bg-dark/90 text-light
           hover:bg-light hover:text-dark dark:bg-light/90 dark:text-dark
            hover:dark:bg-dark hover:dark:text-light border border-solid border-transparent hover:dark:border-light/75"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  transition: { type: "spring", stiffness: 200, damping: 25 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
