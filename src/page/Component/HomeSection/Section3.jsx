import React from 'react'

const Section3 = () => {
  return (
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
  )
}

export default Section3