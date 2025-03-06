"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, ChevronsRight } from "lucide-react";
import { ZeroEventsIcon } from "./ZeroEventsIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface SubscriptionSheetProps {
  content: {
    icon: React.ReactNode;
    title: string;
    type: string;
  };
  index: number;
  totalCount: number;
}

type NameAndCount = {
  calendars: { name: string; count: number };
  pages: { name: string; count: number };
};

export function SubscriptionSheet({
  index,
  content,
  totalCount,
}: SubscriptionSheetProps) {
  const [countFetch, setCountFetch] = useState({ calendars: 0, pages: 0 });
  const [nameAndCount, setNameAndCount] = useState<NameAndCount>({
    calendars: { name: "Carregando...", count: 0 },
    pages: { name: "Carregando...", count: 0 },
  });
  const [activeTab, setActiveTab] = useState(content.type); // Novo estado para aba ativa

  const { t } = useTranslation();

  useEffect(() => {
    const fetchCountAndName = async () => {
      // Simulação de um fetch para uma API
      const data = {
        calendars: 0, // Simulando valores dinâmicos
        pages: 0,
      };

      setCountFetch(data);

      if (activeTab === "pages") {
        const name = data.pages === 0 ? `0 ${t("Settings.preferences.notifications.yourSubscriptions.page")}` : `${data.pages} ${t("Settings.preferences.notifications.yourSubscriptions.page")}s`;
        setNameAndCount({
          ...nameAndCount,
          pages: { name, count: data.pages },
        });
      } else {
        const name =
          data.calendars === 0
            ? `0 ${t("Settings.preferences.notifications.yourSubscriptions.calendar")}`
            : `${data.calendars} ${t("Settings.preferences.notifications.yourSubscriptions.calendar")}s`;
        setNameAndCount({
          ...nameAndCount,
          calendars: { name, count: data.calendars },
        });
      }
    };

    fetchCountAndName();
  }, [activeTab]); // Chama o fetch quando a aba mudar

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  useEffect(() => {
    if (isSheetOpen) {
      setActiveTab(content.type);
    }
  }, [isSheetOpen, content.type]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className={`justify-between dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 bg-zinc-50 border-zinc-200 text-zinc-700 flex transition rounded-lg px-3 py-6
          ${index === 0 ? "rounded-t-xl" : ""} ${
            index === totalCount - 1 ? "rounded-b-xl" : ""
          }`}
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
                {content.type === "pages"
                  ? nameAndCount.pages.name
                  : nameAndCount.calendars.name}
              </span>
              <ChevronRight className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="[&>button]:hidden dark:bg-zinc-900 m-2 rounded-lg p-0 w-[90%] sm:w-[30rem]">
        <SheetHeader className="flex flex-row items-center border-b dark:border-zinc-800 border-zinc-200 w-full px-3 py-2">
          <div className="flex flex-row items-center gap-4 my-1">
            <SheetClose asChild>
              <ChevronsRight className="text-zinc-500 hover:bg-zinc-500 hover:text-zinc-50 cursor-pointer transition rounded-lg" />
            </SheetClose>
            <span className="font-semibold text-zinc-500">
              {t("Settings.preferences.notifications.yourSubscriptions.manageSubscriptions")}
            </span>
          </div>
        </SheetHeader>
        <div className="p-4 flex flex-col gap-2">
          <SheetTitle className="text-xl font-medium">
          {t("Settings.preferences.notifications.yourSubscriptions.yourSubscriptions")}
          </SheetTitle>
          <p className="text-sm text-zinc-500">
          {t("Settings.preferences.notifications.yourSubscriptions.subtitle")}
          </p>
        </div>
        <Tabs value={activeTab} className="w-full">
          <TabsList className="px-4 bg-transparent justify-stretch gap-4">
            <TabsTrigger
              value="pages"
              className="dark:text-zinc-400 text-zinc-700 text-md font-medium 
                            dark:data-[state=active]:text-zinc-50 dark:data-[state=active]:border-zinc-50 dark:hover:text-zinc-200 
                            data-[state=active]:text-zinc-950 data-[state=active]:border-b-2 data-[state=active]:border-zinc-950 hover:text-zinc-700 
                            transition-border-opacity px-0 rounded-none data-[state=active]:bg-transparent"
              onClick={() => setActiveTab("pages")}
            >
              {t("Settings.preferences.notifications.yourSubscriptions.tabs.discoverPages")}
            </TabsTrigger>
            <TabsTrigger
              value="calendars"
              className="dark:text-zinc-400 text-zinc-700 text-md font-medium 
                            dark:data-[state=active]:text-zinc-50 dark:data-[state=active]:border-zinc-50 dark:hover:text-zinc-200 
                            data-[state=active]:text-zinc-950 data-[state=active]:border-b-2 data-[state=active]:border-zinc-950 hover:text-zinc-700 
                            transition-border-opacity px-0 rounded-none data-[state=active]:bg-transparent"
              onClick={() => setActiveTab("calendars")}
            >
              {t("Settings.preferences.notifications.yourSubscriptions.tabs.calendars")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pages" className="w-full">
            {countFetch.pages === 0 ? (
              <div className="flex flex-col items-center text-center justify-center gap-2 p-4 mt-10">
                <ZeroEventsIcon className="w-[5rem] mb-2" />
                <h1 className="text-zinc-400 dark:text-zinc-500 text-lg font-bold">
                {t("Settings.preferences.notifications.yourSubscriptions.noPages.title")}
                </h1>
                <p className="text-zinc-400/70 dark:text-zinc-600 text-sm font-semibold">
                {t("Settings.preferences.notifications.yourSubscriptions.noPages.subtitle")}
                </p>
                <Link
                  href={"/discover"}
                  className="mt-4 px-3 py-2 rounded-lg transition font-semibold
                  bg-zinc-100 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-100 
                  dark:bg-zinc-800 dark:hover:bg-zinc-300 dark:hover:text-zinc-800"
                >
                  {t("Settings.preferences.notifications.yourSubscriptions.discover")}
                </Link>
              </div>
            ) : null}
          </TabsContent>
          <TabsContent value="calendars" className="w-full">
            {countFetch.calendars === 0 ? (
              <div className="flex flex-col items-center text-center justify-center gap-2 p-4 mt-10">
                <ZeroEventsIcon className="w-[5rem] mb-2" />
                <h1 className="text-zinc-400 dark:text-zinc-500 text-lg font-bold">
                {t("Settings.preferences.notifications.yourSubscriptions.noCalendars.title")}
                </h1>
                <p className="text-zinc-400/70 dark:text-zinc-600 text-sm font-semibold">
                {t("Settings.preferences.notifications.yourSubscriptions.noCalendars.subtitle")}
                </p>
                <Link
                  href={"/discover"}
                  className="mt-4 px-3 py-2 rounded-lg transition font-semibold
                  bg-zinc-100 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-100 
                  dark:bg-zinc-800 dark:hover:bg-zinc-300 dark:hover:text-zinc-800"
                >
                  {t("Settings.preferences.notifications.yourSubscriptions.discover")}
                </Link>
              </div>
            ) : null}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
