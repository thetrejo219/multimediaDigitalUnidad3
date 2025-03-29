// app/store/products/[id]/page.tsx
import { db } from "@/data/informacionDB"; // Ajusta la ruta si difiere
import Image from "next/image";

interface Params {
  params: {
    id: string;
  };
}

// Este componente es un Server Component por defecto
export default function ProductDetailPage({ params }: Params) {
  const productId = Number(params.id);

  // En un proyecto real, harías fetch a una API o base de datos
  const product = db.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-8">
      {/* Sección de imágenes */}
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

      {/* Sección de detalle */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="text-2xl font-semibold text-green-600 mb-4">
          ${product.price}
        </div>

        <p className="mb-4">
          <span className="font-semibold">Tipo:</span> {product.type}
        </p>

        {/* Simulando información de envío */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="font-semibold">Envío gratis</p>
          <p className="text-sm text-gray-600">Recíbelo en 2-5 días hábiles</p>
        </div>

        {/* Botón de compra */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
