import { EzTooltip } from "../../EzTooltip";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export function PhoneSection() {
  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
          Número de Telefone
        </h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
        Gerencie o número de telefone que você usa para entrar no Luma e receber
        atualizações por SMS.
      </span>
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="phone" className="dark:text-zinc-400 text-zinc-600 font-semibold text-sm">
          Telefone
        </label>
        <EzTooltip
          className="text-wrap w-[25rem] text-center"
          content="Vínculo de número de telefone desativado por conta de custos do uso (observação feita pelo desenvolvedor)."
        >
          <div className="flex flex-row gap-2 items-center w-fit">
            <Input
              className="rounded-lg dark:text-zinc-50 text-zinc-900
              dark:border-zinc-800 dark:hover:border-zinc-500 dark:focus-visible:border-zinc-50 
              border-zinc-200 hover:border-zinc-500 focus-visible:border-zinc-950 "
              id="phone"
              type="tel"
              placeholder="+55 11 96123 4567"
              disabled
            />
            <Button
              className="dark:bg-zinc-300 dark:text-zinc-900 bg-zinc-700 text-zinc-100 rounded-lg font-medium text-base"
              disabled
            >
              Atualizar
            </Button>
          </div>
        </EzTooltip>
        <span className="dark:text-zinc-400 text-zinc-600 text-sm">
          Para sua segurança, enviaremos um código para verificar qualquer
          alteração no seu número de telefone.
        </span>
      </div>
    </div>
  );
}
