import { useEffect, useMemo, useReducer, useState, type ReactNode } from 'react';

import { cartCount, cartReducer, cartSubtotal, parseStoredCart, toCartItems } from '../utils/cart';
import { CartContext, type CartContextValue } from './cart-context';

const STORAGE_KEY = 'cart.v2';

function loadCart() {
  try {
    return parseStoredCart(localStorage.getItem(STORAGE_KEY));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(cartReducer, undefined, loadCart);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      return;
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = toCartItems(lines);
    return {
      items,
      count: cartCount(lines),
      subtotal: cartSubtotal(items),
      isDrawerOpen,
      addItem: (productId, size, quantity) => dispatch({ type: 'add', productId, size, quantity }),
      setQuantity: (productId, size, quantity) =>
        dispatch({ type: 'set-quantity', productId, size, quantity }),
      removeItem: (productId, size) => dispatch({ type: 'remove', productId, size }),
      clear: () => dispatch({ type: 'clear' }),
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
    };
  }, [lines, isDrawerOpen]);

  return <CartContext value={value}>{children}</CartContext>;
}
