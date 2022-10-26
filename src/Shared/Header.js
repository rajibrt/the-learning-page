import { GoogleAuthProvider } from 'firebase/auth';
import { Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import logo from '../assets/logo.svg'
const navigate = useNavigate;

const Header = () => {
    const googleProvider = new GoogleAuthProvider();
    const { user, providerLogin, logOut } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        return providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-white/70 shadow-lg sticky top-0 z-40">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                {/* <Link to='/' className="site-name btn btn-ghost normal-case text-xl text-yellow-700" >The Learning Page</Link> */}
                <Link to='/'>

                    <img className='w-full' src={logo} alt="" />


                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><Link to='/'>Home</Link></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Tooltip
                    content={user?.displayName}
                    placement="top"
                >
                    <Link to='/profile'>
                        {user?.photoURL ?
                            <img className='rounded-full w-8' src={user?.photoURL} alt="" />
                            :
                            <FaUserCircle></FaUserCircle>
                        }
                    </Link>
                </Tooltip>

                {
                    user?.uid ?
                        <>
                            <Link to='/profile' className="btn btn-ghost ">
                                {user?.displayName}
                            </Link>
                            <button onClick={handleLogOut} className='outline outline-1 rounded-md px-2'>Logout</button>
                        </>
                        :
                        <>
                            <Link className='text-blue-600 mx-2' to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            {/* <button onClick={handleGoogleSignIn} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle>Login</button>
                            <button className="btn btn-ghost"><FaUserCircle className='mr-2'></FaUserCircle> <Link to='/login'>Login</Link></button> */}
                        </>
                }
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Remember me</span>
                        <input type="checkbox" className="toggle" checked />
                    </label>
                </div>
            </div>
        </div>


    );
};

export default Header;