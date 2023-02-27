import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";

const Hoodies = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h2 className="text-center my-5">Hoodies</h2>
      <section className="text-gray-600 ">
        <div className=" px-5  mx-auto">
          {Object.keys(products).length === 0 && (
            <h6 className="text-center font-normal h-[50vh]">
              Sorry! No hoodies available. Stay Tuned with us for new
              collection.
            </h6>
          )}
          <div className="grid md:grid-cols-4 2xl:grid-cols-5 gap-8 m-auto">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className=" p-4 px-10 w-full shadow-lg shadow-gray-500 rounded-lg">
                  <Link
                    passHref={true}
                    href={`/product/${products[item].slug}`}>
                    <div className="block relative h-[50vh] rounded overflow-hidden  cursor-pointer ">
                      <img
                        alt="e-commerce"
                        className="object-fill object-center w-full h-full m-auto block"
                        src={products[item].img}
                      />
                    </div>

                    <div className="mt-4 text-center md:text-start">
                      <h3 className="text-gray-500 text-xs tracking-widest mb-1  cursor-pointer">
                        {products[item].category}
                      </h3>
                      <h2 className="text-gray-900 text-lg font-medium  cursor-pointer">
                        {products[item].title}
                      </h2>
                      <p className="mt-1 text-blue-500">
                        ৳{products[item].price}
                      </p>
                      <p className="mt-1 text-gray-600 text-sm space-x-1">
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1">S</span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1">M</span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1">L</span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1">
                            XL
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1">
                            XXL
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-gray-600 text-sm space-x-1">
                        {products[item].color.includes("red") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-red-700 hover:bg-red-600 w-6 h-6 focus:outline-none"></button>
                        )}

                        {products[item].color.includes("blue") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-blue-700 hover:bg-blue-600 w-6 h-6 focus:outline-none"></button>
                        )}

                        {products[item].color.includes("black") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("white") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("pink") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-pink-700 hover:bg-pink-600 w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("green") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-green-700 hover:bg-green-600 w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("yellow") && (
                          <button className="border-2 border-gray-300 rounded-full bg-none bg-yellow-700 hover:bg-yellow-600 w-6 h-6 focus:outline-none"></button>
                        )}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readystate) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category: "hoodies" });
  let hoodies = {};
  for (let item of products) {
    if (item.title in hoodies) {
      if (
        !hoodies[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        hoodies[item.title].color.push(item.color);
      }
      if (
        !hoodies[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        hoodies[item.title].size.push(item.size);
      }
    } else {
      hoodies[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        hoodies[item.title].color = [item.color];
        hoodies[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(hoodies)) }, // will be passed to the page component as props
  };
}

export default Hoodies;
