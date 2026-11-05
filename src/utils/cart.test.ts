import { describe, expect, it } from 'vitest';

import type { CartLine } from '../types';
import { MAX_QUANTITY, cartCount, cartReducer, cartSubtotal, parseStoredCart, toCartItems } from './cart';

describe('cartReducer', () => {
  it('adds a new line and merges the same product and size', () => {
    let lines: CartLine[] = [];
    lines = cartReducer(lines, { type: 'add', productId: '1', size: 'M' });
    lines = cartReducer(lines, { type: 'add', productId: '1', size: 'M', quantity: 2 });
    lines = cartReducer(lines, { type: 'add', productId: '1', size: 'L' });

    expect(lines).toEqual([
      { productId: '1', size: 'M', quantity: 3 },
      { productId: '1', size: 'L', quantity: 1 },
    ]);
  });

  it('keeps quantities between 1 and the maximum', () => {
    let lines = cartReducer([], { type: 'add', productId: '2', size: 'S' });
    lines = cartReducer(lines, { type: 'set-quantity', productId: '2', size: 'S', quantity: 0 });
    expect(lines[0].quantity).toBe(1);

    lines = cartReducer(lines, { type: 'set-quantity', productId: '2', size: 'S', quantity: 99 });
    expect(lines[0].quantity).toBe(MAX_QUANTITY);
  });

  it('removes one line and clears everything', () => {
    let lines = cartReducer([], { type: 'add', productId: '1', size: 'M' });
    lines = cartReducer(lines, { type: 'add', productId: '2', size: 'S' });
    lines = cartReducer(lines, { type: 'remove', productId: '1', size: 'M' });
    expect(lines.map(l => l.productId)).toEqual(['2']);

    expect(cartReducer(lines, { type: 'clear' })).toEqual([]);
  });
});

describe('cart totals', () => {
  it('uses the sale price and counts every unit', () => {
    const lines: CartLine[] = [
      { productId: '1', size: 'M', quantity: 2 },
      { productId: '2', size: 'S', quantity: 1 },
    ];
    const items = toCartItems(lines);

    expect(cartCount(lines)).toBe(3);
    expect(items[0].lineTotal).toBe(198);
    expect(cartSubtotal(items)).toBe(198 + 149);
  });

  it('drops lines for products that no longer exist', () => {
    expect(toCartItems([{ productId: 'missing', size: 'M', quantity: 1 }])).toEqual([]);
  });
});

describe('parseStoredCart', () => {
  it('ignores broken or old-format data', () => {
    expect(parseStoredCart(null)).toEqual([]);
    expect(parseStoredCart('not json')).toEqual([]);
    expect(parseStoredCart('[{"id":"1","title":"Old item","quantity":1}]')).toEqual([]);
    expect(parseStoredCart('[{"productId":"1","size":"M","quantity":1}]')).toEqual([
      { productId: '1', size: 'M', quantity: 1 },
    ]);
  });
});
