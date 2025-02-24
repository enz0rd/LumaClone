"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState } from "react";
import { Mail, SmartphoneIcon } from "lucide-react";
import axios from "axios";

const SignInSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Por favor, insira um número de telefone válido.",
    })
    .optional(),
});

type SignInData = z.infer<typeof SignInSchema>;

import { useRouter } from "next/router";

export function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
  });

  const [otpCount, setOtpCount] = useState(60);
  const handleReSendOTP = async () => {
    setOtpCount(60);
    const interval = setInterval(() => {
      setOtpCount((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 60000);
  };

  const router = useRouter();

  const onSubmit = async (data: SignInData) => {
    console.log(data);
  };

  const [method, setMethod] = useState<"email" | "phone">("email");

  return (
    <div className="mt-2">
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="otp"
              className="hover:cursor-pointer hover:text-zinc-100 font-semibold text-sm text-zinc-300"
            >
              Número OTP
            </label>
            <span
              className="hover:cursor-pointer hover:text-zinc-200 transition font-semibold text-sm text-zinc-400 flex gap-1 items-center"
              onClick={() => setMethod("phone")}
            ></span>
          </div>

          <button
            type="submit"
            className="mt-2 bg-zinc-50 text-zinc-800 p-2 rounded-lg hover:bg-zinc-300 transition font-medium"
          >
            Enviar
          </button>
          <button
            className={"mt-2 bg-zinc-800 p-2 rounded-lg hover:bg-zinc-300 transition font-medium"}
            disabled={otpCount > 0 ? true : false}
          >
            Reenviar OTP — {otpCount}
          </button>
        </form>
      </div>
    </div>
  );
}
