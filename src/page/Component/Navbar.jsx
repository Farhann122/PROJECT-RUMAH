import React from "react";
import LOGO from "../../assets/LOGO.png";

const Navbar = () => {
  return (
    <main className="flex justify-between items-center w-full h-28 pt-8 ">
      <div className="flex items-center ml-32">
        <img src={LOGO} alt="logo" className="w-32 h-32" />
        <h1 className="text-black text-2xl font-bold ">Lorem <span className="text-amber-900">Ipsum</span></h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-4 mr-32 text-gray-500">
          <h1>Beranda</h1>
          <h1>Tentang</h1>
          <h1>Layanan</h1>
          <h1>Karya</h1>
          <h1>Kontak</h1>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
