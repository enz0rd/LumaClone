"use client";

import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, Mail, Plus, X } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

const EmailSchema = z.object({
  email: z
    .string({
      message: "Por favor, informe um email",
    })
    .email({
      message: "Por favor, informe um email válido",
    }),
});

type Email = z.infer<typeof EmailSchema>;

export function AddEmail({
  onAddEmail,
}: {
  onAddEmail: (email: { email: string; isMain: boolean }) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitEmail = (data: Email) => {
    console.log(data);
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
      onAddEmail({ email: data.email, isMain: false });
      setIsOpen(false);
    }, 2000);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button
          className="bg-zinc-800 hover:bg-zinc-400 hover:text-zinc-900 transition 
                text-zinc-400 flex items-center gap-2 py-[.2rem] text-sm font-semibold px-2 rounded-lg"
        >
          <Plus className="h-4 w-4" />
          <span>Adicionar Email</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[20rem] rounded-2xl bg-zinc-900 border-none text-zinc-100 visible z-[999]">
        <div className="flex flex-row justify-between gap-4">
          <div className="bg-zinc-800 rounded-full p-4 w-fit">
            <Mail className="text-zinc-300 scale-x-[-1] h-8 w-8" />
          </div>
          <AlertDialogCancel
            onClick={() => {}}
            className="border-none bg-transparent hover:bg-transparent"
          >
            <X className="text-zinc-300 h-6 w-6 " />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-start">
            Adicionar Email
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <span className="text-md text-zinc-300 mb-3 text-sm font-medium">
            Adicione um email adicional para receber convites de eventos
            enviados para esse endereço.
          </span>
        </AlertDialogDescription>
        <form
          onSubmit={handleSubmit(submitEmail)}
          className="flex flex-col gap-2"
        >
          <label htmlFor="email" className="text-sm text-zinc-200">
            Endereço de Email
          </label>
          <Input
            type="email"
            placeholder="voce@email.com"
            className="font-medium text-base border-zinc-800 hover:border-zinc-300 focus-visible:border-zinc-50 transition"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <Button
            type="submit"
            variant="secondary"
            className="text-base mt-2"
            size="default"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="animate-spin h-5 w-5" />
            ) : (
              "Adicionar Email"
            )}
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
