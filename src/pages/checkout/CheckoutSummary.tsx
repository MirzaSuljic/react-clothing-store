import { OrderTotals } from '../../components/cart/OrderTotals';
import type { CartItem } from '../../types';
import { smallImage } from '../../utils/images';
import { formatPrice } from '../../utils/price';

export function CheckoutSummary({ items, subtotal }: { items: CartItem[]; subtotal: number }) {
  return (
    <section aria-labelledby="checkout-summary" className="bg-stone p-6">
      <h2 id="checkout-summary" className="text-xl">
        In your bag
      </h2>
      <ul className="mt-5 space-y-4">
        {items.map(({ product, size, quantity, lineTotal }) => (
          <li key={`${product.id}-${size}`} className="flex gap-4">
            <img src={smallImage(product.images[0])} alt="" className="aspect-[2/3] w-14 shrink-0 bg-paper object-cover" />
            <div className="flex min-w-0 flex-1 justify-between gap-3 text-[15px]">
              <div>
                <p>{product.name}</p>
                <p className="text-sm text-muted">
                  Size {size}, quantity {quantity}
                </p>
              </div>
              <span className="tabular-nums">{formatPrice(lineTotal)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-line pt-5">
        <OrderTotals subtotal={subtotal} />
      </div>
    </section>
  );
}
