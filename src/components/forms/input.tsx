import { Input as Inputs } from "antd";
import { Icon, Tooltip } from "..";
import type { SearchProps as SearchProp } from "antd/es/input/Search";
import { createRef } from "react";

export type SearchProps = SearchProp;

const { TextArea } = Inputs;
const Search = Inputs.Search;

export type InputProps = {
  prefixIcon?: any;
  suffixIcon?: any;
  placeholder?: any;
  type?: any;
  value?: any;
  defaultValue?: any;
  tooltips?: any;
  iconProps?: any;
  children?: any;
  onChange?: any;
  size?: any;
  style?: any;
  autoSize?: any;
  onSearch?: any;
};

const Input = ({
  prefixIcon,
  suffixIcon,
  placeholder,
  type,
  value,
  tooltips,
  iconProps,
  children,
  onChange,
  size,
  defaultValue,
  style,
  autoSize,
  ...props
}: InputProps) => {
  const inputRef = createRef<any>();

  function componentDidMount() {
    const input = inputRef.current;
    input.select();
  }

  switch (type) {
    case "group":
      return <Inputs.Group>{children}</Inputs.Group>;
    case "search":
      return (
        <Search
          size={size ? size : "default"}
          allowClear
          ref={inputRef}
          placeholder={placeholder == null ? "search..." : placeholder}
          {...props}
        />
      );
    case "textarea":
      return (
        <TextArea
          size={size ? size : "default"}
          autoSize={autoSize}
          style={style}
          allowClear
          value={value}
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder={placeholder == null ? "placeholder" : placeholder}
          {...props}
        />
      );
    case "password":
      return (
        <Inputs.Password
          size={size ? size : "default"}
          allowClear
          type='password'
          value={value}
          ref={inputRef}
          defaultValue={defaultValue}
          prefix={
            prefixIcon != null && (
              <Tooltip title={tooltips}>
                <Icon
                  type={prefixIcon}
                  {...iconProps}
                />
              </Tooltip>
            )
          }
          placeholder={placeholder == null ? "placeholder" : placeholder}
          onChange={onChange}
        />
      );
    case "number":
      return (
        <Inputs
          ref={inputRef}
          type='number'
          size={size ? size : "default"}
          allowClear
          placeholder={placeholder == null ? "placeholder" : placeholder}
          value={value}
          defaultValue={defaultValue}
          min={0}
          prefix={
            prefixIcon != null && (
              <Tooltip title={tooltips}>
                <Icon
                  type={prefixIcon}
                  {...iconProps}
                />
              </Tooltip>
            )
          }
          suffix={
            suffixIcon != null && (
              <Tooltip title={tooltips}>
                <Icon
                  type={suffixIcon}
                  {...iconProps}
                />
              </Tooltip>
            )
          }
        />
      );
    default:
      return (
        <Inputs
          ref={inputRef}
          size={size ? size : "default"}
          allowClear
          placeholder={placeholder == null ? "placeholder" : placeholder}
          value={value}
          defaultValue={defaultValue}
          prefix={
            prefixIcon != null && (
              <Tooltip title={tooltips}>
                <Icon
                  type={prefixIcon}
                  {...iconProps}
                />
              </Tooltip>
            )
          }
          suffix={
            suffixIcon != null && (
              <Tooltip title={tooltips}>
                <Icon
                  type={suffixIcon}
                  {...iconProps}
                />
              </Tooltip>
            )
          }
          onChange={onChange}
        />
      );
  }
};

Input.Group = Input;
export default Input;
