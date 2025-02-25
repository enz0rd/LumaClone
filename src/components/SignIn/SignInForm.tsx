'use client'

import { useState } from "react";
import { Mail, SmartphoneIcon } from "lucide-react";
import axios from "axios";

const SignInSchema = z.object({
    email: z.string().email({
      message: "Por favor, insira um email válido.",
    }),
    phone: z.string().min(10, {
      message: "Por favor, insira um número de telefone válido.",
    }).optional(),
  });
  
  type SignInData = z.infer<typeof SignInSchema>;
  
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

  
export function SignInForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<SignInData>({
        resolver: zodResolver(SignInSchema),
      });
    
      const router = useRouter();

      const onSubmit = async (data: SignInData) => {
        console.log(data);
        const resp = await axios.post("/api/user", data)
            .then((res) => {
                const respData = res.data;
                if(respData.status !== 200) {
                    return console.log(respData.message);
                } 

                localStorage.setItem("userId", respData.user.id);
                localStorage.setItem("email", respData.user.email);

                router.push('/verifyAccount')
            })
            .catch((err) => {
                console.error(err);
            });
    };
    
      const [method, setMethod] = useState<"email" | "phone">("email");

    return (
        <div className="mt-2">
                <div className="flex flex-col gap-2">
                {method === "email" ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                        <label
                        htmlFor="email"
                        className="hover:cursor-pointer hover:text-zinc-100 font-semibold text-sm text-zinc-300"
                        >
                        Email
                        </label>
                        <span
                        className="hover:cursor-pointer hover:text-zinc-200 transition font-semibold text-sm text-zinc-400 flex gap-1 items-center"
                        onClick={() => setMethod("phone")}
                        >
                        <SmartphoneIcon size={15} /> Usar Telefone
                        </span>
                    </div>
                    <input
                        type="email"
                        id="email"
                        placeholder="voce@email.com"
                        className="placeholder-zinc-600 p-2 hover:border-zinc-200 transition bg-zinc-900 border-[.075rem] border-zinc-700 rounded-lg text-zinc-100"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                    )}
                    <button type="submit" className="mt-2 bg-zinc-50 text-zinc-800 p-2 rounded-lg hover:bg-zinc-300 transition font-medium">
                        Continuar com Email
                    </button>
                    </form>
                ) : (
                    <>
                    <div className="flex flex-row justify-between">
                        <label
                        htmlFor="phone"
                        className="hover:cursor-pointer hover:text-zinc-100 font-semibold text-sm text-zinc-300"
                        >
                        Número de Telefone
                        </label>
                        <span
                        className="hover:cursor-pointer hover:text-zinc-200 transition font-semibold text-sm text-zinc-400 flex gap-1 items-center"
                        onClick={() => setMethod("email")}
                        >
                        <Mail size={15} /> Usar Email
                        </span>
                    </div>
                    <input
                        type="phone"
                        id="phone"
                        placeholder="+55 11 96123 4567"
                        className="placeholder-zinc-600 p-2 hover:border-zinc-200 transition bg-zinc-900 border-[.075rem] border-zinc-700 rounded-lg text-zinc-100"
                        {...register("phone")}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs">{errors.phone.message}</p>
                    )}
                    <button className="mt-2 bg-zinc-50 text-zinc-800 p-2 rounded-lg hover:bg-zinc-300 transition font-medium">
                        Continuar com telefone
                    </button>
                    </>
                )}
                </div>
            </div>
    )
}
