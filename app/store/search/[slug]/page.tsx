// app/categoria/[slug]/page.tsx
import { db } from "@/data/informacionDB";
import { nuevosVideojuegos } from "@/data/ofertasDB";
import Link from "next/link";

type Props = {
  params: {
    slug: string; // Ej: "action-adventure"
  };
};

export default function CategoryPage({ params: { slug } }: Props) {
  // Unificamos ambos arreglos (opcional). Así mostramos todos los juegos.
  // Si quieres solo los del arreglo principal, elimina "nuevosVideojuegos".
  const allGames = [...db, ...nuevosVideojuegos];

  // Filtramos los juegos por "type"
  const filteredGames = allGames.filter(
    (game) => game.type.toLowerCase() === slug.toLowerCase()
  );

  // Si no hay juegos, podríamos mostrar un mensaje
  if (filteredGames.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          No hay juegos para la categoría: {slug}
        </h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Categoría: {slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((articulo) => (
          <Link
            key={articulo.id}
            href={`/store/products/${articulo.id}`}
            className="block"
          >
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
              <img
                src={articulo.image}
                alt={articulo.name}
                className="mx-auto w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4">{articulo.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{articulo.description}</p>
              <p className="font-bold">${articulo.price}</p>
              <p className="text-sm">Tipo: {articulo.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
