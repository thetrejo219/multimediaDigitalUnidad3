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
};

type CartItem = Item & { quantity: number };

export default function Home() {
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentResult, setPaymentResult] = useState<any>(null);

  const filteredGames = db.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
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

  const handleCheckout = async () => {
    // En una integración real, usarías el SDK de Mercado Pago para obtener:
    // token, paymentMethodId, issuer, installments, etc.
    // Aquí usamos datos simulados para el ejemplo.
    const paymentData = {
      transaction_amount: total,
      token: "test-token", // Token generado por el SDK en producción
      description: "Compra de videojuegos",
      installments: 1,
      paymentMethodId: "visa", // Ejemplo; en producción lo obtendrías del SDK
      issuer: "dummy", // Ejemplo; en producción lo obtendrías del SDK
      payer: {
        email: "cliente@example.com", // Podrías pedirle al usuario
        docType: "DNI",
        docNumber: "12345678",
      },
    };

    try {
      const res = await fetch(`http://localhost:4000/process-payment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentData),
        }
      );

      // Check if the request was successful
    if (!res.ok) {
      // If not successful, parse the error and show an error message
      const errorData = await res.json();
      console.error("Payment error:", errorData);
      alert("Error al procesar el pago");
      return;
    }

      const data = await res.json();
      setPaymentResult(data);
      // Vaciar el carrito tras el pago
      setCart([]);
      alert("Pago realizado correctamente");
    } catch (error) {
      console.error("Error al procesar el pago", error);
      alert("Error al procesar el pago");
    }
  };

  return (
    <div className="p-6 relative">
      {/* Botón para abrir/cerrar el carrito */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="fixed top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 z-50"
      >
        🛒 Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </button>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar videojuego..."
        className="w-full p-2 mb-6 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
            <button
              onClick={handleCheckout}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>

      {paymentResult && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="font-bold">Resultado del pago:</h3>
          <pre>{JSON.stringify(paymentResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
