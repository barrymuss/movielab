import { RowProps, ColProps, Row as Rows, Col as Cols } from "antd";

const Grid = ({ children }: any, props: RowProps) => {
  return (
    <Rows
      className={props.className}
      gutter={
        props.gutter == null
          ? [
              { xs: 8, sm: 10, md: 10, lg: 12, xl: 12 },
              { xs: 8, sm: 10, md: 10, lg: 12, xl: 12 },
            ]
          : props.gutter
      }
      {...props}>
      {children}
    </Rows>
  );
};

const Col = ({ children }: any, props: ColProps) => {
  return (
    <Cols
      className={props.className}
      {...props}>
      {children}
    </Cols>
  );
};

Grid.Col = Col;

export default Grid;
