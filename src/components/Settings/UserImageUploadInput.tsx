import { ArrowUp } from "lucide-react";

export function UserImageUploadInput() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-zinc-300 font-semibold text-sm">
        Foto de Perfil
      </span>
      <label htmlFor="image">
        <div className="relative w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square bg-zinc-800 group">
          <div className="w-[7rem] h-[7rem] cursor-pointer rounded-full aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]"></div>
          <ArrowUp
            size={20}
            className="text-zinc-900 transition group-hover:text-zinc-50 group-hover:bg-pink-500 bg-zinc-50 p-1 w-[2rem] h-[2rem] mt-[-2.3rem] mr-[-.002rem] border-2 border-zinc-800 rounded-full m-auto"
          />
        </div>
        <input type="file" id="image" className="hidden" />
      </label>
    </div>
  );
}
