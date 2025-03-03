'use client';
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function UserDropdown() {
    const userEmail = localStorage.getItem("email");
    const userName = localStorage.getItem("username");

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        router.push('/signin');
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="dark:text-zinc-300 text-zinc-700 rounded-full h-[2rem] w-[2rem] 
        hover:brightness-125 transition cursor-pointer
        aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-zinc-900 dark:text-zinc-300 bg-zinc-100 text-zinc-700 mt-2 mr-2 rounded-xl w-[17rem] border-none drop-shadow-md">
        <Link href={'/profile'} className="flex flex-row gap-3 p-3 dark:hover:bg-zinc-800 hover:bg-zinc-200 transition rounded-lg cursor-pointer">
            <div className="dark:text-zinc-300 text-zinc-700 rounded-full h-[2.5rem] w-[2.5rem] 
            aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]" />
            <div className="flex flex-col gap-1 w-[75%]">
                <span className="font-semibold">{userName || "You"}</span>
                <span className="text-sm text-zinc-500 overflow-hidden text-ellipsis">{userEmail || "example@mail.com"}</span>
            </div>
        </Link>
        <hr className="w-full border-1 dark:border-zinc-700 border-zinc-300"/>
        <div className="flex flex-col gap-2 p-3">
            <Link href="/profile" className="dark:hover:text-zinc-50 hover:text-zinc-950 transition">Ver Perfil</Link>
            <Link href="/settings" className="dark:hover:text-zinc-50 hover:text-zinc-950 transition">Configurações</Link>
            <div onClick={handleLogout} className="bg-none cursor-pointer text-left dark:hover:text-zinc-50 hover:text-zinc-950 transition">Sair</div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
