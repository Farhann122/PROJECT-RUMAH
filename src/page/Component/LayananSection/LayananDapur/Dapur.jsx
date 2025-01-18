import React from "react";
import Navbar from "../../Navbar";
import Tentang4 from "../../TentangSection/Tentang4";
import Footer from "../../Footer";
import GaleryDapur from "./GaleryDapur";
import Section7 from "../../HomeSection/Section7";

const Dapur = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-40 min-h-screen bg-slate-50">
        <div className="justify-center flex flex-col items-center gap-4">
          <h1 className="text-4xl text-black  font-bold">Dapur</h1>
          <h2 className="font-extralight">
            Bantu kami mewujudkan rumah impian Anda menjadi kenyataan.
          </h2>
        </div>

        <GaleryDapur />
      </div>
      <Tentang4 />
      <Section7 />
      <Footer />
    </main>
  );
};

export default Dapur;
