"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dotPosition?: "bottom" | "right";
  opts?: CarouselOptions;
}

export function Carousel({
  children,
  className,
  autoplay = false,
  autoplaySpeed = 5000,
  dotPosition = "bottom",
  opts,
}: CarouselProps) {
  const plugins = autoplay
    ? [Autoplay({ delay: autoplaySpeed, stopOnInteraction: false })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      ...opts,
    },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={cn("embla relative", className)}>
      <div className="embla__viewport overflow-hidden rounded-[15px]" ref={emblaRef}>
        <div className="embla__container flex">
          {React.Children.map(children, (child) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {dotPosition === "bottom" && (
        <div className="embla__dots flex gap-2 justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "embla__dot w-2 h-2 rounded-full transition-all cursor-pointer border-none",
                index === selectedIndex
                  ? "bg-red w-3"
                  : "bg-white/30 hover:bg-white/50"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}

      {dotPosition === "right" && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "embla__dot w-2 h-2 rounded-full transition-all cursor-pointer border-none",
                index === selectedIndex
                  ? "bg-red h-3"
                  : "bg-white/30 hover:bg-white/50"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
