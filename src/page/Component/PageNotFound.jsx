import React from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi kembali ke halaman utama

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-yellow-500">
      <div className="text-center text-white">
        {/* Bagian Icon */}
        <div className="flex justify-center">
          <svg
            className="w-32 h-32 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>

        {/* Teks 404 */}
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Page Not Found</h2>

        {/* Deskripsi */}
        <p className="mb-8 text-lg">
         LO NYARI APASI 
        </p>

        {/* Tombol Kembali ke Beranda */}
        <button
          onClick={goHome}
          className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-200"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
