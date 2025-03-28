"use client";

import { useState } from "react";
import { db } from "@/data/informacionDB";
import Image from "next/image";

type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  type: string;
};

type CartItem = Item & { quantity: number };

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredGames = db.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedType === "all" || game.type.toLowerCase() === selectedType.toLowerCase())
  );

  const addToCart = (item: Item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">
          Game-Stack
        </h1>
      </header>

      {/* Contenido principal */}
      <div className="p-6 relative">
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="fixed top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 z-50"
        >
          🛒 Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>

        {/* Buscador y filtro por tipo */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar videojuego..."
            className="w-full p-2 mb-2 border rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="all">Todos los tipos</option>
            <option value="action-adventure">Action-Adventure</option>
            <option value="platformer">Platformer</option>
            <option value="rpg">RPG</option>
            <option value="shooter">Shooter</option>
            <option value="horror">Horror</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Lista de Videojuegos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((articulo) => (
            <div
              key={articulo.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <Image
                src={`/${articulo.image}`}
                height={200}
                width={200}
                alt={articulo.name}
                className="mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{articulo.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{articulo.description}</p>
              <p className="font-bold mt-2">${articulo.price}</p>
              <p className="text-sm text-gray-500">Tipo: {articulo.type}</p>
              <button
                onClick={() => addToCart(articulo)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar del Carrito */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l z-40 transition-transform duration-300 ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold">🛒 Tu Carrito</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-red-500 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p>No hay artículos en el carrito.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image
                      src={`/${item.image}`}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      <div className="flex items-center mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded-l"
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
              {/* Funcionalidad de pago removida */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} Game-Stack. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
