import { getProduct } from '../data/products';
import type { CartItem, CartLine } from '../types';
import { currentPrice } from './price';

export const MAX_QUANTITY = 10;

export type CartAction =
  | { type: 'add'; productId: string; size: string; quantity?: number }
  | { type: 'set-quantity'; productId: string; size: string; quantity: number }
  | { type: 'remove'; productId: string; size: string }
  | { type: 'clear' };

const sameLine = (line: CartLine, productId: string, size: string) =>
  line.productId === productId && line.size === size;

const clamp = (quantity: number) => Math.min(MAX_QUANTITY, Math.max(1, Math.floor(quantity)));

export function cartReducer(lines: CartLine[], action: CartAction): CartLine[] {
  switch (action.type) {
    case 'add': {
      const existing = lines.find(l => sameLine(l, action.productId, action.size));
      const quantity = action.quantity ?? 1;
      if (existing) {
        return lines.map(l =>
          l === existing ? { ...l, quantity: clamp(l.quantity + quantity) } : l,
        );
      }
      return [...lines, { productId: action.productId, size: action.size, quantity: clamp(quantity) }];
    }
    case 'set-quantity':
      return lines.map(l =>
        sameLine(l, action.productId, action.size) ? { ...l, quantity: clamp(action.quantity) } : l,
      );
    case 'remove':
      return lines.filter(l => !sameLine(l, action.productId, action.size));
    case 'clear':
      return [];
  }
}

export function toCartItems(lines: CartLine[]): CartItem[] {
  return lines.flatMap(line => {
    const product = getProduct(line.productId);
    return product
      ? [{ product, size: line.size, quantity: line.quantity, lineTotal: currentPrice(product) * line.quantity }]
      : [];
  });
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.quantity, 0);
}

export function cartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.lineTotal, 0);
}

export function parseStoredCart(raw: string | null): CartLine[] {
  if (!raw) {
    return [];
  }
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) {
      return [];
    }
    return data.filter(
      (l): l is CartLine =>
        typeof l === 'object' &&
        l !== null &&
        typeof l.productId === 'string' &&
        typeof l.size === 'string' &&
        typeof l.quantity === 'number',
    );
  } catch {
    return [];
  }
}
