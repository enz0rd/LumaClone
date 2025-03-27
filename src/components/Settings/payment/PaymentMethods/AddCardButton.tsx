import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { t } from "i18next";
import { Plus, X, Loader2Icon, CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastTypes } from "@/components/ToastTypes";

const CreditCardSchema = z.object({
  cardNumber: z
    .string({
      message: "Please enter a valid card number",
    })
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Número do cartão inválido"),
  expiryDate: z.string({
    message: "Please enter a valid expiry date",
  }),
  cvc: z
    .string({
      message: "Please enter a valid CVC",
    })
    .regex(/^[0-9]{3,4}$/, "Invalid CVV"),
});

type CreditCard = z.infer<typeof CreditCardSchema>;

export default function AddCardButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreditCardSchema),
  });

  const formatCardNumber = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, ""); // Remove não numéricos
    return onlyNumbers.replace(/(.{4})/g, "$1 ").trim(); // Adiciona espaço a cada 4 dígitos
  };

  const formatDate = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, ""); // Remove não numéricos
    return onlyNumbers
      .replace(/(.{2})/g, "$1/")
      .slice(0, 5)
      .trim(); // Adiciona / a cada 2 dígitos
  };

  const formatCVC = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 3); // Remove não numéricos e limita a 3 dígitos
  };

  const submitCard = (data: CreditCard) =>
    toast(
      t("Settings.payment.methods.addCard.toast"),
      ToastTypes.default
    );

  return (
    <>
      <Toaster />
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <button
            className="dark:bg-zinc-200 dark:hover:bg-zinc-400 dark:hover:text-zinc-900 dark:text-zinc-800 
            bg-zinc-800 hover:bg-zinc-600 hover:text-zinc-100 text-zinc-200
            transition flex items-center gap-2 py-2 text-md font-semibold px-4 rounded-lg mt-5"
          >
            <Plus className="h-4 w-4" />
            <span>{t("Settings.payment.methods.addCard.button")}</span>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent
          className="w-[90%] max-w-[20rem] rounded-2xl border-none visible z-[999]
        dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-100 text-zinc-900"
        >
          <div className="flex flex-row justify-between gap-4">
            <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-4 w-fit">
              <CreditCard className="dark:text-zinc-300 text-zinc-700 scale-x-[-1] h-8 w-8" />
            </div>
            <AlertDialogCancel
              onClick={() => {}}
              className="border-none bg-transparent hover:bg-transparent"
            >
              <X className="dark:text-zinc-300 text-zinc-700 h-6 w-6 " />
            </AlertDialogCancel>
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl text-start">
            {t("Settings.payment.methods.addCard.title")}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <span className="text-md dark:text-zinc-300 text-zinc-700 mb-3 text-sm font-medium">
              {t("Settings.payment.methods.addCard.description")}
            </span>
          </AlertDialogDescription>
          <form
            onSubmit={handleSubmit(submitCard)}
            className="flex flex-col gap-2"
          >
            <div
              className="flex flex-row border rounded-lg dark:hover:border-zinc-200 dark:focus-visible:border-zinc-50
                    border-zinc-500 hover:border-zinc-700 focus-visible:border-zinc-950"
            >
              <Input
                type="text"
                placeholder={t("Settings.payment.methods.addCard.placeholder")}
                {...register("cardNumber")}
                className="font-medium text-base transition border-none drop-shadow-none"
                maxLength={19}
                onChange={(e) => {
                  setValue("cardNumber", formatCardNumber(e.target.value));
                }}
              />
              <Input
                type="text"
                placeholder="MM/YY"
                {...register("expiryDate")}
                className="font-medium text-base transition border-none drop-shadow-none"
                onFocus={() => setIsHidden(false)}
                maxLength={5}
                onChange={(e) =>
                  setValue("expiryDate", formatDate(e.target.value))
                }
              />
              <Input
                type="text"
                placeholder="CVC"
                {...register("cvc")}
                className={`font-medium text-base transition border-none drop-shadow-none ${
                  isHidden ? "hidden" : ""
                }`}
                maxLength={3}
                onChange={(e) => setValue("cvc", formatCVC(e.target.value))}
              />
            </div>
            <Button
              variant="default"
              className="text-base mt-2"
              size="default"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin h-5 w-5" />
              ) : (
                t("Settings.payment.methods.addCard.button")
              )}
            </Button>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
