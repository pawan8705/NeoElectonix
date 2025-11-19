import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {addToCart, cartItem} = useCart();
    console.log(cartItem)
    
  return (
    <div className='border relative border-gray-100 bg-[#efeeea] dark:bg-[#000] rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
      <img src={product.thumbnail} alt="" className='bg-gray-100 aspect-square rounded-2xl' onClick={()=>navigate(`/products/${product.id}`)}/>
      <h1 className='line-clamp-2 p-1 font-semibold text-[#273f4f] dark:text-[#fff] data'>{product.title}</h1>
      <p className='my-1 text-lg text-gray-800 dark:text-[#1dcd9f] font-bold rate'>${product.price}</p>
      <button onClick={()=>addToCart(product)} className='bg-[#fe7743] dark:bg-[#169976] px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold addcart'><IoCartOutline className='w-6 h-6 Iocart' /> Add to Cart</button>
    </div>
  )
}

export default ProductCard
