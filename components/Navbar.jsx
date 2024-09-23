import Image from "next/image";
import { useEffect, useState } from "react";

export default ({lang, setLang, text}) => {
    const handleLangChange = (e) => setLang(e.target.value);
    console.log(text)
    return (
        <nav className="fixed top-0 left-0 right-0 bg-transparent p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
                    <Image src="/static/logo.png" alt="Pedro Marcos" width={50} height={50} className="h-14 w-14 hover:scale-110 hover:rotate-2 transition" />
                </a>
                <ul className="flex gap-4">
                    <li><a href="#about" className="hover:underline">{text.about}</a></li>
                    <li><a href="#projects" className="hover:underline">{text.projects}</a></li>
                    <li>
                        <select className="bg-transparent text-white" value={lang} onChange={handleLangChange}>
                            <option value="en">🇺🇸</option>
                            <option value="pt-BR">🇧🇷</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
