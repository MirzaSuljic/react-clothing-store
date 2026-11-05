import { Link } from 'react-router';

import { Container } from '../ui/Container';

const columns = [
  {
    title: 'Shop',
    links: [
      { to: '/women', label: 'Women' },
      { to: '/men', label: 'Men' },
      { to: '/sale', label: 'Sale' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/contact', label: 'Contact us' },
      { to: '/cart', label: 'Your bag' },
    ],
  },
  {
    title: 'Account',
    links: [{ to: '/sign-in', label: 'Sign in' }],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
        {columns.map(column => (
          <div key={column.title}>
            <h2 className="text-sm text-muted">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.links.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[15px] hover:underline hover:underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="border-t border-line py-6 text-sm text-muted">
        A portfolio demo built with React and Tailwind CSS. Not affiliated with COS, and no real orders are
        placed.
      </Container>
    </footer>
  );
}
