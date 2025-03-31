"use client";
import React, { useEffect, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import ImageDisplay, { ImageDetails } from "./ImageDisplay";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Search, X } from "lucide-react";
import ImageSearch from "./ImageSearch";
import ImageUpload, { SetImageReturn } from "./ImageUpload";
import toast, { Toaster } from "react-hot-toast";
import { ToastTypes } from "../ToastTypes";
import SearchCategories from "./SearchCategories";
import FeaturedHub from "./FeaturedHub";

export default function ImageSelection() {
  const handleSetImage = (object: SetImageReturn) => {
    if (object.type === "image" && object.file) {
      const previewUrl = URL.createObjectURL(object.file);
      console.log("Preview URL gerada:", previewUrl);

      onSetImage((prev) => ({
        ...prev,
        image: previewUrl,
        credits: object.credits || "Image by user",
        from: object.from || "User",
        alt: "Image by user",
        source: object.url || "",
      }));

      setIsOpen(false);
    } else {
      toast(
        "O arquivo selecionado é inválido. Formatos suportados: PNG e JPG.",
        ToastTypes.error
      );
      console.log("Tipo de arquivo inválido");
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [imageSet, onSetImage] = useState<ImageDetails>({
    image: "",
    credits: "",
    from: "",
    alt: "",
    source: "",
  });

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
    <>
      <Toaster />
      <AlertDialog open={true} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
          <div className="flex flex-col w-fit group hover:cursor-pointer">
            <ImageDisplay imageSet={imageSet} />
            <div
              className="bg-zinc-50 rounded-full w-8 h-8 mt-[-3rem] border-2 
            border-zinc-800 mr-3 flex items-center self-end justify-center
            group-hover:bg-transparent group-hover:border-zinc-200 transition 1.5s ease-in-out"
            >
              <BsImageFill
                className="text-zinc-800 group-hover:text-zinc-200 rounded-md transition 1.5s ease-in-out"
                size={15}
              />
            </div>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="rounded-2xl flex flex-col w-[90%] max-w-[50rem] max-h-[45rem] h-[90%] min-h-[20rem] p-5 backdrop:blur-3xl bg-zinc-900/80 border-2 border-zinc-800 shadow-lg shadow-black/20">
          <AlertDialogHeader className="flex flex-row items-center h-fit border-zinc-50 space-y-0">
            <AlertDialogTitle className="w-full text-center">
              Choose Image
            </AlertDialogTitle>
            <AlertDialogCancel
              className="bg-zinc-400 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-400 rounded-full 
                w-[1rem] h-[1rem] border-zinc-800 flex items-center justify-center mx-auto aspect-square my-auto py-[.7rem] px-[.7rem]"
            >
              <X
                className="text-zinc-500 dark:hover:text-zinc-800 hover:text-zinc-200 transition 1.5s  ease-in-out"
                size={30}
              />
            </AlertDialogCancel>
          </AlertDialogHeader>
          <div className="flex flex-col w-full h-full gap-2">
            <ImageUpload onSetImage={handleSetImage} />
            <div className="border-zinc-50 border h-full overflow-hidden">
              {/* <ImageSearch /> */}
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
              </div>
            </div>
            <div className="overflow-auto">
              <SearchCategories
                onSelectCategory={handleChangeCategory}
                categoryInUse={category}
              />
            </div>
            <div className="flex flex-col rounded-lg w-full">
              {category === "Featured" && (
                <FeaturedHub
                  setCategory={handleChangeCategory}
                  actualEvent="st-patrick"
                />
              )}
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
