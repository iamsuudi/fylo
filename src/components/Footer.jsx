function Footer() {
    return (
        <section className="relative text-slate-300 py-32 px-5">
            <div className=" flex flex-wrap gap-10">
                <p className="location pl-8 w-80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </p>
                <ul className=" flex flex-col gap-3 w-80">
                    <li className="phone pl-8">+1-543-123-4567</li>{" "}
                    <li className="email pl-8">example@fylo.com</li>
                </ul>
                <ul className=" flex flex-col gap-3 w-80">
                    <li>
                        <a href="#" className=" hover:text-white">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" hover:text-white">
                            Jobs
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" hover:text-white">
                            Press
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" hover:text-white">
                            Blog
                        </a>
                    </li>
                </ul>
                <ul className=" flex flex-col gap-3 w-80">
                    <li>
                        <a href="#" className=" hover:text-white">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" hover:text-white">
                            Terms
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" hover:text-white">
                            Privacy
                        </a>
                    </li>
                </ul>
            </div>
            <p className="attribution absolute bottom-0 mx-auto text-xs p-5">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    className=" text-cyan-400"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a
                    href="https://www.linkedin/in/abdulfetahsuudi"
                    className=" text-cyan-400"
                >
                    Abdulfetah
                </a>
                .
            </p>
        </section>
    );
}

export default Footer;
