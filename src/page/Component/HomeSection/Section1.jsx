import React, { useEffect } from "react";
import GambarHome from "../../../assets/GambarHome.jpg";
import 'aos/dist/aos.css';
import { use } from "react";
import Aos from "aos";


const Section1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="flex justify-center pt-40">
      <div
        className="w-[1650px] h-[700px] bg-fixed bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(${GambarHome})` }}
      >
        {/* Content Overlay */}
        <div className="w-full h-full flex justify-start items-center bg-black bg-opacity-30 rounded-xl">
          <div className="ml-16">
            <h1 className="text-white text-8xl font-bold" data-aos="fade-up">
              <h1>Perusahaan</h1>
              Remodeling & <h1>Renovasi Terkemuka</h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
