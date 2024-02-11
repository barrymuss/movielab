import { Button as Buttons, ButtonProps } from "antd";
import { Icon } from "..";
import { GetIconProps } from "../icon";

type ButtonIconProps = {
  icons?: any;
};

const Button = ({ children, ...props }: ButtonProps, { icons }: ButtonIconProps) => {
  return (
    <Buttons
      type={props.type}
      className={props.className}
      {...props}>
      {children}
    </Buttons>
  );
};

export default Button;
