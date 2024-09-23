import { Poppins } from "next/font/google";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import Image from "next/image";

const poppins = Poppins({
        weight: "400",
        subsets: ["latin"],
    });

function Home() {
    const [lang, setLang] = useState("en");
    const [text, setText] = useState({});

    useEffect(() => {
        const fetchText = async () => {
            const res = await fetch("/static/language.json");
            const data = await res.json();
            setText(data[lang]);
        };
        fetchText();
    }, [lang]);

    const handleLangChange = (e) => setLang(e.target.value);

    return (
        <main className={" " + poppins.className}>
            <nav className="fixed top-0 left-0 right-0 bg-transparent p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">
                        <Image src="/static/logo.png" alt="Pedro Marcos" width={50} height={50} className="h-14 w-14 hover:scale-110 hover:rotate-2 transition" />
                    </a>
                    <ul className="flex gap-4">
                        <li><a href="#about" className="hover:underline">{text?.navbar?.about}</a></li>
                        <li><a href="#projects" className="hover:underline">{text?.navbar?.projects}</a></li>
                        <li>
                            <select className="bg-transparent text-white" value={lang} onChange={handleLangChange}>
                                <option value="en">🇺🇸</option>
                                <option value="pt-BR">🇧🇷</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>

            <title>mksDEV08 | 🏠</title>
            
            <div className="fixed mr-5 right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <a href="#hello" className="bg-white w-2 h-2"></a>
                <a href="#hero" className="bg-white w-2 h-2"></a>
                <a href="#projects" className="bg-white w-2 h-2"></a>
            </div>

            <section id="hello">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="text-5xl my-12">
                        <Typewriter
                            options={{
                                strings: text.hello_text,
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                cursor: "|",
                            }}
                        />
                    </div>

                    <div className="animate-pulse fixed bottom-0 mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </div>
                </div>
            </section>
            <section id="hero" style={
                {
                    background: "#2D2E32",
                }
            }>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 h-screen mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-6xl font-bold">Pedro Marcos.</h1>
                        <p className="text-2xl">{text.hero_text}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src={"/static/hero-image.png"} alt="Pedro" width={500} height={500} className="rounded-full hover:-translate-y-3 hover:drop-shadow-2xl transition"/>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Home;
