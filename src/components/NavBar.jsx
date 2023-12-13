import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {

    const { user, logout } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");

        }
        else {
            setTheme("light");
        }
    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])


    return (
        <div>
            <div className="navbar  flex md:flex-row">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F87272] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-gradient-to-b dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52">
                            <li className="text-[#F87272]  text-base  font-bold"><Link to='/' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]'
                            }>Home</Link></li>
                            <li className="text-[#F87272]  text-base  font-bold"><Link to='/blog' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]'
                            }>Blog</Link></li>
                            <li className="text-[#F87272]  text-base  font-bold"><Link to='/allfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]'
                            }>All food</Link></li>
                            <li className="text-[#F87272]  text-base  font-bold"> {
                                user ?
                                    <button onClick={logout} className="">Log Out</button>
                                    :
                                    <Link to='/login'><button className="">Login</button></Link>

                            }</li>
                            {/* <li>
                            {
                                user ?
                                    <button onClick={logout} className="btn btn-xs md:btn-md hidden md:block">LogOut</button>
                                    :
                                    <Link to='/login'><button className="btn btn-sm md:btn-md border-black">Login</button></Link>

                            }
                            </li> */}







                        </ul>
                    </div>

                    <Link to="/"><div className="space-x-2 flex bg-[https://i.ibb.co/8Krf78L/ff156792-1955-4256-907c-851be24fb6b4.jpg] justify-center items-center rounded-r-full rounded-l-full w-48 h-10 md:w-56">
                        <div className="avatar">
                            <div className="w-8 md:w-10 rounded-full">
                                <img className="" src="https://i.ibb.co/8Krf78L/ff156792-1955-4256-907c-851be24fb6b4.jpg" />
                            </div>
                        </div>
                        <h2 className="p-0 normal-case sm:text-lg md:text-2xl font-bold">Savory Tavern</h2>
                    </div></Link>

                </div>


                <div className="navbar-center">
                    {/* <ul className="menu menu-horizontal px-1 gap-6">


                        <li className=""><NavLink to='/' className="text-[#F87272] text-base font-bold" >Home</NavLink></li>
                        <li className=""><NavLink to='/blog' className="text-[#F87272]  text-base  font-bold">Blog</NavLink></li>
                        <li className=""><NavLink to='/allfood' className="text-[#F87272]  text-base  font-bold">All food</NavLink></li>





                    </ul> */}

                    
                {
                        user ?

                            <details className="dropdown ml-4 sm:ml-0 text-[#F87272]">
                                <summary className="m-1 avatar btn btn-sm border-[#F87272] btn-ghost">Profile</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                                    <li className="text-[#F87272] text-base  font-bold"><div className="flex"><div className="avatar"> <div className="w-14 rounded-full mr-2"><img className="" src={user.photoURL} /></div>{user?.displayName}</div></div></li>
                                    <li className="text-[#F87272] text-base  font-bold"><Link to='/addfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]'
                                    }>Add food</Link></li>
                                    <li className="text-[#F87272] text-base  font-bold"><Link to='/bookings' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]'
                                    }>My Order</Link></li>
                                    <li className="text-[#F87272] text-base  font-bold"><Link to='/myaddedfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]'
                                    }>My Added food</Link></li>
                                </ul>
                            </details>
                           


                            :
                            <h2></h2>

                    }


                </div>
                <div className="navbar-end md:space-x-3 flex justify-center items-center md:justify-end">


                    <div className="mr-3 sm:mr-0">
                        <label className="flex cursor-pointer gap-2">
                            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />
                            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>


                  









                    




                </div>
            </div>
        </div>
    );
};

export default NavBar;