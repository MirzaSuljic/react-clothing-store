import type { Gender } from './gender';

export interface Product {
  id: string;
  name: string;
  gender: Gender;
  price: number;
  salePrice: number | null;
  color: string;
  material: string;
  description: string;
  details: string[];
  sizes: string[];
  images: string[];
  isNew: boolean;
}
