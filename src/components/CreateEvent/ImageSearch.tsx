import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const SearchCategories = [
  "Featured",
  "Previous Events",
  "St. Patrick’s",
  "Party",
  "Food",
  "Drinks",
  "Sports",
  "Crypto",
  "Abstract",
  "Tech",
  "Wellness",
  "Invites",
  "Science",
  "Jewish",
  "Indian Fest",
  "Wedding",
  "Love",
  "Birthday",
  "Outdoors",
  "Games",
  "Women",
  "Music",
  "Family",
  "Astronomy",
  "Pride",
  "On Stage",
  "School",
  "Football",
  "Climate",
  "Books",
];

export default function ImageSearch() {
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(
    null
  );

  return (
    <div className="w-full flex flex-col">
      <div
        className="flex flex-row items-center justify-between bg-zinc-200 dark:bg-zinc-900/80 rounded-lg p-2 border-2 border-zinc-800
        group hover:dark:border-zinc-200 hover:border-zinc-600 focus-within:dark:border-zinc-200 group-focus-within:border-zinc-600
        transition 1.5s ease-in-out gap-2 px-3 py-0"
      >
        <Search
          className="text-zinc-300 dark:text-zinc-600 
        group-hover:dark:text-zinc-50 group-hover:text-zinc-600 
        group-focus-within:dark:text-zinc-50 group-focus-within:text-zinc-600"
          size={20}
        />

        <input
          type="search"
          placeholder="Search for more photos"
          className="text-sm focus-visible:border-none 
        bg-zinc-900 border-none text-zinc-700 dark:text-zinc-300 w-full 
        p-2 focus-visible:outline-none"
        />
      </div>
      {window.innerWidth < 768 ? (
        <div className="flex flex-col gap-2 mt-2">
          <ScrollArea className="my-2">
            <div className="flex gap-2 overflow-x-hidden w-[15rem]">
              {SearchCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex-shrink-0 rounded-lg px-2 py-1 text-sm font-semibold cursor-pointer
          ${
            selectedCategory === index
              ? "bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800"
              : "text-zinc-700 dark:text-zinc-300"
          }
          hover:bg-zinc-800 hover:dark:bg-zinc-200 hover:text-zinc-50 hover:dark:text-zinc-800 transition duration-300 ease-in-out`}
                >
                  {category}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ) : (
        <div className="flex flex-col gap-2 mt-2">
          <ScrollArea className="h-[20rem] w-fit pr-4 flex flex-col gap-2">
            {SearchCategories.map((category, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`flex rounded-lg px-2 py-1 text-sm font-semibold cursor-pointer
                            ${
                              selectedCategory === index
                                ? "bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800"
                                : "text-zinc-700 dark:text-zinc-300"
                            }
                            hover:bg-zinc-800 hover:dark:bg-zinc-200 hover:text-zinc-50 hover:dark:text-zinc-800 transition duration-300 ease-in-out`}
              >
                {category}
              </div>
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
