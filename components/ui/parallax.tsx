'use client';

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  disabled?: boolean;
}

const Parallax: React.FC<ParallaxProps> = ({
  children,
  className,
  speed = 0.5,
  direction = "up",
  disabled = false,
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      let x = 0;
      let y = 0;

      switch (direction) {
        case "up":
          y = rate;
          break;
        case "down":
          y = -rate;
          break;
        case "left":
          x = rate;
          break;
        case "right":
          x = -rate;
          break;
      }

      setOffset({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, direction, disabled]);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
