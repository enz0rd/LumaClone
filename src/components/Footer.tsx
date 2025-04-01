import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrAppleAppStore } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const theme = localStorage.getItem("theme") || "light";

  return (
    <footer className="mx-auto fixed-bottom flex flex-col mt-10 border-t-[.075rem] border-zinc-300 dark:border-zinc-800 w-[90%] max-w-[1280px] py-4">
      <div className="flex justify-between">
        <div className="flex flex-row gap-5 flex-wrap items-center text-sm text-zinc-800 dark:text-zinc-200">
          <img
            src={
              theme === "light"
                ? "/Luma/wordmark-dark.png"
                : "/Luma/wordmark-light.png"
            }
            alt="Luma logo"
            className="opacity-[75%] lg:w-[3.5rem] lg:h-[1.3rem] md:w-[3.5rem] md:h-[1.3rem] w-[2rem] h-[.75rem]"
          />
          <Link href="/releases">{t("Footer.new")}</Link>
          <Link href="/discover">{t("Footer.discover")}</Link>
          <Link href="/pricing">{t("Footer.pricing")}</Link>
          <Link href="/help">{t("Footer.help")}</Link>
        </div>
        <div className="flex gap-4 text-zinc-800 dark:text-zinc-50">
          <Link href={"mailto:support@lu.ma"}>
            <LuMail size={15} />
          </Link>
          <Link href={"https://lu.ma/ios"}>
            <GrAppleAppStore size={15} />
          </Link>
          <Link href={"https://x.com/LumaHQ"}>
            <FaXTwitter size={15} />
          </Link>
          <Link href={"https://instagram.com/luma_hq"}>
            <FaInstagram size={15} />
          </Link>
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <div className="flex gap-5 flex-wrap text-zinc-600 font-semibold text-sm">
          <Link href="/terms">{t("Footer.terms")}</Link>
          <Link href="/privacy">{t("Footer.privacy")}</Link>
          <Link href="/security">{t("Footer.security")}</Link>
        </div>
        <span className="text-xs font-medium text-zinc-500">
          {t("Footer.clone")}{" "}
          <Link href={"https://github.com/enz0rd"}>enz0rd</Link>
        </span>
      </div>
    </footer>
  );
}
