"use client";
import React from "react";
import SubmitButton from "./Button";
import Image from "next/image";
import AddFormActions from "@/actions/Login-Action";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const params = useSearchParams();
  const error = params.get("error");

  // this cause hydration error TODO: need to fix.
  if (error == "not_authenticated") {
    toast.error("Login Please");
  } else {
    null;
  }
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Image src={"/Logo.png"} alt="logo-image" width={130} height={50} />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Cnv Money
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              An asset management company (AMC) is a firm that invests pooled
              funds from clients, putting the capital to work through different
              investments including stocks, bonds, real estate.
            </p>
            {error == "not_authenticated" && (
              <p className="text-red-600">Not Authenticated.</p>
            )}
            <form
              action={AddFormActions}
              className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700">
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Enter your Email."
                  className="mt-1 p-2 w-full h-10 rounded-md border-gray-500 text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700">
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  placeholder="Enter your Password."
                  name="password"
                  className={`mt-1 p-2 w-full h-10 rounded-md border-red-500 bg-white text-sm text-gray-700 shadow-sm 
                  }`}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <SubmitButton />
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default LoginPage;
