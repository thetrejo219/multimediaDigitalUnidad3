type VideojuegosDB = {
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
    image: 'zelda.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 500,
    type: 'action-adventure',
  },
  {
    id: 2,
    name: 'SUPER MARIO ODYSSEY',
    image: 'superMario.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 450,
    type: 'platformer',
  },
  {
    id: 3,
    name: 'RED DEAD REDEMPTION 2',
    image: 'RedDeadRedemption.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 700,
    type: 'action-adventure',
  },
  {
    id: 4,
    name: 'THE WITCHER 3: WILD HUNT',
    image: 'THE_WITCHER_3_WILD_HUNT.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 650,
    type: 'rpg',
  },
  {
    id: 5,
    name: 'HALO INFINITE',
    image: 'halo_infinite.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 550,
    type: 'shooter',
  },
  {
    id: 6,
    name: 'RESIDENT EVIL VILLAGE',
    image: 'ResidentEvil.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 600,
    type: 'horror',
  },
  {
    id: 7,
    name: 'FINAL FANTASY VII REMAKE',
    image: 'FINAL_FANTASY_VII_REMAKE.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 650,
    type: 'rpg',
  },
  {
    id: 8,
    name: 'CYBERPUNK 2077',
    image: 'CYBERPUNK.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 750,
    type: 'rpg',
  },
  {
    id: 9,
    name: "ASSASSIN'S CREED VALHALLA",
    image: 'ASSASSINS_CREED_VALHALLA.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 500,
    type: 'action-adventure',
  },
  {
    id: 10,
    name: 'FIFA 22',
    image: 'fifa22.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 400,
    type: 'sports',
  },
  {
    id: 11,
    name: 'GOD OF WAR',
    image: 'GOD_OF_WAR.jpeg',
    description:
      'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 600,
    type: 'action-adventure',
  },
];