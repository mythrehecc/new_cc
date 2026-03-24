'use client';
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  distance?: number;
  threshold?: number;
}

const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  className,
  staggerDelay = 100,
  childDelay = 0,
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

  const getInitialStyles = (index: number) => {
    const styles: React.CSSProperties = {
      opacity: 0,
      transition: `all 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${childDelay + index * staggerDelay}ms`,
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
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            style={isVisible ? getVisibleStyles() : getInitialStyles(index)}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          style={isVisible ? getVisibleStyles() : getInitialStyles(0)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default StaggerChildren;
