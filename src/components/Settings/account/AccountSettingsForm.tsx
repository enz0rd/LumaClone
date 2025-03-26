import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { CheckCircle2, Globe, UserCheck2 } from "lucide-react";
import { UserImageUploadInput } from "./UserImageUploadInput";
import { Button } from "../../ui/button";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast"
import { ToastTypes } from "@/components/ToastTypes";

const UserFormSchema = z.object({
  name: z.string().nonempty({
    message: "O campo nome não pode ficar vazio",
  }),
  username: z.string().nonempty({
    message: "O campo nome de usuário não pode ficar vazio",
  }),
  bio: z.string().optional(),
  social: z.object({
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    tiktok: z.string().optional(),
    website: z.string().optional()
  }),
});

type UserForm = z.infer<typeof UserFormSchema>;

export function AccountSettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserFormSchema),
  });

  async function onSubmit(data: UserForm) {
    toast("Teste", ToastTypes.default);
    console.log(data);
  }

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 mt-5">
      <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{t("Settings.account.profile.title")}</h1>
      <span className="text-md text-zinc-700 dark:text-zinc-300">
        {t("Settings.account.profile.subtitle")}
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:space-x-8">
          <div className="flex flex-col gap-2 row-start-2 sm:row-start-1">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm"
              >
                {t("Settings.account.profile.name")}
              </label>
              <Input
                type="text"
                id="name"
                {...register("name")}
                className="transition focus-visible:border-zinc-50 hover:border-zinc-700 border-zinc-300 text-zinc-950 
                dark:hover:border-zinc-400  dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="dark:text-zinc-300 text-zinc-700 font-semibold text-sm"
              >
                {t("Settings.account.profile.username")}
              </label>
              <div className="flex items-center">
                <div className="dark:text-zinc-300 text-zinc-700 font-semibold text-sm px-4 flex my-auto h-full 
                dark:bg-zinc-800 bg-zinc-200 border border-r-0 dark:border-zinc-700 border-zinc-300 rounded-l-lg">
                  <span className="my-auto">@</span>
                </div>
                <Input
                  type="text"
                  id="username"
                  {...register("username")}
                  className="transition dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950
                  rounded-l-none"
                />
              </div>
              {errors.username && (
                <span className="text-red-500 text-xs">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="bio"
                className="dark:text-zinc-300 text-zinc-700 font-semibold text-sm"
              >
                Bio
              </label>
              <Textarea
                maxLength={140}
                id="bio"
                {...register("bio")}
                className="transition hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950
                          dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50
                            text-wrap placeholder:font-semibold placeholder:text-base
                            min-h-[5rem] rounded-lg"
                placeholder={t("Settings.account.profile.bioPlaceholder")}
              />
              {errors.bio && (
                <span className="text-red-500 text-xs">
                  {errors.bio.message}
                </span>
              )}
            </div>
          </div>
          <UserImageUploadInput />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="bio" className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm">
          {t("Settings.account.profile.socialLinks")}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-4 w-fit">
            <div className="flex items-center gap-3">
              <BsInstagram size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-700 bg-zinc-200 border-zinc-300
                dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-700
                font-semibold text-md px-3 flex my-auto h-full border border-r-0 rounded-l-lg">
                  <span className="my-auto">instagram.com/</span>
                </div>
                <Input
                  type="text"
                  id="instagram"
                  {...register("social.instagram")}
                  placeholder={t("Settings.account.profile.socialLinksPlaceholder.username")}
                  className="transition 
                  dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950 
                  placeholder:text-base placeholder:font-semibold h-full rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsTwitterX size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-700 bg-zinc-200 border-zinc-300
                dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-700
                font-semibold text-md px-3 flex my-auto h-full border border-r-0 rounded-l-lg">
                  <span className="my-auto">x.com/</span>
                </div>
                <Input
                  type="text"
                  id="twitter"
                  {...register("social.twitter")}
                  placeholder={t("Settings.account.profile.socialLinksPlaceholder.username")}
                  className="transition 
                  dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950 
                  placeholder:text-base placeholder:font-semibold h-full rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsYoutube size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-700 bg-zinc-200 border-zinc-300
                dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-700
                font-semibold text-md px-3 flex my-auto h-full border border-r-0 rounded-l-lg">
                  <span className="my-auto">youtube.com/@</span>
                </div>
                <Input
                  type="text"
                  id="youtube"
                  {...register("social.youtube")}
                  placeholder={t("Settings.account.profile.socialLinksPlaceholder.username")}
                  className="transition 
                  dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950 
                  placeholder:text-base placeholder:font-semibold h-full rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsTiktok size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-700 bg-zinc-200 border-zinc-300
                dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-700
                font-semibold text-md px-3 flex my-auto h-full border border-r-0 rounded-l-lg">
                  <span className="my-auto">tiktok.com/@</span>
                </div>
                <Input
                  type="text"
                  id="tiktok"
                  {...register("social.tiktok")}
                  placeholder={t("Settings.account.profile.socialLinksPlaceholder.username")}
                  className="transition 
                  dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950 
                  placeholder:text-base placeholder:font-semibold h-full rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsLinkedin size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-700 bg-zinc-200 border-zinc-300
                dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-700
                font-semibold text-md px-3 flex my-auto h-full border border-r-0 rounded-l-lg">
                  <span className="my-auto">linkedin.com</span>
                </div>
                <Input
                  type="text"
                  id="linkedin"
                  {...register("social.linkedin")}
                  placeholder={t("Settings.account.profile.socialLinksPlaceholder.linkedin")}
                  className="transition 
                  dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950 
                  placeholder:text-base placeholder:font-semibold h-full rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={17} className="text-zinc-500" />
              <div className="flex items-center h-[2.3rem] w-full max-w-[17rem]">
                <Input
                  type="text"
                  id="website"
                  {...register("social.website")}
                  placeholder={t("Settings.account.profile.socialLinksPlaceholder.website")}
                  className="transition 
                  dark:hover:border-zinc-400 dark:focus-visible:border-zinc-50 dark:border-zinc-700 dark:text-zinc-50 
                  hover:border-zinc-600 focus-visible:border-zinc-950 border-zinc-300 text-zinc-950 
                  placeholder:text-base placeholder:font-semibold h-full"
                />
              </div>
            </div>
          </div>
          <Button className="mt-5 w-fit
          dark:bg-zinc-50 dark:hover:bg-zinc-300 
          bg-zinc-950 hover:bg-zinc-700 " >
            <UserCheck2 size={20} className="dark:text-zinc-800 text-zinc-200" />
            <span className="dark:text-zinc-800 text-zinc-200 font-medium text-base">
            {t("Settings.account.profile.save")}
            </span>
          </Button>
          <Toaster position="bottom-center" />
        </div>
      </form>
    </div>
  );
}
