'use client'
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { BsShieldCheck } from "react-icons/bs";

export function SecuritySection() {
  const [isEmailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordDefined, setPasswordDefined] = useState(false);

  const sendPasswordToEmail = async () => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
      setEmailSent(true);
    }, 2000);
  }

  return (
    <div className="my-8 pt-8 border-t w-full border-zinc-800">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-50">
          Senha e Segurança
        </h1>
      </div>
      <span className="text-md text-zinc-300">
        Proteja sua conta com senha e autenticação de dois fatores.
      </span>
      <div className="mt-4 border border-zinc-800 bg-zinc-900 bg-opacity-60 rounded-xl">
        <div
          className={`flex flex-row justify-between p-4 border-zinc-800`}
        >
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2">
              <FaLock className="text-zinc-500 text-lg self-start mt-1" />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="text-zinc-50">Senha da Conta</p>
                </div>
                {isEmailSent ? (
                  <span className="text-yellow-300 font-semibold text-sm">
                    Por favor, siga as instruções no email para finalizar a configuração da sua senha.
                  </span>
                ) : (
                  <span className="text-zinc-500 font-semibold text-sm">
                    Por favor, defina uma senha antes de ativar a autenticação de
                    dois fatores.
                  </span>
                )}
              </div>
            </div>
            <Button onClick={() => sendPasswordToEmail()} className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 px-2 w-[7rem] h-[1.7rem] rounded-lg" disabled={isLoading || isEmailSent}>
              {isLoading ? (
                <Loader2Icon className="animate-spin h-4 w-4 text-zinc-900" />
              ) : (
                <span className="text-zinc-900 font-semibold text-sm">
                  Definir senha
                </span>
              )}
            </Button>
          </div>
        </div>
        <div className={`flex flex-row justify-between p-4 border-zinc-800 border-t`}>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2">
              <BsShieldCheck className="text-zinc-500 text-lg self-start mt-1" />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="text-zinc-50">Autenticação de Dois Fatores</p>
                </div>
                  <span className="text-zinc-500 font-semibold text-sm">
                    Por favor, defina uma senha antes de ativar a autenticação de dois fatores.
                  </span>
              </div>
            </div>
            <Button className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 px-2 w-[7rem] h-[1.7rem] rounded-lg" disabled={!isPasswordDefined}>
                <span className="text-zinc-900 font-semibold text-sm">
                  Ativar 2FA
                </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
