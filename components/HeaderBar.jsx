"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Playwrite_AU_QLD, Bebas_Neue, Luckiest_Guy, Permanent_Marker } from "next/font/google";
import { useState } from "react";


// SCEGLIERE UNO DI QUESTI FONT PER IL TITOLO
const playwriteAU = Playwrite_AU_QLD({
    weight: "400",
    subsets: ['latin']
})
const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
})
const luckiestGuy = Luckiest_Guy({
    weight: "400",
    subsets: ['latin']
})
const permanentMaker = Permanent_Marker({
    weight: "400",
    subsets: ['latin']
})


function HeaderBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Header principale */}
            <header className={`w-full py-4 px-6 sm:py-8 sm:px-12 flex items-center justify-between fixed top-0 left-0 bg-white/90 backdrop-blur-md z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? "-translate-x-full" : "translate-x-0"}`}>
                <Link href="/" className="flex items-baseline gap-4">
                    <Logo className="text-amber-300" width={30} height={30} />
                    <h1 className={`${bebasNeue.className} text-3xl sm:text-4xl`}>
                        PastaFiamma
                    </h1>
                </Link>

                <nav className="hidden md:flex justify-center items-center gap-10">
                    <Link href={"/"} className="text-center px-6 py-3 border border-white rounded-2xl hover:opacity-80 hover:bg-slate-100 hover:border-slate-100">Menù</Link>
                    <Link href={"/"} className="text-center px-6 py-3 border border-white rounded-2xl hover:opacity-80 hover:bg-slate-100 hover:border-slate-100">Chi Siamo</Link>
                    <Link href={"/"} className="text-center px-6 py-3 border border-white rounded-2xl hover:opacity-80 hover:bg-slate-100 hover:border-slate-100">Prenota Ora</Link> {/* PROBABILMENTE DA SOSTITUIRE CON "CONTATTACI"*/}
                </nav>


                <button className="md:hidden" onClick={toggle}>
                    <i className="fa-solid fa-bars text-2xl" />
                </button>
            </header>

            {/* Menu Mobile */}
            <div className={`fixed inset-0 bg-white flex flex-col p-10 gap-20 z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? "-translate-x-0" : "translate-x-full"} `}>
                <button onClick={toggle} className="self-end text-lg">
                    Chiudi <i className="fa-solid fa-x" />
                </button>

                <nav className="flex flex-col items-center gap-6 text-xl">
                    <Link href="/menu" className="transition-all duration-200 ease-in-out active:opacity-15">Menù</Link>
                    <Link href="/prenota" className="transition-all duration-200 ease-in-out active:opacity-90">Prenota</Link>
                    <Link href="/chi-siamo" className="transition-all duration-200 ease-in-out active:opacity-90">Chi Siamo</Link>
                </nav>
            </div>
        </div>
    );
}

export default HeaderBar;