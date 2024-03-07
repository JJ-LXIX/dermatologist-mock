import useDimension from "@/lib/hooks/useDimension";
import React from "react";
import LargeScreenTestimonial from "./LargeScreenTestimonial";
import SmallScreenTestimonial from "./SmallScreenTestimonial";

type Props = {};

export default function Testimonial({}: Props) {
  const { isSmallScreen } = useDimension();
  return isSmallScreen ? (
    <SmallScreenTestimonial />
  ) : (
    <LargeScreenTestimonial />
  );
}
