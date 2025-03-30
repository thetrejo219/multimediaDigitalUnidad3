'use client'

import React, { useState } from 'react';

const ImagenCarrusel = () => {
  // Lista de imágenes para el carrusel
  const images = [
    '/Imagen1.png', // Asegúrate de tener estas imágenes en tu carpeta public
    '/Imagen2.png',
    '/Imagen3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Mueve al siguiente índice
  };

  // Función para cambiar a la imagen anterior
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Mueve al índice anterior
    );
  };

  return (
    <div className="relative w-full h-96">
      {/* Contenedor de imagen */}
      <div className="overflow-hidden relative w-full h-full">
        <img
          src={`${images[currentIndex]}`}
          alt={`Image ${currentIndex + 1}`}
          className="object-cover object-center w-full h-full transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg z-10"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg z-10"
        onClick={nextImage}
      >
        &gt;
      </button>

      {/* Indicadores de imagen */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImagenCarrusel;
