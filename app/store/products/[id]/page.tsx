"use client";
import { db } from "@/data/informacionDB";
import { nuevosVideojuegos } from "@/data/ofertasDB";
import Image from "next/image";
import useStore from "@/src/store";
import { useRouter } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: Params) {
  const router = useRouter();
  const { addToCart } = useStore();

  const productId = Number(params.id);
  // Unificamos ambas bases de datos para buscar el producto
  const allGames = [...db, ...nuevosVideojuegos];
  const product = allGames.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Producto no encontrado</h1>
      </div>
    );
  }

  // Botón "Comprar ahora": Agrega y redirige
  const handleBuyNow = () => {
    addToCart(product);
    router.push("/store/cart");
  };

  // Botón "Añadir al carrito": Solo agrega, sin redirigir
  const handleAddToCart = () => {
    addToCart(product);
    alert("Producto añadido al carrito");
  };

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="border p-4 rounded-md">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="text-2xl font-semibold text-green-600 mb-4">
          ${product.price}
        </div>
        <p className="mb-4">
          <span className="font-semibold">Tipo:</span> {product.type}
        </p>

        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="font-semibold">Envío gratis</p>
          <p className="text-sm text-gray-600">
            Recíbelo en 2-5 días hábiles
          </p>
        </div>

        {/* Contenedor de botones */}
        <div className="flex gap-4">
          {/* Botón "Añadir al carrito" */}
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Añadir al carrito
          </button>

          {/* Botón "Comprar ahora" */}
          <button
            onClick={handleBuyNow}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}
