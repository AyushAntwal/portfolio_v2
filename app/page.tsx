import React from "react";
import dynamic from "next/dynamic";
const Canva = dynamic(() => import("@/components/Canva"), { ssr: false });
import { ColorPicker, ImagePickers, ImagePosition, SizeSlider } from "@/components/Pickers";
export default function Home() {
  return (
    <div className="flex flex-col h-full p-4 items-center justify-center">
      <div className="h-full w-full relative rounded-lg">
        <div className="absolute z-10 bottom-0  right-5">
          <ColorPicker />
        </div>
        <Canva />
        <div className="absolute z-10 bottom-0 left-5">
          <ImagePickers />
        </div>
        <div className="absolute z-10 top-0 left-5">
          <ImagePosition />
        </div>
        <div className="absolute z-10 top-16 left-5">
          <SizeSlider />
        </div>
      </div>
    </div>
  );
}
