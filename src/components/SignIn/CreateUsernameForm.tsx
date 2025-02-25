"use client";
import { CiLogin } from "react-icons/ci";
import { BsGoogle } from "react-icons/bs";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import axios from "axios";

const UsernameSchema = z.object({
  username: z.string().min(3, {
    message: "O nome de usuário deve ter no mínimo 3 caracteres",
  }),
});

type UsernameData = z.infer<typeof UsernameSchema>;

export function CreateUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameData>({
    resolver: zodResolver(UsernameSchema),
  });

  const onSubmit = async (data: UsernameData) => {
    console.log(data);
    try {
      const resp = await axios.patch('/api/user', {
        username: data.username
      }, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      console.log(resp)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-full h-[90vh] items-center">
      <div className="m-auto flex justify-center w-[90%]">
        <div className="border-[.075rem] border-zinc-700 bg-zinc-900 bg-opacity-[65%] backdrop-blur-5 rounded-3xl">
          <div className="p-6 flex flex-col gap-3 w-full max-w-[23rem] text-left ">
            <h1 className="text-xl font-bold text-zinc-50">
              Complete seu perfil
            </h1>
            <p className="text-wrap text-sm font-medium text-zinc-300">
              Digite seu nome e escolha um avatar para que seus amigos possam
              reconhecê-lo.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5">
              <div className="flex flex-row gap-3 items-center">
                <div className="text-zinc-300 scale-x-[-1] rounded-full p-3 h-[4rem] w-[4rem] aspect-square bg-gradient-to-tl from-[#F66371] to-[#C0CEF6] border-[.075rem] border-zinc-600" />
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="username"
                    className={`hover:cursor-pointer font-semibold text-sm ${errors.username ? 'text-red-500' : 'text-zinc-300'}`}
                  >
                    Nome
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    id="username"
                    placeholder="Seu Nome"
                    className={`${errors.username ? 'border-red-500' : ''} placeholder-zinc-600 p-2 hover:border-zinc-200 w-full transition bg-zinc-900 border-[.075rem] border-zinc-700 rounded-lg text-zinc-100`}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <Button disabled={errors.username ? true : false} className="bg-zinc-50 text-zinc-900 text-md hover:bg-zinc-300">Vamos lá</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
