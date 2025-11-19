/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
    const params = useParams()
    const [SingleProduct, setSingleProduct] = useState("")
    const {addToCart} = useCart()

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://grsdfdqqyaqayzjlqxcx.supabase.co/functions/v1/products/${params.id}`);
            const product = res.data;
            setSingleProduct(product)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    const OriginalPrice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100))

    return (
        <>
            {
                SingleProduct ? <div className='px-4 pb-4 md:px-0 dark:bg-[#222222]'>
                    <Breadcrums title={SingleProduct.title} />
                    <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {/* product image */}
                        <div className='w-full'>
                            <img src={SingleProduct.thumbnail} 
                            alt={SingleProduct.title} 
                            className='rounded-2xl w-[300px] h-[250px] object-cover'/>
                        </div>
                        {/* product details */}
                        <div className='flex flex-col gap-6'>
                            <h1 className='md:text-3xl text-xl font-bold text-gray-800 dark:text-[#169976]'>{SingleProduct.title}</h1>
                            <div className='text-gray-700 dark:text-[#cbcbcb]'>{SingleProduct.brand?.toUpperCase()} /{SingleProduct.category?.toUpperCase()} /{SingleProduct.model}</div>
                            <p className='text-xl text-[#fe7743]  font-bold dark:text-[#fff]'>${SingleProduct.price} <span className='line-through text-gray-700 dark:text-[#169976]'>${OriginalPrice}</span> <span className='bg-[#fe7743]  dark:bg-[#1dcd9f] dark:text-[#000] text-white px-4 py-2 rounded-full'>{SingleProduct.discount}% discount</span></p>
                            <p className='text-gray-600 dark:text-[#fff]'>{SingleProduct.description}</p>

                            {/* qunatity selector */}
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='text-sm font-medium text-gray-700 dark:text-[#fff]'>Quantity:</label>
                                <input type="number" min={1} value={1} className='w-20 border border-gray-300 dark:text-[#1dcd9f] rounded-lg px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-red-500'/>
                            </div>

                            <div className='flex gap-4 mt-4'>
                                <button onClick={()=>addToCart(SingleProduct)} className='px-6 flex gap-2 py-2 text-lg bg-[#fe7743] text-white rounded-md dark:bg-[#1dcd9f] dark:text-[#000]'><IoCartOutline className='w-6 h-6'/> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div> :
                    <div className='flex items-center justify-center h-screen'>
                        <video muted autoPlay loop>
                            <source src={Loading} type='video/webm' />
                        </video>
                    </div>
            }
        </>
    )
}

export default SingleProduct
