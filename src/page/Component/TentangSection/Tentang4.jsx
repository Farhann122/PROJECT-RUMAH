import React from "react";
import { useNavigate } from "react-router-dom";

const Tentang4 = () => {
    const navigate =useNavigate();

    const handleKonsultasi =()=>{
        navigate("/kontak")
    }
  return (
    <main>
      <div className="bg-zinc-900 w-full h-80 flex flex-col items-center justify-center ">
        <h1 className="text-white text-4xl font-bold">Bangun Rumah Impian</h1>
        <h2 className="text-white text-4xl font-bold">Beri Tahu Kami Tentang Proyek Anda Hari Ini</h2>
        <div className="pt-9">
        <button  onClick={handleKonsultasi} className="bg-white w-56 h-10 hover:bg-amber-700 rounded-lg transition font-extralight ">Dapatkan Konsultasi Gratis</button>
        </div>
      </div>
    </main>
  );
};

export default Tentang4;
