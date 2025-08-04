"use client"

import Logo from "./Logo";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
})

function Footer() {

    const number = "+393665029938";

    function call(phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
    }

    function sendMail(email) {

    }

    return (
        <>
            <footer className="flex flex-col justify-center items-center w-full mt-40 pt-8 pb-4 gap-12 text-lg bg-gradient-to-t from-[#da291c] to-red-200 border-0 shadoww">
                <div className="flex flex-col flex-1 lg:flex-row justify-evenly items-center w-full gap-12">
                    <div className="flex flex-col gap-2 lg:gap-3 items-center lg:items-start justify-center">
                        <div className={`${bebasNeue.className} flex gap-2 items-baseline`}>
                            <Logo className="text-yellow-500 w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]" />
                            <h1 className="uppercase text-3xl">pastafiamma</h1>
                        </div>
                        <p>Via Generale Magliocco, 58</p>
                        <p>90141, Palermo</p>
                        <p>P. IVA numeropartitaiva</p>
                        <p>Tel: <a className="underline cursor-pointer active:opacity-40 transition-opacity duration-300" onClick={() => { call(number) }}>+393665029938</a></p>
                    </div>

                    <div className="flex flex-col gap-2 lg:gap-4 items-center justify-center">
                        <h1 className="text-xl">I nostri Social</h1>
                        <div className="flex justify-center items-center relative gap-5">
                            <a href="https://www.facebook.com/ubabbiopalermo" target="_blank">
                                <Image
                                    src={"/facebook.png"}
                                    width={50}
                                    height={50}
                                    alt="facebook"
                                    className="transition-opacity duration-300 hover:opacity-70 active:opacity-40 cursor-pointer"
                                />
                            </a>
                            
                            <a href="https://www.instagram.com/ubabbio/" target="_blank">
                                <Image
                                    src={"/instagram_icon.png"}
                                    width={40}
                                    height={40}
                                    alt="instagram"
                                    className="transition-opacity duration-300 hover:opacity-70 active:opacity-40 cursor-pointer"
                                />
                            </a>
                            
                            <a href="">
                                <Image
                                    src={"/tiktok.png"}
                                    width={45}
                                    height={45}
                                    alt="tiktok"
                                    className="transition-opacity duration-300 hover:opacity-70 active:opacity-40 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-evenly gap-3">
                        <a href="#chi" className="cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-40">Chi Siamo</a>
                        <a href="#dove" className="cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-40">Dove Siamo</a>
                        <a href="" className="cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-40">Lavora Con Noi</a>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center relative cursor-pointer">
                        <p>Creato da</p>
                        <Image
                            src={"/mio_logo.webp"}
                            width={80}
                            height={80}
                            alt="logo creatore web"
                            className="border-0 rounded-full"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <p className=""><i className="fa-regular fa-copyright"/> 2025 | Pastafiamma.com</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;