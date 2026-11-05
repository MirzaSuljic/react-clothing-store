import { formatPrice } from '../../utils/price';

export function OrderTotals({ subtotal }: { subtotal: number }) {
  return (
    <dl className="space-y-2 text-[15px]">
      <div className="flex justify-between">
        <dt>Subtotal</dt>
        <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Shipping</dt>
        <dd>Free</dd>
      </div>
      <div className="flex justify-between border-t border-line pt-3 text-lg">
        <dt>Total</dt>
        <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
      </div>
    </dl>
  );
}
