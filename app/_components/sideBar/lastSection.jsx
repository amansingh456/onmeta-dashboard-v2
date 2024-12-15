"use client";
import { IoLogOut } from "react-icons/io5";

const LastSection = () => {
  return (
    <div className="ml-8 mr-8">
      <span className="text-white p-2 rounded-md mb-2 w-full flex items-center cursor-pointer">
        Logout
        <IoLogOut className="text-red-500 ml-2 text-2xl" />
      </span>
      {/* <span className="p-2"> theme </span> */}
    </div>
  );
};

export default LastSection;
