import Image from "next/image";
import React from "react";
import Dermatologist1 from "@/public/images/team/pexels-linkedin-sales-navigator-2182970.jpg";
import Dermatologist2 from "@/public/images/team/pexels-cottonbro-studio-5491144.jpg";
import Dermatologist3 from "@/public/images/team/pexels-emmy-e-2381069.jpg";
import Dermatologist4 from "@/public/images/team/pexels-andrea-piacquadio-3760263.jpg";
import { NextFont } from "next/dist/compiled/@next/font";

type Props = {
  epilogue: NextFont;
};

const dermatologists = [
  {
    image: Dermatologist1,
    name: "Dr. Michael Smith",
    job: "Senior Dermatologist",
    objectPosition: "100% 0",
  },
  {
    image: Dermatologist2,
    name: "Dr. Sarah Johnson",
    job: "Senior Dermatologist",
    objectPosition: "0% 30%",
  },
  {
    image: Dermatologist3,
    name: "Dr. Lisa Martinez",
    job: "Junior Dermatologist",
    objectPosition: "50% 50%",
  },
  {
    image: Dermatologist4,
    name: "Dr. David Wilson",
    job: "Junior Dermatologist",
    objectPosition: "50% 50%",
  },
];

export default function Team({ epilogue }: Props) {
  return (
    <div className="min-h-screen w-full py-20">
      <div className="min-h-screen flex flex-col-reverse w-full xl:flex  xl:flex-row xl:justify-between">
        <div className=" flex flex-col items-center gap-5  pt-10 md:mx-8 md:grid md:grid-cols-2 md:grid-rows-2  xl:w-full  xl:justify-items-center xl:gap-4 xl:pt-0">
          {dermatologists.map((dermatologist) => {
            return (
              <div
                key={dermatologist.name}
                className="h-[40vh] w-7/12  md:h-[50vh] md:w-full 2xl:w-3/4  xl:h-[70vh]"
              >
                <div className="relative h-5/6 w-full">
                  <Image
                    src={dermatologist.image}
                    alt="Dentist Image"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: dermatologist.objectPosition,
                    }}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
                <div className="flex h-1/6 w-full flex-col justify-center  px-2">
                  <h3 className="text-lg text-black md:text-2xl">
                    {dermatologist.name}
                  </h3>
                  <h4 className="text-base text-zinc-900 md:text-xl">
                    {dermatologist.job}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        <h3
          className={`${epilogue.className} text-center text-[4rem] 
          md:text-[6rem]  font-extralight text-sky-700 xl:w-1/2 xl:text-8xl`}
        >
          Our Team
        </h3>
      </div>
    </div>
  );
}
