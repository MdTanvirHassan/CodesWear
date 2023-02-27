import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import NavLogo from "../public/assets/nav.png";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillShopping,
} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"

const Navbar = ({ cart, addToCart, RemoveFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row sticky top-0 bg-white z-10 justify-center md:justify-start items-center py-2 shadow-lg">
      <div className="logo mx-5">
        <Link href={"/"}>
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
      {/* //todo cart */}
      <div className="flex cart absolute right-0 top-4 text-3xl md:text-3xl mx-4 text-pink-500 hover:text-pink-600 cursor-pointer">
        <Link href={'/login'}><MdAccountCircle className="mx-2"/></Link>
      
        <span className="relative inline-flex " onClick={toggleCart}>
        <AiOutlineShoppingCart className="" />
        {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-pink-50 rounded-full -top-2 -right-2 ">{Object.keys(cart).qty}</div> */}
        </span>
      </div>

      <div
        ref={ref}
        className={`h-screen sidebar absolute overflow-y-scroll right-0 top-0 p-10 bg-pink-50 z-10 backdrop-filter backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5 transform transition-transform ${Object.keys(cart).length === 0? 'translate-x-full':'translate-x-0'} z-10`}>
        <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2  cursor-pointer text-pink-500 text-2xl">
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="m-1 text-center">No Items in Cart.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="hover:text-black">
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold text-sm">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-1/3 flex font-semibold text-center justify-center items-center text-lg">
                    <AiFillMinusSquare
                      onClick={() => {
                        RemoveFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="text-pink-500"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillPlusSquare
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="text-pink-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className='font-bold py-2'>SubTotal: ${subTotal}</span>
        <div className="flex mt-5">
          <Link href={'/checkout'}><button
            // onClick={() => clearCart}
            type="button"
            className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  mr-2 mb-2">
            <AiFillShopping className="text-lg mx-1" />
            Proceed
          </button></Link>
          <button
            onClick={clearCart}
            type="button"
            className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  mr-2 mb-2">
           
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;