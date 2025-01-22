"use client";
import React from "react";

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full shadow-input flex justify-center  gap-10 px-5 py-3 border-2 border-opacity-45 border-blue-400 shadow-sm shadow-blue-400"
    >
      {children}
    </nav>
  );
};

