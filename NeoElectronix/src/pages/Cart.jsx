import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../assets/empty-cart.png"

const Cart = ({location, getLocation}) => {
  const { cartItem , updateQuantity, deleteItem} = useCart()
  const {user} = useUser()
  const navigate = useNavigate()
  

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)
  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0 dark:bg-[#222222]'>
      {
        cartItem.length > 0 ? <div>
          <h1 className='font-bold text-2xl dark:text-[#1dcd9f] text-[#fe7743]'>My Cart ({cartItem.length})</h1>
          <div>
            <div className='mt-10'>
              {cartItem.map((item, index) => {
                return <div key={index} className='bg-[#efeeea] dark:bg-[#000] p-5 rounded-md flex items-center justify-between mt-3 w-full border dark:border-[#1dcd94] cartbox'>
                  <div className='flex items-center gap-4'>
                    <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md imge' />
                    <div>
                      <h1 className='md:w-[300px] line-clamp-2 dark:text-white pera '>{item.title}</h1>
                      <p className='text-[#fe7743] dark:text-[#1dcd9f] font-semibold text-lg pera'>${item.price}</p>
                    </div>
                  </div>
                  <div className='bg-[#fe7743] dark:bg-[#1dcd9f] dark:text-black text-white flex gap-4 p-2 rounded-md font-bold text-xl adddelete'>
                    <button onClick={()=>updateQuantity(cartItem, item.id, "decrease")} className='cursor-pointer'>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>updateQuantity(cartItem, item.id, "increase")} className='cursor-pointer'>+</button>
                  </div>
                  <span onClick={()=>deleteItem(item.id)} className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                    <FaRegTrashAlt className='text-[#fe7743] dark:text-[#1dcd9f] text-2xl cursor-pointer trash' />
                  </span>
                </div>
              })}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
              <div className='bg-gray-100 dark:bg-[#000] border dark:border-[#1dcd94] rounded-md p-7 mt-4 space-y-2'>
                <h1 className='text-gray-800 dark:text-[#1dcd9f] font-bold text-xl'>Delivery Info</h1>
                <div className='flex flex-col space-y-1 dark:text-[#fff]'>
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder='Enter your name' className='p-2 rounded-md' value={user?.fullName}/>
                </div>
                <div className='flex flex-col space-y-1 dark:text-[#fff]'>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Enter your address' className='p-2 rounded-md' value={location?.county}/>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full dark:text-[#fff]'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='Enter your state' className='p-2 rounded-md w-full' value={location?.state}/>
                  </div>
                  <div className='flex flex-col space-y-1 w-full dark:text-[#fff]'>
                    <label htmlFor="">PostCode</label>
                    <input type="text" placeholder='Enter your postcode' className='p-2 rounded-md w-full' value={location?.postcode}/>
                  </div>
                </div>
                <div className='flex w-full gap-5 dark:text-[#fff]'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Enter your country' className='p-2 rounded-md w-full' value={location?.country}/>
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder='Enter your Number' className='p-2 rounded-md w-full' />
                  </div>
                </div>
                <button className='bg-[#fe7743] dark:bg-[#1dcd9f] dark:text-[#000] text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Submit</button>
                <div className='flex items-center justify-center w-full text-gray-700'>
                  ---------OR-----------
                </div>
                <div className='flex justify-center'>
                  <button onClick={getLocation} className='bg-[#fe7743] text-white px-3 py-2 rounded-md dark:bg-[#1dcd9f] dark:text-[#000]'>Detect Location</button>
                </div>
              </div>
              <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max dark:bg-[#000] dark:border-[#1dcd9f]'>
                <h1 className='text-gray-800 dark:text-[#1dcd9f] font-bold text-xl'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700 dark:text-white'><span><LuNotebookText /></span>Items total</h1>
                  <p>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700 dark:text-white'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                  <p className='text-[#fe7743] dark:text-[#1dcd9f] font-semibold'><span className='text-gray-600 line-through dark:text-white'>$25</span> FREE</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700 dark:text-white'><span><GiShoppingBag /></span>Handling Charge</h1>
                  <p className='text-[#fe7743] dark:text-[#1dcd9f] font-semibold'>$5</p>
                </div>
                <hr  className='text-gray-200 dark:text-[#1dcd9f] mt-2'/>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg dark:text-white'>Grand total</h1>
                  <p className='font-semibold text-lg dark:text-white'>${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 dark:text-white mb-3 mt-7'>Apply Promo Code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full border dark:border-[#1dcd94] dark:outline-0 dark:text-[#1dcd9f]'/>
                    <button className='bg-[#fe7743] text-white dark:text-black dark:bg-[#1dcd9f] border px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button className='bg-[#fe7743] text-white dark:text-black dark:bg-[#1dcd9f] px-3 py-2 rounded-md w-full cursor-pointer mt-3'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div> : <div className='flex flex-col gap-3 justify-center items-center h-[600px]'>
          <h1 className='text-[#fe7743] dark:text-[#1dcd9f] font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
          <img src={emptyCart} alt="" className='w-[400px]'/>
          <button onClick={()=>navigate('/products')} className='bg-[#fe7743] dark:bg-[#1dcd9f] dark:text-black text-white px-3 py-2 rounded-md cursor-pointer  '>Continue Shopping</button>
        </div>
      }
    </div>
  )
}

export default Cart
