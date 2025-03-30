// app/store/cart/page.tsx
"use client"; // Para usar useStore en el cliente
import useStore from "@/src/store";
import Image from "next/image";

export default function CartPage() {
  const { cart } = useStore();

  // Calcular total (simple)
  const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="max-w-7xl mx-auto p-4">
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
