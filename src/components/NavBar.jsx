import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar space-y-4 h-32 flex flex-col md:flex-row mb-4">
                <div className="navbar-start mr-20 md:mr-0 ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-gradient-to-b dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-[#0f1113] text-base  font-bold"><Link to='/' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>Home</Link></li>
                        <li className="text-[#0f1113] text-base  font-bold"><Link to='/blog' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>Blog</Link></li>
                        <li className="text-[#0f1113] text-base  font-bold"><Link to='/allfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>All food</Link></li>
                       
                        
                        


                           
                            
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


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                       
                    
                        <li className="text-[#0f1113] text-base  font-bold"><Link to='/' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>Home</Link></li>
                        <li className="text-[#0f1113] text-base  font-bold"><Link to='/blog' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>Blog</Link></li>
                        <li className="text-[#0f1113] text-base  font-bold"><Link to='/allfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>All food</Link></li>
                        
                        
                        

                        
                    </ul>
                </div>
                <div className="navbar-end space-x-6 flex justify-center items-center md:justify-end">
                



                    {
                        user ?
                    
                            <details className="dropdown">
                            <summary className="m-1 avatar btn border-indigo-950 btn-ghost">User Profile</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className="text-[#0f1113] text-base  font-bold"><div className="flex"><div className="avatar"> <div className="w-14 rounded-full mr-2"><img className="" src={user.photoURL}/></div>{user?.displayName}</div></div></li>
                            <li className="text-[#0f1113] text-base  font-bold"><Link to='/addfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>Add food</Link></li>
                              <li className="text-[#0f1113] text-base  font-bold"><Link to='/bookings' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>My Order</Link></li>
                              <li className="text-[#0f1113] text-base  font-bold"><Link to='/myaddedfood' className={({ isActive }) => isActive ? 'btn' : 'btn bg-[#100935e7]' 
                    }>My Added food</Link></li>
                            </ul>
                          </details>

                            
                            :
                            <h2></h2>

                    }




                    {
                        user ?
                            <h2 className="text-black font-medium">{user.displayName}
                            </h2>
                            :
                            <h2></h2>

                    }




                    {
                        user ?
                            <button onClick={logout} className="btn btn-xs md:btn-md">LogOut</button>
                            :
                            <Link to='/login'><button className="btn btn-sm md:btn-md ">Login</button></Link>

                    }

                   


                </div>
            </div>
        </div>
    );
};

export default NavBar;