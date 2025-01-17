import React from "react";
import dapur from "../../../assets/dapur.jpg";
import bathroom from "../../../assets/bathroom.jpg";
import interior from "../../../assets/interior.jpg";
import eksterior from "../../../assets/eksterior.jpg";
import tentang from "../../../assets/tentang.jpg";
import garden from "../../../assets/garden.jpg";

const Layanan1 = () => {
  return (
    <main className="pt-40 min-h-screen bg-slate-50">
      <div className="justify-center flex flex-col items-center gap-4">
        <h1 className="text-4xl text-black  font-bold">Layanan Kami</h1>
        <h2 className="font-extralight">
          Bantu kami mewujudkan rumah impian Anda menjadi kenyataan.
        </h2>
      </div>
      <div className="grid grid-cols-3  px-20 py-16 gap-16">
        <div className=" h-[400px]">
          <div>
            <img
              src={dapur}
              className="bg-cover bg-no-repeat h-[400px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col justify-center items-center text-center">
            <h1 className="text-black font-semibold  text-2xl  pt-14">Dapur</h1>
            <h2 className="font-extralight pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores totam, sed neque alias modi voluptate tempora
              molestiae qui amet dolor ab soluta vero quos porro numquam
              suscipit quidem voluptatibus!
            </h2>
          </div>
        </div>
        <div className=" h-[400px]">
          <div>
            <img
              src={bathroom}
              className="bg-cover bg-no-repeat h-[400px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col justify-center items-center text-center">
            <h1 className="text-black font-semibold  text-2xl  pt-14">
              Kamar Mandi
            </h1>
            <h2 className="font-extralight pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores totam, sed neque alias modi voluptate tempora
              molestiae qui amet dolor ab soluta vero quos porro numquam
              suscipit quidem voluptatibus!
            </h2>
          </div>
        </div>
        <div className=" h-[400px]">
          <div>
            <img
              src={interior}
              className="bg-cover bg-no-repeat h-[400px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col justify-center items-center text-center">
            <h1 className="text-black font-semibold  text-2xl  pt-14">
              Interior
            </h1>
            <h2 className="font-extralight pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores totam, sed neque alias modi voluptate tempora
              molestiae qui amet dolor ab soluta vero quos porro numquam
              suscipit quidem voluptatibus!
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  px-20 py-16 gap-16 pt-72 pb-72">
        <div className=" h-[400px]">
          <div>
            <img
              src={eksterior}
              className="bg-cover bg-no-repeat h-[400px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col justify-center items-center text-center">
            <h1 className="text-black font-semibold  text-2xl  pt-14">eksterior</h1>
            <h2 className="font-extralight pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores totam, sed neque alias modi voluptate tempora
              molestiae qui amet dolor ab soluta vero quos porro numquam
              suscipit quidem voluptatibus!
            </h2>
          </div>
        </div>
        <div className=" h-[400px]">
          <div>
            <img
              src={garden}
              className="bg-cover bg-no-repeat h-[400px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col justify-center items-center text-center">
            <h1 className="text-black font-semibold  text-2xl  pt-14">
              Taman
            </h1>
            <h2 className="font-extralight pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores totam, sed neque alias modi voluptate tempora
              molestiae qui amet dolor ab soluta vero quos porro numquam
              suscipit quidem voluptatibus!
            </h2>
          </div>
        </div>
        <div className=" h-[400px]">
          <div>
            <img
              src={tentang}
              className="bg-cover bg-no-repeat h-[400px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col justify-center items-center text-center">
            <h1 className="text-black font-semibold  text-2xl  pt-14">
              Ruang Tamu
            </h1>
            <h2 className="font-extralight pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores totam, sed neque alias modi voluptate tempora
              molestiae qui amet dolor ab soluta vero quos porro numquam
              suscipit quidem voluptatibus!
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layanan1;
