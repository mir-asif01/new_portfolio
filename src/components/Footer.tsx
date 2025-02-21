"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");
  const getDate = new Date();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = getDate.toLocaleTimeString();
      setTime(time);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <section className="dark:bg-gray-800 pt-8 pb-5 border-t border-green-600 border-opacity-5 md:text-2xl">
      <div className="px-5 pt-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="font-semibold">{time ?? time}</h1>
            <h1>{getDate.toLocaleDateString()}</h1>
          </div>
          <div>
            <h1 className="text-right text-lg md:text-2xl text-slate-900 font-semibold">
              find me on
            </h1>
            <h1 className="flex gap-3">
              <Link href={"https://x.com/curious_asif"} className="">
                twitter
              </Link>
              <Link href={"https://github.com/mir-asif01"} className="">
                github
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/mir-kamrul-ahsan-asif-7a19a62b7/"
                }
                className=""
              >
                linkedIn
              </Link>
            </h1>
          </div>
        </div>
        <p className="text-center mt-4 font-semibold">@mir kamrul ahsan asif</p>
      </div>
    </section>
  );
}
