import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";
import { GoArrowRight } from "react-icons/go";

export function GridBackgroundDemo() {
    const words = ["work","freelance","remote-job"]
  return (
    <div className="min-h-screen w-full dark:bg-black bg-whhite  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative p-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-semibold text-gray-900 z-20">Asif</h1>
        <button className="border border-sky-400 px-2 py-1 rounded-full text-xs z-20 flex items-center gap-1">
            <span>twitter</span>
            <GoArrowUpRight/>
        </button>
      </div>
      <div className="z-20">
        <p className="flex justify-center items-center mb-2 text-xs z-20">
            <span className="flex items-center justify-center gap-1">
                <span className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></span>
                open for <FlipWords className="font-semibold text-green-500" words={words}/>
            </span>
        </p>
        <h1 className="text-2xl text-center z-20">Crafting Digital World</h1>
        <p className="text-sm font-semibold text-center mt-7 z-20">
            <Highlight className="py-1 px-2">Creative Developer</Highlight>
             specializing in modern web solutions using cutting-edge technologies
        </p>
        <button className="mx-auto mt-10 flex items-center gap-1 px-3 py-2 bg-gradient-to-bl from-violet-500 to-blue-500 rounded-full z-30">
            <span className="z-40 text-gray-800">lets work</span>
            <GoArrowRight className="z-40 text-gray-800"/>
        </button>
      </div>
    </div>
  );
}
