
const Navebar = () => {
    const naveItem = <>
        {/* <Link to={'/'}><li className="hover:bg-gray-100 rounded-xl"><a>Home</a></li></Link>
        <Link to={'/'}><li className="hover:bg-gray-100 rounded-xl"><a>Create Superhero</a></li></Link>
        <Link to={'/'}><li className="hover:bg-gray-100 rounded-xl"><a>Interview</a></li></Link>
        <Link to={'/'}><li className="hover:bg-gray-100 rounded-xl"><a>SignUp</a></li></Link>
        <Link to={'/'}><li className="hover:bg-gray-100 rounded-xl"><a>Login</a></li></Link> */}
    </>
    return (
        <div>
            <div className="navbar bg-[#221551] text-white px-[3%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {naveItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Supper Herro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {naveItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navebar;