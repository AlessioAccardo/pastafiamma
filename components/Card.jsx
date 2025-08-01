import Link from "next/link";

function Card(props) {
    const { hiddenLink, hiddenFrame, title, p, classNameP } = props;

    return (
        <div className="flex flex-col w-[99%] mx-auto text-black lg:p-8 p-4 border border-white rounded-2xl lg:shadow-2xl min-h-full">
            <h2 className="hidden lg:block text-3xl max-w-full py-5 lg:pb-10 text-center font-bold text-[#ffc72c] uppercase">{title}</h2>
            <p className={`w-full max-w-full ${classNameP} pb-2`}>
                {p}
            </p>
            <div className={`${hiddenFrame} w-full h-full`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.407978245183!2d13.355273569677712!3d38.12121589824375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef5f02ac3149%3A0xa889ca2697864512!2sVia%20Generale%20Magliocco%2C%2058%2C%2090141%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1753981830129!5m2!1sit!2sit"
                    className="w-full h-full border-0 rounded-2xl m-0 p-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa di Via Generale Magliocco, Palermo"
                />
            </div>
            <Link href={"/"} className={`${hiddenLink} w-fit mx-auto mt-5 border-2 border-[#da291c] px-6 py-3 rounded-2xl hover:text-white hover:bg-[#da291c] active:opacity-80 transition-all duration-300`}>
            Leggi tutto</Link>
        </div>
    );
}

export default Card;