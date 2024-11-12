import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center w-100%'>
        <div className=' text-pink-300 font-medium bg-gradient-to-l from-pink-200 to-pink-700'>
        <nav className='flex justify-center flex-wrap gap-6'>
          <a className='hover:text-pink-600 text-white' href="#">Home</a>
          <a className='hover:text-pink-600 text-white' href="/about">About</a>
          <a className='hover:text-pink-600 text-white' href="/contact-us">Contact-us</a>
        </nav>
        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105 '>
          <a href="https://facebook.com"  target='blank' rel='nofollow noopener'>
          <Image src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook logo"  width={50} height={50}></Image>
          </a>

          <a href="https://instagram.com"  target='blank' rel='nofollow noopener'>
          <Image src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="instagram logo"  width={50} height={50}></Image>
          </a>

          <a href="https://twitter.com"  target='blank' rel='nofollow noopener'>
          <Image src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="twitter logo"  width={50} height={50}></Image>
          </a>
          
        </div>

        <p className='text-center text-white hover:text-pink-400 font-medium mb-8 '>
          2024 Jaweria Mustafa. All rights reserved.
        </p>
        <br />
        </div>
      </footer>
    </div>
  )
}