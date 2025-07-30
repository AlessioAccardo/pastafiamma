function Main(props) {
    const { children } = props;
    return (
        <main className="flex-1 flex flex-col p-4 sm:p-8 bg-red-400 min-h-[1000rem]">
            {children}
        </main>
    );
}

export default Main;