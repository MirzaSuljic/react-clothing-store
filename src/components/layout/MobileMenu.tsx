import { NavLink } from 'react-router';

import { Drawer } from '../ui/Drawer';
import { SERVICE_LINKS, SHOP_LINKS } from './nav-links';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Drawer open={open} onClose={onClose} title="Menu" side="left">
      <nav aria-label="Menu" className="px-5 py-6">
        <ul className="space-y-1">
          {SHOP_LINKS.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={onClose}
                className={`block py-2 text-3xl font-light aria-[current=page]:underline aria-[current=page]:underline-offset-8 ${link.to === '/sale' ? 'text-sale' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="mt-8 space-y-1 border-t border-line pt-6">
          {SERVICE_LINKS.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={onClose} className="block py-2 text-[17px]">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Drawer>
  );
}
