import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLogo from "./Assets/navLogo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2">
      <div className="logo mx-5">
        <Image src={NavLogo} width={200} height={40} alt="" />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl">
          <Link href={"/"}>
            <li>T-shirts</li>
          </Link>
          <Link href={"/"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
          {/* <Link href={'/'}><li>T-shirts</li></Link> */}
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 text-xl md:text-3xl mx-4 text-pink-500">
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
