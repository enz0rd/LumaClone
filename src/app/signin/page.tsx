import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SignIn } from "@/components/SignIn/SignIn";

export default function Page() {
  return (
    <>
      <RandomBg />
      <Header logoStyle="wordmark" />
      <main>
        <SignIn />
      </main>
    </>
  );
}
