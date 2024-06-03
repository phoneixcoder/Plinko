import React from "react";
import Logo from "/logo.png";
import SideBar from "../components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  onClickAddBall: () => void;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <header className="flex items-center gap-8 text-5xl font-bold justify-center bg-[#0F1624] text-[#CBD5E1] w-full pt-5">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        Plinko
      </header>
      <div className="flex justify-between items-center w-full h-[92vh] bg-[#0F1624] text-[#CBD5E1] px-16 py-8">
        <SideBar onClickAddBall={props.onClickAddBall} />
        <main className="w-[70%] max-h-[100%] overflow-hidden flex flex-col items-center -mt-[30px]">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Layout;
