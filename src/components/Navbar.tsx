import React from "react";
import Link from "next/link"
import { LiaIceCreamSolid } from "react-icons/lia";
import { FaSearch} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

interface CustomIconProps
  extends React.ComponentProps<typeof LiaIceCreamSolid> {
  className?: string;
}
const CustomLiaIceCreamSolid: React.FC<CustomIconProps> = (props) => (
  <LiaIceCreamSolid {...props} />
);

interface CustomIconProps extends React.ComponentProps<typeof FaSearch> {
  className?: string;
}
const CustomFaSearch: React.FC<CustomIconProps> = (props) => (
  <FaSearch {...props} />
);

interface CustomIconProps extends React.ComponentProps<typeof AiFillThunderbolt> {
  className?: string;
}
const CustomAiFillThunderbolt: React.FC<CustomIconProps> = (props) => (
  <AiFillThunderbolt {...props} />
);

interface CustomIconProps extends React.ComponentProps<typeof FaShoppingCart> {
  className?: string;
}
const CustomFaCartShopping: React.FC<CustomIconProps> = (props) => (
  <FaShoppingCart {...props} />
);

export default function Navbar() {
  return (
    <div>
      <div className="grid-xl:grid-cols-1 grid-cols-1 bg-gradient-to-b from-pink-200 to-pink-700">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                <h1 className="text-purple-800 hover:text-pink-700 font-serif font-extrabold sm:text-xl lg:text-3xl text-2xl"> ICECREAMO!</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <CustomAiFillThunderbolt className="justify-items-center w-5 h-5 text-purple-800 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block ">
                  Order now and get it within
                  <span className="text-pink-800"> 30 Minutes!</span>
                </p>
              </div>

              <header>
      <ul className="flex gap-9 text-purple-800 font-bold px-8">
        <Link href="/" className="hover:text-pink-700"><li>Home</li></Link>
        <Link href="/about" className="hover:text-pink-700"><li>About Us</li></Link>
        <Link href="/contact-us" className="hover:text-pink-700"><li>Contact Us</li></Link>
        </ul>
        </header>
        
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
