'use client'
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AccountSettingsForm } from "./AccountSettingsForm";
import { EmailsList } from "./EmailsList";
import { PhoneSection } from "./PhoneSection";
import { SecuritySection } from "./SecuritySection";

export function SettingsForm() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-center gap-5 mt-[3rem]">
      <Tabs defaultValue="account" className="w-full">
        <div className={`sticky top-0 z-10 backdrop-blur-sm ${isSticky ? "bg-zinc-900 bg-opacity-45" : ""}`}>
          <div className="container mx-auto lg:max-w-[1000px] mb-3 flex gap-5 px-5 md:px-0">
            <h1 className={`text-zinc-50 font-semibold ${isSticky ? "text-xl mt-2" : "text-3xl"}`}>
              Configurações
            </h1>
          </div>
          <div className="container mx-auto px-5 lg:max-w-[1000px] flex gap-5 md:px-0">
            <TabsList
              className="bg-transparent justify-stretch gap-4
                        "
            >
              <TabsTrigger
                value="account"
                className="text-zinc-400 text-md font-medium 
                            data-[state=active]:text-zinc-50 data-[state=active]:border-b-2 data-[state=active]:border-zinc-50 
                            hover:text-zinc-200 transition-border-opacity
                            px-0 rounded-none data-[state=active]:bg-transparent"
              >
                Conta
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="text-zinc-400 text-md font-medium 
                            data-[state=active]:text-zinc-50 data-[state=active]:border-b-2 data-[state=active]:border-zinc-50 
                            hover:text-zinc-200 transition-border-opacity
                            px-0 rounded-none data-[state=active]:bg-transparent"
              >
                Preferências
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="text-zinc-400 text-md font-medium 
                            data-[state=active]:text-zinc-50 data-[state=active]:border-b-2 data-[state=active]:border-zinc-50 
                            hover:text-zinc-200 transition-border-opacity
                            px-0 rounded-none data-[state=active]:bg-transparent"
              >
                Pagamento
              </TabsTrigger>
            </TabsList>
          </div>
          <hr className="border-zinc-800 w-full" />
        </div>
        <div className="container mx-auto lg:max-w-[1000px] flex gap-5 px-5 md:px-0">
          <TabsContent value="account" className="w-full">
            <AccountSettingsForm />
            <EmailsList />
            <PhoneSection />
            <SecuritySection />
          </TabsContent>
          <TabsContent value="preferences"></TabsContent>
          <TabsContent value="payment"></TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
