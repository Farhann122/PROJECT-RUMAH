import React from 'react'
import layanandapur from '../../assets/layanandapur.jpg'
import layanantoilet from '../../assets/layanantoilet.jpg'
import layananinterior from '../../assets/layananinterior.jpg'


const Section4 = () => {
  return (
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
  )
}

export default Section4