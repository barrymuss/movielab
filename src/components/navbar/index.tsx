"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Layer1.png";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links?: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <div className="flex items-center gap-10">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <div className="relative w-[100px] h-[40px]">
          <Image
            src={Logo.src}
            alt="MovieLab Logo"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-1">
        {links?.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              "px-4 py-2 rounded-md",
              "text-sm font-medium",
              "text-background-light hover:text-white",
              "hover:bg-white/10",
              "transition-colors duration-200"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
