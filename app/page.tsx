import React from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
export default function Home() {
  return (
    <div className="flex">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
