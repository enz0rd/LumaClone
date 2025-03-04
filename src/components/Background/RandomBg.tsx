'use client'
import { useEffect, useState } from "react";

const colors = [
    {
        zero: "#099ef1",
        eighteen: "#6863f8",
        thirtyTwo: "#d84ffa",
        fiftyTwo: "#f058c5",
        sixtyEight: "#ff4f90",
        eightySeven: "#ff6558",
        hundred: "#ff891f"
    },
    {
        zero: "#0bc1e0",
        eighteen: "#5a7df9",
        thirtyTwo: "#b64efb",
        fiftyTwo: "#f048d1",
        sixtyEight: "#ff4f7a",
        eightySeven: "#ff6e54",
        hundred: "#ff9d1c"
    },
    {
        zero: "#12d6c4",
        eighteen: "#4b92f7",
        thirtyTwo: "#a55bf9",
        fiftyTwo: "#f03ec2",
        sixtyEight: "#ff5b8e",
        eightySeven: "#ff7d5b",
        hundred: "#ffb326"
    },
    {
        zero: "#1ee2a3",
        eighteen: "#48a4f5",
        thirtyTwo: "#9759f5",
        fiftyTwo: "#f134b0",
        sixtyEight: "#ff6582",
        eightySeven: "#ff8652",
        hundred: "#ffc732"
    },
    {
        zero: "#29eb89",
        eighteen: "#44b6f2",
        thirtyTwo: "#8756f2",
        fiftyTwo: "#f72aa0",
        sixtyEight: "#ff7176",
        eightySeven: "#ff944c",
        hundred: "#ffdb3d"
    },
    {
        zero: "#34f465",
        eighteen: "#3fc8ef",
        thirtyTwo: "#7853f0",
        fiftyTwo: "#fb1f90",
        sixtyEight: "#ff7e69",
        eightySeven: "#ffa247",
        hundred: "#ffee48"
    }
];

export function RandomBg() {
    const [randomColor, setRandomColor] = useState(colors[0]);
    const [mounted, setMounted] = useState(false);  // Variável para controlar a montagem

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
        }
    }, [mounted]);  // Agora só muda após o componente ser montado

    const randomGradient = `radial-gradient(circle at top right, ${randomColor.zero} 0%, ${randomColor.eighteen} 18%, ${randomColor.thirtyTwo} 32%, ${randomColor.fiftyTwo} 52%, ${randomColor.sixtyEight} 68%, ${randomColor.eightySeven} 87%, ${randomColor.hundred} 100%)`;

    return (
        <div className="z-[-1] fixed top-0 left-0 right-0 bottom-0 bg-zinc-100 dark:bg-zinc-950">
            <div 
                className="w-full h-full" 
                style={{ opacity: 0.1, backgroundImage: randomGradient }}
            />
        </div>
    );
}