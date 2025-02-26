import { RandomBg } from "@/components/Background/RandomBg"
import { Header } from "@/components/Header"

export default function Page() {
    return (
        <>
            <RandomBg />
            <Header isSignedIn={true} />
            <h1>Home</h1>
        </>
    )
}