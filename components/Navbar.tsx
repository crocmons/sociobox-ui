"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

  return (
    <div>
        <nav className="w-full bg-slate-50 fixed top-0 left-0 right-0 z-20">
          <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

            <div>
                <div className="flex items-center justify-between py-3 mx-auto px-2 md:py-4 md:block">
                   {/* Logo */}
                   <Link href='/'>
                    <h2 className="text-2xl text-black font-bold">
                     UniCraft
                    </h2>
                   </Link>
                   {/* Hamburger Menu for phone */}

                   <div className="md:hidden">
                     <button 
                     className="p-2 text-gray-800 text-2xl rounded-md outline-none focus:border-gray-400 mx-auto"
                     onClick={()=>setClick(!click)}
                     >
                     {
                        click ? (
                           <IoClose className="w-8 h-8" />
                        ) : (
                           <CiMenuFries className="w-8 h-8 focus:border-none active:border-none"/>
                        )
                     }
                     </button>
                   </div>
                </div>
            </div>

            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 ${click ? 'p-12 md:p-0 block' : 'hidden' }`}>
                      <ul className=" h-screen md:h-auto items-center justify-center text-center md:flex">
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href='#works' onClick={()=>setClick(!click)}>
                        Home
                        </Link>
                        </li>
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href='#about' onClick={()=>setClick(!click)}>
                        About
                        </Link>
                        </li>
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href='#influencers' onClick={()=>setClick(!click)}>
                        Influencers
                        </Link>
                        </li>
                        <button className="mt-2 md:hidden py-2 px-4  text border border-slate-700 text-center items-center justify-center text-black">
                        <Link href="#contact">
                        Contact Us
                        </Link>
                      </button>
                      </ul>
                      
                </div>
            </div>
                        <button className="hidden md:flex py-2 px-4 text border border-slate-700 text-center items-center justify-center text-black">
                        <Link href="#">
                        Contact Us
                        </Link>
                      </button>

          </div>
        </nav>
    </div>
  );
};

export default Navbar;
