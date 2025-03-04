"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { api } from "@/lib/utils";
import { motion } from "framer-motion";
import { EzTooltip } from "../EzTooltip";

const UsernameSchema = z.object({
  username: z.string().min(3, {
    message: "O nome de usuário deve ter no mínimo 3 caracteres",
  }),
});

type UsernameData = z.infer<typeof UsernameSchema>;

export function CreateUsernameForm({ setWelcome }: { setWelcome: (value: boolean) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameData>({
    resolver: zodResolver(UsernameSchema),
  });

  const onSubmit = async (data: UsernameData) => {
    try {
      const resp = await api.patch('/api/user', {
        username: data.username
      })
      if(resp.data.status === 200) {
        localStorage.setItem('username', data.username)
        setWelcome(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 1 }}
    className="flex w-full h-[90vh] items-center">
      <div className="m-auto flex justify-center w-[90%]">
        <div className="border-[.075rem] bg-opacity-[65%] backdrop-blur-5 rounded-3xl
        border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
          <div className="p-6 flex flex-col gap-3 w-full max-w-[23rem] text-left ">
            <h1 className="text-xl font-bold dark:text-zinc-50 text-zinc-950">
              Complete seu perfil
            </h1>
            <p className="text-wrap text-sm font-medium dark:text-zinc-300 text-zinc-700">
              Digite seu nome e escolha um avatar para que seus amigos possam
              reconhecê-lo.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5">
              <div className="flex flex-row gap-3 items-center">
                <EzTooltip content="Para mudar sua imagem de perfil, acesse Configurações > Conta" >
                  <div className="scale-x-[-1] rounded-full p-3 h-[4rem] w-[4rem] aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6] border-[.075rem] 
                  dark:text-zinc-300 dark:border-zinc-600 text-zinc-700 border-zinc-400" />
                </EzTooltip>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="username"
                    className={`hover:cursor-pointer font-semibold text-sm ${errors.username ? 'text-red-500' : 'dark:text-zinc-300 text-zinc-700'}`}
                  >
                    Nome
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    id="username"
                    placeholder="Seu Nome"
                    className={`${errors.username ? 'border-red-500' : ''} p-2 w-full transition border-[.075rem] rounded-lg 
                      placeholder-zinc-400 hover:border-zinc-800 bg-zinc-100 border-zinc-300 text-zinc-900
                      dark:placeholder-zinc-600 dark:hover:border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100
                      `}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <Button disabled={errors.username ? true : false} className="bg-zinc-950 text-zinc-100 text-md hover:bg-zinc-700
              dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300">Vamos lá</Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
