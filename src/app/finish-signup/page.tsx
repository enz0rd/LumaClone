'use client'
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { CreateUsernameForm } from "@/components/SignIn/CreateUsernameForm";
import { Welcome } from "@/components/Welcome/Welcome";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    document.title = "Finalize o cadastro ∙ Luma";
    const [welcome, setWelcome] = useState(false);
    
    const router = useRouter();
    useEffect(() => {
        if(welcome) {
            setInterval(() => {
                router.push('/home');
            }, 3000)
        }
    }, [welcome]);

    return (
        <>
            <RandomBg />
            <Header isSignedIn={true} />
            <main>
                {welcome ? (
                    <Welcome />
                ) : (
                    <CreateUsernameForm setWelcome={setWelcome}/>
                )}
            </main>
        </>
    )
}