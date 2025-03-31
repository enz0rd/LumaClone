import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { ActualEvents } from "./ActualEvents";
import { motion } from "framer-motion";

interface FeaturedHubProps {
  actualEvent: "st-patrick" | "easter" | "halloween" | "christmas";
  setCategory: (category: string) => void;
}

export default function FeaturedHub({
  actualEvent,
  setCategory,
}: FeaturedHubProps) {
  const event = ActualEvents[actualEvent];

  const images = [
    {
      x: -50,
      y: 50,
      rotate: 10,
      animation: {
        rotation: 0,
        y: 10,
        x: 0,
      },
      bg: "bg-zinc-50",
      zIndex: "z-10",
    },
    {
      x: 10,
      y: -70,
      rotate: 15,
      animation: {
        rotation: 2,
        y: 10,
        x: -10,
      },
      bg: "bg-zinc-400",
      zIndex: "z-[7]",
    },
    {
      x: -150,
      y: -260,
      rotate: -5,
      animation: {
        rotation: -5,
        y: 5,
        x: 10,
      },
      bg: "bg-zinc-700",
      zIndex: "z-[9]",
    },
    {
      x: -220,
      y: -390,
      rotate: -20,
      animation: {
        rotation: -5,
        y: -10,
        x: 20,
      },
      bg: "bg-zinc-900",
      zIndex: "z-[5]",
    },
  ];

  return (
    <ScrollArea className="w-full border h-full border-zinc-50 overflow-hidden rounded-lg">
      <motion.button
        whileHover="hover"
        onClick={() => setCategory(event.title)}
        className={`${event.color} overflow-hidden w-full h-[15rem] rounded-t-lg flex p-3 rounded-lg relative`}
      >
        <motion.div className="flex flex-col w-full items-start justify-start">
          <h1 className="text-xl font-semibold text-zinc-50">{event.title}</h1>
          <p className="text-md font-medium text-zinc-200">X images</p>
        </motion.div>

        {/* Removido whileHover daqui */}
        <div className="flex flex-col absolute right-5 top-5">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                x: item.x,
                y: item.y,
                rotate: item.rotate,
              }}
              variants={{
                hover: {
                  y: item.y - item.animation.y,
                  x: item.x - item.animation.x,
                  rotate: item.rotate + item.animation.rotation,
                },
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className={`rounded-lg w-[10rem] h-[10rem] drop-shadow-[0_20px_15px_rgba(0,0,0,0.6)] shadow-zinc-900 ${item.zIndex} ${item.bg}`}
            />
          ))}
        </div>
      </motion.button>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4"></div>
    </ScrollArea>
  );
}
