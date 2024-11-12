import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import React from 'react'

export default function page() {
  return (
    <div className="bg-pink-700   ">
      <Navbar/>
      <h1 className='text-white justify-self-center items-center font-serif font-extrabold text-6xl  justify-center items-'>About us</h1>
      <p className='text-white mb-10 py-6 px-6'>Welcome to Icecreamo, where passion for flavors meets the art of craftsmanship. Born out of a love for creating delightful experiences, we specialize in curating premium ice creams that bring a smile with every scoop.

At Icecreamo, we believe in quality, creativity, and a touch of indulgence. Each batch is crafted with the finest ingredients, blending traditional techniques with innovative flavors to deliver a creamy, smooth, and unforgettable taste. Whether it&apos;s a classic favorite or an adventurous new flavor, we are dedicated to making every moment a little sweeter.

Our mission is to create more than just ice cream; we aim to create cherished memories and joyful moments. From our friendly staff to our cozy atmosphere, everything we do is designed to ensure you have an experience worth savoring. Join us on this delicious journey, and let&apos;s celebrate life, one scoop at a time!

Indulge, Enjoy, and Explore - That&apos;s the Icecreamo Way!</p>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<FaFacebook  />
<a href="https://www.facebook/example/ice-creamo.com" target='blank' className="text-white">Facebook</a>
</div>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<FaInstagram />
<a href="https://www.instagram/example/ice-creamo.com" target='blank' className="text-white">Instagram</a>
</div>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<IoMail />
<a href="mailto:www.icecreamo@gmail.com" target='blank' className="text-white">Icecreamo@gmail.com</a>
</div>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<FaTwitter  />
<a href="https://www.twitter/example/ice-creamo.com" target='blank' className="text-white">Twitter</a>
</div>
<Footer/>
    </div>
  )
}
