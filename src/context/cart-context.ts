import { createContext } from 'react';

import type { CartItem } from '../types';

export interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isDrawerOpen: boolean;
  addItem: (productId: string, size: string, quantity?: number) => void;
  setQuantity: (productId: string, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
