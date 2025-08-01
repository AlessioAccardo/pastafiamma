import Image from "next/image";
import { Bebas_Neue, Roboto_Slab } from "next/font/google";
import Card from "./Card";

const robotoSlab = Roboto_Slab({
    subsets: ['latin']
})

const pCard1 = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.`

const pCard2 = (
  <>
    Ci troviamo in <span className="font-bold">Via Generale Magliocco, 58</span>.
    Usa la mappa per ottenere le indicazioni!
  </>
);

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
            
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-10 text-6xl ">
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
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-10 text-4xl ">
                    <p className="text-[#ffc72c]">PASTAFIAMMA</p>
                    <p>Preparata da noi con <span className="text-[#da291c] font-extrabold">amore</span> ogni giorno</p>
                </div>                 
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-full min-h-[60vh]">
                <div className="flex flex-col lg:w-[40%] lg:max-w-[40%] w-full max-w-full">
                    <Card hiddenLink={""} hiddenFrame={"hidden"} title={"CHI SIAMO"} p={pCard1} classNameP={"flex flex-col flex-1"} />
                </div>
                <div className="flex flex-col lg:w-[60%] lg:max-w-[60%] w-full max-w-full">
                    <Card hiddenLink={"hidden"} hiddenFrame={""} title={"DOVE SIAMO"} p={pCard2} classNameP={""}/>
                </div>
            </div>
        </div>
    );
}

export default Hero;