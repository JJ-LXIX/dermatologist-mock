"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Epilogue, Montserrat } from "next/font/google";
import Services from "@/components/Services/Services";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/TestimonialSection/Testimonial";

const montserrat = Montserrat({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });

export default function Home() {
  return (
    <ReactLenis root>
      <main className={`${montserrat.className} bg-[#f3f0f0] `}>
        <HeroSection epilogue={epilogue} />
        <About epilogue={epilogue} />
        <Services epilogue={epilogue} />
        <Team epilogue={epilogue} />
        <Testimonial />
      </main>
    </ReactLenis>
  );
}
