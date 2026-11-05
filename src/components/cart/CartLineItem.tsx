import { Link } from 'react-router';

import { useCart } from '../../hooks/useCart';
import type { CartItem } from '../../types';
import { smallImage } from '../../utils/images';
import { formatPrice } from '../../utils/price';
import { Price } from '../product/Price';
import { QuantityStepper } from './QuantityStepper';

interface CartLineItemProps {
  item: CartItem;
  compact?: boolean;
  onNavigate?: () => void;
}

export function CartLineItem({ item, compact = false, onNavigate }: CartLineItemProps) {
  const { setQuantity, removeItem } = useCart();
  const { product, size, quantity, lineTotal } = item;

  return (
    <li className="flex gap-4 py-5">
      <Link
        to={`/product/${product.id}`}
        onClick={onNavigate}
        className={`shrink-0 bg-stone ${compact ? 'w-20' : 'w-24 sm:w-32'}`}
      >
        <img src={smallImage(product.images[0])} alt={product.name} className="aspect-[2/3] w-full object-cover" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex justify-between gap-4 text-[15px]">
          <Link to={`/product/${product.id}`} onClick={onNavigate} className="hover:underline hover:underline-offset-4">
            {product.name}
          </Link>
          <span className="shrink-0 tabular-nums">{formatPrice(lineTotal)}</span>
        </div>
        <p className="mt-1 text-sm text-muted">
          {product.color}, size {size}
        </p>
        {!compact && <Price product={product} className="mt-1 text-sm" />}
        <div className="mt-auto flex items-center justify-between gap-4 pt-3">
          <QuantityStepper
            value={quantity}
            onChange={value => setQuantity(product.id, size, value)}
            label={`${product.name}, size ${size}`}
          />
          <button
            type="button"
            onClick={() => removeItem(product.id, size)}
            className="text-sm text-muted underline underline-offset-4 hover:text-ink"
          >
            Remove<span className="sr-only"> {product.name}, size {size}</span>
          </button>
        </div>
      </div>
    </li>
  );
}
