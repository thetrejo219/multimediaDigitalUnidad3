"use client"
import CategoryCards from '@/components/CategoryCards';
import ImagenCarrusel from '@/components/ImagenCarrusel';
import { db } from '@/data/informacionDB';
import useStore from '@/src/store';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function page() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);

  // Filtrar juegos (si lo necesitas)
  const filteredGames = db.filter(
    (game) =>
      game.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType === "all" ||
        game.type.toLowerCase() === selectedType.toLowerCase())
  );

  const { cart, addToCart, increaseQuantity, decreaseQuantity, total } = useStore();

  return (
    <>
      <div className="w-full">
        <ImagenCarrusel />
      </div>
      <div className="relative">
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="fixed top-30 right-11 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 z-50"
        >
          Carrito
        </button>

        <CategoryCards />

        {/* Listado de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((articulo) => (
            <div
              key={articulo.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              {/* Imagen y nombre enlazados al detalle */}
              <Link href={`/store/products/${articulo.id}`} className="block">
                <Image
                  src={articulo.image}
                  height={200}
                  width={200}
                  alt={articulo.name}
                  className="mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4">{articulo.name}</h2>
              </Link>

              <p className="text-sm text-gray-600 mt-2">{articulo.description}</p>
              <p className="font-bold">${articulo.price}</p>
              <p className="text-sm">Tipo: {articulo.type}</p>

              <div className="flex items-center gap-2 mt-4">
                {/* Botón Añadir al Carrito */}
                <button
                  onClick={() => addToCart(articulo)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Añadir al carrito
                </button>

                {/* Botón Ver Detalle */}
                <Link
                  href={`/store/products/${articulo.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carrito Lateral */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l z-40 transition-transform duration-300 ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold">Carrito</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-red-500 font-bold text-lg"
              >
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p>No hay artículos en el carrito</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      <div>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded-lg"
                        >
                          -
                        </button>
                        <span className="px-3 border-t border-b">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t pt-4 mt-4">
              <p className="font-bold text-lg">Total: ${total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
