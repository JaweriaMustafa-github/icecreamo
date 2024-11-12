import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative rounded-2xl overflow-hidden bg-gradient-to-b from-pink-200 to-pink-700 font-mono px-6 py-12 mb-7'>
      <div className='inset-0 absolute opacity-15'>
        <Image src="/images/banner image.jpeg"
         alt="Yummy Icecreamo Banner"
         width={500}
         height={500}
         className='w-full h-full object-cover'>
         </Image>

      </div>

      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center'>
       <h2 className='text-white sm:text-5xl font-extrabold mb-4'>Discover  the Yummy Icecreamo Menu NOW!</h2> 
       <p className='text-purple-800 font-semibold text-lg text-center mb-6 max-w-xl'> Scoop up exclusive ice cream discounts NOW at Icecreamo! 🍦 Don&apos;t miss out on these sweet deals - shop today!</p>
      
       <button
        type='button'
        className='bg-purple-700 text-white text-sm font-semibold py-3 px-6 rounded-lg shadow-xl hover:bg-pink-600 transition duration-600'>
          Exciting Deals launched at 9:00PM!
        </button>
      </div>

    </div>
  )
}

