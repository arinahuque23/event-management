import { NavLink } from "react-router-dom";
import {FaShoppingBag} from 'react-icons/fa';
import {BiHomeAlt2} from 'react-icons/bi'
import {CgEventbrite} from 'react-icons/cg'
import {FaRegUser} from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../../../ProvidersPrivates/AuthProvider";




const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }



    return (
        <div className=" h-[120px]">
             <div 
              className="navbar bg-base-100 py-[2px] shadow-md">
                <div className="navbar-start pl-14"  >
                    <img  src="https://i.ibb.co/qCLCtY1/Watercolor-floral-frame-wedding-planner-logo-1.jpg" className="w-[140px]" alt="" />
                </div>

                {/*for navlinks */}

                <div className="navbar-center hidden lg:flex  ">
                 <ul className="menu menu-horizontal px-1 gap-8">
                         <li>
                                <NavLink
                                to="/"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold bg-gray-300 " : "bg-gray-300"
                                     }
                                    > <BiHomeAlt2></BiHomeAlt2> Home</NavLink>
                            
                        </li>

                        <li>
                                <NavLink
                                to="/catalogue "
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold " : " bg-gray-300"
                                     }  > 
                                      <FaShoppingBag></FaShoppingBag>  Cart  </NavLink>
                            
                        </li>

                        <li>
                                <NavLink
                                to="/eventscordinator"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold  " : "bg-gray-300"
                                     }
                                    > <CgEventbrite></CgEventbrite> Events Coordinator</NavLink>
                            
                        </li>
                        <li>
                                <NavLink
                                to="/contacus"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold   " : "bg-gray-300"
                                     }
                                    > <FaRegUser></FaRegUser> Contact Us </NavLink>
                            
                                  </li>
                                <li>
                                    {
                                        user ? <button onClick={handleSignOut} className="bg-blue-600 text-white">Sign Out</button>
                                        :
                                        <NavLink to="/login"
                                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font- font-semibold " :
                                         "bg-gray-300" }>Sign In 
                                         </NavLink>
                                    }

                                   
                                 </li>
                         
                            </ul>
                            </div>

                                    

                        {/* for button/signin sections*/ }
                         <div className="navbar-end pr-[100px]">
                         { user &&<div className="pr-4">
                                        <h3 className="text-blue-500 text-xl">  {user?.displayName} </h3>
                                    </div> }
                               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        
                        {
                            user && <div className="w-10 rounded-full mr-2">
                            <img src={user.photoURL}/>
                               </div>
                        }
                        
                       </label>
                      
             </div>
        </div>
        </div>
    );
};

export default Navbar;