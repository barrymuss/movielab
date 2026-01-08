"use client";

import { Button } from "@/components/ui/button";
import { Icon, IconType } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/assets/Layer1.png";

type NavbarProps = {
  data?: Array<{
    title?: string;
    menu: Array<{
      icon: IconType;
      label: string;
    }>;
  }>;
};

export default function Navbar({ data }: NavbarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center p-3">
        <div className="relative h-full w-[70px]">
          <Image
            src={Logo.src}
            alt="MovieLab Logo"
            width={100}
            height={50}
            className="object-contain"
            priority
          />
        </div>
      </div>
      {data?.map((item, index) => (
        <div
          className="flex flex-col items-center gap-3 px-3 my-3"
          key={index}
        >
          {item.title && (
            <div className="text-[13px] font-semibold capitalize text-white px-3 py-1">
              {item.title}
            </div>
          )}
          {item.menu.map((btn, ix) => (
            <Button
              key={ix}
              variant="ghost"
              className={cn(
                "border-none rounded-md text-sm font-semibold",
                "w-auto h-auto px-3 py-2",
                "text-white bg-menu-light hover:bg-menu"
              )}
            >
              <Icon
                className="text-red"
                type={btn.icon}
                size={16}
              />
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
