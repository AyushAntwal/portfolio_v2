import React from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
export default function Home() {
  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <div className="flex w-full justify-evenly items-stretch">
        <div className="w-[250px] hidden"></div>
        <Card />
        <div className="w-[250px]"></div>
      </div>
      <div className=" h-[100px] w-full">
      </div>
    </div>
  );
}
