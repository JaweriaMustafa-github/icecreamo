'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b from-pink-200 to-pink-700">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-purple-800 hover:text-pink-700 font-serif font-extrabold sm:text-xl lg:text-2xl text-2xl">
              ICECREAMO!
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <p className="text-sm text-white">
              Order now and get it within <span className="text-pink-800">30 Minutes!</span>
            </p>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-purple-800 hover:text-pink-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <nav>
          <ul
            className={`lg:flex gap-10 text-purple-800 font-bold px-8 py-2 ${isMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row`}
          >
            <Link href="/" passHref>
              <li className="hover:text-pink-700 py-2">Home</li>
            </Link>
            <Link href="/about" passHref>
              <li className="hover:text-pink-700 py-2">About Us</li>
            </Link>
            <Link href="/contact-us" passHref>
              <li className="hover:text-pink-700 py-2">Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}