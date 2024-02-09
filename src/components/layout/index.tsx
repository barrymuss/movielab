import style from "@/styles/component/layout.module.scss";
import { Navbar, Header } from "..";

type LayoutProps = {
  children?: any;
};

const dataMenu = [
  {
    menu: [
      {
        icon: "home",
        label: "Home",
      },
      {
        icon: "user",
        label: "User",
      },
    ],
  },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={style.layout}>
      <div className={style["layout-header"]}>
        <Header />
      </div>
      <div className={style["layout-nav"]}>
        <Navbar data={dataMenu} />
      </div>
      <div className={style["layout-content"]}>{children}</div>
    </div>
  );
}
