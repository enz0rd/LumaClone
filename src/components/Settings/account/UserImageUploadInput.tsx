"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import { ToastTypes } from "@/components/ToastTypes";

type ImagePreview = {
  image: string;
  name: string;
};

export function UserImageUploadInput() {
  const [imagePreview, setImagePreview] = useState<ImagePreview | null>(null);

  useEffect(() => {
    const userImage = localStorage.getItem("userImage");
    if(userImage && userImage.startsWith('http')) {
      setImagePreview({
        image: userImage,
        name: 'profile'
      });
    }
  }, []);

  const handleSetImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.log("Nenhum arquivo selecionado");
      return;
    }

    const file = e.target.files[0];
    if (file && ["image/png", "image/jpeg"].includes(file.type)) {
      if (file.size > 5 * 1024 * 1024) {
        console.log("Arquivo muito grande. Tamanho máximo: 5MB");
        toast("Arquivo muito grande. Tamanho máximo: 5MB", ToastTypes.error);
        return;
      }
      const formData = new FormData();
      formData.append("image", file);
      const resp = await api.post("/api/user/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const previewUrl = URL.createObjectURL(file);
      setImagePreview({
        image: previewUrl,
        name: file.name,
      });
      localStorage.setItem('userImage', resp.data.url)
    } else {
      toast("O arquivo selecionado é inválido. Formatos suportados: PNG e JPG.", ToastTypes.error);
      console.log("Arquivo inválido");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Toaster position="bottom-center" />
      <span className="dark:text-zinc-300 text-zinc-700 font-semibold text-sm">
        Foto de Perfil
      </span>
      <label htmlFor="image">
        <div className="relative w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square bg-zinc-200 dark:bg-zinc-800 group">
          <div className="relative">
            {imagePreview ? (
              <Image
                className="w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square object-cover"
                src={imagePreview.image}
                width={300}
                height={300}
                alt={imagePreview.name}
              />
            ) : (
              <div className="w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]"></div>
            )}
            <ArrowUp
              size={20}
              className="transition group-hover:bg-pink-500 
              dark:bg-zinc-50 dark:border-zinc-800 dark:group-hover:text-zinc-50 dark:text-zinc-900
              bg-zinc-950 border-zinc-200 group-hover:text-zinc-950 text-zinc-100
              p-1 w-[2rem] h-[2rem] absolute bottom-0 right-0 border-2 rounded-full m-auto z-9"
            />
          </div>
        </div>
        <input
          onChange={handleSetImage}
          type="file"
          accept="image/jpeg, image/png"
          id="image"
          className="hidden"
        />
      </label>
    </div>
  );
}
