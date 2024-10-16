'use client'
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Canva from "./Canva";
function Card({children}: {children: React.ReactNode}) {
  return (
    <motion.div id="CanvasCard" className="bg-white overflow-hidden shadow-xl mx-2 my-2 border-1 border rounded-xl border-white">
      {children}
    </motion.div>
  );
}

export default Card;
