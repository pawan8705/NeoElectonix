import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='dark:bg-[#000] bg-[#eae4d5] dark:text-white text-black py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between box'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <h1 className='dark:text-[#1dcd9f] text-[#fe7743] text-2xl font-bold heading '>NeoElectronix</h1>
            </Link>
            <p className='mt-2 text-sm text'>Powering Your World with the Best in Electronics.</p>
            <p className='mt-2 text-sm text'>123 Electronics St, Style City, NY 10001</p>
            <p className='text-sm text'>Email: support@Zaptro.com</p>
            <p className='text-sm text'>Phone: (123) 456-7890</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold dark:text-[#1dcd9f] heading'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li className='text'>Contact Us</li>
                <li className='text'>Shipping & Returns</li>
                <li className='text'>FAQs</li>
                <li className='text'>Order Tracking</li>
                <li className='text'>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold dark:text-[#1dcd9f] heading'>Follow Us</h3>
            <div className='flex space-x-4 mt-2 list'>
                <FaFacebook className='hover:dark:text-[#1dcd9f] hover:text-[#fe7743] '/>
                <FaInstagram className='hover:dark:text-[#1dcd9f] hover:text-[#fe7743]'/>
                <FaTwitterSquare className='hover:dark:text-[#1dcd9f] hover:text-[#fe7743]'/>
                <FaPinterest className='hover:dark:text-[#1dcd9f] hover:text-[#fe7743]'/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold dark:text-[#1dcd9f] heading'>Stay in the Loop</h3>
            <p className='mt-2 text-sm text'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md text-white dark:bg-[#1dcd9f] dark:text-[#000] bg-[#fe7743] border border-[#fff] outline-none dark:outline-none dark:border-[#000] inputbox'
                />
                <button type='submit' className='dark:bg-[#1dcd9f] text-white px-4 rounded-r-md hover:dark:bg-[#169976] hover:bg-[#fe5343] 
                dark:text-[#000] bg-[#fe7743] border dark:border-l-2 inputbtn'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='dark:text-[#1dcd9f] text-[#fe7743]'>NeoElectronix</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer