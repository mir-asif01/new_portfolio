"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction,
  speed,
  pauseOnHover = true,
  className,
}: {
  items: {
    icon?: ReactNode;
    name?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-nowrap gap-10",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="max-w-full relative"
            key={idx}
          >
            <blockquote>
              <div className="relative flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-semibold flex flex-col justify-center items-center">
                    {item.icon}
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
