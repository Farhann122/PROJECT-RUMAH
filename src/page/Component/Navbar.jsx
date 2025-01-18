import React from "react";
import LOGO from "../../assets/LOGO.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-50  z-50">
      <div className="flex justify-between items-center w-full h-20 px-8 lg:px-32">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LOGO} alt="logo" className="w-12 h-12" />
          <h1 className="text-black text-2xl font-bold ml-4">
            Lorem <span className="text-amber-900">Ipsum</span>
          </h1>
        </div>

        
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <a
            href="/"
            className="hover:text-amber-900 transition duration-300"
          >
            Beranda
          </a>
          <a
            href="/tentang"
            className="hover:text-amber-900 transition duration-300"
          >
            Tentang
          </a>
          <a
            href="/layanan"
            className="hover:text-amber-900 transition duration-300"
          >
            Layanan
          </a>
          <a
            href="/karya"
            className="hover:text-amber-900 transition duration-300"
          >
            Karya
          </a>
          <a
            href="/kontak"
            className="hover:text-amber-900 transition duration-300"
          >
            Kontak
          </a>
        </div>

        
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none">
          
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
