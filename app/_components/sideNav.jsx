"use client";
import LastSection from "./sideBar/lastSection";
import MiddleSection from "./sideBar/middleSection";
import TopSection from "./sideBar/topSection";

const SideNav = () => {
  return (
    <nav className="flex flex-col w-full h-full bg-text-dark text-text-light p-4 ">
      <div className="flex flex-col items-center justify-center gap-6 h-[35%] ">
        <TopSection />
      </div>

      <div className="h-[50%]">
        <MiddleSection />
      </div>

      <div className="h-[15%] flex items-center">
        <LastSection />
      </div>
    </nav>
  );
};

export default SideNav;
