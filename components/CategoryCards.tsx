// components/CategoryCarousel.tsx
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Category {
  name: string;
  description: string;
  icon: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "Action-Adventure",
    description: "Explora mundos épicos llenos de acción y aventura.",
    icon: "/icons/action-adventure.svg",
    link: "/categoria/action-adventure",
  },
  {
    name: "Platformer",
    description: "Disfruta de saltos precisos y niveles desafiantes.",
    icon: "/icons/platformer.svg",
    link: "/categoria/platformer",
  },
  {
    name: "RPG",
    description: "Sumérgete en historias envolventes y evoluciona a tu héroe.",
    icon: "/icons/rpg.svg",
    link: "/categoria/rpg",
  },
  {
    name: "Shooter",
    description: "Experimenta acción frenética y disparos intensos.",
    icon: "/icons/shooter.svg",
    link: "/categoria/shooter",
  },
  {
    name: "Horror",
    description: "Vive momentos escalofriantes y siente el terror en cada rincón.",
    icon: "/icons/horror.svg",
    link: "/categoria/horror",
  },
  {
    name: "Sports",
    description: "Disfruta de la emoción del deporte en cada juego.",
    icon: "/icons/sports.svg",
    link: "/categoria/sports",
  },
];

export default function CategoryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 bg-gray-100 relative ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Categorías
        </h2>
        <div className="relative">
          {/* Contenedor del carrusel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth"
          >
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.link}
                className="min-w-[250px] flex-shrink-0 bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-center">{cat.description}</p>
              </Link>
            ))}
          </div>

          {/* Botón para desplazarse a la izquierda */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>

          {/* Botón para desplazarse a la derecha */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
