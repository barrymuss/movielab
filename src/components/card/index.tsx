import { CardProps, Card as Cards } from "antd";

export default function Card(props: CardProps) {
  return <Cards {...props}>{props.children}</Cards>;
}
