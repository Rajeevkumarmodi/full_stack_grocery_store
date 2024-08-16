import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <div className=" w-full flex flex-col max-h-[100vh]">
        <Header />
        <main className="flex-1 min-w-0 overflow-auto">
          <div className="bg-[#F5F5F9] h-full flex justify-center">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
