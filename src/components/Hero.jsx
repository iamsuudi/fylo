
function Hero() {

    return (
        <section className=" py-10 px-5 flex flex-col items-center gap-7">
            <h1 className=" text-white text-3xl text-center font-bold">
                All your files in one secure location, accessible anywhere.
            </h1>
            <p className=" text-center text-slate-100 text-sm">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
            </p>
            <button className="get-started py-4 px-16 rounded-full text-white font-bold">Get Started</button>
        </section>
    );
}

export default Hero;