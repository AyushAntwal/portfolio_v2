import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" px-2 py-1 lg:px-7 lg:py-2 flex  h-screen">
      <div className="container-bg flex flex-col mx-auto rounded-3xl flex-1 w-full">
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
              <Link href={"/"} className="rounded-xl  sm:w-full group text-md flex items-center bg-yellow-300 hover:bg-white  shadow-white text-black font-bold text-center px-4 py-2">
                Home
                <span className="material-symbols-outlined pl-2 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1  ">call_made</span>
              </Link>
            </div>
          </div>
        </header>
        <div className="flex-1">
          <div className="flex flex-col rounded-s-3xl items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold mt-5">Welcome to Next.js</h1>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
