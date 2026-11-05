import type { Product } from '../types';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function formatPrice(amount: number): string {
  return money.format(amount);
}

export function isOnSale(product: Product): boolean {
  return product.salePrice !== null && product.salePrice < product.price;
}

export function currentPrice(product: Product): number {
  return isOnSale(product) ? (product.salePrice as number) : product.price;
}

export function discountPercent(product: Product): number {
  return isOnSale(product) ? Math.round((1 - currentPrice(product) / product.price) * 100) : 0;
}
