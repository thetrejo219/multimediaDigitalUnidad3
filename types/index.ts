import z from 'zod'
export type Item = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    type: string;
};
  

export type CartItem = Item & { quantity: number };

export const SuccessSchema=z.string()
export const ErrorResponseSchema=z.object({
    error:z.string()
})