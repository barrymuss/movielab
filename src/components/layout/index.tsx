"use client";

import { useState, useEffect } from "react";
import { Navbar, Header } from "..";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children?: React.ReactNode;
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "TV Shows", href: "/tv" },
  { label: "My List", href: "/my-list" },
];

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("bg-background w-full min-h-screen", "flex flex-col")}>
      {/* Top Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full",
          "transition-all duration-300",
          isScrolled
            ? "bg-accent/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo & Nav Links */}
            <Navbar links={navLinks} />

            {/* Search & User */}
            <Header />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-[1920px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
