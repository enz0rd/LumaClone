import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import SearchCategories from "./SearchCategories";
import FeaturedHub from "./FeaturedHub";

export default function ImageSearch() {
  const [category, setCategory] = React.useState<string>("Featured");

  const handleChangeCategory = (category: string) => {
    console.log("Selected category:", category);
    setCategory(category);
  };

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  useEffect(() => {
    // Adiciona um listener para mudanças de largura da tela
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className={`${isMobile ? "flex-col" : "flex-row"} flex mt-4`}>
        <SearchCategories onSelectCategory={handleChangeCategory} categoryInUse={category} />
        <div className="flex flex-col rounded-lg w-full">
          {category === "Featured" && <FeaturedHub setCategory={handleChangeCategory} actualEvent="st-patrick" />}
        </div>
      </div>
    </div>
  );
}
