import { Button as Buttons, ButtonProps } from "antd";

export default function Button({ type, children, ...props }: ButtonProps) {
	return (
		<Buttons type={type} {...props}>
			{children}
		</Buttons>
	);
}
