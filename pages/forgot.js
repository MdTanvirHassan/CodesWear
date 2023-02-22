import React from "react";
import Link from "next/link";
import Company from "../public/assets/nav.png";
import Image from "next/image";

const Forgot = () => {
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href={"/"}>
              <Image
                className="mx-auto"
                src={Company}
                alt="Company"
                width={200}
                 height={40}
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link
                href="/login"
                className="font-medium text-pink-600 hover:text-pink-500 mx-2">
                Login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-4 rounded-md shadow-sm">
              
              <div>
                <label forhtml="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
