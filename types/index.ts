export type Item = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    type: string;
};
  

export type CartItem = Item & { quantity: number };
