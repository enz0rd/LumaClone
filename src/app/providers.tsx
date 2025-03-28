"use client";

import { ThemeProvider } from "next-themes";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const languageSet = localStorage.getItem("language") || "en";
    i18n.changeLanguage(languageSet);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}
