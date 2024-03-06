import Image from "next/image";
import React, { useRef } from "react";
import HeroSectionWoman from "@/public/images/hero-section1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import TopNav from "../TopNavigation/TopNav";
import { NextFont } from "next/dist/compiled/@next/font";

type Props = {
  epilogue: NextFont;
};

export default function HeroSection({ epilogue }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);

  const variants1 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref} className="overflow-x-hidden">
      <TopNav />
      <div className="h-screen w-full flex flex-col xl:flex-row justify-end xl:items-end bg-sky-100">
        {/* Hero Text */}
        <div
          className={`text-black  h-[50%] md:h-[45%] xl:h-[50%] 2xl:h-[60%] w-full xl:w-[125%] 2xl:w-[150%] flex 
          items-center xl:items-start pl-2 md:pl-4 xl:pl-[2%] xl:mb-20 2xl:mb-0 ${epilogue.className}`}
        >
          <motion.h1
            variants={variants1}
            initial="hidden"
            animate="show"
            style={{ y: y1 }}
            className="text-balance leading-[3rem] text-[2.7rem] md:text-7xl xl:text-7xl 2xl:text-8xl text-sky-950 font-extralight"
          >
            DISCOVER RADIANT SKIN: EXPERT TAILORED DERMATOLOGY FOR YOUR BEAUTY.
          </motion.h1>
        </div>

        {/* Hero Image */}
        <div className="h-[50%] md:h-[70%] xl:h-[80%] 2xl:h-[90%] w-full flex justify-end relative overflow-hidden">
          <motion.div
            style={{ y: y2, scale: scaleImage }}
            className="w-[70%] xl:w-full h-[100%] absolute overflow-hidden"
          >
            <Image
              src={HeroSectionWoman}
              alt="Image of a woman with clear skin"
              fill
              className="object-cover"
              //   TODO: change sizes
              sizes="50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="h-[10vh] w-full bg-sky-100"></div>
    </div>
  );
}
