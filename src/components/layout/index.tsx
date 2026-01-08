import { Navbar, Header } from "..";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children?: React.ReactNode;
};

const dataMenu = [
  {
    menu: [
      {
        icon: "home" as const,
        label: "Home",
      },
      {
        icon: "user" as const,
        label: "User",
      },
    ],
  },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={cn(
        "bg-black-light w-full h-screen",
        "grid grid-rows-[55px_1fr] grid-cols-[auto_1fr]",
        "gap-0"
      )}
      style={{
        gridTemplateAreas: `
          "nav header"
          "nav content"
        `,
      }}
    >
      <div
        className="bg-black p-3 border-b-2 border-menu-light"
        style={{ gridArea: "header" }}
      >
        <Header />
      </div>
      <div
        className="max-w-[90px] min-w-[90px] bg-black border-r-2 border-menu-light"
        style={{ gridArea: "nav" }}
      >
        <Navbar data={dataMenu} />
      </div>
      <div
        className="p-3 bg-black overflow-y-auto"
        style={{ gridArea: "content" }}
      >
        {children}
      </div>
    </div>
  );
}
