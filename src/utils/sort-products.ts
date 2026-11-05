import type { Product, SortOption } from '../types';
import { currentPrice } from './price';

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price, low to high' },
  { value: 'price-desc', label: 'Price, high to low' },
];

export function toSortOption(value: string | null): SortOption {
  return SORT_OPTIONS.some(o => o.value === value) ? (value as SortOption) : 'featured';
}

export function sortProducts(list: Product[], sort: SortOption): Product[] {
  const sorted = [...list];
  if (sort === 'price-asc') {
    sorted.sort((a, b) => currentPrice(a) - currentPrice(b));
  } else if (sort === 'price-desc') {
    sorted.sort((a, b) => currentPrice(b) - currentPrice(a));
  }
  return sorted;
}
