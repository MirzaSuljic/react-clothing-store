import { Link } from 'react-router';

import logo from '../../assets/logo.svg';

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="block">
      <img src={logo} alt="COS home" width={66} height={21} className="h-[21px] w-auto" />
    </Link>
  );
}
