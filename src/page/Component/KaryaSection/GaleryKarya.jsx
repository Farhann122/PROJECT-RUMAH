import dapur from "../../../assets/dapur.jpg";
import bathroom from "../../../assets/bathroom.jpg";
import interior from "../../../assets/interior.jpg";
import eksterior from "../../../assets/eksterior.jpg";
import tentang from "../../../assets/tentang.jpg";
import garden from "../../../assets/garden.jpg";

const GaleryKarya = () => {
  const images = [
    { src: dapur, title: "Kitchen" },
    { src: bathroom, title: "Bathroom" },
    { src: interior, title: "Interior Design" },
    { src: eksterior, title: "Exterior" },
    { src: garden, title: "Garden" },
    { src: tentang, title: "Living Room" },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleryKarya;
