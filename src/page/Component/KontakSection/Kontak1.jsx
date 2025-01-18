import React from "react";

const Kontak1 = () => {
  return (
    <div className="bg-slate-50 pt-40 flex">
      <div className="w-1/2 h-[600px] text-black">
        <div className="w-full h-full flex  flex-col justify-center px-52">
          <h1 className="text-5xl font-bold pb-6">Ayo Diskusikan Proyek</h1>
          <h1 className="text-5xl font-bold">Anda Selanjutnya</h1>
          <h1 className=" text-black pt-11">
            Isi formulir atau telepon kami untuk menjadwalkan konsultasi gratis.
          </h1>
          <h1 className="pt-11 font-bold">Area Layanan :</h1>
          <h1 className="text-black">Jakarta,Bogor,Depok,Citayem</h1>
          <h1 className="pt-11 text-black">
            Jalan Haji Abdul Muis , Jakarta, Jakartans 1920
          </h1>
          <h1 className="pt-11 text-black">Loremipsum@gmail.com</h1>
          <h1 className="text-black">021-12345678</h1>
        </div>
      </div>
      <div className="w-1/2 text-black">
        <div className="bg-slate-50 text-white py-16 px-44">
          <form>
            {/* Nama Depan dan Nama Belakang */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="namadepan"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Nama Depan *
                </label>
                <input
                  type="text"
                  id="namadepan"
                  placeholder="Nama Depan"
                  className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="namabelakang"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Nama Belakang *
                </label>
                <input
                  type="text"
                  id="namabelakang"
                  placeholder="Nama Belakang"
                  className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Email dan Telepon */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="telepon"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Telepon
                </label>
                <input
                  type="text"
                  id="telepon"
                  placeholder="Telepon"
                  className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Alamat */}
            <div className="mb-6">
              <label
                htmlFor="alamat"
                className="block text-sm font-medium text-black mb-2"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                placeholder="Alamat"
                className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Subjek */}
            <div className="mb-6">
              <label
                htmlFor="subjek"
                className="block text-sm font-medium text-black mb-2"
              >
                Subjek
              </label>
              <input
                type="text"
                id="subjek"
                placeholder="Subjek"
                className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Pesan */}
            <div className="mb-6">
              <label htmlFor="pesan" className="block text-sm font-medium text-black mb-2">
                Ketik pesan Anda di sini..
              </label>
              <textarea
                id="pesan"
                rows="4"
                placeholder="Tulis pesan Anda..."
                className="w-full border-b border-gray-500 bg-slate-50 text-black focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-zinc-900 w-full text-white px-6 py-3 font-medium  rounded hover:bg-gray-300"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontak1;
