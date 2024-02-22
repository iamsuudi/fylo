function Hero() {
    return (
        <section className=" p-10 my-24 flex flex-col items-center gap-7 max-w-screen-lg">
            <div className="intro w-60 "></div>
            <h1 className=" text-white text-3xl text-center font-bold max-w-screen-lg lg:text-5xl">
                All your files in one secure location, accessible anywhere.
            </h1>
            <p className=" text-center text-slate-100 text-sm max-w-screen-md lg:text-lg">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
            </p>
            <button className="get-started py-4 px-16 rounded-full text-white font-bold">
                Get Started
            </button>
        </section>
    );
}

export default Hero;
