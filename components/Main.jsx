function Main(props) {
    const { children } = props;
    return (
        <main className="flex flex-col flex-1 min-h-[1000rem]">
            {children}
        </main>
    );
}

export default Main;