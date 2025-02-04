import { z } from 'zod';
import { backendResponseSchema } from './common';

export const productEntity = z.object({
  id: z.number(),
  name: z.string(),
  image_url: z.string(),
});

export type Product = z.infer<typeof productEntity>;

export const getProductsResponse = backendResponseSchema(
  z.array(productEntity),
);

export const getOneProductResponse = backendResponseSchema(productEntity);
