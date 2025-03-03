"use client";
import { CiLogin } from "react-icons/ci";
import { BsGoogle } from "react-icons/bs";
import { SignInForm } from "./SignInForm";
import { motion } from "framer-motion";

export function SignIn() {
  return (
    <div className="flex w-full h-[90vh] items-center">
      <div className="m-auto flex justify-center">
        <motion.div 
            initial={{ scaleX: 0, width: 0, scaleY: 0 }}
            animate={{ scaleX: 1, width: "auto", scaleY: 1 }}
            transition={{ duration: 0.5 }}
            className="border-[.075rem] dark:border-zinc-700 dark:bg-zinc-900 border-zinc-300 bg-zinc-100 bg-opacity-[65%] backdrop-blur-5 rounded-3xl">
          <div className="p-6 flex flex-col gap-3 text-left ">
            <CiLogin
              size={50}
              className="dark:text-zinc-300 dark:bg-zinc-800 text-zinc-700 bg-zinc-200 scale-x-[-1] rounded-full p-3 h-[4rem] w-[4rem]"
            />
            <h1 className="text-2xl dark:text-zinc-100 text-zinc-900 font-semibold">
              Bem-vindo à Luma
            </h1>
            <p className="text-sm font-semibold dark:text-zinc-400 text-zinc-600">
              Por favor, faça login ou cadastre-se abaixo.
            </p>
            <SignInForm />
          </div>
          <hr className="dark:border-zinc-700 border-zinc-300" />
          <div className="px-6 py-3 w-full justify-center mb-2">
            <button className="mt-2 flex gap-2 p-2 rounded-lg transition w-full font-medium
            dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-400 dark:hover:text-zinc-900
            bg-zinc-200 text-zinc-600 hover:bg-zinc-600 hover:text-zinc-100
            ">
              <span className="items-center flex gap-2 mx-auto">
                <BsGoogle size={20} /> Entrar com o Google
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
