import { Link } from 'react-router';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/price';
import { buttonStyles } from '../ui/button-styles';
import { Drawer } from '../ui/Drawer';
import { CartLineItem } from './CartLineItem';

export function CartDrawer() {
  const { items, count, subtotal, isDrawerOpen, closeDrawer } = useCart();

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={closeDrawer}
      title={`Your bag (${count})`}
      footer={
        items.length > 0 && (
          <>
            <div className="mb-4 flex justify-between text-[15px]">
              <span>Subtotal</span>
              <span className="tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <div className="grid gap-2">
              <Link to="/checkout" onClick={closeDrawer} className={buttonStyles.primary}>
                Checkout
              </Link>
              <Link to="/cart" onClick={closeDrawer} className={buttonStyles.secondary}>
                View bag
              </Link>
            </div>
          </>
        )
      }
    >
      {items.length ? (
        <ul className="divide-y divide-line px-5">
          {items.map(item => (
            <CartLineItem key={`${item.product.id}-${item.size}`} item={item} compact onNavigate={closeDrawer} />
          ))}
        </ul>
      ) : (
        <div className="px-5 py-10">
          <p className="text-[15px]">Your bag is empty.</p>
          <div className="mt-4 flex gap-4">
            <Link to="/women" onClick={closeDrawer} className={buttonStyles.link}>
              Shop women
            </Link>
            <Link to="/men" onClick={closeDrawer} className={buttonStyles.link}>
              Shop men
            </Link>
          </div>
        </div>
      )}
    </Drawer>
  );
}
