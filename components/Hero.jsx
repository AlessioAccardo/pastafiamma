import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import HeroCard from "./HeroCard";

const robotoSlab = Roboto_Slab({
    subsets: ['latin']
})

const p1 = 
            ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et purus eros. Nunc vestibulum sodales auctor. Etiam finibus augue dui, at     consectetur magna fermentum a. Phasellus in eros eu dui rhoncus volutpat quis vitae metus. Suspendisse et erat in nisi vehicula sodales quis at ex. Etiam ut arcu non nisi dictum imperdiet vitae nec quam. Mauris sollicitudin sem vitae metus vestibulum fringilla.

                Aenean finibus felis blandit odio tincidunt, non consequat ante elementum. Sed suscipit vulputate sollicitudin. Sed ut sodales ligula. Nunc aliquam quis odio at mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus libero urna, tristique sit amet efficitur vitae, interdum accumsan felis. Proin efficitur eu risus at efficitur. Phasellus non finibus ligula. Donec laoreet, quam dignissim consectetur accumsan, nunc diam iaculis metus, ac egestas lacus est in turpis. Ut dignissim viverra interdum. Fusce et hendrerit metus, et commodo enim. Nullam tincidunt erat eget felis aliquet tempus.

                Pellentesque ante nisl, dignissim ac nisl ut, tempus imperdiet turpis. Duis pulvinar neque mauris, vitae auctor urna posuere et. Vivamus at imperdiet nibh, non iaculis nunc. Phasellus eleifend tincidunt ante, sed mollis odio feugiat sit amet. Suspendisse iaculis pretium est sit amet condimentum. Pellentesque et nibh vitae magna facilisis molestie id sed orci. Proin fermentum arcu sed urna commodo, eget imperdiet felis aliquam. Nam varius vel justo ac malesuada. Pellentesque quis enim elementum nibh vulputate tincidunt. Aliquam erat volutpat. Morbi diam velit, sodales et varius a, congue a sem. Maecenas sit amet tincidunt leo.`

function Hero() {
    return (
        <div className={`${robotoSlab.className} flex flex-col w-full max-w-full justify-center items-center text-white text-lg`}>
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center shadow-2xl">
                <Image
                    src={"/busiate.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />  
            
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-6xl ">
                    <p className="text-[#ffc72c]">PASTAFIAMMA</p>
                    <p>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>                
            </div>

            <div className="flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center lg:hidden shadow-2xl">
                <Image
                    src={"/busiate_mobile.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-4xl ">
                    <p className="text-[#ffc72c]">PASTAFIAMMA</p>
                    <p>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>                 
            </div>
            
            <div className="flex flex-col w-full max-w-full mt-20 lg:mt-35 gap-30 lg:gap-25 justify-center items-center text-black text-center px-4 lg:px-10">
                <HeroCard src={"/fiammaFoto.JPG"} selfImage={"lg:self-start"} pImage={"Chef Fiamma"} p={p1} width={"w-[40vh]"} flex={"lg:flex-row"}/>

                <HeroCard src={"/pastaFresca_quadrata.jpg"} selfImage={"lg:self-start"} pImage={"La Nostra Pasta"} p={p1} width={"w-[35vh]"} height={"h-[27vh]"} flex={"lg:flex-row-reverse"} />
            </div>

        </div>
    );
}

export default Hero;