import { Link } from 'react-router';

import { buttonStyles } from '../components/ui/button-styles';
import { Container } from '../components/ui/Container';

export function NotFoundPage() {
  return (
    <Container className="py-24">
      <title>Page not found | COS</title>
      <h1 className="text-4xl font-light tracking-tight sm:text-5xl">This page doesn't exist</h1>
      <p className="mt-4 max-w-md text-[17px] text-muted">
        The link may be old or mistyped. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/women" className={buttonStyles.primary}>
          Shop women
        </Link>
        <Link to="/men" className={buttonStyles.secondary}>
          Shop men
        </Link>
      </div>
    </Container>
  );
}
