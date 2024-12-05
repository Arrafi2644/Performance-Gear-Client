import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const {user, logOutUser, loading} = useContext(AuthContext)
    console.log(user?.photoURL);
    console.log(loading);

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allSportsEquipment'>All Sports Equipment</NavLink></li>
    <li><NavLink to='/addEquipment'>Add Equipment</NavLink></li>
    <li><NavLink to='/myEquipmentList'>My Equipment List</NavLink></li>
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
        <div className='bg-primary'>
            <div className="navbar  max-w-7xl w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl pl-0">Performance Gear</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2 pr-0">
                    {
                        (user && user.photoURL) ?<div className='flex items-center gap-2'>
                            <img className='h-10 w-10 rounded-full' id='userImg' src={user?.photoURL} alt="" />
                            <Tooltip className='absolute z-10' anchorId="userImg" place='bottom' content={user?.displayName} /> 
                            <Link onClick={handleLogOutUser} className='btn bg-accent'>Logout</Link>
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