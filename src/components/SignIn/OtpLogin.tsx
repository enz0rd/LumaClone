"use client";
import { auth } from "@/app/api/auth/firebase";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithEmailLink,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";
import React, { FormEvent, useEffect, useState, useTransition } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface OtpLoginProps {
  method: "email" | "phone";
  setMethod: (method: "email" | "phone") => void;
}
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Mail, SmartphoneIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SignInSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  //   phone: z.string().regex(/^\+\d{1,3}\s?\d{10,14}$/, {
  //     message:
  //       "Por favor, insira um número de telefone válido com o código do país. (ex: +55)",
  //   }).optional(),
});

type SignInData = z.infer<typeof SignInSchema>;

const actionCodeSettings = {
    url: "http://localhost:3000",
    handleCodeInApp: true,
}

function OtpLogin({ method, setMethod }: OtpLoginProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
  });

  const requestOtp = async (data: string, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setResendCountdown(60);
    startTransition(async () => {
      setError(null);
      if (!recaptchaVerifier)
        return setError("RecaptchaVerifier not initialized");
      try {
        if (method === "email") {
          await sendSignInLinkToEmail(auth, data, actionCodeSettings);
          setConfirmationResult(null);
          setSuccess("Link de acesso enviado com sucesso.");
        } else {
          return setError("Método de acesso via telefone desativado.");
        }
      } catch (error: any) {
        console.log(error);
        setResendCountdown(0);

        if (error.code === "auth/invalid-phone-number") {
          setError(
            "Número de telefone inválido. Por favor, insira um número de telefone válido."
          );
        } else if (error.code === "auth/too-many-requests") {
          setError("Muitas tentativas. Por favor, tente novamente mais tarde.");
        } else {
          setError("Erro ao enviar o link de acesso. Por favor, tente novamente.");
        }
      }
    });
  };

  const onSubmit = (data: SignInData) => {
    if (method === "email") {
      console.log("teste");
      requestOtp(data.email);
    } else {
      return setError("Método de acesso via telefone desativado.");
    }
  };

  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);

  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);

  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    setRecaptchaVerifier(recaptchaVerifier);

    return () => recaptchaVerifier.clear();
  }, [auth]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-2 flex flex-col gap-2 w-[20rem]"
      >
        <div className="flex flex-col gap-2 w-[20rem]">
          {method === "email" ? (
            <>
              {!confirmationResult && (
                <>
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
                    <p className="text-red-500 text-wrap text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </>
              )}
              {confirmationResult && (
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              )}
              <button
                className="disabled:bg-zinc-600 mt-2 bg-zinc-50 text-zinc-800 p-2 rounded-lg hover:bg-zinc-300 transition font-medium"
                disabled={isPending || resendCountdown > 0}
              >
                {isPending
                  ? "Enviando..."
                  : resendCountdown > 0
                  ? `Reenviar link em ${resendCountdown}s`
                  : "Continuar com Email"}
              </button>
            </>
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
                id="tel"
                placeholder="+55 11 96123 4567"
                className="placeholder-zinc-600 p-2 hover:border-zinc-200 transition bg-zinc-900 border-[.075rem] border-zinc-700 rounded-lg text-zinc-100"
              />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    className="mt-2 bg-zinc-50 text-zinc-800 p-2 rounded-lg hover:bg-zinc-300 transition font-medium"
                    disabled={isPending || resendCountdown > 0}
                  >
                    Continuar com Telefone
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="z-[999] bg-zinc-900 px-5 w-[80%] rounded-xl text-zinc-50 border-zinc-600">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Método de acesso desativado
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription className="text-zinc-400 font-medium">
                    A forma de acesso via telefone está desativada devido aos
                    custos do uso no método de autenticação Firebase. Por favor,
                    utilize o email para acessar.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="text-zinc-900">
                      Voltar
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          )}
          <div className="flex flex-row text-wrap justify-center">
            {error && <p className="text-red-500 text-xs">{error}</p>}
            {success && <p className="text-green-500 text-xs">{success}</p>}
          </div>

          {isPending && (
            <div className="flex flex-row text-wrap justify-center">
              <p className="text-zinc-300 text-xs">Enviando...</p>
            </div>
          )}
        </div>
      </form>
      <div id="recaptcha-container" />
    </div>
  );
}

export default OtpLogin;
