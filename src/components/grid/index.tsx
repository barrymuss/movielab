import { Row as Rows, Col as Cols } from "antd";

type gridProps = {
  children?: any;
  gutter?: any;
  span?: any;
  flex?: any;
  style?: any;
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
  xxl?: any;
  className?: any;
  justify?: any;
  align?: any;
};

const Grid = ({
  children,
  gutter,
  span,
  flex,
  style,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className,
  justify,
  align,
  ...props
}: gridProps) => {
  const Guts = [
    { xs: 8, sm: 10, md: 10, lg: 12, xl: 12 },
    { xs: 8, sm: 10, md: 10, lg: 12, xl: 12 },
  ];
  return (
    <Rows
      gutter={gutter == null ? Guts : gutter}
      className={className}
      style={style}
      justify={justify}
      align={align}
      {...props}>
      {children}
    </Rows>
  );
};

const Col = (props: gridProps) => {
  return (
    <Cols
      flex={props.flex}
      span={props.span}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      xxl={props.xxl}>
      {props.children}
    </Cols>
  );
};

Grid.Col = Col;
export default Grid;
