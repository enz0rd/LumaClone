"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ImagePreview = {
  image: string;
  name: string;
};

export function UserDropdown() {
  const userEmail = localStorage.getItem("email");
  const userName = localStorage.getItem("username");
  const [imagePreview, setImagePreview] = useState<ImagePreview | null>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    const userImage = localStorage.getItem("userImage");
    if(userImage && userImage.startsWith('http')) {
      setImagePreview({
        image: userImage,
        name: 'profile'
      });
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/signin");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {imagePreview ? (
          <Image
            className="h-[2rem] w-[2rem] hover:brightness-125 transition cursor-pointer rounded-full aspect-square object-cover"
            src={imagePreview.image}
            width={300}
            height={300}
            alt={imagePreview.name}
          />
        ) : (
          <div
            className="dark:text-zinc-300 text-zinc-700 rounded-full h-[2rem] w-[2rem] 
        hover:brightness-125 transition cursor-pointer
        aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-zinc-900 dark:text-zinc-300 bg-zinc-100 text-zinc-700 mt-2 mr-2 rounded-xl w-[17rem] border-none drop-shadow-md">
        <Link
          href={"/profile"}
          className="flex flex-row gap-3 p-3 dark:hover:bg-zinc-800 hover:bg-zinc-200 transition rounded-lg cursor-pointer"
        >
          {imagePreview ? (
          <Image
            className="h-[2.5rem] w-[2.5rem] rounded-full aspect-square object-cover"
            src={imagePreview.image}
            width={300}
            height={300}
            alt={imagePreview.name}
          />
        ) : (
          <div
            className="dark:text-zinc-300 text-zinc-700 rounded-full h-[2.5rem] w-[2.5rem] 
            aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]"
          />
          )}
          <div className="flex flex-col gap-1 w-[75%]">
            <span className="font-semibold">{userName || "You"}</span>
            <span className="text-sm text-zinc-500 overflow-hidden text-ellipsis">
              {userEmail || "example@mail.com"}
            </span>
          </div>
        </Link>
        <hr className="w-full border-1 dark:border-zinc-700 border-zinc-300" />
        <div className="flex flex-col gap-2 p-3">
          <Link
            href="/profile"
            className="dark:hover:text-zinc-50 hover:text-zinc-950 transition"
          >
            {t("Header.UserDropdown.seeProfile")}
          </Link>
          <Link
            href="/settings"
            className="dark:hover:text-zinc-50 hover:text-zinc-950 transition"
            >
          {t("Header.UserDropdown.settings")}
          </Link>
          <div
            onClick={handleLogout}
            className="bg-none cursor-pointer text-left dark:hover:text-zinc-50 hover:text-zinc-950 transition"
            >
            {t("Header.UserDropdown.signout")}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
