"use client";
import Link from "next/link";
import React from "react";


export default function Navbar() {
  
  return (
    <section className="flex items-center justify-center z-50 bg-transparent">
      <div
      className="fixed bottom-2 px-5 py-2 bg-gradient-to-b from-blue-300 to-blue-400 border border-lime-200 bg-gray-700 rounded-full flex justify-between items-center gap-8 z-40 bg-transparent opacity-95 shadow-sm shadow-lime-200 border-opacity-45"
    >
        <Link href={"/"} className="text-gray-800 font-semibold">home</Link>
        <Link href={""} target="_blank" className="text-gray-800 font-semibold">resume</Link>

        <Link href={"/send-email"} className="bg-white text-gray-800 px-4 py-2 rounded-full">
        hire me
        </Link>
    </div>
    </section>
  );
}
