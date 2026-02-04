import {
  Home,
  User,
  Play,
  Info,
  Star,
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  Heart,
  Bookmark,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  user: User,
  play: Play,
  info: Info,
  star: Star,
  search: Search,
  bell: Bell,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  heart: Heart,
  bookmark: Bookmark,
} as const;

export type IconType = keyof typeof iconMap;

export interface IconProps {
  type: IconType;
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

export function Icon({
  type,
  className,
  size = 24,
  color,
  onClick
}: IconProps) {
  const IconComponent = iconMap[type];

  return (
    <IconComponent
      className={cn(className)}
      size={size}
      color={color}
      onClick={onClick}
    />
  );
}
