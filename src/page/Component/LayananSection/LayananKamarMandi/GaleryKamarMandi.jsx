import React from "react";

const GaleryKamarMandi = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.jpg?t=st=1737189809~exp=1737193409~hmac=180ec42252bc500b32cf84fde2c8364584325b2e43e64c8b2516329dade1506f&w=1380",
     
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.jpg?t=st=1737189809~exp=1737193409~hmac=180ec42252bc500b32cf84fde2c8364584325b2e43e64c8b2516329dade1506f&w=1380",
     
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.jpg?t=st=1737189809~exp=1737193409~hmac=180ec42252bc500b32cf84fde2c8364584325b2e43e64c8b2516329dade1506f&w=1380",
     
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.jpg?t=st=1737189809~exp=1737193409~hmac=180ec42252bc500b32cf84fde2c8364584325b2e43e64c8b2516329dade1506f&w=1380",
     
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.jpg?t=st=1737189809~exp=1737193409~hmac=180ec42252bc500b32cf84fde2c8364584325b2e43e64c8b2516329dade1506f&w=1380",
     
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-2043.jpg?t=st=1737189809~exp=1737193409~hmac=180ec42252bc500b32cf84fde2c8364584325b2e43e64c8b2516329dade1506f&w=1380",
     
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

export default GaleryKamarMandi;
