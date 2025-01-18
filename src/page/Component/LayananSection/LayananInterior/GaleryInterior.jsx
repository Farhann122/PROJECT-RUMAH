import React from "react";

const GaleryInterior = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?t=st=1737189892~exp=1737193492~hmac=3bdcd68ad3c981696459f1e6e6981ccaa99852559af703c05bbb99a5eab1a449&w=996",
    },
    {
      src: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?t=st=1737189892~exp=1737193492~hmac=3bdcd68ad3c981696459f1e6e6981ccaa99852559af703c05bbb99a5eab1a449&w=996",
    },
    {
      src: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?t=st=1737189892~exp=1737193492~hmac=3bdcd68ad3c981696459f1e6e6981ccaa99852559af703c05bbb99a5eab1a449&w=996",
    },
    {
      src: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?t=st=1737189892~exp=1737193492~hmac=3bdcd68ad3c981696459f1e6e6981ccaa99852559af703c05bbb99a5eab1a449&w=996",
    },
    {
      src: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?t=st=1737189892~exp=1737193492~hmac=3bdcd68ad3c981696459f1e6e6981ccaa99852559af703c05bbb99a5eab1a449&w=996",
    },
    {
      src: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?t=st=1737189892~exp=1737193492~hmac=3bdcd68ad3c981696459f1e6e6981ccaa99852559af703c05bbb99a5eab1a449&w=996",
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
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleryInterior;
