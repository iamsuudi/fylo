function Email() {
    return (
        <section className="email w-80 sm:min-w-[500px] lg:min-w-[700px] lg:px-20 py-20 px-10 text-white flex flex-col gap-10 items-center -mb-32 z-10">
            <h3 className=" font-black text-2xl md:text-4xl">
                Get early access today
            </h3>
            <p className=" text-center max-w-2xl">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
            </p>
            <form
                action="submit"
                method="post"
                className=" flex flex-wrap items-center justify-center gap-7 w-full"
            >
                <input
                    type="email"
                    name="email-input"
                    id="email-input"
                    placeholder="email@example.com"
                    className=" w-80 p-3 rounded-full px-9"
                />
                <input
                    type="submit"
                    value="Get Started For Free"
                    className="get-started w-80 p-3 text-lg font-black rounded-full"
                />
            </form>
        </section>
    );
}

export default Email;
