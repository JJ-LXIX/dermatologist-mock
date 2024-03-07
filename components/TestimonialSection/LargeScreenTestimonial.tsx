import React, { useRef } from "react";
import Column from "./Column";
import { useScroll, useTransform } from "framer-motion";
import useDimension from "@/lib/hooks/useDimension";

import Female1 from "@/public/images/testimonial people/female1.jpg";
import Female2 from "@/public/images/testimonial people/female2.jpg";
import Female3 from "@/public/images/testimonial people/female3.jpg";
import Female4 from "@/public/images/testimonial people/female4.jpg";
import Female5 from "@/public/images/testimonial people/female5.jpg";
import Female6 from "@/public/images/testimonial people/female6.jpg";
import Female7 from "@/public/images/testimonial people/female7.jpg";

import Male1 from "@/public/images/testimonial people/male1.jpg";
import Male2 from "@/public/images/testimonial people/male2.jpg";
import Male3 from "@/public/images/testimonial people/male3.jpg";
import Male4 from "@/public/images/testimonial people/male4.jpg";
import Male5 from "@/public/images/testimonial people/male5.jpg";
import SmallScreenTestimonial from "./SmallScreenTestimonial";

type Props = {};
const reviews = [
  {
    name: "Eleanor White",
    review:
      "Dr. Smith is a skilled dentist. I'm impressed with the care I received at Washington Dental Care.",
    image: Female1,
  },
  {
    name: "Henry Adams",
    review:
      "The team at Washington Dental Clinic is outstanding. Dr. Smith's expertise shines through. Highly recommended!",
    image: Male1,
  },
  {
    name: "Olivia Turner",
    review:
      "Friendly, professional, and caring. Dr. Smith and the staff at Washington Dental Care are top-notch. Great experience!",
    image: Female2,
  },
  {
    name: "William Parker",
    review:
      "My family trusts Dr. Smith at Washington Dental Clinic. Always a welcoming atmosphere. A fantastic dental practice!",
    image: Male2,
  },
  {
    name: "Sophia Hall",
    review:
      "Dr. Smith transformed my smile at Washington Dental Care. The results speak for themselves. Thank you!",
    image: Female3,
  },
  {
    name: "Lucas Brooks",
    review:
      "I had a pleasant experience with Dr. Smith at Washington Dental Clinic. Highly skilled and attentive to patients.",
    image: Male3,
  },
  {
    name: "Ava Mitchell",
    review:
      "Washington Dental Kids is wonderful. Dr. Smith makes pediatric dentistry fun for children. My kids love it here!",
    image: Female4,
  },
  {
    name: "Noah Green",
    review:
      "Emergency care was swift and professional at Washington Dental Care. Dr. Smith and the team exceeded my expectations.",
    image: Male4,
  },
  {
    name: "Emma Foster",
    review:
      "Dr. Smith's orthodontic work at Washington Dental Clinic is amazing. I'm thrilled with my new smile!",
    image: Female5,
  },
  {
    name: "Liam Walker",
    review:
      "A big thank you to Dr. Smith and the team at Washington Dental Care for their exceptional care and service.",
    image: Male5,
  },
  {
    name: "Grace Turner",
    review:
      "Dr. Smith is truly a dental wizard. I couldn't be happier with the results from Washington Dental Care.",
    image: Female6,
  },
  {
    name: "Mia Rodriguez",
    review:
      "Washington Dental Clinic is a gem. Dr. Smith's attention to detail and patient care are unmatched.",
    image: Female7,
  },
];

export default function LargeScreenTestimonial({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { dimension } = useDimension();

  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25]
  );
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  return (
    <div
      className="flex h-[175vh] gap-[2vw] overflow-hidden px-10 pb-20"
      ref={container}
    >
      <Column reviews={[reviews[0], reviews[1], reviews[2]]} y={y} />
      <Column reviews={[reviews[3], reviews[4], reviews[5]]} y={y2} />
      <Column reviews={[reviews[6], reviews[7], reviews[8]]} y={y3} />
      <Column reviews={[reviews[9], reviews[10], reviews[11]]} y={y4} />
    </div>
  );
}
