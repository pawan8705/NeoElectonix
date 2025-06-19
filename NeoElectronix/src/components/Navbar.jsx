import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import DarkMode from './Darkmode'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    const toggleDropdown = ()=>{
        setOpenDropdown(!openDropdown)
    }
    return (
        <div className='bg-[#efeeea] dark:bg-[#000000] dark:text-white py-3 shadow-2xl px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl logo'><span className='text-[#fe7743] dark:text-[#1dcd9f] font-serif'>Neo</span>Electronix</h1></Link>
                    
                    <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
                        <MapPin className='text-[#fe7743] dark:text-[#1dcd9f] map' />
                        <span className='font-semibold dark:text-white address'>{location ? <div className='-space-y-2'>
                            <p className='location'>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown className='dark:text-[#ddd]' onClick={toggleDropdown}/>
                    </div>
                    {
                        openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white dark:bg-slate-800 dark:text-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
                        <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose/></span></h1>
                        <button onClick={getLocation} className='bg-[#fe7743]dark:bg-[#169976] text-white px-3 py-1 rounded-md cursor-pointer bg-[#fe7743] hover:bg-red-400 hover:dark:bg-[#1dcd9f]'>Detect my location</button>
                        </div> : null
                    }
                </div>
                {/* menu section */}
                <nav className='flex gap-7 items-center ml-[10px] navlinks'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden ullink'>

                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all dark:border-[#169976] border-[#fe7743]" : "text-black dark:text-white"} cursor-pointer`}><li className='lists'>Home</li></NavLink>

                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all dark:border-[#169976] border-[#fe7743]" : "text-black dark:text-white"} cursor-pointer`}><li className='lists'>Products</li></NavLink>

                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all dark:border-[#169976] border-[#fe7743]" : "text-black dark:text-white"} cursor-pointer`}><li className='lists'>About</li></NavLink>

                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all dark:border-[#169976] border-[#fe7743]" : "text-black dark:text-white"} cursor-pointer`}><li className='lists'>Contact</li></NavLink>

                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7 shop' />
                        <span className='bg-[#fe7743] dark:bg-[#169976] px-2 rounded-full absolute -top-3 -right-3 text-white num'>{cartItem.length}</span>
                    </Link>

                    <div>
                        <div><DarkMode /></div>
                    </div>
                    <div className='hidden md:block mr-4'>
                        <SignedOut>
                            <SignInButton className="bg-[#fe7743] dark:bg-[#169976] hover:dark:bg-[#1dcd9f] hover:bg-[#ff948e] text-white px-3 py-1 rounded-md cursor-pointer signbtn"/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
        
                    {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden mail'/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className='h-7 w-7 md:hidden'/>
                    }
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
    )
}

export default Navbar
