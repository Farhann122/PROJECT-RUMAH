import React from "react";
import Navbar from "../Component/Navbar";
import Tentang1 from "../Component/TentangSection/Tentang1";
import Tentang2 from "../Component/TentangSection/Tentang2";
import Tentang3 from "../Component/TentangSection/Tentang3";
import Footer from "../Component/Footer";
import Section7 from "../Component/HomeSection/Section7";
import Tentang4 from "../Component/TentangSection/Tentang4";

const Tentang = () => {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <Tentang1 />
      <Tentang2 />
      <Tentang3 />
      <Tentang4 />
      <Section7 />
      <Footer />
    </main>
  );
};

export default Tentang;
