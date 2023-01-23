import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLogo from "../public/Assets/navLogo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2 shadow-lg">
      <div className="logo mx-5">
        <Link href={'/'}>
          <Image src={NavLogo} width={200} height={40} alt="" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 md:space-x-8 font-bold md:font-normal md:text-md">
          <Link href={"/tshirts"}>
            <li>T-shirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          {/* <Link href={'/'}><li>T-shirts</li></Link> */}
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 text-xl md:text-3xl mx-4 text-pink-500 hover:text-pink-600 cursor-pointer">
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
