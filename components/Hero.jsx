import Image from "next/image";
import { Bebas_Neue, Roboto_Slab } from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
})

const robotoSlab = Roboto_Slab({
    weight: "500",
    subsets: ['latin']
})

function Hero() {
    return (
        <div className={`${robotoSlab.className} flex flex-col w-full max-w-full justify-center items-center text-white text-center`}>
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center">
                <Image
                    src={"/busiate.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-85"
                    alt="pasta image"
                />
                <div className="w-full max-w-full flex flex-col justify-center items-center absolute z-10 text-5xl">
                    <p><span className="text-[#72cb8a]">Amati</span> mangiando bene: scegli la nostra <span className="text-[#ffc72c] font-extrabold">pasta</span><span className="text-[#da291c] font-extrabold"> fresca</span></p>
                    <p>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>
            </div>
            <div className="flex flex-col relative w-full overflow-hidden min-h-[75vh] justify-center items-center lg:hidden">
                <Image
                    src={"/busiate_mobile.jpg"}
                    fill={true}
                    className="object-cover"
                    alt="pasta image"
                />
            </div>
            <div className="flex w-full max-w-full min-h-[30rem]">
                <div className="flex flex-col w-[50%] max-w-[50%]">
                    <div className="flex flex-col w-[80%] mx-auto text-black mt-10 lg:p-8 border border-white rounded-2xl shadow-2xl">
                        <p className="text-2xl max-w-full pb-3 uppercase">CHI SIAMO</p>
                        <p className="max-w-full">
                            Siamo la banda bassotti dei tranelli marcondirondirondelli tu vorresti la pasta in piazza eheheheheheheehhe e invece prenditi questa minchiazza
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[50%] max-w-[50%]">
                    <p className="text-2xl max-w-full pb-3 uppercase">DOVE SIAMO</p>
                    <div className="w-full h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.407978245183!2d13.355273569677712!3d38.12121589824375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef5f02ac3149%3A0xa889ca2697864512!2sVia%20Generale%20Magliocco%2C%2058%2C%2090141%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1753981830129!5m2!1sit!2sit"
                            className="w-full h-full border-0 m-0 p-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mappa di Via Generale Magliocco, Palermo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;