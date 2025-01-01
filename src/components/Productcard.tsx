'use client'
import { Product } from "@/types"
import React from 'react'
import Image from "next/image"

interface ProductCardProps extends Product {
  onAddToCart: (product:Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart
}) => {
  return (
    <div className="bg-white p-4 h-96 rounded-lg shadow-lg border-4 hover:border-purple-600 transition-transform duration-300 ease-in-out">
      <Image 
      src={image}
      alt={name}
      width={300}
      height={300}
      className="inset-0 h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
      <div className=" text-purple-800">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg mb-4">{price}</p>
      </div>

      <button onClick={() => onAddToCart({id,name,price,image})}
        className="bg-purple-600 text-white px-4 rounded-lg text-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;