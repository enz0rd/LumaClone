import { BsEmojiAstonished, BsEmojiLaughing, BsEmojiSmile } from "react-icons/bs";
import { motion } from "framer-motion";

export function Welcome() {
    const username = localStorage.getItem('username');

    return (
        <div className="w-full h-screen flex justify-center">
            <div className=" mt-[20%] lg:mt-[10%]">
                <motion.div
                    animate={{
                        opacity: [0, .3],
                        scale: [.7, 1]
                    }}
                    transition={{ duration: 2 }}
                    className="absolute z-[-1] mt-[-7rem] w-[20rem] rounded-full blur-3xl h-[25rem] bg-gradient-to-tl from-[#F66371] to-[#C0CEF6]"/>
                <motion.div 
                initial={{ 
                    opacity: 0,
                    scale: 0, 
                    y: 50
                }}
                animate={{ 
                    opacity: 1,
                    scale: [.7 , 1], 
                    y: 0
                }}
                transition={{ type: "spring", duration: 2 }}
                className="container flex flex-col text-center mt-[20%] lg:mt-[10%] gap-5 items-center">
                    <div className="w-fit bg-gradient-to-tl border-2 border-zinc-400 from-[#F66371] to-[#C0CEF6] p-3 rounded-full shadow-lg">
                        <BsEmojiSmile className="lg:text-8xl md:text-6xl sm:text-6xl text-3xl text-zinc-900" />
                    </div>
                    <h1 className="text-3xl font-semibold text-zinc-200 mt-5">Bem-vindo à Luma</h1>
                    <span className="text-xl font-medium text-zinc-500">{username}</span>
                </motion.div>
            </div>
        </div>
    )
}