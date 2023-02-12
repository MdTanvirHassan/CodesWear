import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm text-gray-500 tracking-widest uppercase">
                CodesWear.com
              </h2>
              <h1 className="text-gray-900 text-3xl font-medium mb-4">
                Oder ID: #889912345
              </h1>
              <p className="text-gray-500">Your order has been successfully placed.</p>
              <div className="flex mb-4">
                <a className="flex-grow text-purple-500 border-b-2 border-purple-500 py-2 text-lg px-1">
                 Item Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 mx-auto">
                  Quantity
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 mx-auto">
                  Item(s) Total
                </a>
              </div>
              
              <div className="flex border-t border-gray-200 py-2 ">
                <span className="text-gray-500 ">Wear-the code (XL,Red)</span>
                <span className="text-gray-500 mx-auto">1</span>
                <span className="ml-auto text-gray-900 mx-auto">$499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear-the code (XL,Red)</span>
                <span className="text-gray-500 mx-auto">1</span>
                <span className="ml-auto text-gray-900 mx-auto">$499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Wear-the code (XL,Red)</span>
                <span className="text-gray-500 mx-auto">1</span>
                <span className="ml-auto text-gray-900 mx-auto">$499</span>
              </div>
              <div className="">
                <div className="font-medium text-xl text-gray-900 py-3">
                  SubTotal: $1497.00
                </div>
                <button className="ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                 Track Order
                </button>
                
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/3 m-auto w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
