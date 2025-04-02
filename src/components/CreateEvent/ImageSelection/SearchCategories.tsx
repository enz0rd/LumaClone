import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";
import { X } from "lucide-react";

const categories = [
  "Featured",
  "Previous Events",
  "St. Patrick's",
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

interface SearchCategoriesProps {
  onSelectCategory: (category: string) => void;
  categoryInUse: string;
}

export default function SearchCategories({
  categoryInUse,
  onSelectCategory,
}: SearchCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(
    Math.max(0, categories.indexOf(categoryInUse))
  );

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    // Atualiza o estado quando `categoryInUse` muda
    const categoryIndex = categories.indexOf(categoryInUse);
    setSelectedCategory(categoryIndex >= 0 ? categoryIndex : 0);
  }, [categoryInUse]);

  useEffect(() => {
    // Adiciona um listener para mudanças de largura da tela
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSetSelectedCategory = (index: number) => {
    if (index === selectedCategory) {
      setSelectedCategory(0);
      onSelectCategory(categories[0]);
    } else {
      setSelectedCategory(index);
      onSelectCategory(categories[index]);
    }
  };

  return (
    <div className="h-full">
      {isMobile ? (
        <div className="container mx-auto my-2">
          <ScrollArea className="flex justify-center overflow-x-auto">
            <div className="w-[20rem] mb-3 flex whitespace-nowrap gap-1">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleSetSelectedCategory(index)}
                  className={`flex-shrink-0 rounded-lg px-2 py-1 w-fit text-sm font-semibold cursor-pointer
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
            <ScrollBar className="hidden mt-5" orientation="horizontal" />
          </ScrollArea>
        </div>
      ) : (
        categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleSetSelectedCategory(index)}
            className={`flex justify-between align-middle rounded-lg px-2 py-1 text-sm font-semibold cursor-pointer
                  ${
                    selectedCategory === index
                      ? "bg-zinc-300 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                      : "text-zinc-700 dark:text-zinc-300"
                  }
                  hover:bg-zinc-300 hover:dark:bg-zinc-700 transition duration-300 ease-in-out`}
          >
            {category}
            {selectedCategory === index && index !== 0 && (
              <X
                className="text-zinc-700 dark:text-zinc-300 my-auto"
                size={15}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}
