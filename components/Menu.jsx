import Image from "next/image";

function Menu() {

    const tipoPastaData = [
        {name: "Classica", description: "", price: 0, imgPath: ""},
        {name: "Integrale", description: "", price: 1, imgPath: ""},
        {name: "Gluten Free", description: "", price: 1, imgPath: ""}
    ];

    const pastaData = [
        {name: "Busiate", imgPath: ""},
        {name: "Fettuccine", imgPath: ""},
        {name: "Linguine", imgPath: ""},
        {name: "Spaghetti Grossi", imgPath: ""},
        {name: "Penne", imgPath: ""},
    ]
    
    const condimentiData = [
        {name: "Norma", description: "", price: 0, imgPath: ""},
        {name: "Trapanese", description: "", price: 0, imgPath: ""},
        {name: "Bronte Mare", description: "", price: 0, imgPath: ""},
        {name: "Palermitana", description: "", price: 0, imgPath: ""},
        {name: "Nebrodi", description: "", price: 0, imgPath: ""},
        {name: "Cacchio", description: "", price: 0, imgPath: ""},

    ]
    
    const extraData = [
        {name: "Mandorle Tostate", price: 0.70, imgPath: ""},
        {name: "Granella di Pistacchio", price: 0.90, imgPath: ""},
        {name: "Melenzane Fritte", price: 0.70, imgPath: ""},
        {name: "Guanciale Croccante", price: 1.20, imgPath: ""},
        {name: "Burrata", price: 1.50, imgPath: ""},
        {name: "Olio Al Tartufo", price: 1.20, imgPath: ""}
    ];


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