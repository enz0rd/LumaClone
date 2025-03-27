import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import AddCardButton from "./AddCardButton";

export default function PaymentMethods() {
  const { t } = useTranslation();

  return (
    <div className="mt-5 w-full mb-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
        {t("Settings.payment.methods.title")}
        </h1>
      </div>
      <span className="text-md text-zinc-800 dark:text-zinc-300 text-md">
        {t("Settings.payment.methods.description")}
      </span>
      <AddCardButton />
    </div>
  );
}
