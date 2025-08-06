import Image from "next/image";
import HeroCard from "./HeroCard";
import { Bebas_Neue, Permanent_Marker } from "next/font/google";


const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
});

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400"
});

const p1 = 
            ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et purus eros. Nunc vestibulum sodales auctor. Etiam finibus augue dui, at     consectetur magna fermentum a. Phasellus in eros eu dui rhoncus volutpat quis vitae metus. Suspendisse et erat in nisi vehicula sodales quis at ex. Etiam ut arcu non nisi dictum imperdiet vitae nec quam. Mauris sollicitudin sem vitae metus vestibulum fringilla.

                Aenean finibus felis blandit odio tincidunt, non consequat ante elementum. Sed suscipit vulputate sollicitudin. Sed ut sodales ligula. Nunc aliquam quis odio at mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus libero urna, tristique sit amet efficitur vitae, interdum accumsan felis. Proin efficitur eu risus at efficitur. Phasellus non finibus ligula. Donec laoreet, quam dignissim consectetur accumsan, nunc diam iaculis metus, ac egestas lacus est in turpis. Ut dignissim viverra interdum. Fusce et hendrerit metus, et commodo enim. Nullam tincidunt erat eget felis aliquet tempus.

                Pellentesque ante nisl, dignissim ac nisl ut, tempus imperdiet turpis. Duis pulvinar neque mauris, vitae auctor urna posuere et. Vivamus at imperdiet nibh, non iaculis nunc. Phasellus eleifend tincidunt ante, sed mollis odio feugiat sit amet. Suspendisse iaculis pretium est sit amet condimentum. Pellentesque et nibh vitae magna facilisis molestie id sed orci. Proin fermentum arcu sed urna commodo, eget imperdiet felis aliquam. Nam varius vel justo ac malesuada. Pellentesque quis enim elementum nibh vulputate tincidunt. Aliquam erat volutpat. Morbi diam velit, sodales et varius a, congue a sem. Maecenas sit amet tincidunt leo.`

function Hero() {
    return (
        <div className="flex flex-col w-full max-w-full justify-center items-center text-white text-lg gap-20 lg:gap-25 pb-20">
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center shadow-2xl">
                <Image
                    src={"/busiate.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />  
            
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-6xl ">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-9xl`}>PASTAFIAMMA</p>
                    <p className={`${permanentMarker.className} text-7xl px-6`}>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>                
            </div>

            <div className="flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center lg:hidden shadow-2xl">
                <Image
                    src={"/busiate_mobile.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-4xl px-4">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-6xl`}>PASTAFIAMMA</p>
                    <p className={`${permanentMarker.className} text-4xl`}>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>                 
            </div>
            
            <div id="chi" className="flex flex-col w-[90%] max-w-[90%] gap-30 lg:gap-25 justify-center items-center text-black text-center scroll-mt-[7rem]">
                <HeroCard src={"/fiammaFoto.JPG"} selfImage={"lg:self-start"} pImage={"Chef Fiamma"} p={p1} width={"w-[40vh]"} flex={"lg:flex-row"}/>

                <HeroCard src={"/pastaFresca_quadrata.jpg"} selfImage={"lg:self-start"} pImage={"La Nostra Pasta"} p={p1} width={"w-[35vh]"} height={"h-[27vh]"} flex={"lg:flex-row-reverse"} />
            </div>

            <div id="dove" className="flex flex-col lg:flex-row w-[90%] max-w-[90%] text-black bg-[#ffc72c] py-4 px-6 lg:py-8 border-0 rounded-2xl scroll-mt-[7rem] text-2xl gap-6 lg:gap-0">
                <div className="flex flex-col w-full max-w-full lg:w-[40%] lg:max-w-[40%] justify-baseline items-center gap-6">
                    <h1 className="uppercase text-4xl text-center pb-3 lg:pb-0">dove siamo</h1>
                    <div className="w-[80%] my-auto text-center">
                        <p>Ci troviamo a Palermo in <strong>Via Generale Magliocco, 58</strong></p>
                        <p>Vieni a trovarci, ti aspettiamo!</p>
                        <hr className="my-6 lg:my-4" />
                        <p>Siamo aperti <strong>tutti i giorni</strong> dalle 12 alle 16 e dalle 18:30 alle 23 </p>
                    </div>
                </div>
                <div className="w-full max-w-full lg:w-[60%] lg:max-w-[60%] min-h-[30vh] flex items-center mx-auto py-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.407978245183!2d13.355273569677712!3d38.12121589824375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef5f02ac3149%3A0xa889ca2697864512!2sVia%20Generale%20Magliocco%2C%2058%2C%2090141%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1753981830129!5m2!1sit!2sit"
                        className="w-full min-h-[30vh] border-0 rounded-2xl shadow-2xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mappa di Via Generale Magliocco, Palermo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;