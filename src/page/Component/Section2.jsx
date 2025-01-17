import React from "react";
import dapur from "../../assets/dapur.jpg";


const Section2 = () => {
  return (
    <div className="flex justify-center items-center pt-12 ml-32 mr-32">
      {/* Gambar Dapur */}
      <div
        className="w-1/2 h-[600px]  bg-center bg-cover rounded-xl shadow-lg"
        style={{ backgroundImage: `url(${dapur})` }}
      ></div>

      {/* Teks */}
      <div className="w-1/2 pl-12 flex flex-col  ">
        <h1 className="text-4xl font-bold text-gray-800 ml-36 ">
          Pelopor Industri
        </h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 ml-36">
          Remodeling di Citayem
        </h1>
        <p className="text-lg text-black font-light mb-6 ml-36 mr-60 text-justify">
          Kami menyediakan layanan terbaik untuk merancang dan membangun dapur
          impian Anda. Dengan pengalaman bertahun-tahun, kami telah menjadi
          pilihan utama bagi mereka yang mencari kualitas dan inovasi dalam
          renovasi rumah.
        </p>
        <button className="mt-8 ml-36 w-[170px] h-[45px] bg-black text-white  hover:bg-amber-800 transition">
          Tentang Kami
        </button>
      </div>
    </div>
  );
};

export default Section2;
