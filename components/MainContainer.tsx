import React from "react";
import Header from "./Header";

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className=" px-2 py-1 lg:px-6 lg:py-3 flex  h-screen">
      <div className="container-bg flex flex-col mx-auto rounded-3xl flex-1 w-full">
        <Header />
        <div className="flex-1 flex flex-col w-full overflow-auto" id="scrollbar">
          {children}
        </div>
      </div>
      <svg className="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="fancy-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </main>
  );
}

export default MainContainer;
