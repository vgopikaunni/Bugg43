import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);
    const navigate = useNavigate(); // ✅ Define navigate

    const token = localStorage.getItem('token'); // Assuming you store auth token in localStorage

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            {/* Logo */}
            <Link to='/'><img src={assets.logo} className='w-36' alt="Logo" /></Link>

            {/* Navigation Links */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'><p>HOME</p></NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'><p>COLLECTION</p></NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'><p>ABOUT</p></NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'><p>CONTACT</p></NavLink>
            </ul>

            {/* Icons and Actions */}
            <div className='flex items-center gap-6'>
                {/* Search Icon */}
                <img 
                    onClick={() => { setShowSearch(true); navigate('/collection'); }} 
                    src={assets.search_icon} 
                    className='w-5 cursor-pointer' 
                    alt="Search"
                />

                {/* Profile Dropdown */}
                <div className='group relative'>
                    <img 
                        onClick={() => token ? null : navigate('/login')} 
                        className='w-5 cursor-pointer' 
                        src={assets.profile_icon} 
                        alt="Profile"
                    />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                {/* Cart Icon */}
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {getCartCount()}
                    </p>
                </Link>

                {/* Mobile Menu Icon */}
                <img 
                    onClick={() => setVisible(true)} 
                    src={assets.menu_icon} 
                    className='w-5 cursor-pointer sm:hidden' 
                    alt="Menu"
                />
            </div>

            {/* Sidebar Menu for Mobile */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
