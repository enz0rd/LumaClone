'use client'
import { ArrowUpRight, CalendarDays, Compass, Search, TicketIcon } from "lucide-react";
import Link from "next/link";
import { UserClock } from "./UserClock";
import { GrNotification } from "react-icons/gr";
import { UserDropdown } from "./UserDropdown";
import React from "react";

interface HeaderProps {
  logoStyle?: "icon" | "wordmark";
  isSignedIn?: boolean;
}

export function Header({
  logoStyle = "icon",
  isSignedIn = false,
}: HeaderProps) {  
  const [currentTheme, setCurrentTheme] = React.useState("dark");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentTheme(localStorage.getItem("theme") || "dark");
    }
  }, []);

  return (
    <header className="fixed-top flex flex-row w-full justify-between items-center py-3 px-4">
      <div className="flex flex-row items-center gap-3">
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
                fill={currentTheme ? "#808080" : "#404040"}
                d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67"
                ></path>
            </svg>
          ) : (
            <img
              src="/Luma/wordmark-light.png"
              alt="Luma logo"
              className="w-[3rem] dark:hover:opacity-100 hover:fill-zinc-700 invert dark:invert-0 transition"
            />
          )}
        </Link>
        {isSignedIn ? (
          <>
            <Link href={'/home'} className="flex flex-row items-center gap-1 group">
              <TicketIcon size={18} className="block sm:hidden md:block lg:block transition
              text-zinc-600 group-hover:text-zinc-950
              dark:text-zinc-500 dark:group-hover:text-zinc-50" />
              <span className="hidden sm:block md:block lg:block text-sm font-semibold transition
              text-zinc-600 group-hover:text-zinc-950
              dark:text-zinc-500 dark:group-hover:text-zinc-50">Eventos</span>
            </Link>
            <Link href={'/calendars'} className="flex flex-row items-center gap-1 group">
              <CalendarDays size={18} className="block sm:hidden md:block lg:block transition
              text-zinc-600 group-hover:text-zinc-950
              dark:text-zinc-500 dark:group-hover:text-zinc-50" />
              <span className="hidden sm:block md:block lg:block text-sm font-semibold transition
              text-zinc-600 group-hover:text-zinc-950
              dark:text-zinc-500 dark:group-hover:text-zinc-50">Calendários</span>
            </Link>
            <Link href={'/discover'} className="flex flex-row items-center gap-1 group">
              <Compass size={18} className="block sm:hidden md:block lg:block transition
              text-zinc-600 group-hover:text-zinc-950
              dark:text-zinc-500 dark:group-hover:text-zinc-50" />
              <span className="hidden sm:block md:block lg:block text-sm font-semibold transition
              text-zinc-600 group-hover:text-zinc-950
              dark:text-zinc-500 dark:group-hover:text-zinc-50">Descobrir</span>
            </Link>
          </>
        ) : ''}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <UserClock className="dark:text-zinc-400 text-zinc-600 text-sm hidden sm:block md:block lg:block" />
        {isSignedIn ? (
          <>
            <Link href={"/create"} className="dark:text-zinc-400 dark:hover:text-zinc-50 text-zinc-600 hover:text-zinc-950 text-sm font-medium transition">
              Criar Evento
            </Link>
            <Search size={18} className="text-zinc-500" />
            <GrNotification size={18} className="text-zinc-500"/>
            <UserDropdown />
          </>
        ) : (
          <>
            <Link href={'/explore'} className="dark:hover:text-zinc-50 hover:text-zinc-950 transition text-zinc-500 font-medium flex flex-row gap-1 items-center">Explorar <ArrowUpRight size={15} /></Link>
            <Link
              href={"/signin"}
              className="font-semibold opacity-[.7] transition text-sm px-3 py-1 rounded-full
              dark:bg-zinc-700 dark:hover:text-zinc-700 dark:hover:bg-zinc-50 dark:text-zinc-50 
              bg-zinc-300 hover:text-zinc-300 hover:bg-zinc-950 text-zinc-950 
              "
            >
              Entrar
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
