"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Permanent_Marker, Bebas_Neue } from "next/font/google";
import MenuCard from "./MenuCard";

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400"
});
``
const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
});


function Menu() {

    const tipoPastaData = [
        { name: "Classica", description: "Farina 0 di Grano Duro", price: 0, imgPath: "/busiate-classiche.png" },
        { name: "Integrale", description: "Perciasacchi", price: 0.70, imgPath: "/busiate-integrali.png" },
        { name: "Gluten Free", description: "Senza Glutine", price: 1, imgPath: "/busiate-gluten-free.png" }
    ];

    const formatoPastaData = [
        { name: "Busiate", imgPath: "/fresche-busiate.png" },
        { name: "Strozzapreti", imgPath: "/fresche-strozzapreti.png" },
        { name: "Linguine", imgPath: "/fresche-linguine.png" },
        { name: "Spaghetti Grossi", imgPath: "/fresche-spaghetti.png" },
    ]

    const condimentiData = [
        { name: "Norma", description: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 12, imgPath: "/norma.png" },
        { name: "Trapanese", description: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 10, imgPath: "/trapanese.png" },
        { name: "Bronte Mare", description: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 15, imgPath: "/bronte-mare.png" },
        { name: "Palermitana", description: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 10, imgPath: "/palermitana.png" },
        { name: "Nebrodi", description: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 18, imgPath: "/nebrodi.png" },
        { name: "Cacchio", description: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 16, imgPath: "/cacchio.png" },

    ]

    const extraData = [
        { name: "Mandorle Tostate", price: 0.70, imgPath: "/mandorle-tostate.png" },
        { name: "Granella di Pistacchio", price: 0.90, imgPath: "/pistacchio.png" },
        { name: "Melenzane Fritte", price: 0.70, imgPath: "/melenzane.png" },
        { name: "Guanciale Croccante", price: 1.20, imgPath: "/guanciale.png" },
        { name: "Burrata", price: 1.50, imgPath: "/burrata.png" },
        { name: "Olio Al Tartufo", price: 1.20, imgPath: "/olio-tartufo.png" }
    ];


    const [isTipoPastaSelected, setIsTipoPastaSelected] = useState(null);
    const [isFormatoPastaSelected, setIsFormatoPastaSelected] = useState(null);
    const [isCondimentoPastaSelected, setIsCondimentoPastaSelected] = useState(null);
    const [isExtraSelected, setIsExtraSelected] = useState(null);
    const [totalCost, setTotalCost] = useState(0);
    const [show, setShow] = useState(false);
    const rafRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const update = () => {
        const currentY = window.scrollY || window.pageYOffset || 0;
        const middleScreen = window.innerHeight / 2;
        setShow(currentY > middleScreen);
        };

        const onScroll = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(update);
        };

        // inizializza e aggiungi listener
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

   
    return (
        <div className="flex flex-col w-full max-w-full justify-center items-center text-black text-lg bg-white">
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden text-white min-h-screen justify-center items-center shadow-2xl">
                <Image
                    src={"/busiate.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />

                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-6xl gap-5">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-9xl`}>PASTAFIAMMA</p>
                    <p className={`${permanentMarker.className} text-7xl`}>Il nostro Menu</p>
                </div>
            </div>
            <div className="flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center lg:hidden shadow-2xl">
                <Image
                    src={"/busiate_mobile.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center text-white absolute z-2 px-4">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-7xl md:text-9xl`}>PASTAFIAMMA</p>
                    <p className={`${permanentMarker.className} text-4xl md:text-6xl uppercase`}>il nostro menu</p>
                </div>                 
            </div>
            <div className="flex flex-col text-center text-2xl w-full max-w-full items-center justify-center bg-transparent my-10 mx-auto border-0 rounded-4xl gap-10 pt-6 lg:pt-8 lg:pb-20">
                <h1 className={`${permanentMarker.className} uppercase text-4xl md:text-5xl lg:text-7xl lg:py-10 text-shadow-md`}>Componi la tua pasta</h1>
                <MenuCard
                    title={"Scegli il tipo"}
                    state={isTipoPastaSelected}
                    setState={setIsTipoPastaSelected}
                    data={tipoPastaData}
                    widthImg1={200}
                    heightImg1={200}
                    widthImg2={180}
                    heightImg2={180}
                    imgPiatto={"piatto5"}
                    setTotalCost={setTotalCost}
                />
                <MenuCard 
                    title={"Scegli il formato"}
                    state={isFormatoPastaSelected}
                    setState={setIsFormatoPastaSelected}
                    data={formatoPastaData}
                    widthImg1={200}
                    heightImg1={200}
                    widthImg2={180}
                    heightImg2={180}
                    imgPiatto={"piatto4"}
                    setTotalCost={setTotalCost}
                />
                <MenuCard 
                    title={"Scegli il condimento"}
                    state={isCondimentoPastaSelected}
                    setState={setIsCondimentoPastaSelected}
                    data={condimentiData}
                    widthImg1={230}
                    heightImg1={230}
                    widthImg2={120}
                    heightImg2={120}
                    imgPiatto={"piatto6"}
                    setTotalCost={setTotalCost}
                />
                <MenuCard 
                    title={"Scegli gli extra"}
                    state={isExtraSelected}
                    setState={setIsExtraSelected}
                    data={extraData}
                    widthImg1={200}
                    heightImg1={200}
                    widthImg2={180}
                    heightImg2={180}
                    imgPiatto={"piatto3"}
                    setTotalCost={setTotalCost}
                />
            </div>
            { show && (
                <div className="bg-[#ffc72c] text-white flex items-center sticky bottom-4 w-full max-w-[85%] px-6 py-2 lg:py-3 z-4 mb-6 border-0 rounded-2xl text-3xl lg:max-w-[50%]">
                    <div className="flex gap-2 w-full max-w-[75%] justify-center items-center">
                        <p>Totale</p>
                        <p>{totalCost}€</p>
                    </div>
                    <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => {
                        setTotalCost(0);
                        setIsCondimentoPastaSelected(null);
                        setIsExtraSelected(null);
                        setIsFormatoPastaSelected(null);
                        setIsTipoPastaSelected(null);
                    }}>
                        <i className="fa-solid fa-recycle hidden md:block"/>
                        <p className="uppercase text-2xl">reset</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;