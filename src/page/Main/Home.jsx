import React from "react";
import Navbar from "../Component/Navbar";
import Section1 from "../Component/HomeSection/Section1";
import Section2 from "../Component/HomeSection/Section2";
import Section3 from "../Component/HomeSection/Section3";
import Section4 from "../Component/HomeSection/Section4";
import Section5 from "../Component/HomeSection/Section5";
import Section6 from "../Component/HomeSection/Section6";
import Section7 from "../Component/HomeSection/Section7";
import Footer from "../Component/Footer";




const Home = () => {
  return (
    <main className="w-full min-h-screen bg-slate-50">
   <Navbar/>
   <Section1/>
    
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </main>
  );
};

export default Home;
