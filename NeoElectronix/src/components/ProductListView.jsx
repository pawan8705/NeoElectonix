import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className="space-y-4 mt-2 rounded-md p-3 bg-white shadow-md">

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-7">

        {/* IMAGE SECTION */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="
            w-full 
            h-48 
            md:w-60 md:h-40 
            lg:w-72 lg:h-48
            object-cover 
            rounded-md 
            cursor-pointer
          "
          onClick={() => navigate(`/products/${product.id}`)}
        />

        {/* DETAILS SECTION */}
        <div className="flex-1 space-y-2 w-full">

          <h1 className="font-bold text-lg md:text-xl line-clamp-3 hover:text-red-500">
            {product.title}
          </h1>

          <p className="font-semibold text-sm md:text-lg flex items-center gap-1">
            ₹<span className="text-3xl md:text-4xl">{product.price}</span>
            <span className="text-sm text-green-600">
              ({product.discount}% OFF)
            </span>
          </p>

          <p className="text-sm">
            FREE delivery  
            <span className="font-semibold"> Fri, 18 Apr</span><br />
            Or fastest delivery  
            <span className="font-semibold"> Tomorrow, 17 Apr</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  )
}

export default ProductListView
