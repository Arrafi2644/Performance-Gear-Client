import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme" ) ? localStorage.getItem("theme"): "light")
    const {user, logOutUser, loading} = useContext(AuthContext)

    const handleToggle = (e) => {
        if(e.target.checked){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    
    useEffect(()=>{
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

 

    // console.log(user?.photoURL);
    // console.log(loading);
    // console.log(user)

    const links = <>
    <li><NavLink className={` `} to='/'>Home</NavLink></li>
    <li><NavLink to='/allSportsEquipment'>All Sports Equipment</NavLink></li>
    <li><NavLink to='/addEquipment'>Add Equipment</NavLink></li>
    <li><NavLink to={`/myEquipmentList`}>My Equipment List</NavLink></li>
    </>

    const handleLogOutUser = () => {
        logOutUser();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logout successful",
            showConfirmButton: false,
            timer: 2000
          });
    }


    return (
        <div className='bg-primary text-secondary'>
            <div className="navbar  max-w-7xl w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-20">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-base md:text-xl pl-0">Performance Gear</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2 pr-0">
                <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} checked={theme == "light" ? false : true} />

  {/* sun icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
                    {
                        user ? <div className='flex items-center gap-2'>
                            <img className='h-10 w-10 rounded-full' id='userImg' src={user?.photoURL} alt="" />
                            <Tooltip className='absolute z-10' anchorId="userImg" place='bottom' content={user?.displayName} /> 
                            <Link onClick={handleLogOutUser} className="btn bg-accent text-white">Logout</Link>
                        </div> :<div>
                            <Link className='btn bg-accent mr-2' to='/login'>Login</Link>
                            <Link className='btn bg-accent' to='/signup'>SignUp</Link>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;