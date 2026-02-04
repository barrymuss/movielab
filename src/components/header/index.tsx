"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Search */}
      <div
        className={cn(
          "flex items-center transition-all duration-300",
          isSearchOpen ? "w-[250px]" : "w-auto"
        )}
      >
        {isSearchOpen ? (
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search movies, TV shows..."
              autoFocus
              className={cn(
                "w-full pl-10 pr-4 py-2 rounded-md",
                "bg-white/10 border border-white/20",
                "text-white placeholder:text-white/50",
                "text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
              )}
              onBlur={() => setIsSearchOpen(false)}
            />
            <Icon
              type="search"
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
            />
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSearchOpen(true)}
            className="text-background-light hover:text-white hover:bg-white/10"
          >
            <Icon type="search" size={20} />
          </Button>
        )}
      </div>

      {/* Notifications */}
      <Button
        variant="ghost"
        size="sm"
        className="text-background-light hover:text-white hover:bg-white/10 relative"
      >
        <Icon type="bell" size={20} />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full" />
      </Button>

      {/* User Profile */}
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "flex items-center gap-2",
          "text-background-light hover:text-white hover:bg-white/10"
        )}
      >
        <div className="w-8 h-8 rounded-md bg-accent-muted flex items-center justify-center">
          <Icon type="user" size={18} className="text-background-light" />
        </div>
        <Icon type="chevronDown" size={16} className="hidden sm:block" />
      </Button>
    </div>
  );
}
