import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const { user, logOut, auth } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
    }

    return (

        <div className='  bg-gradient-to-r to-purple-500 from-blue-500'>
            <Navbar
                className='flex-col  bg-gradient-to-r from-blue-500 to-[#8366F9]  p-40 max-w-7xl mx-auto'
            fluid={true}
                rounded={true}
        >
            <Navbar.Brand href="">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/506/506287.png?w=826&t=st=1684372788~exp=1684373388~hmac=0a31b43210c71afd0096ee1269ac2c8d2ae1ae442e61b83e6d2a600946349d2b"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                    <span className="self-center whitespace-nowrap text-white text-2xl font-bold dark:text-white">
                    Toy Land
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div className='flex gap-3'>

                    {
                        auth?.currentUser &&
                        <Avatar className='hidden md:block' alt="User settings" img={user?.photoURL} title={user?.displayName} rounded={true} />

                    }

                    {
                        auth?.currentUser ?
                                <Button onClick={handleLogOut} gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 drop-shadow-2xl'><Link to={'/'}>Log Out</Link></Button> :
                                <Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'><Link to={'/login'}>Login</Link></Button>
                    }



                </div>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                    <NavLink to="/" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Home</NavLink>
                    <NavLink to="/allToys" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">All toys</NavLink>
                {auth?.currentUser &&
                    <>
                        <NavLink to="/myToys" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">My toys</NavLink>
                        <NavLink to="/addToy" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Add a toy</NavLink></>
                }
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? ' text-white drop-shadow-lg' : 'hover:text-gray-200')} aria-current="page">Blog</NavLink>
            </Navbar.Collapse>
        </Navbar>
        </div>



    );
};

export default NavBar;