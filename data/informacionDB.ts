export type VideojuegosDB = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  type: string;
}

export const db: VideojuegosDB[] = [
  {
    id: 1,
    name: 'THE LEGEND OF ZELDA: BOTW',
    image: '/zelda.jpeg',
    description:
      'Embárcate en una aventura épica en un vasto mundo abierto repleto de misterios y desafíos. Descubre templos antiguos y domina la libertad de explorar cada rincón de Hyrule.',
    price: 500,
    type: 'action-adventure',
  },
  {
    id: 2,
    name: 'SUPER MARIO ODYSSEY',
    image: '/superMario.jpeg',
    description:
      'Únete a Mario en una vibrante aventura global donde cada reino ofrece sorpresas, mundos creativos y desafíos únicos. Salta, corre y descubre nuevos horizontes en esta experiencia inolvidable.',
    price: 450,
    type: 'platformer',
  },
  {
    id: 3,
    name: 'RED DEAD REDEMPTION 2',
    image: '/RedDeadRedemption.jpeg',
    description:
      'Sumérgete en la inmensidad del salvaje oeste, donde cada decisión marca tu destino. Disfruta de una narrativa profunda, paisajes asombrosos y una acción intensa en un mundo en constante evolución.',
    price: 700,
    type: 'action-adventure',
  },
  {
    id: 4,
    name: 'THE WITCHER 3: WILD HUNT',
    image: '/THE_WITCHER_3_WILD_HUNT.jpeg',
    description:
      'Embárcate en una aventura épica como Geralt de Rivia, enfrentándote a monstruos legendarios y decisiones morales que alteran el destino. Explora un mundo vibrante y lleno de vida, donde cada elección importa.',
    price: 650,
    type: 'rpg',
  },
  {
    id: 5,
    name: 'HALO INFINITE',
    image: '/halo_infinite.jpeg',
    description:
      'Regresa a la legendaria saga de Halo, enfrentándote a enemigos formidables en escenarios futuristas. Con gráficos impactantes y jugabilidad innovadora, experimenta la acción de ciencia ficción definitiva.',
    price: 550,
    type: 'shooter',
  },
  {
    id: 6,
    name: 'RESIDENT EVIL VILLAGE',
    image: '/ResidentEvil.jpeg',
    description:
      'Enfréntate a tus peores pesadillas en una aldea misteriosa repleta de horrores y tensión constante. Con gráficos impresionantes y una atmósfera escalofriante, esta entrega redefine el survival horror.',
    price: 600,
    type: 'horror',
  },
  {
    id: 7,
    name: 'FINAL FANTASY VII REMAKE',
    image: '/FINAL_FANTASY_VII_REMAKE.jpeg',
    description:
      'Revive la magia del clásico RPG con una narrativa renovada y gráficos de última generación. Sumérgete en un mundo lleno de personajes inolvidables, batallas épicas y giros sorprendentes que te mantendrán cautivado.',
    price: 650,
    type: 'rpg',
  },
  {
    id: 8,
    name: 'CYBERPUNK 2077',
    image: '/CYBERPUNK.jpeg',
    description:
      'Adéntrate en un vibrante mundo futurista lleno de neones, tecnología avanzada y oscuros secretos. Con una historia envolvente y escenarios impresionantes, redefine el concepto de aventura urbana.',
    price: 750,
    type: 'rpg',
  },
  {
    id: 9,
    name: "ASSASSIN'S CREED VALHALLA",
    image: '/ASSASSINS_CREED_VALHALLA.jpeg',
    description:
      'Conviértete en un legendario guerrero vikingo y lidera incursiones épicas en tierras ancestrales. Explora un mundo lleno de mitología, estrategia y combates intensos que marcarán tu leyenda.',
    price: 500,
    type: 'action-adventure',
  },
  {
    id: 10,
    name: 'FIFA 22',
    image: '/fifa22.jpeg',
    description:
      'Vive la emoción del fútbol con la última entrega de FIFA. Con gráficos realistas y jugabilidad mejorada, experimenta la pasión y el dinamismo del deporte rey en cada partido.',
    price: 400,
    type: 'sports',
  },
  {
    id: 11,
    name: 'GOD OF WAR',
    image: '/GOD_OF_WAR.jpeg',
    description:
      'Embárcate en un viaje épico de venganza y redención a través de mundos mitológicos. Con una narrativa poderosa y combates brutales, God of War redefine la aventura épica en cada batalla.',
    price: 600,
    type: 'action-adventure',
  },
];
