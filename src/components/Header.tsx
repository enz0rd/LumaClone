import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { UserClock } from "./UserClock";

interface HeaderProps {
  logoStyle?: "icon" | "wordmark";
}

export function Header({ logoStyle = 'icon' }: HeaderProps) {
  return (
    <header className="fixed-top flex flex-row w-full justify-between items-center py-3 px-4">
      <Link
        href="/"
        className="hover:brightness-200 transition 2s hover:cursor-pointer"
      >
        {logoStyle === "icon" ? (
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 133 134"
          >
            <path
              fill="#808080"
              d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67"
            ></path>
          </svg>
        ) : (
          <img
            src="/Luma/wordmark-light.png"
            alt="Luma logo"
            className="w-[3rem] opacity-[60%] hover:opacity-100 transition"
          />
        )}
      </Link>
      <div className="flex flex-row gap-5 items-center">
        <UserClock className="text-zinc-400 text-sm hidden sm:block md:block lg:block" />
        <Link
          href="/explore"
          className="text-zinc-400 hover:text-zinc-50 transition flex flex-row items-center"
        >
          <span>Explorar</span> <ArrowUpRight size={15} />
        </Link>
        <Link
          href={"/signin"}
          className="bg-zinc-700 font-semibold opacity-[.7] hover:text-zinc-700 hover:bg-zinc-50 transition text-sm text-zinc-50 px-3 py-1 rounded-full"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}
