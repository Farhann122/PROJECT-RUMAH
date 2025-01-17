import React from "react";
import GambarHome from "../../../assets/GambarHome.jpg";
import tentang from "../../../assets/tentang.jpg";

const Tentang1 = () => {
  return (
    <main className="pt-40 min-h-screen">
      <div className="flex flex-col items-center  justify-center">
        <h1 className="font-bold text-4xl py-6">Tentang Lorem Ipsum</h1>
        <h2 className="px-96  font-extralight  text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          officiis consectetur fugiat nemo illo eos debitis itaque ipsa
          perspiciatis harum, autem quasi maiores nobis nisi iste sapiente
          porro! Aliquam ut numquam totam saepe quidem ipsam ab molestias,
          laboriosam corporis perferendis qui autem molestiae temporibus
          delectus illo dolorem deserunt, quaerat voluptas!
        </h2>
      </div>
       <div
              className="w-full mt-36 h-[700px] bg-fixed bg-center bg-cover "
              style={{ backgroundImage: `url(${tentang})` }}
            ></div>
    </main>
  );
};

export default Tentang1;
