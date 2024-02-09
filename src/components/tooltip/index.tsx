import { Tooltip as Tooltips, Popconfirm } from "antd";

type TooltipProps = {
  className?: any;
  children?: any;
  title?: string;
  placement?: any;
  onConfirm?: any;
  onCancel?: any;
  okText?: any;
  cancelText?: any;
  description?: any;
};

function Tooltip({ className, children, title, placement, ...props }: TooltipProps) {
  return (
    <Tooltips
      overlayClassName={className}
      color='#fff'
      title={title}
      placement={placement}
      overlayInnerStyle={{
        color: "#36414c",
        textTransform: "capitalize",
      }}
      {...props}>
      {children}
    </Tooltips>
  );
}

function Confirm({ children, title, placement, ...props }: TooltipProps) {
  return (
    <Popconfirm
      title={title}
      placement={placement}
      {...props}>
      {children}
    </Popconfirm>
  );
}

Tooltip.Confirm = Confirm;

export default Tooltip;
