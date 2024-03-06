"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Epilogue, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });

export default function Home() {
  return (
    <ReactLenis root>
      <main className={`${montserrat.className}min-h-screen bg-white`}>
    </main>
    </ReactLenis>
  );
}
