import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export function GridBackgroundDemo() {
  const words = ["work", "freelance", "remote-job"];
  return (
    <div className="w-full dark:bg-black bg-whhite  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative p-10 md:min-h-screen">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="hidden md:flex justify-between items-center mb-10">
        <h1 className="font-semibold text-xl md:text-3xl z-20">Asif</h1>
        <button className="border border-sky-400 px-2 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-xl z-20 flex items-center ">
          <Link href={"https://x.com/curious_asif"} target="_blank">
            twitter
          </Link>
          <GoArrowUpRight />
        </button>
      </div>
      <div className="z-20">
        <p className="flex justify-center items-center mb-2 text-sm md:text-xl z-20">
          <span className="flex items-center justify-center gap-1">
            <span className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></span>
            open for{" "}
            <FlipWords className="font-semibold text-green-500" words={words} />
          </span>
        </p>
        <h1 className="text-2xl md:text-8xl text-slate-600 text-center z-20">
          Crafting Digital World
        </h1>
        <p className="text-lg  md:text-4xl font-semibold text-center mt-7 z-20">
          <Highlight className="py-1 px-2">Creative Developer</Highlight>
          specializing in modern web solutions using cutting-edge technologies
        </p>
        <button className="mx-auto mt-10 flex items-center gap-1 px-4 py-2 bg-gradient-to-bl from-violet-700 to-blue-800 rounded-full md:text-xl">
          <Link href={"/send-email"} className="z-40 text-white">
            lets work
          </Link>
          <GoArrowRight className="z-40 text-white" />
        </button>
      </div>
    </div>
  );
}
