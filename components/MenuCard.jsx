import Image from "next/image";

function MenuCard(props) {
    
    const { title, state, setState, data, widthImg1, heightImg1, widthImg2, heightImg2, imgPiatto } = props;

    return (
        <div className="flex flex-col w-full justify-center items-center gap-5 py-10">
            <h1 className="uppercase text-3xl">{title}</h1>
            <div className="flex flex-wrap items-center justify-evenly w-full max-w-full px-6 gap-5">
                {data.map((element, elementIndex) => {
                    const isSelected = elementIndex === state;
                    return (
                        <div key={elementIndex} className={`${isSelected ? "bg-[#da291c] text-white" : ""} cursor-pointer flex flex-col justify-center items-center gap-10 relative w-full max-w-[25%] h-[25rem] active:opacity-80 transition-all duration-300 py-4 border-0 rounded-4xl shadow-2xs`} onClick={() => {
                            setState(prev => (prev === elementIndex ? null : elementIndex));
                        }}>
                            <h2 className="mb-2">{element.name}</h2>
                            {isSelected && (
                                <span className="absolute top-2 right-2 z-4 text-3xl">
                                    <i className="fa-regular fa-circle-check" />
                                </span>
                            )}
                            <div className="relative flex flex-1 items-center justify-center w-full">
                                <Image
                                    src={`/piatti/${imgPiatto}.png`}
                                    width={widthImg1}
                                    height={heightImg1}
                                    alt="piatto"
                                    className="absolute z-2 inset-0 m-auto"
                                />
                                <Image
                                    src={element.imgPath}
                                    width={widthImg2}
                                    height={heightImg2}
                                    alt={element.name}
                                    className="relative z-3 border-0 rounded-full"
                                />
                            </div>
                            <p className="mt-2">{(element.description) ? element.description : ""} {element.price === undefined ? "GRATIS" : (element.price === 0 ? `(+0€)` : `(+${element.price.toFixed(2)}€)`)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MenuCard;