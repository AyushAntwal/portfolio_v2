'use client'
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Canva from "./Canva";
function Card() {
  return (
    <motion.div id="CanvasCard" className="bg-white overflow-hidden shadow-xl h-[500px] w-full mx-2 my-2 border-1 border rounded-xl border-white">
      <Canva />
    </motion.div>
  );
}

export default Card;
