import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { Globe, UserCheck2 } from "lucide-react";
import { UserImageUploadInput } from "./UserImageUploadInput";
import { Button } from "../ui/button";

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
    website: z.string().optional(),
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
    console.log(data);
  }

  return (
    <div className="flex; flex-col gap-2 mt-5">
      <h1 className="text-2xl font-semibold text-zinc-50">Seu perfil</h1>
      <span className="text-md text-zinc-300">
        Escolha como você será exibido como anfitrião ou convidado.
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:space-x-8">
          <div className="flex flex-col gap-2 row-start-2 sm:row-start-1">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-zinc-300 font-semibold text-sm"
              >
                Nome
              </label>
              <Input
                type="text"
                id="name"
                {...register("name")}
                className="transition hover:border-zinc-400 focus-visible:border-zinc-50 border-zinc-700 text-zinc-50"
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
                className="text-zinc-300 font-semibold text-sm"
              >
                Nome de usuário
              </label>
              <div className="flex items-center">
                <div className="text-zinc-300 font-semibold text-sm px-4 flex my-auto h-full bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg">
                  <span className="my-auto">@</span>
                </div>
                <Input
                  type="text"
                  id="username"
                  {...register("username")}
                  className="transition hover:border-zinc-400 focus-visible:border-zinc-50 border-zinc-700 text-zinc-50 rounded-l-none"
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
                className="text-zinc-300 font-semibold text-sm"
              >
                Bio
              </label>
              <Textarea
                maxLength={140}
                id="bio"
                {...register("bio")}
                className="transition hover:border-zinc-400 focus-visible:border-zinc-50 border-zinc-700 text-zinc-50
                            text-wrap placeholder:font-semibold placeholder:text-base
                            min-h-[5rem] rounded-lg"
                placeholder="Compartilhe um pouco sobre seu histórico e interesses"
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
          <label htmlFor="bio" className="text-zinc-300 font-semibold text-sm">
            Links Sociais
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-4 w-fit">
            <div className="flex items-center gap-3">
              <BsInstagram size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-300 font-semibold text-md px-3 flex my-auto h-full bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg">
                  <span className="my-auto">instagram.com/</span>
                </div>
                <Input
                  type="text"
                  id="instagram"
                  {...register("social.instagram")}
                  placeholder="nome de usuário"
                  className="transition hover:border-zinc-400 placeholder:text-base placeholder:font-semibold focus-visible:border-zinc-50 h-full border-zinc-700 text-zinc-50 rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsTwitterX size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-300 font-semibold text-md px-3 flex my-auto h-full bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg">
                  <span className="my-auto">x.com/</span>
                </div>
                <Input
                  type="text"
                  id="twitter"
                  {...register("social.twitter")}
                  placeholder="nome de usuário"
                  className="transition hover:border-zinc-400 placeholder:text-base placeholder:font-semibold focus-visible:border-zinc-50 h-full border-zinc-700 text-zinc-50 rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsYoutube size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-300 font-semibold text-md px-3 flex my-auto h-full bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg">
                  <span className="my-auto">youtube.com/@</span>
                </div>
                <Input
                  type="text"
                  id="youtube"
                  {...register("social.youtube")}
                  placeholder="nome de usuário"
                  className="transition hover:border-zinc-400 placeholder:text-base placeholder:font-semibold focus-visible:border-zinc-50 h-full border-zinc-700 text-zinc-50 rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsTiktok size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-300 font-semibold text-md px-3 flex my-auto h-full bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg">
                  <span className="my-auto">tiktok.com/@</span>
                </div>
                <Input
                  type="text"
                  id="tiktok"
                  {...register("social.tiktok")}
                  placeholder="nome de usuário"
                  className="transition hover:border-zinc-400 placeholder:text-base placeholder:font-semibold focus-visible:border-zinc-50 h-full border-zinc-700 text-zinc-50 rounded-l-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsLinkedin size={17} className="text-zinc-500" />
              <div className="flex items-center max-w-[17rem] h-[2.3rem]">
                <div className="text-zinc-300 font-semibold text-md px-3 flex my-auto h-full bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg">
                  <span className="my-auto">linkedin.com</span>
                </div>
                <Input
                  type="text"
                  id="linkedin"
                  {...register("social.linkedin")}
                  placeholder="/in/identificador"
                  className="transition hover:border-zinc-400 placeholder:text-base placeholder:font-semibold focus-visible:border-zinc-50 h-full border-zinc-700 text-zinc-50 rounded-l-none"
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
                  placeholder="Seu site"
                  className="transition hover:border-zinc-400 placeholder:text-base placeholder:font-semibold focus-visible:border-zinc-50 h-full border-zinc-700 text-zinc-50"
                />
              </div>
            </div>
          </div>
          <Button className="mt-5 bg-zinc-50 w-fit hover:bg-zinc-300" >
            <UserCheck2 size={20} className="text-zinc-800" />
            <span className="text-zinc-800 font-medium text-base">
              Salvar alterações
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}
