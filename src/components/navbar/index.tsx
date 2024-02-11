"use client";

import { useState } from "react";
import style from "@/styles/component/navbar.module.scss";
import { Image, Button, Icon } from "..";
import Logo from "@/assets/Layer1.png";

type Navbar = {
  data?: any[];
};

export default function Navbar({ data }: Navbar) {
  return (
    <div className={style["navbar"]}>
      <div className={style["navbar-logo"]}>
        <div className={style["logo"]}>
          <Image
            src={Logo.src}
            objectFit={"contain"}
            width={100}
            height={50}
            priority
          />
        </div>
      </div>
      {data?.map((item: any, index: any) => (
        <div
          className={style["menuitem"]}
          key={index}>
          {item.title ? <div className={style["menutitle"]}>{item.title}</div> : <></>}
          {item.menu.map((btn: any, ix: any) => (
            <Button
              key={ix}
              className={style["menubutton"]}
              icon={
                <Icon
                  className={style["menubutton-icon"]}
                  type={btn.icon}
                />
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
