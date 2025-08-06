"use client";

import Image from "next/image";
import { useState } from "react";
import { Playwrite_AU_QLD, Permanent_Marker, Bebas_Neue } from "next/font/google";

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400"
});

const playwrite = Playwrite_AU_QLD({
    subsets: ["latin"]
});


const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
});


function Menu() {

    const tipoPastaData = [
        {name: "Classica", description: "Farina 0 di Grano Duro", price: 0, imgPath: "/busiate-classiche.jpg"},
        {name: "Integrale", description: "Perciasacchi", price: 0.70, imgPath: "/busiate-integrale.jpg"},
        {name: "Gluten Free", description: "Senza Glutine", price: 1, imgPath: "/busiate-gluten-free.jpg"}
    ];

    const formatoPastaData = [
        {name: "Busiate", imgPath: "/fresche-busiate.jpg"},
        {name: "Strozzapreti", imgPath: "/fresche-strozzapreti.jpg"},
        {name: "Linguine", imgPath: "/fresche-linguine.jpg"},
        {name: "Spaghetti Grossi", imgPath: "/fresche-spaghetti.jpg"},
    ]
    
    const condimentiData = [
        {name: "Norma", ingridients: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 12, imgPath: "/norma.jpg"},
        {name: "Trapanese", ingridients: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 10, imgPath: "/trapanese.jpg"},
        {name: "Bronte Mare", ingridients: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 15, imgPath: "/bronte-mare.jpg"},
        {name: "Palermitana", ingridients: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 10, imgPath: "palermitana.jpg"},
        {name: "Nebrodi", ingridients: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 18, imgPath: "/nebrodi.jpg"},
        {name: "Cacchio", ingridients: "Passata di pomodoro, Melenzane Fritte, Ricotta Salata, Basilico", price: 16, imgPath: "/cacchio.jpg"},

    ]
    
    const extraData = [
        {name: "Mandorle Tostate", price: 0.70, imgPath: "/mandorle-tostate.jpg"},
        {name: "Granella di Pistacchio", price: 0.90, imgPath: "/pistacchio.jpg"},
        {name: "Melenzane Fritte", price: 0.70, imgPath: "/melenzane.jpg"},
        {name: "Guanciale Croccante", price: 1.20, imgPath: "/guanciale.jpg"},
        {name: "Burrata", price: 1.50, imgPath: "/burrata.jpg"},
        {name: "Olio Al Tartufo", price: 1.20, imgPath: "/olio-tartufo.jpg"}
    ];


    const [isTipoPastaSelected, setIsTipoPastaSelected] = useState(null);
    const [isFormatoPastaSelected, setIsFormatoPastaSelected] = useState(false);
    const [isCondimentoPastaSelected, setIsCondimentoPastaSelected] = useState(false);


    return ( 
        <div className="flex flex-col w-full max-w-full justify-center items-center text-black text-lg bg-[#ffc72c]">
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
            <div className="flex flex-col text-center text-2xl w-full max-w-[90%] items-center justify-center bg-[#FAF9F6] my-10 mx-auto border-0 rounded-4xl gap-10 pt-6 lg:pt-8 pb-20">
                <h1 className={`${permanentMarker.className} uppercase text-7xl py-10 text-shadow-md`}>Componi la tua pasta</h1>
                <h1 className="uppercase text-3xl">Scegli il tipo</h1>
                <div className="flex flex-wrap items-center justify-evenly w-full max-w-[100%] px-6">
                    {tipoPastaData.map((tipoPasta, tipoPastaIndex) => {
                        const isSelected = tipoPastaIndex === isTipoPastaSelected;
                        return (
                            <div key={tipoPastaIndex} className={`${isSelected ? "bg-white" : ""} cursor-pointer flex flex-col justify-center items-center gap-4 relative w-full max-w-[25%] h-full max-h-full active:opacity-80 transition-all duration-300 py-15 border-0 rounded-4xl shadow-2xs`} onClick={() => {
                                setIsTipoPastaSelected(prev => (prev === tipoPastaIndex ? null : tipoPastaIndex));
                            }}>
                                <h2>{tipoPasta.name}</h2>
                                {isSelected && (
                                    <span className="absolute top-2 right-2 z-1 text-3xl">
                                        <i className="fa-regular fa-circle-check"/>
                                    </span>
                                )}
                                <Image 
                                    src={tipoPasta.imgPath}
                                    width={150}
                                    height={150}
                                    alt={tipoPasta.name}
                                    className="border-0 rounded-full"
                                />
                                <p>{tipoPasta.description} (+{(tipoPasta.price === 0 ? tipoPasta.price : (tipoPasta.price).toFixed(2))}€)</p>
                            </div>
                        )
                    })}
                </div>
                <h1 className="uppercase text-3xl mt-20">Scegli il formato della tua pasta</h1>
                <div className="flex flex-wrap items-center justify-evenly w-full max-w-full px-6 gap-4">
                    {formatoPastaData.map((formato, formatoIndex) => {
                        const isSelected = formatoIndex === isFormatoPastaSelected;
                        return (
                            <div key={formatoIndex} className={`${isSelected ? "bg-white" : ""} cursor-pointer flex flex-col justify-center items-center gap-4 relative w-full max-w-[25%] h-full max-h-full active:opacity-80 transition-all duration-300 py-15 border-0 rounded-4xl shadow-2xs`} onClick={() => {
                                setIsFormatoPastaSelected(prev => (prev === formatoIndex ? null : formatoIndex));
                            }}>
                                <h2>{formato.name}</h2>
                                {isSelected && (
                                    <span className="absolute top-2 right-2 z-1 text-3xl">
                                        <i className="fa-regular fa-circle-check"/>
                                    </span>
                                )}
                                <div className="w-[150px] h-[150px] relative">
                                    <Image 
                                        src={formato.imgPath}
                                        width={150}
                                        height={150}
                                        alt={formato.name}
                                        className="border-0 rounded-full"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Menu;