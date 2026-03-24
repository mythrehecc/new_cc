'use client';

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  distance?: number;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 30,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getInitialStyles = () => {
    const styles: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}ms`,
    };

    switch (direction) {
      case "up":
        styles.transform = `translateY(${distance}px)`;
        break;
      case "down":
        styles.transform = `translateY(-${distance}px)`;
        break;
      case "left":
        styles.transform = `translateX(${distance}px)`;
        break;
      case "right":
        styles.transform = `translateX(-${distance}px)`;
        break;
      case "scale":
        styles.transform = `scale(0.8)`;
        break;
      case "fade":
        // Only opacity is needed for fade
        break;
    }

    return styles;
  };

  const getVisibleStyles = () => {
    return {
      opacity: 1,
      transform: "translate(0, 0) scale(1)",
    };
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
