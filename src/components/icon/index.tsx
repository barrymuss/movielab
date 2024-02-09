import * as icons from "./iconData";

export type GetIconProps = {
  type: keyof typeof icons;
  className?: any;
  style?: any;
  size?: any;
  color?: any;
  twoToneColor?: any;
  onClick?: any;
};

export default function Icon({ type, className, style, size, color, twoToneColor, onClick }: GetIconProps) {
  const Component = icons[type];
  return (
    <Component
      className={`${className}`}
      style={{ fontSize: `${size}px`, color: `#${color}`, ...style }}
      twoToneColor={`#${twoToneColor}`}
      onClick={onClick}
    />
  );
}
