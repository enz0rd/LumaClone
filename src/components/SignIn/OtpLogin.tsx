"use client";
import React, { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { Loader2Icon, LockKeyholeIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";

const OtpLoginSchema = z.object({
  otp: z.string().length(6, {
    message: "Por favor, insira um código OTP válido.",
  }),
});

type OtpLoginData = z.infer<typeof OtpLoginSchema>;

function OtpLogin({ setWelcome }: { setWelcome: (value: boolean) => void }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OtpLoginData>({
    resolver: zodResolver(OtpLoginSchema),
  });

  const [resendCountdown, setResendCountdown] = useState(60);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [errorResponse, setErrorResponse] = useState("");
  const onSubmit = async (data: OtpLoginData) => {
    try {
      setErrorResponse("");
      setIsLoading(true);
      const resp = await axios.post("/api/auth/verify-otp", {
        userId: localStorage.getItem("userId"),
        code: data.otp,
      });
      if (resp.data.status === 200) {
        const getToken = await axios.post("/api/auth/generate-token", {
          userId: localStorage.getItem("userId"),
          email: localStorage.getItem("email"),
        });
        const token = getToken.data.token;
        localStorage.setItem("token", token);
        localStorage.removeItem("userId");
        if(resp.data.hasUsername == null) {
          return router.push('/finish-signup');
        }
        localStorage.setItem("username", resp.data.hasUsername);
        setWelcome(true);
      } else {
        setIsLoading(false);
        setErrorResponse(resp.data.message);
      }
    } catch (error) {
      setErrorResponse("Erro ao enviar código OTP.");
      setIsLoading(false);
      console.log(error);
    }
  };

  const requestOtp = async () => {
    setResendCountdown(60);
    try {
      // Request OTP
      const data = {
        email: localStorage.getItem("email"),
        userId: localStorage.getItem("userId"),
      };

      if(!data.email || !data.userId) {
        router.push("/signin");
      }

      const resp = await axios.post("/api/auth/send-otp", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
      setResendCountdown(0);
    }
  };

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  return (
    <div className="flex w-full h-[90vh] items-center">
      <div className="m-auto flex justify-center">
        <div className="border border-zinc-700 bg-zinc-900 bg-opacity-65 backdrop-blur-5 rounded-3xl">
          <div className="p-6 flex flex-col gap-3 w-[23rem] text-left">
            <div className="bg-zinc-800 rounded-full p-4 w-fit">
              <LockKeyholeIcon className="text-zinc-300 scale-x-[-1] h-8 w-8" />
            </div>
            <h1 className="text-2xl text-zinc-100 font-semibold">Código OTP</h1>
            <p className="text-sm font-semibold text-zinc-400">
              Por favor, insira o código OTP enviado ao email informado para
              entrar.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="mx-auto w-full">
                <InputOTP
                  maxLength={6}
                  autoFocus
                  onChange={(value) =>
                    setValue("otp", value, { shouldValidate: true })
                  }
                  className="flex justify-center mx-auto w-full"
                >
                  <InputOTPGroup className="flex gap-3 group text-zinc-50 w-full">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="w-[3rem] hover:border-zinc-50 transition focus:text-zinc-50 rounded-lg border-[.075rem] border-zinc-400 h-[3rem]"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                {errors.otp && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.otp.message}
                  </p>
                )}
                {errorResponse && (
                  <p className="text-red-500 text-sm mt-1">{errorResponse}</p>
                )}
              </div>
              <div className="flex flex-row mt-2 justify-between items-center">
                <Button
                  type="submit"
                  className="bg-zinc-50 text-zinc-800 hover:bg-zinc-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2Icon className="animate-spin h-5 w-5" />
                    </>
                  ) : (
                    <>Enviar</>
                    )}
                </Button>
                <Button
                  type="button"
                  disabled={resendCountdown > 0}
                  onClick={requestOtp}
                  className="bg-transparent text-zinc-400"
                >
                  Reenviar {resendCountdown > 0 ? `(${resendCountdown}s)` : ""}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpLogin;
