import { default as NextImage, ImageProps } from "next/image";

type ImagesProps = ImageProps & {
  objectFit?: string;
};

const Image = ({ className, src, alt = "image", objectFit, priority, width, height, style, ...props }: ImagesProps) => {
  return (
    <NextImage
      className={className}
      priority={priority}
      height={height}
      width={width}
      style={style}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
