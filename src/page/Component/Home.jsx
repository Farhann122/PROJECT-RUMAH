import React from "react";
import Navbar from "./Navbar";
import GambarHome from "../../assets/GambarHome.jpg";
import dapur from "../../assets/dapur.jpg";
import layanandapur from "../../assets/layanandapur.jpg";
import layanantoilet from "../../assets/layanantoilet.jpg";
import layananinterior from "../../assets/layananinterior.jpg";
import orang from "../../assets/orang.jpg";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Parallax Section 1 */}
      <div className="flex justify-center pt-40">
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

      {/* Section 2: Gambar di Kiri, Teks di Kanan */}
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

      {/* section 3 */}
      <div className="pt-16 mb-24 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold ">Alasan Memilih Kami</h1>
          <p className="text-gray-600 mt-4">
            Kami memberikan layanan terbaik dengan keunggulan yang tidak bisa
            Anda lewatkan.
          </p>
        </div>

        {/* Grid Alasan */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-32 ">
          {/* Alasan 1 */}
          <div className="p-6 rounded-xl  text-center">
            <h2 className="text-xl font-bold text-amber-800 mb-4">
              Kualitas Tinggi
            </h2>
            <p className="text-gray-600">
              Kami menjamin hasil kerja dengan standar kualitas terbaik,
              memastikan kepuasan Anda.
            </p>
          </div>

          {/* Alasan 2 */}
          <div className=" p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold text-amber-900 mb-4">
              Harga Kompetitif
            </h2>
            <p className="text-gray-600">
              Harga yang bersaing tanpa mengurangi kualitas layanan yang kami
              berikan.
            </p>
          </div>

          {/* Alasan 3 */}
          <div className=" p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold text-amber-900 mb-4">
              Tim Profesional
            </h2>
            <p className="text-gray-600">
              Tim ahli kami berpengalaman dan berdedikasi untuk memberikan hasil
              terbaik.
            </p>
          </div>
          <div className=" p-6   text-center">
            <h2 className="text-xl font-bold text-amber-900 mb-4">
              Tim Profesional
            </h2>
            <p className="text-gray-600">
              Tim ahli kami berpengalaman dan berdedikasi untuk memberikan hasil
              terbaik.
            </p>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className="pt-16 bg-gray-100">
        <div className="flex justify-center">
          <h1 className="text-black text-4xl font-bold pt-6">
            Layanan Kami Mencakup
          </h1>
        </div>

        <div className="ml-32 mr-32 pt-20 min-h-screen flex justify-center gap-5">
          {/* Layanan Dapur */}
          <div className="relative w-[500px] h-[600px] overflow-hidden rounded-xl">
            <img
              src={layanandapur}
              alt="Dapur"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">Dapur</h1>
            </div>
          </div>

          {/* Layanan Toilet */}
          <div className="relative w-[500px] h-[600px] overflow-hidden rounded-xl">
            <img
              src={layanantoilet}
              alt="Toilet"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">Kamar Mandi</h1>
            </div>
          </div>

          {/* Layanan Interior */}
          <div className="relative w-[500px] h-[600px] overflow-hidden rounded-xl">
            <img
              src={layananinterior}
              alt="Interior"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">Interior</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative bottom-32 ">
          <button className="bg-black w-[200px] h-[40px] hover:bg-amber-800">
            <h1 className="text-white font-extralight">Lihat Semua Layanan</h1>
          </button>
        </div>
      </div>
      <div className="bg-gray-50 py-16 mb-28">
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
              "Layanan yang sangat profesional dan hasil renovasi yang luar
              biasa! Saya sangat puas dengan hasilnya."
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
      <div className="bg-zinc-900  flex">
        <div className="w-1/2 h-[600px] text-white">
          <div className="w-full h-full flex  flex-col justify-center px-52">
            <h1 className="text-5xl font-bold pb-6">Ayo Diskusikan Proyek</h1>
            <h1 className="text-5xl font-bold">Anda Selanjutnya</h1>
            <h1 className="font-extralight text-gray-300 pt-11">
              Isi formulir atau telepon kami untuk menjadwalkan konsultasi
              gratis.
            </h1>
            <h1 className="pt-11 font-bold">Area Layanan :</h1>
            <h1 className="text-gray-300">Jakarta,Bogor,Depok,Citayem</h1>
            <h1 className="pt-11 text-gray-300">Jalan Haji Abdul Muis , Jakarta, Jakartans 1920</h1>
            <h1 className="pt-11 text-gray-300">Loremipsum@gmail.com</h1>
            <h1 className="text-gray-300">021-12345678</h1>
          </div>
        </div>
        <div className="w-1/2  "></div>
      </div>
    </main>
  );
};

export default Home;
