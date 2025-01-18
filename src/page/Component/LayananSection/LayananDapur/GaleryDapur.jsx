import React from "react";

const GaleryDapur = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178335.jpg?t=st=1737188532~exp=1737192132~hmac=b17cff39f9f5e46798323add849523e4f6f8fead5bb6581d8e465717989c8859&w=1380",
     
    },
  
    {
      src: "https://img.freepik.com/free-photo/cozy-kitchen-interior-design_23-2150306974.jpg?t=st=1737189140~exp=1737192740~hmac=777e13bda0876d8a00485ac63fb9a154db15bf385f53695197c36907cb6b53e8&w=1380",
      
    },
    {
      src: "https://img.freepik.com/free-photo/cozy-kitchen-interior-design_23-2150306974.jpg?t=st=1737189140~exp=1737192740~hmac=777e13bda0876d8a00485ac63fb9a154db15bf385f53695197c36907cb6b53e8&w=1380",
      
    },
    {
      src: "https://img.freepik.com/free-photo/cozy-kitchen-interior-design_23-2150306974.jpg?t=st=1737189140~exp=1737192740~hmac=777e13bda0876d8a00485ac63fb9a154db15bf385f53695197c36907cb6b53e8&w=1380",
      
    },
    {
      src: "https://img.freepik.com/free-photo/cozy-kitchen-interior-design_23-2150306974.jpg?t=st=1737189140~exp=1737192740~hmac=777e13bda0876d8a00485ac63fb9a154db15bf385f53695197c36907cb6b53e8&w=1380",
      
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[650px] ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg  "
            >
              <img
                src={image.src}
                alt={image.title}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleryDapur;
