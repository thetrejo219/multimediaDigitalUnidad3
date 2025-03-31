"use client";
import { db } from "@/data/informacionDB";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Filtra los artículos que coincidan con la búsqueda
  const filteredArticles = search
    ? db.filter((articulo) =>
        articulo.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Sección Izquierda: Logo y navegación */}
        <div className="flex items-center gap-10 flex-shrink-0">
          <h1 className="text-2xl font-bold">
            <Link
              href={'/'}
            >
              Game-Stack
            </Link>
          </h1>
          <nav className="flex gap-5">
            <Link href="/store/cart" className="hover:text-gray-200">
              Carrito
            </Link>
            <Link href="/store/ofertas" className="hover:text-gray-200">
              Ofertas
            </Link>
          </nav>
        </div>

        {/* Sección Central: Campo de búsqueda con autocompletado */}
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border rounded-md text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Retraso para permitir el clic en las sugerencias
              setTimeout(() => setIsFocused(false), 100);
            }}
          />

          {/* Menú desplegable de sugerencias */}
          {isFocused && filteredArticles.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black border rounded-md shadow-md z-10">
              {filteredArticles.map((articulo) => (
                <li
                  key={articulo.id}
                  className="flex items-center justify-between gap-3 px-4 py-2 hover:bg-gray-100"
                >
                  {/* Contenedor Izquierdo: Imagen + Nombre + Precio */}
                  <div className="flex items-center gap-3">
                    <img
                      src={articulo.image}
                      alt={articulo.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{articulo.name}</span>
                      <span className="text-sm text-gray-700">
                        ${articulo.price}
                      </span>
                    </div>
                  </div>

                  {/* Botón "Ver producto" en la parte derecha */}
                  <Link
                    href={`/store/products/${articulo.id}`}
                    className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
                  >
                    Ver producto
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sección Derecha: Enlaces de autenticación */}
        <div className="flex items-center gap-5 flex-shrink-0">
          <Link href="/store/auth/create-account" className="hover:text-gray-200">
            Crear una cuenta
          </Link>
          <Link href="/store/auth/login" className="hover:text-gray-200">
            Iniciar Sesion
          </Link>
        </div>
      </div>
    </header>
  );
}
