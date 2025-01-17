import React from "react";
import proses1 from "../../../assets/proses1.jpg";
import proses2 from "../../../assets/proses2.jpg";
import proses3 from "../../../assets/proses3.jpg";
import proses4 from "../../../assets/proses4.jpg";

const Tentang2 = () => {
  return (
    <main className="bg-slate-50 pt-28 min h-screen">
      <div className="flex flex-col items-center  justify-center">
        <h1 className="font-bold text-4xl py-6">Proses Kami</h1>
        <h2 className="px-96  font-extralight  text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          officiis consectetur fugiat nemo illo eos debitis itaque ipsa
          perspiciatis harum, autem quasi maiores nobis nisi iste sapiente
          porro! Aliquam ut numquam totam saepe quidem ipsam ab molestias,
          laboriosam corporis perferendis qui autem molestiae temporibus
          delectus illo dolorem deserunt, quaerat voluptas!
        </h2>
      </div>
      <div className="grid grid-cols-4 h-96  mt-36">
        <h1 className="bg-yellow-50">
          <img src={proses1} className="" alt="" />
        </h1>
        <h2 className="bg-gray-200">
          <div className="flex flex-col  p-20 justify-center text-center">
            <h1 className="text-black font-bold text-2xl">
              Desain Prakontruksi
            </h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              debitis, excepturi sequi impedit laboriosam error aliquid!
              Quibusdam, asperiores illo! Perspiciatis!
            </h2>
          </div>
        </h2>{" "}
        <h2 className="bg-amber-600">
          <img src={proses2} className="bg-cover  w-full h-[390px]" alt="" />
        </h2>{" "}
        <h2 className="bg-gray-200  h-[384px]">
          <div className="flex flex-col   p-20 justify-center text-center">
            <h1 className="text-black font-bold text-2xl">
              Desain Prakontruksi
            </h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              debitis, excepturi sequi impedit laboriosam error aliquid!
              Quibusdam, asperiores illo! Perspiciatis!
            </h2>
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-4 h-96 bg-black">
        <h2 className="bg-gray-200  h-[390px]">
          <div className="flex flex-col   p-20 justify-center text-center">
            <h1 className="text-black font-bold text-2xl">
              Desain Prakontruksi
            </h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              debitis, excepturi sequi impedit laboriosam error aliquid!
              Quibusdam, asperiores illo! Perspiciatis!
            </h2>
          </div>
        </h2>
        <h2 className="bg-amber-600">
          <img src={proses3} className="bg-cover  w-full h-[390px]" alt="" />
        </h2>{" "}
        <h2 className="bg-gray-200  h-[390px]">
          <div className="flex flex-col   p-20 justify-center text-center">
            <h1 className="text-black font-bold text-2xl">
              Desain Prakontruksi
            </h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              debitis, excepturi sequi impedit laboriosam error aliquid!
              Quibusdam, asperiores illo! Perspiciatis!
            </h2>
          </div>
        </h2>
        <h2 className="bg-amber-600">
          <img src={proses4} className="bg-cover  w-full h-[390px]" alt="" />
        </h2>{" "}
      </div>
     
    </main>
  );
};

export default Tentang2;
