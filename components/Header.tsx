import Link from "next/link";
import React from "react";
function Header() {
  return (
    <header className="w-full  relative flex">
      <div className="px-6 py-3 fancy-goo relative bg-white text-black font-serif">
        <div className="relative w-full text-black">
          <div className="absolute w-[200px] bg-white -top-[1.7rem] -right-[7rem] h-4"></div>
          <div className="absolute w-4 bg-white -end-[6rem] -left-[2.45rem] h-[100px]"></div>
          <h1 className="sm:text-xl md:text-xl lg:text-3xl text-nowrap font-bold">NEXT JS</h1>
        </div>
      </div>
      <div className="flex justify-between w-full items-center px-3">
        <div className="hidden md:flex gap-3 ">
          <Link href={"/"} className="rounded-xl bg-glass font-bold text-md text-white text-center px-4 py-2">
            Home
          </Link>
          <Link href={"/"} className="rounded-xl bg-glass font-bold text-md text-white text-center px-4 py-2">
            About
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            href={"/"}
            className="rounded-xl  sm:w-full group text-md flex items-center bg-yellow-300 hover:bg-white  shadow-white text-black font-bold text-center px-4 py-2"
          >
            Home
            <span className="material-symbols-outlined pl-2 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1  ">
              call_made
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
