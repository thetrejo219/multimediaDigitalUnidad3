"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Sección Izquierda: Logo y navegación */}
        <div className="flex items-center gap-10 flex-shrink-0">
          <h1 className="text-2xl font-bold">Game-Stack</h1>
          <nav className="flex gap-5">
            <Link href="#" className="hover:text-gray-200">
              Facturacion
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Ofertas
            </Link>
          </nav>
        </div>

        {/* Sección Central: Campo de búsqueda (ocupa el espacio restante) */}
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border rounded-md text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
