import { EzTooltip } from "../EzTooltip";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function PhoneSection() {
  return (
    <div className="my-8 pt-8 border-t w-full border-zinc-800">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-50">
          Número de Telefone
        </h1>
      </div>
      <span className="text-md text-zinc-300">
        Gerencie o número de telefone que você usa para entrar no Luma e receber
        atualizações por SMS.
      </span>
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="phone" className="text-zinc-400 font-semibold text-sm">
          Telefone
        </label>
        <EzTooltip
          className="text-wrap w-[25rem] text-center"
          content="Vínculo de número de telefone desativado por conta de custos do uso (observação feita pelo desenvolvedor)."
        >
          <div className="flex flex-row gap-2 items-center w-fit">
            <Input
              className="border-zinc-800 rounded-lg hover:border-zinc-500 focus-visible:border-zinc-50"
              id="phone"
              type="tel"
              placeholder="+55 11 96123 4567"
            />
            <Button
              className="bg-zinc-300 rounded-lg text-zinc-900 font-medium text-base"
              disabled
            >
              Atualizar
            </Button>
          </div>
        </EzTooltip>
        <span className="text-zinc-400 text-sm">
          Para sua segurança, enviaremos um código para verificar qualquer
          alteração no seu número de telefone.
        </span>
      </div>
    </div>
  );
}
