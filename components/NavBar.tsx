"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-slate-200 fixed top-0 left-0 right-0 z-10 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-1 md:block">
            {/* LOGO */}
            <Link href="/dashboard">
              <Image src={"/Logo.png"} alt="logo" width={100} height={10} />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <Image src="/close.svg" width={20} height={20} alt="logo" />
                ) : (
                  <Image
                    src="/menu.svg"
                    width={20}
                    height={20}
                    alt="logo"
                    className="focus:border-none active:border-none text-zinc-200"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}>
            <ul className="h-screen md:h-auto items-center justify-center  md:flex ">
              <li className="sm:p-2 sm:m-2 rounded-md  text-md text-zinc-900 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-slate-300  hover:text-zinc-900 ">
                <Link href="/dashboard" onClick={() => setNavbar(!navbar)}>
                  Dashboard
                </Link>
              </li>
              <li className="sm:p-2 sm:m-2 rounded-md  text-md text-zinc-900 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:bg-slate-300    hover:text-zinc-900 ">
                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                  Blogs
                </Link>
              </li>
              <li className="sm:p-2 sm:m-2 rounded-md text-md text-zinc-900 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-slate-300   hover:text-zinc-900 ">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
              <li className="sm:p-2 sm:m-2 rounded-md text-md text-zinc-900 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:bg-slate-300  hover:text-zinc-900 ">
                <Link
                  href="/dashboard/about"
                  onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
