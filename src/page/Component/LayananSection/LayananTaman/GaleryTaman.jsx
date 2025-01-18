import React from "react";

const GaleryTaman = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/chinese-garden-n-zurich_1112-1143.jpg?t=st=1737190796~exp=1737194396~hmac=40d8a4a53fccc90734066426343418de553a8f16e54bef12c127b89e494a21bd&w=1380",
    },
    {
      src: "https://img.freepik.com/free-photo/chinese-garden-n-zurich_1112-1143.jpg?t=st=1737190796~exp=1737194396~hmac=40d8a4a53fccc90734066426343418de553a8f16e54bef12c127b89e494a21bd&w=1380",
    },
    {
      src: "https://img.freepik.com/free-photo/chinese-garden-n-zurich_1112-1143.jpg?t=st=1737190796~exp=1737194396~hmac=40d8a4a53fccc90734066426343418de553a8f16e54bef12c127b89e494a21bd&w=1380",
    },
    {
      src: "https://img.freepik.com/free-photo/chinese-garden-n-zurich_1112-1143.jpg?t=st=1737190796~exp=1737194396~hmac=40d8a4a53fccc90734066426343418de553a8f16e54bef12c127b89e494a21bd&w=1380",
    },
    {
      src: "https://img.freepik.com/free-photo/chinese-garden-n-zurich_1112-1143.jpg?t=st=1737190796~exp=1737194396~hmac=40d8a4a53fccc90734066426343418de553a8f16e54bef12c127b89e494a21bd&w=1380",
    },
    {
      src: "https://img.freepik.com/free-photo/chinese-garden-n-zurich_1112-1143.jpg?t=st=1737190796~exp=1737194396~hmac=40d8a4a53fccc90734066426343418de553a8f16e54bef12c127b89e494a21bd&w=1380",
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

export default GaleryTaman;
