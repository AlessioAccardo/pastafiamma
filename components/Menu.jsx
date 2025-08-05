import Image from "next/image";

function Menu() {
    return ( 
        <div className="flex flex-col w-full max-w-full justify-center items-center text-black text-lg gap-20 lg:gap-25">
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden text-white min-h-screen justify-center items-center shadow-2xl">
                <Image
                    src={"/busiate.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />  
            
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-6xl gap-5">
                    <p className="text-[#ffc72c]">PASTAFIAMMA</p>
                    <p className="">Il nostro Menu</p>
                </div>                
            </div>
            <div className="flex flex-col text-center text-2xl w-full max-w-full items-center justify-center">
                <h1 className="uppercase text-5xl">Componi la tua pasta</h1>
                <div className="flex flex-wrap items-center justify-center w-full max-w-[90%]">
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                    <p>ciao</p>
                </div>

            </div>
        </div>
    );
}

export default Menu;