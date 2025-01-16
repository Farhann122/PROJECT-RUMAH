import React from "react";
import Navbar from "./Navbar";
import GambarHome from "../../assets/GambarHome.jpg";
import dapur from "../../assets/dapur.jpg";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-slate-50 ">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Parallax Section 1 */}
      <div className="flex justify-center pt-14">
        <div
          className="w-[1650px] h-[700px] bg-fixed bg-center bg-cover rounded-xl"
          style={{ backgroundImage: `url(${GambarHome})` }}
        >
          {/* Content Overlay */}
          <div className="w-full h-full flex justify-start items-center bg-black bg-opacity-30 rounded-xl">
            <div className="ml-16">
              <h1 className="text-white text-8xl font-bold">
                <h1>Perusahaan</h1>
                Remodeling & <h1>Renovasi Terkemuka</h1>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Section 2 */}
      <div className="flex ml-32 pt-14">
        <div
          className="w-[800px] h-[600px]  bg-center bg-cover   "
          style={{ backgroundImage: `url(${dapur})` }}
        >
          {/* Content Overlay */}
        
        </div>
      </div>

    </main>
  );
};

export default Home;
