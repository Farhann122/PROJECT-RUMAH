import React from "react";
import { AiFillInstagram, AiFillWechat, AiOutlineMail } from "react-icons/ai";

const Section7 = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h4 className=" font-semibold mb-4">Lorem Ipsum</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            esse?
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <i className="fab fa-twitter text-white">
                <AiFillWechat/>
              </i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <i className="fab fa-facebook text-white">
                <AiFillInstagram />
              </i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <i className="fab fa-instagram text-white">
                <AiOutlineMail/>
              </i>
            </a>
          </div>
        </div>

        <div>
          <h4 className=" font-semibold mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>

   
        <div>
          <h4 className=" font-semibold mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tentang
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Karya
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Layanan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Tentang
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Layanan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Karya
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold mb-4">Punya Pertanyaan ?</h4>
          <p className="text-sm mb-2">
            <i className=" "></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            mollitia{" "}
          </p>
          <p className="text-sm mb-2">
            <i className=""></i>
            0865919393
          </p>
          <p className="text-sm">
            <i className=""></i>
            Loremipsum@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Section7;
