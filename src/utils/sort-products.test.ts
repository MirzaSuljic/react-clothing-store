import { describe, expect, it } from 'vitest';

import { products } from '../data/products';
import { currentPrice } from './price';
import { sortProducts, toSortOption } from './sort-products';

describe('sortProducts', () => {
  it('sorts by the price the customer pays', () => {
    const prices = sortProducts(products, 'price-asc').map(currentPrice);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  it('falls back to featured for unknown values', () => {
    expect(toSortOption('cheapest')).toBe('featured');
    expect(toSortOption('price-desc')).toBe('price-desc');
  });
});
