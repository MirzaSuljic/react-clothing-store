import { Link } from 'react-router';

import { CartLineItem } from '../components/cart/CartLineItem';
import { OrderTotals } from '../components/cart/OrderTotals';
import { buttonStyles } from '../components/ui/button-styles';
import { Container } from '../components/ui/Container';
import { useCart } from '../hooks/useCart';

export function CartPage() {
  const { items, count, subtotal } = useCart();

  return (
    <Container className="pt-10 sm:pt-14">
      <title>Your bag | COS</title>
      <h1 className="text-4xl font-light tracking-tight sm:text-5xl">Your bag</h1>

      {items.length === 0 ? (
        <div className="mt-8 max-w-md">
          <p className="text-[17px]">Your bag is empty.</p>
          <p className="mt-2 text-[15px] text-muted">Pieces you add will wait here until you check out.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/women" className={buttonStyles.primary}>
              Shop women
            </Link>
            <Link to="/men" className={buttonStyles.secondary}>
              Shop men
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <section aria-label="Items in your bag">
            <p className="border-b border-line pb-4 text-[15px] text-muted">
              {count} {count === 1 ? 'item' : 'items'}
            </p>
            <ul className="divide-y divide-line border-b border-line">
              {items.map(item => (
                <CartLineItem key={`${item.product.id}-${item.size}`} item={item} />
              ))}
            </ul>
          </section>

          <section aria-labelledby="summary-heading" className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-stone p-6">
              <h2 id="summary-heading" className="mb-5 text-xl">
                Order summary
              </h2>
              <OrderTotals subtotal={subtotal} />
              <Link to="/checkout" className={`${buttonStyles.primary} mt-6 w-full`}>
                Checkout
              </Link>
            </div>
            <Link to="/women" className={`${buttonStyles.link} mt-4 inline-block`}>
              Continue shopping
            </Link>
          </section>
        </div>
      )}
    </Container>
  );
}
