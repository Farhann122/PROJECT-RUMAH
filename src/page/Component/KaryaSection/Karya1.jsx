import React from "react";
import GaleryKarya from "./GaleryKarya";

const Karya1 = () => {
  return (
    <main className="pt-40 min-h-screen bg-slate-50">
      <div className="justify-center flex flex-col items-center gap-4">
        <h1 className="text-4xl text-black  font-bold">Karya Kami</h1>
        <h2 className="font-extralight">
          Bantu kami mewujudkan rumah impian Anda menjadi kenyataan.
        </h2>
      </div>

      <GaleryKarya />
    </main>
  );
};

export default Karya1;
