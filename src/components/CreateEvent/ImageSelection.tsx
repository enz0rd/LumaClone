"use client";
import React, { useState } from "react";
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
import { X } from "lucide-react";
import ImageSearch from "./ImageSearch";
import ImageUpload, { SetImageReturn } from "./ImageUpload";
import toast, { Toaster } from "react-hot-toast";
import { ToastTypes } from "../ToastTypes";

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
        <AlertDialogContent className="rounded-2xl lg:w-[35rem] w-[90%] p-5 backdrop:blur-3xl bg-zinc-900/80 border-2 border-zinc-800 shadow-lg shadow-black/20">
          <AlertDialogHeader className="flex flex-row items-center border-zinc-50 space-y-0">
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
          <ImageUpload onSetImage={handleSetImage} />
          <ImageSearch />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
