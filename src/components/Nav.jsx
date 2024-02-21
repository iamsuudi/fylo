
function Nav() {

    return (
        <nav className="p-5 flex justify-between">
            <a href="#" className="logo h-6 w-20">
            </a>
            <ul className=" flex gap-4 text-slate-300 ">
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li>
                    <a href="#">Sign In</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;