import { ArrowUp } from "lucide-react";

export function UserImageUploadInput() {
  return (
    <div className="flex flex-col gap-2">
      <span className="dark:text-zinc-300 text-zinc-700 font-semibold text-sm">
        Foto de Perfil
      </span>
      <label htmlFor="image">
        <div className="relative w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square bg-zinc-200 dark:bg-zinc-800 group">
          <div className="w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]"></div>
          <ArrowUp
            size={20}
            className="transition group-hover:bg-pink-500 
            dark:bg-zinc-50 dark:border-zinc-800 dark:group-hover:text-zinc-50 dark:text-zinc-900
            bg-zinc-950 border-zinc-200 group-hover:text-zinc-950 text-zinc-100
            p-1 w-[2rem] h-[2rem] mt-[-2.3rem] mr-[-.002rem] border-2  rounded-full m-auto"
          />
        </div>
        <input type="file" id="image" className="hidden" />
      </label>
    </div>
  );
}
