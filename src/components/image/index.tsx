import { AvatarProps, Avatar as Avatars } from "antd";
import { ImageProps, default as Images } from "next/image";
import Icon from "../icon";

type AvaProps = {
  icons?: any;
};

type ImagesProps = {
  type?: any;
  className?: any;
  src?: any;
  url?: any;
  props?: any;
  objectFit?: any;
  alt?: any;
  layout?: any;
  priority?: boolean;
  loader?: any;
  width?: any;
  height?: any;
  style?: any;
};

const Avatar = ({ icons }: AvaProps, props: AvatarProps) => {
  return (
    <Avatars
      icon={
        icons && (
          <Icon
            type={icons}
            {...props}
          />
        )
      }
      {...props}
    />
  );
};

const Image = (
  { className, layout, src, alt, objectFit, priority, loader, height, width, style }: ImagesProps,
  props: ImageProps
) => {
  return (
    <Images
      className={className}
      layout={layout}
      priority={priority}
      loader={loader}
      height={height}
      width={width}
      style={style}
      src={src}
      alt='props'
      {...props}
    />
  );
};

Image.Avatar = Avatar;

export default Image;
