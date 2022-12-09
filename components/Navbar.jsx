import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="  fixed w-full shadow-xl z-[100] h-20">
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16 my-2  ">
        <Image src="/../public/assets/A4.png" alt="/" width="125" height="50" />

        <div>
          <ul className="hidden md:flex  ">
            <Link href="/">
              <li className="text-lg hover:font-semibold text-gray-400 hover:text-white mx-10 mb-6">Home</li>
            </Link>
            <Link href="/">
              <li className="text-lg hover:font-semibold text-gray-400 hover:text-white  mx-10">About</li>
            </Link>
            <Link href="/">
              <li className="text-lg hover:font-semibold text-gray-400 hover:text-white  mx-10 ">Skills</li>
            </Link>
            <Link href="/">
              <li className="text-lg hover:font-semibold text-gray-400 hover:text-white  mx-10 ">Projects</li>
            </Link>
            <Link href="/">
              <li className="text-lg hover:font-semibold text-gray-400 hover:text-white  mx-10">Contact</li>
            </Link>
          </ul>
        </div>

      </div>
       
    </div>
  );
};

export default Navbar;
