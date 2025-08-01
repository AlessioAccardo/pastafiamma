import Image from "next/image";

function HeroCard(props) {
    const { src, selfImage, pImage, p, width, height, flex } = props;
    return (
        <div className={`flex flex-col ${flex} w-full max-w-full justify-center items-center text-center`}>
            <div className="flex flex-col w-full max-w-full lg:w-fit relative lg:px-15 items-center justify-center gap-6 lg:gap-8 mb-10 lg:mb-0">
                <Image
                    src={src}
                    width={500}
                    height={500}
                    alt="chef pic"
                    className={`${width} ${height} border-0 rounded-full ${selfImage}`}
                />
                <p className="text-2xl">{pImage}</p>
            </div>
            <div className="flex w-full self-center">
                <p>{p}</p>
            </div>
        </div>
    );
}

export default HeroCard;