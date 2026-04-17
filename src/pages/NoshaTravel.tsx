import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tourAndTravel from "@/assets/tour and travel.jpg";
import chengdu from "@/assets/chengdu.jpg";
import shenzhen from "@/assets/shenzhen.jpg";

const NoshaTravel = () => {
  const images = [
    { src: tourAndTravel, alt: "Tour and Travel" },
    { src: chengdu, alt: "Chengdu" },
    { src: shenzhen, alt: "Shenzhen" },
    { src: chengdu, alt: "Chengdu" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${tourAndTravel})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Nosha Tour & Travel</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-center">
            Explore travel experiences, curated tours, and seamless booking services across East Africa and beyond.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready for your next adventure?</h2>
          <p className="text-lg mb-8">Contact us to book your dream vacation today!</p>
          <Link to="/tourContact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Reserve Now
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default NoshaTravel;
