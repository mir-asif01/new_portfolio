"use client";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Navbar() {
  return (
    <section className="flex items-center justify-center z-50 bg-transparent">
      <div className="fixed top-2 px-4 py-2 bg-gradient-to-b from-blue-300 to-blue-400 border border-lime-200 bg-gray-700 rounded-full flex justify-between items-center gap-8 z-50 bg-transparent opacity-95 shadow-sm shadow-lime-200 border-opacity-45">
        <Link href={"/"} className="text-gray-800 font-semibold">
          Asif
        </Link>
        <button className="border border-white px-2 py-1 md:px-4 md:py-2 rounded-full md:text-xl z-20 flex items-center ">
          <Link href={"https://x.com/curious_asif"} target="_blank">
            resume
          </Link>
          <GoArrowUpRight />
        </button>
        <button className="border border-white px-2 py-1 md:px-4 md:py-2 rounded-full md:text-xl z-20 flex items-center ">
          <Link href={"https://x.com/curious_asif"} target="_blank">
            twitter
          </Link>
          <GoArrowUpRight />
        </button>
        <Link
          href={"/send-email"}
          className="bg-white text-gray-800 px-2 py-1 rounded-full text-sm"
        >
          hire me
        </Link>
      </div>
    </section>
  );
}
