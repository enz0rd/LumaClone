import "./home.css";
import Link from "next/link";
import { Header } from "@/components/Header";
import { RandomBg } from "@/components/Background/RandomBg";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <RandomBg />
      <Header />
      <main className="flex flex-col mt-5 md:flex-row mx-auto max-w-[1280px] lg:flex-row lg:p-5 gap-5 lg:gap-0 md:gap-0 items-center justify-between">
        <div className="flex flex-col items-center md:items-start lg:items-start gap-4 w-[30rem]">
          <img
            alt="luma logo"
            className="w-[20%] opacity-50"
            src="/Luma/wordmark-light.png"
          />
          <h1 className="w-fit font-medium text-center lg:text-left md:text-left text-5xl md:text-6xl lg:text-6xl flex flex-col">
            <span className="w-[100%] lg:w-[70%] text-wrap">Eventos encantadores</span>
            <span className="w-[100%] lg:w-[70%] text-wrap text-transparent bg-gradient-homepage">
              começam aqui
            </span>
          </h1>
          <p className="text-zinc-400 text-semibold text-center lg:text-left lg:w-[70%] w-[80%] text-xl">
            Crie uma página de evento, convide amigos e venda ingressos.
            Organize um evento memorável hoje.
          </p>
          <Link href={'/create'} className="mt-5 text-lg font-semibold text-zinc-900 bg-zinc-50 rounded-lg px-3 py-2 hover:brightness-75 transition">Crie Seu Primeiro Evento</Link>
        </div>
        <video className="w-[80%] md:w-[37rem] lg:w-[37rem]" loop muted controls={false} autoPlay><source src="/phone-dark.webm" type="video/webm" /></video>
      </main>
      <Footer />
    </div>
  );
}
