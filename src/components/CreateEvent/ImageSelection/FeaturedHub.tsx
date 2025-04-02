import React, { useEffect, useState } from "react";
import { ScrollArea } from "../../ui/scroll-area";
import { ActualEvents } from "./ActualEvents";
import { motion } from "framer-motion";
import EventCategoryCell from "./EventCategoryCell";

interface FeaturedHubProps {
  actualEvent: "st-patrick" | "easter" | "halloween" | "christmas";
  setCategory: (category: string) => void;
}

const categories = [
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Previous Events",
  description: "Previous Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "St. Patrick's",
  description: "St. Patrick's Day",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Party",
  description: "Party Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Food",
  description: "Food Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Drinks",
  description: "Drink Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Sports",
  description: "Sports Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Crypto",
  description: "Crypto Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Abstract",
  description: "Abstract Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Tech",
  description: "Tech Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Wellness",
  description: "Wellness Events",
}, 
  {
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Invites",
  description: "Invite Events",
},
{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Science",
  description: "Science Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Jewish",
  description: "Jewish Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Indian Fest",
  description: "Indian Fest Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Wedding",
  description: "Wedding Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Love",
  description: "Love Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Birthday",
  description: "Birthday Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Outdoors",
  description: "Outdoors Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Games",
  description: "Games Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Women",
  description: "Women Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Music",
  description: "Music Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Family",
  description: "Family Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Astronomy",
  description: "Astronomy Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Pride",
  description: "Pride Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "On Stage",
  description: "On Stage Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "School",
  description: "School Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Football",
  description: "Football Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Climate",
  description: "Climate Events",
},{
  image: ["st-patrick", "easter", "halloween", "christmas"],
  title: "Books",
  description: "Books Events",
}];

export default function FeaturedHub({
  actualEvent,
  setCategory,
}: FeaturedHubProps) {
  const event = ActualEvents[actualEvent];

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      x: -50,
      y: isMobile ? 120 : 50,
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
      y: isMobile ? 30 : -70,
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
      x: isMobile ? -120 : -150,
      y: isMobile ? -100 : -260,
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
      x: isMobile ? -180 : -220,
      y: isMobile ? -180 : -390,
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
    <ScrollArea className="w-full h-full overflow-hidden rounded-lg">
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
              className={`rounded-lg ${isMobile ? "size-[7rem]" : "size-[10rem]"} drop-shadow-[0_20px_15px_rgba(0,0,0,0.6)] shadow-zinc-900 ${item.zIndex} ${item.bg}`}
            />
          ))}
        </div>
      </motion.button>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
          {categories.map((category, index) => (
            <EventCategoryCell key={index} category={category} changeCategory={setCategory}/>
          ))}
      </div>
    </ScrollArea>
  );
}
