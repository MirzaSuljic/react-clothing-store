import type { Product } from '../../types';
import { formatPrice, isOnSale } from '../../utils/price';

export function Price({ product, className = '' }: { product: Product; className?: string }) {
  if (!isOnSale(product)) {
    return <span className={`tabular-nums ${className}`}>{formatPrice(product.price)}</span>;
  }
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 tabular-nums ${className}`}>
      <span className="text-sale">
        <span className="sr-only">Sale price </span>
        {formatPrice(product.salePrice as number)}
      </span>
      <s className="text-muted">
        <span className="sr-only">Original price </span>
        {formatPrice(product.price)}
      </s>
    </span>
  );
}
