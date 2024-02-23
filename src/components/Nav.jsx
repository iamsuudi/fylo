import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav className="p-8 flex justify-between max-w-screen-lg w-full">
            <Link to="#" className="logo h-6 w-20">
            </Link>
            <ul className=" flex gap-4 text-slate-300 ">
                <li>
                    <Link to="#">Features</Link>
                </li>
                <li>
                    <Link to="#">Team</Link>
                </li>
                <li>
                    <Link to="#">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;