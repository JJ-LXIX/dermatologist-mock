import React, { useRef } from "react";
import Dermatologist1 from "@/public/images/dermatologist1.webp";
import Dermatologist2 from "@/public/images/dermatologist2.webp";
import Image from "next/image";
import { NextFont } from "next/dist/compiled/@next/font";
import { useScroll, useTransform, motion } from "framer-motion";

type Props = {
  epilogue: NextFont;
};

function About({ epilogue }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0.38, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0.4, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0.3, 1], [0, -200]);

  const variants1 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full mt-10 flex justify-center items-center">
      <div
        ref={ref}
        className="bg-emerald-900/30 w-[95vw] pt-20 min-h-[110vh]  rounded-3xl relative 
                     flex flex-col overflow-hidden space-y-14 xl:space-y-2"
      >
        {/* About Text */}
        <h2
          className={`text-[4rem] md:text-[10rem] text-nowrap absolute top-4 md:top-6 left-[50%] 
          translate-x-[-50%] text-green-100 font-extralight  ${epilogue.className}`}
        >
          About Us
        </h2>

        {/* Text */}
        <div className="w-full h-[30vh] xl:h-[50vh] 2xl:h-[40vh] flex justify-center items-center xl:items-end">
          <motion.p
            variants={variants1}
            initial="hidden"
            whileInView="show"
            style={{ y: y1 }}
            className="text-white w-5/6 xl:w-4/6 text-balance text-center text-xl md:text-4xl z-20 mix-blend-difference
                         font-light xl:font-extralight"
          >
            At Helios, we understand the importance of healthy, radiant skin.
            With our expert team and personalized approach, we're here to guide
            you on your journey to skincare success, empowering you to feel
            confident and beautiful.
          </motion.p>
        </div>

        {/* Images */}
        <div className="w-11/12 2xl:w-10/12 h-[55vh]  xl:h-[90vh] 2xl:left-[50%] 2xl:translate-x-[-50%] flex justify-end 2xl:justify-center items-center relative">
          {/* Left Side Image */}
          <motion.div
            variants={variants2}
            initial="hidden"
            whileInView="show"
            style={{ y: y2 }}
            className=" w-5/12 2xl:w-3/12 h-4/6 xl:h-3/6 absolute top-[50%] translate-y-[-50%] left-5 xl:left-[8.4%] 2xl:left-[15%] z-10"
          >
            <Image
              src={Dermatologist1}
              alt=""
              fill
              className="object-cover"
              sizes="40vw, (min-width:1280) 60vw, (min-width:1500) 70vw"

              // TODO: change sizes  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          {/* Right Side Image */}
          <motion.div
            variants={variants3}
            initial="hidden"
            whileInView="show"
            style={{ y: y3 }}
            className=" w-8/12 2xl:w-5/12 h-5/6 relative"
          >
            <Image
              src={Dermatologist2}
              alt=""
              fill
              className="object-cover"
              sizes="60vw, (min-width:1280) 60vw, (min-width:1500) 70vw"
            />
          </motion.div>
        </div>

        {/* Shapes */}
        <div className="w-5 h-5 absolute top-10 left-10 rounded-full bg-white"></div>
        <div className="w-5 h-5 absolute top-10 right-10 rounded-full bg-white"></div>
      </div>
    </div>
  );
}

export default About;
