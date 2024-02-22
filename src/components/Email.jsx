function Email() {
    return (
        <section className="email py-20 px-10 text-white flex flex-col gap-10 items-center mb-60">
            <h3 className=" font-black text-2xl">Get early access today</h3>
            <p className=" text-center">
                `It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.`
            </p>
            <form
                action="submit"
                method="post"
                className=" flex flex-col gap-10 w-full"
            >
                <input
                    type="email"
                    name="email-input"
                    id="email-input"
                    placeholder="email@example.com"
                    className=" p-3 rounded-full px-9"
                />
                <input type="submit" value="Get Started For Free" className="get-started p-3 text-xl font-black rounded-full"/>
            </form>
        </section>
    );
}

export default Email;
