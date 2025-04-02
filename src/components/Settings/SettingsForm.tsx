'use client'
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AccountSettingsForm } from "./account/AccountSettingsForm";
import { EmailsList } from "./account/EmailSection/EmailsList";
import { PhoneSection } from "./account/PhoneSection";
import { SecuritySection } from "./account/SecuritySection";
import { ThirdpartyAccounts } from "./account/ThirdpartyAccounts";
import { AccountSync } from "./account/AccountSync/AccountSync";
import { ActiveDevices } from "./account/ActiveDevices/ActiveDevices";
import { DeleteAccount } from "./account/DeleteAccount";
import { ExibitionSettings } from "./preferences/Exibition";
import { NotificationPreferences } from "./preferences/Notification/NotificationPreferences";
import { useTranslation } from "react-i18next";
import PaymentMethods from "./payment/PaymentMethods/PaymentMethods";
import LumaPlus from "./payment/LumaPlus/LumaPlus";
import PaymentHistory from "./payment/PaymentHistory/PaymentHistory";

export function SettingsForm() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeTab, setActiveTab] = useState("account");
  const handleChangeTab = (tab: string) => {
    switch (tab) {
      case "account":
        document.title = t("titles.accountSettings");
        break;
      case "preferences":
        document.title = t("titles.preferencesSettings");
        break;
      case "payment":
        document.title = t("titles.paymentSettings");
        break;
    }
    return setActiveTab(tab);
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center gap-5 mt-[3rem]">
      <Tabs defaultValue={activeTab} className="w-full">
        <div className={`sticky top-0 z-10 backdrop-blur-sm ${isSticky ? "dark:bg-zinc-900/45 bg-zinc-50/45" : ""}`}>
          <div className="container mx-auto lg:max-w-[1000px] mb-3 flex gap-5 px-3 md:px-1 lg:px-0">
            <h1 className={`dark:text-zinc-50 text-zinc-900 font-semibold ${isSticky ? "text-xl mt-2" : "text-3xl"}`}>
              {t("Settings.title")}
            </h1>
          </div>
          <div className="container mx-auto px-3 lg:max-w-[1000px] flex gap-5 md:px-1 lg:px-0">
            <TabsList
              className="bg-transparent justify-stretch gap-4"
            >
              <TabsTrigger
                value="account"
                className="dark:text-zinc-400 text-zinc-700 text-md font-medium 
                            dark:data-[state=active]:text-zinc-50 dark:data-[state=active]:border-zinc-50 dark:hover:text-zinc-200 
                            data-[state=active]:text-zinc-950 data-[state=active]:border-b-2 data-[state=active]:border-zinc-950 hover:text-zinc-700 
                            transition-border-opacity
                            px-0 rounded-none data-[state=active]:bg-transparent"
                            onClick={() => handleChangeTab("account")}
                            >
                {t("Settings.tabs.account")}
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="dark:text-zinc-400 text-zinc-700 text-md font-medium 
                dark:data-[state=active]:text-zinc-50 dark:data-[state=active]:border-zinc-50 dark:hover:text-zinc-200 
                data-[state=active]:text-zinc-950 data-[state=active]:border-b-2 data-[state=active]:border-zinc-950 hover:text-zinc-700 
                transition-border-opacity
                px-0 rounded-none data-[state=active]:bg-transparent"
                onClick={() => handleChangeTab("preferences")}
                >
                {t("Settings.tabs.preferences")}
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="dark:text-zinc-400 text-zinc-700 text-md font-medium 
                dark:data-[state=active]:text-zinc-50 dark:data-[state=active]:border-zinc-50 dark:hover:text-zinc-200 
                data-[state=active]:text-zinc-950 data-[state=active]:border-b-2 data-[state=active]:border-zinc-950 hover:text-zinc-700 
                transition-border-opacity
                px-0 rounded-none data-[state=active]:bg-transparent"
                onClick={() => handleChangeTab("payment")}
              >
                {t("Settings.tabs.payment")}
              </TabsTrigger>
            </TabsList>
          </div>
          <hr className="dark:border-zinc-800 border-zinc-200 w-full" />
        </div>
        <div className="container mx-auto lg:max-w-[1000px] flex gap-5 px-3 md:px-1 lg:px-0">
          <TabsContent value="account" className="w-full">
            <AccountSettingsForm />
            <EmailsList />
            <PhoneSection />
            <SecuritySection />
            <ThirdpartyAccounts />
            <AccountSync />
            <ActiveDevices />
            <DeleteAccount />
          </TabsContent>
          <TabsContent value="preferences">
            <ExibitionSettings />
            <NotificationPreferences />
          </TabsContent>
          <TabsContent value="payment" className="w-full">
            <PaymentMethods />
            <LumaPlus />
            <PaymentHistory />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
