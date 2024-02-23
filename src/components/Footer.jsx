import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="relative text-slate-300 pt-80 pb-32 px-10 md:px-20 max-w-screen-lg w-full flex flex-wrap justify-start gap-20 items-strech">
            <div className="logo absolute top-52 h-20 w-40"></div>
            <div className="footer flex flex-col gap-10 justify-between xl:flex-row">
                <p className="location pl-8 w-80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </p>

                <ul className=" flex flex-col gap-3 w-60">
                    <li className="phone pl-8">+1-543-123-4567</li>{" "}
                    <li className="email pl-8">example@fylo.com</li>
                </ul>
            </div>
            <div className=" flex flex-col gap-10 justify-center xl:flex-row">
                <About />

                <Contact />
            </div>
            <Attribution />
        </section>
    );
}
function Attribution() {
    return (
        <p className="attribution z-20 absolute bottom-0 left-0 w-full text-center text-xs py-5">
            Challenge by{" "}
            <Link
                to="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className=" text-cyan-400"
            >
                Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link
                to="https://www.linkedin/in/abdulfetahsuudi"
                className=" text-cyan-400"
            >
                Abdulfetah
            </Link>
            .
        </p>
    );
}

function Contact() {
    return (
        <ul className=" flex flex-col gap-3 w-32">
            <li>
                <Link href="#" className=" hover:text-white">
                    Contact Us
                </Link>
            </li>
            <li>
                <Link href="#" className=" hover:text-white">
                    Terms
                </Link>
            </li>
            <li>
                <Link href="#" className=" hover:text-white">
                    Privacy
                </Link>
            </li>
        </ul>
    );
}

function About() {
    return (
        <ul className=" flex flex-col gap-3 w-32">
            <li>
                <Link to="#" className=" hover:text-white">
                    About Us
                </Link>
            </li>
            <li>
                <Link to="#" className=" hover:text-white">
                    Jobs
                </Link>
            </li>
            <li>
                <Link to="#" className=" hover:text-white">
                    Press
                </Link>
            </li>
            <li>
                <Link to="#" className=" hover:text-white">
                    Blog
                </Link>
            </li>
        </ul>
    );
}

export default Footer;
