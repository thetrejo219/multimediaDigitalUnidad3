// Nueva lista con títulos adicionales y la propiedad "oferta"

import { VideojuegosDB } from "./informacionDB";

// Se define un tipo extendido que incluye "oferta"
export type VideojuegosConOferta = VideojuegosDB & {
    oferta: boolean;
  };
  
  export const nuevosVideojuegos: VideojuegosConOferta[] = [
    {
      id: 12,
      name: 'GRAND THEFT AUTO V',
      image: '/gta5.jpg',
      description:
        'Explora la ciudad de Los Santos en este juego de acción y aventura en mundo abierto, lleno de misiones, coches y caos urbano.',
      price: 600,
      type: 'action-adventure',
      oferta: true,
    },
    {
      id: 13,
      name: 'CALL OF DUTY: MODERN WARFARE',
      image: '/callofduty.jpeg',
      description:
        'Experimenta la intensidad de los combates modernos en este FPS con una campaña inmersiva y un robusto modo multijugador.',
      price: 700,
      type: 'shooter',
      oferta: false,
    },
    {
      id: 14,
      name: 'MINECRAFT',
      image: '/minecraft.jpeg',
      description:
        'Un juego sandbox que te permite construir y explorar mundos infinitos, lleno de creatividad y aventuras sin límites.',
      price: 300,
      type: 'sandbox',
      oferta: true,
    },
    {
      id: 15,
      name: 'FORTNITE',
      image: '/fortnite.jpeg',
      description:
        'Battle Royale en el que la construcción y la estrategia se unen en intensas partidas multijugador.',
      price: 0,
      type: 'battle royale',
      oferta: false,
    },
  ];