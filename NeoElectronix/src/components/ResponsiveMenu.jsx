import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const ResponsiveMenu = ({ openNav, setOpenNav }) => {
    const { user } = useUser()
    return (
        <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-[#efeeea] dark:bg-[#222222] px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                <div className='flex items-center dark:text-white justify-start gap-3'>
                    <div className='md:block'>
                        <SignedOut>
                            <SignInButton size={50} >
                                <FaUserCircle size={50}></FaUserCircle>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    <div>
                        <h1>Hello, {user?.firstName}</h1>
                        <h1 className='text-sm text-slate-500 dark:text-[#c8c8c8]'>Premium User</h1>
                    </div>
                </div>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-2xl dark:text-white font-semibold'>

                        <Link to={'/'} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li className="hover:text-[#fe7743] hover:dark:text-[#1dcd9f]">Home</li></Link>

                        <Link to={"/products"} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li className="hover:text-[#fe7743] hover:dark:text-[#1dcd9f]">Products</li></Link>

                        <Link to={"/about"} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li className="hover:text-[#fe7743] hover:dark:text-[#1dcd9f]">About</li></Link>
                        
                        <Link to={"/contact"} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li className="hover:text-[#fe7743] hover:dark:text-[#1dcd9f]">Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveMenu
