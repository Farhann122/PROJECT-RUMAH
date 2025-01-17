import React from "react";
import Navbar from "../Component/Navbar";
import Section1 from "../Component/Section1";
import Section2 from "../Component/Section2";
import Section3 from "../Component/Section3";
import Section4 from "../Component/Section4";
import Section5 from "../Component/Section5";
import Section6 from "../Component/Section6";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <div>
        <Navbar />
      </div>
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>

      <div>
        <Section3 />
      </div>

      <div>
        <Section4 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section6 />
      </div>
    </main>
  );
};

export default Home;
