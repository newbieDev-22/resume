"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function DetailList({
  title,
  data,
  DetailComponent,
  className = "my-64",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className={`${className}`}>
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        {title}
      </h2>

      <div className="w-3/4 mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top mt-1 dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {data.map((exp, index) => (
            <DetailComponent key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
}
