import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Navebar = () => {
    const { user, logOutEmail } = useContext(AuthContext)
    const logOutButton = () => {
        logOutEmail()
    }
    const naveItem = <>
        <Link to={'/'}><li className="hover:bg-gray-100 rounded-xl"><a>Home</a></li></Link>
        <Link to={'/supperHerro'}><li className="hover:bg-gray-100 rounded-xl"><a>Create Superhero</a></li></Link>
        <Link to={'/interview'}><li className="hover:bg-gray-100 rounded-xl"><a>Interview</a></li></Link>
        <Link to={'/chart'}><li className="hover:bg-gray-100 rounded-xl"><a>Comparison Chart</a></li></Link>
        <Link to={'/signUp'}><li className="hover:bg-gray-100 rounded-xl"><a>SignUp</a></li></Link>
    </> 
    return (
        <div>
            <div className="navbar bg-[#1A103C] text-white px-[3%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {naveItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-serif"><i><span className="text-[35px]">S</span>upper Herro</i></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {naveItem}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user
                            ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1A103C] rounded-box w-52">
                                    {
                                        user.displayName && <li className="hover:bg-gray-100 rounded-xl"><a>{user.displayName}</a></li>
                                    }
                                    {
                                        user.email && <li className="hover:bg-gray-100 rounded-xl"><a>{user.email}</a></li>
                                    }
                                    <div className="flex justify-center mt-3">
                                        <button onClick={logOutButton} className="btn btn-primary">SignOut</button>
                                    </div>
                                </ul>
                            </div>
                            :
                            <dvi><Link to={'/login'} className="btn btn-primary">Login</Link></dvi>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navebar;