"use client";

import { useEffect, useState } from "react";
import { Loader2Icon, Mail, SmartphoneIcon } from "lucide-react";
import axios from "axios";

const SignInSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z
    .string({
      message: "Por favor, insira um número de telefone válido.",
    })
    .optional()
    .nullable(),
});

type SignInData = z.infer<typeof SignInSchema>;

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorModal, ErrorModalProps } from "../Error/ErrorModal";
import { api } from "@/lib/utils";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
  });
  const { t } = useTranslation();

  const router = useRouter();

  const [isTokenVerified, setTokenVerified] = useState(false);
  useEffect(() => {
    if (!isTokenVerified) {
      const verifyToken = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const resp = await api.get("/api/auth/validate-token");
        if (resp.data.status === 200) {
          router.push("/create");
        } else {
          setTokenVerified(true);
        }
      };
      verifyToken();
    }
    return;
  }, [isTokenVerified]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SignInData) => {
    setIsLoading(true);
    const resp = await axios.post("/api/user", data);
    const respData = resp.data;
    if (respData.status !== 200) {
      if (respData.slug == "user-exists") {
        localStorage.setItem("userId", respData.user.id);
        localStorage.setItem("email", respData.user.email);
        await axios.post(
          "api/auth/send-otp",
          { userId: respData.user.id, email: respData.user.email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        router.push("/verifyAccount");
        return;
      } else if (respData.slug == "server-error") {
        setErrorContent({
          title: "Erro no servidor",
          message: "Ocorreu um erro no servidor, tente novamente mais tarde.",
          onClose: () => setIsErrorVisible(false),
        });
        setIsErrorVisible(true);
        console.log(respData.message);
        setIsLoading(false);
        return;
      } else {
        setErrorContent({
          title: "Erro desconhecido",
          message: "Ocorreu um erro desconhecido, tente novamente mais tarde.",
          onClose: () => setIsErrorVisible(false),
        });
        setIsErrorVisible(true);
        console.log(respData.message);
        setIsLoading(false);
        return;
      }
    }
    localStorage.setItem("userId", respData.user.id);
    localStorage.setItem("email", respData.user.email);
    await axios.post(
      "api/auth/send-otp",
      { userId: respData.user.id, email: respData.user.email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return router.push("/verifyAccount");
  };

  const [method, setMethod] = useState<"email" | "phone">("email");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorContent, setErrorContent] = useState<ErrorModalProps>({
    title: "",
    message: "",
    onClose: () => setIsErrorVisible(false),
  });
  return (
    <div className="mt-2">
      {isErrorVisible && (
        <>
          <ErrorModal
            title={errorContent.title}
            message={errorContent.message}
            onClose={errorContent.onClose}
          />
        </>
      )}
      <div className="flex flex-col gap-2">
        {method === "email" ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row justify-between">
              <label
                htmlFor="email"
                className="hover:cursor-pointer font-semibold text-sm 
                dark:hover:text-zinc-100 dark:text-zinc-300 hover:text-zinc-900 text-zinc-700"
              >
                Email
              </label>
              <span
                className="hover:cursor-pointer transition font-semibold text-sm flex gap-1 items-center
                dark:hover:text-zinc-200 dark:text-zinc-400 hover:text-zinc-800 text-zinc-600"
                onClick={() => setMethod("phone")}
              >
                <SmartphoneIcon size={15} /> {t("SignIn.usePhone")}
              </span>
            </div>
            <input
              type="email"
              id="email"
              placeholder={t("SignIn.emailPlaceholder")}
              className="p-2 transition border-[.075rem] rounded-lg
              dark:placeholder-zinc-600 dark:hover:border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100 
              placeholder-zinc-400 hover:border-zinc-800 bg-zinc-100 border-zinc-300 text-zinc-900 "
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            <Button
              type="submit"
              className="mt-2 p-2 rounded-lg transition font-medium text-center
              dark:bg-zinc-50 dark:text-zinc-800 dark:hover:bg-zinc-300
              bg-zinc-950 text-zinc-200 hover:bg-zinc-700
              "
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin h-5 w-5" />
              ) : (
                t("SignIn.continueWith.email")
              )}
            </Button>
          </form>
        ) : (
          <>
            <div className="flex flex-row justify-between">
              <label
                htmlFor="phone"
                className="hover:cursor-pointer font-semibold text-sm
                dark:hover:text-zinc-100 dark:text-zinc-300 hover:text-zinc-900 text-zinc-700"
              >
                {t("SignIn.phoneNumber")}
              </label>
              <span
                className="hover:cursor-pointer hover:text-zinc-200 transition font-semibold text-sm dark:text-zinc-400 text-zinc-600 flex gap-1 items-center"
                onClick={() => setMethod("email")}
              >
                <Mail size={15} /> {t("SignIn.useEmail")}
              </span>
            </div>
            <input
              type="phone"
              id="phone"
              placeholder={t("SignIn.phonePlaceholder")}
              className="p-2 transition border-[.075rem] rounded-lg
              dark:placeholder-zinc-600 dark:hover:border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100 
              placeholder-zinc-400 hover:border-zinc-800 bg-zinc-100 border-zinc-300 text-zinc-900 
              "
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
            <button
              className="mt-2 p-2 rounded-lg transition font-medium
            dark:bg-zinc-50 dark:text-zinc-800 dark:hover:bg-zinc-300
            bg-zinc-950 text-zinc-200 hover:bg-zinc-700
            "
            >
              {t("SignIn.continueWith.phone")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
