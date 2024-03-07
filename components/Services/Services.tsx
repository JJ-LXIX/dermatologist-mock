import React, { useRef, useState } from "react";

import Image, { StaticImageData } from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import useMousePosition from "@/lib/hooks/useMousePosition";
import useDimension from "@/lib/hooks/useDimension";
import { NextFont } from "next/dist/compiled/@next/font";

import ArrowSvg from "@/lib/svg/ArrowSvg";

import botox from "@/public/images/services/botox.jpeg";
import chemicalPeel from "@/public/images/services/chemicalPeel.jpg";
import laser from "@/public/images/services/laser.webp";
import microdermabrasion from "@/public/images/services/microdermabrasion.jpg";
import laser_facial from "@/public/images/services/laser_facial.jpg";
import dermal_fillers from "@/public/images/services/dermal_fillers.webp";

type Props = {
  epilogue: NextFont;
};

const services = [
  {
    name: "Botox and Fillers",
    image: botox,
    text: `"Injectable treatments to reduce wrinkles, restore volume, and enhance facial contours."`,
  },
  {
    name: "Chemical Peels",
    image: chemicalPeel,
    text: `"Procedures to improve skin texture, tone, and clarity by removing dead skin cells and stimulating collagen production."`,
  },
  {
    name: "Laser Hair Removal",
    image: laser,
    text: `"Safe and effective treatment to permanently reduce unwanted hair on various body areas."`,
  },
  {
    name: "Microdermabrasion",
    image: microdermabrasion,
    text: `"Non-invasive exfoliation technique to rejuvenate skin, reduce fine lines, and improve overall texture."`,
  },
  {
    name: "Laser Skin Resurfacing",
    image: laser_facial,
    text: `"Advanced laser treatments to address pigmentation issues, scars, and wrinkles for smoother, more youthful-looking skin."`,
  },
  {
    name: "Dermal Fillers",
    image: dermal_fillers,
    text: `"Injectable gels to restore volume, smooth lines and providing natural-looking results with minimal downtime."`,
  },
];

export default function Services({ epilogue }: Props) {
  const ref = useRef(null);
  const { isSmallScreen } = useDimension();
  const [serviceImage, setServiceImage] = useState<StaticImageData | string>(
    botox
  );
  const [hovered, setHovered] = useState(false);
  const mousePosition = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Mouse Move

  if (isSmallScreen) {
    return (
      <div className="min-h-screen" ref={ref}>
        <h2
          className={`${epilogue.className} leading-snug pt-10 text-center text-wrap px-4 text-[4rem] 
          md:text-[6rem] font-extralight text-sky-700`}
        >
          Our Services
        </h2>

        <div className="flex h-[70vh] w-full items-center justify-center">
          <div className="bg flex h-4/6 w-11/12 md:h-5/6 md:w-full flex-col justify-around items-center px-5">
            {services.map((service) => {
              return (
                // Services Text
                <div
                  key={service.name}
                  className="flex h-full w-full justify-between items-center border-b-2 
                  border-zinc-200 md:w-9/12"
                >
                  <p className="text-lg md:text-3xl">{service.name}</p>
                  <div className="animate-pulse pr-1">
                    <ArrowSvg />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="min-h-screen" ref={ref}>
        <motion.h2
          style={{ y: y1 }}
          className={`${epilogue.className} text-8xl text-nowrap font-extralight text-sky-700 pl-20 w-min relative`}
        >
          Our Services
        </motion.h2>

        <div className="mx-auto mt-10 flex h-[80vh] w-11/12 items-center justify-center 2xl:w-5/6">
          <div className="relative flex h-5/6 w-full flex-col justify-around px-5 2xl:w-11/12">
            {services.map((service) => {
              return (
                // Services Text
                <div
                  key={service.name}
                  onMouseEnter={() => {
                    setServiceImage(service.image);
                    setHovered(true);
                  }}
                  onMouseLeave={() => setHovered(false)}
                  className="cursor-pointer relative flex h-full w-full items-center justify-between border-b-2  border-zinc-200 text-xl text-black"
                >
                  <p className="font-medium text-sky-950">{service.name}</p>
                  <div className="text-base text-black lg:max-w-[60%] text-pretty text-center">
                    <p>{service.text}</p>
                  </div>
                  <div className="animate-pulse pr-1">
                    <ArrowSvg />
                  </div>
                </div>
              );
            })}
            <AnimatePresence>
              {hovered ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  animate={{
                    opacity: 1,
                    x: mousePosition.x - 400,
                    y: mousePosition.y - 300,
                    rotateZ: (mousePosition.x - 700) * 0.04,
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 h-3/6 w-2/6 self-center"
                >
                  <Image
                    src={serviceImage}
                    alt="service images"
                    fill
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
}
