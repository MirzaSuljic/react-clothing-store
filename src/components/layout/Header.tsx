import { useState } from 'react';
import { Link, NavLink } from 'react-router';

import { useCart } from '../../hooks/useCart';
import { Container } from '../ui/Container';
import { MenuIcon } from '../ui/icons';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { SERVICE_LINKS, SHOP_LINKS } from './nav-links';

const navLink =
  'py-2 text-[15px] hover:underline hover:underline-offset-8 aria-[current=page]:underline aria-[current=page]:underline-offset-8';

export function Header() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        <nav aria-label="Shop" className="flex items-center gap-7">
          <button
            type="button"
            className="-ml-2 p-2 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
          {SHOP_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={`hidden md:block ${navLink} ${link.to === '/sale' ? 'text-sale' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Logo />

        <div className="flex items-center justify-end gap-7">
          {SERVICE_LINKS.map(link => (
            <NavLink key={link.to} to={link.to} className={`hidden md:block ${navLink}`}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/cart" className="py-2 text-[15px] tabular-nums hover:underline hover:underline-offset-8">
            Bag ({count})<span className="sr-only">, {count === 1 ? '1 item' : `${count} items`}</span>
          </Link>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
