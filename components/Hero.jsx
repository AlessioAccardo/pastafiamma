import Image from "next/image";
import { Bebas_Neue, Roboto_Slab } from "next/font/google";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
})

const robotoSlab = Roboto_Slab({
    subsets: ['latin']
})

function Hero() {
    return (
        <div className={`${robotoSlab.className} flex flex-col w-full max-w-full justify-center items-center text-white text-lg`}>
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center">
                <Image
                    src={"/busiate.jpg"}
                    fill={true}
                    className="object-cover z-1"
                    alt="pasta image"
                />  
                
                {/* 
                <div className="w-full max-w-full flex flex-col justify-center items-center absolute bg-transparent backdrop-blur-md z-10 text-6xl ">
                    <p><span className="text-[#72cb8a]">Amati</span> mangiando bene: scegli la nostra <span className="text-[#ffc72c] font-extrabold">pasta</span><span className="text-[#da291c] font-extrabold"> fresca</span></p>
                    <p>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>                
                */}
                
            </div>

            <div className="flex flex-col relative w-full overflow-hidden min-h-[75vh] justify-center items-center lg:hidden">
                <Image
                    src={"/busiate_mobile.jpg"}
                    fill={true}
                    className="object-cover"
                    alt="pasta image"
                />
            </div>

            <div className="flex w-full max-w-full min-h-[35rem]">
                <div className="flex flex-col w-[40%] max-w-[40%]">
                    <div className="flex flex-col w-[99%] mx-auto text-black lg:p-8 border border-white rounded-2xl shadow-2xl min-h-full">
                        <p className="text-3xl max-w-full pb-10 text-center font-bold text-[#ffc72c] uppercase">CHI SIAMO</p>
                        <p className="max-w-full flex flex-col flex-1">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.
                        </p>
                        <Link href={"/"} className="w-fit mx-auto border-2 border-[#da291c] px-4 py-2 rounded-2xl hover:text-white hover:bg-[#da291c] active:opacity-80 transition-all duration-300">
                        Leggi tutto</Link>
                    </div>
                </div>
                <div className="flex flex-col w-[60%] max-w-[60%]">
                    <div className="flex flex-col w-[99%] mx-auto text-black lg:p-8 border border-white rounded-2xl shadow-2xl min-h-full">
                        <p className="text-3xl max-w-full pb-10 text-center font-bold text-[#ffc72c] uppercase">DOVE SIAMO</p>
                        <p className="pb-4">Ci troviamo in Via Generale Magliocco, 58. <br />Usa la mappa per ottenere le indicazioni!</p>
                        <div className="w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.407978245183!2d13.355273569677712!3d38.12121589824375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef5f02ac3149%3A0xa889ca2697864512!2sVia%20Generale%20Magliocco%2C%2058%2C%2090141%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1753981830129!5m2!1sit!2sit"
                                className="w-full h-full border-0 rounded-2xl m-0 p-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mappa di Via Generale Magliocco, Palermo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;