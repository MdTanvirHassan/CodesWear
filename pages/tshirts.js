import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";

const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h2 className="text-center my-5">T-shirts</h2>
      <section className="text-gray-600 ">
        <div className=" px-5  mx-auto">
          <div className="grid md:grid-cols-4 2xl:grid-cols-5 gap-8 m-auto">
            {products.map((item) => {
              return (
                <div
                  key={item._id}
                  className=" p-4 px-10 w-full shadow-lg shadow-gray-500 rounded-lg">
                  <Link passHref={true} href={`/product/${item.slug}`}>
                    <div className="block relative h-[50vh] rounded overflow-hidden  cursor-pointer ">
                      <img
                        alt="e-commerce"
                        className="object-fill object-center w-full h-full m-auto block"
                        src={item.img}
                      />
                    </div>

                    <div className="mt-4 text-center md:text-start">
                      <h3 className="text-gray-500 text-xs tracking-widest mb-1  cursor-pointer">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 text-lg font-medium  cursor-pointer">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-blue-500">৳{item.price}</p>
                      <p className="mt-1 text-gray-600 text-sm">
                        S, M, L, XL, XXL
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

  let products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Tshirts;
