"use client";
import { useEffect, useState } from "react";
import useStore from "@/src/store";
import Image from "next/image";

interface User {
  id: number;
  email: string;
  name: string;
  // Agrega otras propiedades si tu endpoint retorna más datos
}

export default function CartPage() {
  const { cart } = useStore();
  const [user, setUser] = useState<User | null>(null);

  // Al montar el componente, hacemos fetch de la info del usuario
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Usamos la variable de entorno pública para enviar la petición al backend
        const res = await fetch(`http://localhost:5000/api/auth/user`, { credentials: "include" });
        if (!res.ok) throw new Error("Error al obtener el usuario");

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  // Calcular total
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Mostrar la información del usuario si existe */}
      {user && (
        <div className="mb-4">
          <p className="text-lg font-semibold">Bienvenido, {user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en la cesta.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-sm">Cantidad: {item.quantity || 1}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">Total: ${total}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
            Proceder a pagar
          </button>
        </div>
      )}
    </div>
  );
}
