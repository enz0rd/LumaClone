'use client'
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SignIn } from "@/components/SignIn/SignIn";
import { useEffect, useState } from "react";

export default function Page() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        if(!isSignedIn) {
            if (localStorage.getItem("token")) {
                setIsSignedIn(true);
            }
        }
    }, [isSignedIn]);

    return (
        <>
            <RandomBg />
            {!isSignedIn ? (
                <div className="w-full absolute z-[999] flex items-center justify-center">
                    <Header logoStyle="wordmark" isSignedIn={isSignedIn} />
                </div>
            ) : (
                <Header isSignedIn={isSignedIn} />
            )}
            <main>
                {!isSignedIn ? (
                    <div className="absolute z-[999] w-full h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center">
                        <SignIn />
                    </div>
                ) : (
                    ""
                )}
                <div>
                    Teste
                </div>
            </main>
        </>
    )
}