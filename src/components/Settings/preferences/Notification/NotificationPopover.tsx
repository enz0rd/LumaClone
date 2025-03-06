"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type NotificationOption = {
  icon: React.ReactNode;
  title: string;
  options: { name: string; value: string }[];
};

interface NotificationPopoverProps {
  content: NotificationOption;
  index: number;
  totalCount: number;
}

export function NotificationPopover({ content, index, totalCount }: NotificationPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("email");

  const { t } = useTranslation();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className={`justify-between dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 bg-zinc-50 border-zinc-200 text-zinc-700 flex transition rounded-lg px-3 py-6
          ${index === 0 ? "rounded-t-xl" : ""} ${index === totalCount - 1 ? "rounded-b-xl" : ""}`}
        >
          <div className="flex flex-row items-center justify-between w-full gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="dark:bg-zinc-700/60 bg-zinc-200/60 text-zinc-500 rounded-md p-1">
                {content.icon}
              </div>
              <p className="dark:text-zinc-50 text-zinc-950 text-base">
                {content.title}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="dark:text-zinc-500 text-zinc-700">
                {content.options.find(option => option.value === currentValue)?.name || "Desabilitado"}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="flex flex-col p-1 dark:bg-zinc-900 w-[10rem] rounded-lg">
        <Button
          className="dark:bg-zinc-900 dark:hover:bg-zinc-700 dark:text-zinc-200 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 flex transition"
          onClick={() => {
            setCurrentValue("");
            setIsOpen(false);
          }}
        >
          <span className="w-full text-start">{t("Settings.preferences.notifications.disabled")}</span>
        </Button>
        <hr />
        {content.options.map((option, idx) => (
          <Button
            key={idx}
            className="dark:bg-zinc-900 dark:hover:bg-zinc-700 dark:text-zinc-200 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 flex transition"
            onClick={() => {
              setCurrentValue(currentValue === option.value ? "" : option.value);
              setIsOpen(false);
            }}
          >
            <span className="w-full text-start">{option.name}</span>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}