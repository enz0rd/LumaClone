import React, { useState } from "react";
import { motion } from "framer-motion";

interface EventCategoryCellProps {
  category: {
    image: string[];
    title: string;
    description: string;
  };
  changeCategory: (category: string) => void;
}

export default function EventCategoryCell({
  category,
    changeCategory,
}: EventCategoryCellProps) {

  return (
    <motion.div 
        onClick={() => changeCategory(category.title)}
        whileHover={"hover"}
        className="flex flex-col cursor-pointer justify-center items-center gap-2 w-full h-full">
      <motion.div whileHover={"hover"} className='flex flex-col drop-shadow-[0_15px_15px_20px_rgba(1,1,1,.7)] h-[7rem] w-full'>
            <motion.div 
                initial={{
                    width: "4rem",
                    y: 0
                }}
                transition={{
                    duration: .2,
                    type: "spring",
                    stiffness: 150,
                    ease: "easeInOut",
                }}
                variants={{
                    hover: {
                        width: "7rem",
                    }
                }}
                className='size-[7rem] justify-center mx-auto flex-shrink-0 rounded-lg bg-sky-500' />
            <motion.div 
                initial={{
                    width: "5rem",
                    y: -105
                }}
                transition={{
                    duration: .2,
                    type: "spring",
                    stiffness: 120,
                    ease: "easeInOut",
                }}
                variants={{
                    hover: {
                        width: "7rem",
                        y: -100
                    }
                }}
                className='size-[7rem] justify-center mx-auto flex-shrink-0 rounded-lg bg-rose-500' />
            <motion.div 
                initial={{
                    width: "6rem",
                    y: -210
                }}
                transition={{
                    duration: .2,
                    type: "spring",
                    stiffness: 150,
                    ease: "easeInOut",
                }}
                variants={{
                    hover: {
                        width: "7rem",
                        y: -200
                    }
                }}
                className='size-[7rem] justify-center mx-auto flex-shrink-0 rounded-lg bg-lime-500' />
            <motion.div 
                initial={{
                    width: "7rem",
                    y: -315
                }}
                transition={{
                    duration: .2,
                    type: "spring",
                    stiffness: 150,
                    ease: "easeInOut",
                }}
                variants={{
                    hover: {
                        y: -300
                    }
                }}
                className='size-[7rem] justify-center mx-auto flex-shrink-0 rounded-lg bg-violet-500' />
        </motion.div>
      <div
        className="flex flex-col justify-center items-center gap-1 w-full h-full px-4 py-3 
        border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm
        bg-gradient-to-b from-zinc-50/75 to-zinc-200/75 dark:from-zinc-800/75 dark:to-zinc-950/75 
        rounded-xl mt-[-.5rem] shadow-lg shadow-black/20 z-[10]"
      >
        <h1 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {category.title}
        </h1>
      </div>
    </motion.div>
  );
}
