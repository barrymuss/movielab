"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dotPosition?: "bottom" | "left";
}

export function Carousel({
  children,
  className,
  autoplay = false,
  autoplaySpeed = 5000,
  dotPosition = "bottom",
}: CarouselProps) {
  const items = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(goNext, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, goNext]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Slides */}
      <div className="relative w-full">
        {items.map((child, index) => (
          <div
            key={index}
            className={cn(
              "w-full transition-opacity duration-700 ease-in-out",
              index === currentIndex
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0"
            )}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots - Left position */}
      {dotPosition === "left" && (
        <div className="embla__dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "embla__dot",
                index === currentIndex && "embla__dot--selected"
              )}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}

      {/* Dots - Bottom position */}
      {dotPosition === "bottom" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "embla__dot",
                index === currentIndex && "embla__dot--selected"
              )}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
