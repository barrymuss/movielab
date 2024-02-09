import style from "@/styles/component/header.module.scss";

type HeaderProps = {
  children?: any;
};

export default function Header({ children }: HeaderProps) {
  return <div className={style["header"]}>header</div>;
}
