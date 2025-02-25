import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { CreateUsernameForm } from "@/components/SignIn/CreateUsernameForm";

export default function Page() {
    return (
        <>
            <RandomBg />
            <Header isSignedIn={true} />
            <main>
                <CreateUsernameForm />
            </main>
        </>
    )
}