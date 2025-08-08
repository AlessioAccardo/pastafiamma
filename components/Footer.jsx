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

    return (
        <>
            <footer className="flex flex-col justify-center items-center text-center w-full pt-8 pb-4 gap-12 text-lg bg-gradient-to-t from-[#ffc72c] to-[#da291c] border-0 shadoww">
                <div className="flex flex-col flex-1 lg:flex-row justify-evenly items-center w-full gap-20 lg:gap-12">
                    <div className="flex flex-col gap-2 lg:gap-3 items-center lg:items-start justify-center">
                        <div className={`${bebasNeue.className} flex gap-2 items-baseline text-[#ffc72c]`}>
                            <Logo className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]" />
                            <h1 className="uppercase text-3xl">pastafiamma</h1>
                        </div>
                        <a href="https://www.google.com/maps/place/Via+Generale+Magliocco,+58,+90141+Palermo+PA/@38.121216,13.355917,16z/data=!4m6!3m5!1s0x1319ef5f02ac3149:0xa889ca2697864512!8m2!3d38.1212159!4d13.3559173!16s%2Fg%2F11q2nch5xp?hl=it&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:underline active:opacity-40 transition-all duration-300">Via Generale Magliocco, 58</a>
                        <p>90141, Palermo</p>
                        <p>P. IVA numeropartitaiva</p>
                        <p>Tel: <a className="hover:underline cursor-pointer active:opacity-40 transition-all duration-300" onClick={() => { call(number) }}>+393665029938</a></p>
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
                        <a href="#chi" className="cursor-pointer transition-all duration-300 hover:underline active:opacity-40">Chi Siamo</a>
                        <a href="#dove" className="cursor-pointer transition-all duration-300 hover:underline active:opacity-40">Dove Siamo</a>
                        <a href="" className="cursor-pointer duration-300 hover:underline active:opacity-40">Lavora Con Noi</a>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center relative cursor-pointer active:opacity-60 transition-opacity">
                        <a href="https://www.instagram.com/infinitytecnologyy/" target="_blank">
                            <p>Creato da</p>
                            <Image
                                src={"/mio_logo.webp"}
                                width={80}
                                height={80}
                                alt="logo creatore web"
                                className="w-[120px] lg:w-[80px] border-0 rounded-full"
                            />
                        </a>
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