import React, { useEffect } from "react";
import orang from "../../../assets/orang.jpg";
import Aos from "aos";


const Section5 = () => {
   useEffect
       (() => {
          Aos.init({
            duration: 1400,
            once: true,
          });
        }, []);
  return (
    <div className="bg-gray-50 py-16 pb-28" data-aos="fade-up">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">Pelanggan yang Puas</h1>
        <p className="text-gray-600 mt-4">
          Kami bangga telah memberikan layanan terbaik bagi pelanggan kami.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-12">
        {/* Testimonial 1 */}
        <div className="w-[300px] bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src={orang}
            alt="Foto Pelanggan"
            className="w-28 h-24 mx-auto bg-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-black">Lorem Ipsum</h3>
          <p className="text-sm text-gray-500 mb-4">Pengusaha</p>
          <p className="text-gray-600 italic">
            "Layanan yang sangat profesional dan hasil renovasi yang luar biasa!
            Saya sangat puas dengan hasilnya."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="w-[300px] bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src={orang}
            alt="Foto Pelanggan"
            className="w-28 h-24 mx-auto bg-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-black">Lorem Ipsum</h3>
          <p className="text-sm text-gray-500 mb-4">Ibu Rumah Tangga</p>
          <p className="text-gray-600 italic">
            "Timnya sangat cepat dan hasilnya luar biasa! Dapur saya sekarang
            terlihat seperti dapur impian saya."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="w-[300px] bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src={orang}
            alt="Foto Pelanggan"
            className="w-28 h-24 mx-auto bg-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-black">Lorem Ipsum</h3>
          <p className="text-sm text-gray-500 mb-4">Desainer Interior</p>
          <p className="text-gray-600 italic">
            "Pelayanan yang sangat ramah dan hasil akhir yang sesuai dengan
            harapan. Saya merekomendasikan kepada siapa saja."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
