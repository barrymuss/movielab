import React from "react";
import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

interface GridColProps {
  children: React.ReactNode;
  className?: string;
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  flex?: string;
}

// Mapping for col-span classes to avoid dynamic class generation
const colSpanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
  13: "col-span-13",
  14: "col-span-14",
  15: "col-span-15",
  16: "col-span-16",
  17: "col-span-17",
  18: "col-span-18",
  19: "col-span-19",
  20: "col-span-20",
  21: "col-span-21",
  22: "col-span-22",
  23: "col-span-23",
  24: "col-span-24",
};

const smColSpanMap: Record<number, string> = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12",
  13: "sm:col-span-13",
  14: "sm:col-span-14",
  15: "sm:col-span-15",
  16: "sm:col-span-16",
  17: "sm:col-span-17",
  18: "sm:col-span-18",
  19: "sm:col-span-19",
  20: "sm:col-span-20",
  21: "sm:col-span-21",
  22: "sm:col-span-22",
  23: "sm:col-span-23",
  24: "sm:col-span-24",
};

const mdColSpanMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
  13: "md:col-span-13",
  14: "md:col-span-14",
  15: "md:col-span-15",
  16: "md:col-span-16",
  17: "md:col-span-17",
  18: "md:col-span-18",
  19: "md:col-span-19",
  20: "md:col-span-20",
  21: "md:col-span-21",
  22: "md:col-span-22",
  23: "md:col-span-23",
  24: "md:col-span-24",
};

const lgColSpanMap: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
  13: "lg:col-span-13",
  14: "lg:col-span-14",
  15: "lg:col-span-15",
  16: "lg:col-span-16",
  17: "lg:col-span-17",
  18: "lg:col-span-18",
  19: "lg:col-span-19",
  20: "lg:col-span-20",
  21: "lg:col-span-21",
  22: "lg:col-span-22",
  23: "lg:col-span-23",
  24: "lg:col-span-24",
};

const xlColSpanMap: Record<number, string> = {
  1: "xl:col-span-1",
  2: "xl:col-span-2",
  3: "xl:col-span-3",
  4: "xl:col-span-4",
  5: "xl:col-span-5",
  6: "xl:col-span-6",
  7: "xl:col-span-7",
  8: "xl:col-span-8",
  9: "xl:col-span-9",
  10: "xl:col-span-10",
  11: "xl:col-span-11",
  12: "xl:col-span-12",
  13: "xl:col-span-13",
  14: "xl:col-span-14",
  15: "xl:col-span-15",
  16: "xl:col-span-16",
  17: "xl:col-span-17",
  18: "xl:col-span-18",
  19: "xl:col-span-19",
  20: "xl:col-span-20",
  21: "xl:col-span-21",
  22: "xl:col-span-22",
  23: "xl:col-span-23",
  24: "xl:col-span-24",
};

const xxlColSpanMap: Record<number, string> = {
  1: "2xl:col-span-1",
  2: "2xl:col-span-2",
  3: "2xl:col-span-3",
  4: "2xl:col-span-4",
  5: "2xl:col-span-5",
  6: "2xl:col-span-6",
  7: "2xl:col-span-7",
  8: "2xl:col-span-8",
  9: "2xl:col-span-9",
  10: "2xl:col-span-10",
  11: "2xl:col-span-11",
  12: "2xl:col-span-12",
  13: "2xl:col-span-13",
  14: "2xl:col-span-14",
  15: "2xl:col-span-15",
  16: "2xl:col-span-16",
  17: "2xl:col-span-17",
  18: "2xl:col-span-18",
  19: "2xl:col-span-19",
  20: "2xl:col-span-20",
  21: "2xl:col-span-21",
  22: "2xl:col-span-22",
  23: "2xl:col-span-23",
  24: "2xl:col-span-24",
};

export function Grid({ children, className }: GridProps) {
  return (
    <div className={cn("grid grid-cols-24 gap-3", className)}>
      {children}
    </div>
  );
}

function GridCol({
  children,
  className,
  span = 24,
  sm,
  md,
  lg,
  xl,
  xxl,
  flex,
}: GridColProps) {
  const colClasses = cn(
    span && colSpanMap[span],
    sm && smColSpanMap[sm],
    md && mdColSpanMap[md],
    lg && lgColSpanMap[lg],
    xl && xlColSpanMap[xl],
    xxl && xxlColSpanMap[xxl],
    flex && "flex-auto",
    className
  );

  return <div className={colClasses}>{children}</div>;
}

Grid.Col = GridCol;
