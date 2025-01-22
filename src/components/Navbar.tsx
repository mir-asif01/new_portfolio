"use client";
import React, { useState } from "react";
import { Menu} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaArrowTrendDown } from "react-icons/fa6";

export function NavbarDemo() {
  return (
      <Navbar className="bottom-10" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section
      className={cn("fixed bottom-10 inset-x-0 w-2/3 bg-gray-800 mx-auto z-50 rounded-full", className)}
    >
      <Menu setActive={setActive}>
        <button className="text-white text-lg">resume</button>
        <button className="bg-white text-lg text-gray-900 px-4 py-2 rounded-full">hire me</button>
      </Menu>
    </section>
  );
}
