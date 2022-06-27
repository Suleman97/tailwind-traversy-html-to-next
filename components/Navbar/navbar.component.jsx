import Link from 'next/link';
import { Button } from '../Button/Button.component';

import styles from './navbar.module.css';

const navlinks = [
  {
    href: '#',
    linktxt: 'Pricing',
  },
  {
    href: '#',
    linktxt: 'Product',
  },
  {
    href: '#',
    linktxt: 'About Us',
  },
  {
    href: '#',
    linktxt: 'Careers',
  },
  {
    href: '#',
    linktxt: 'Community',
  },
];

export const Navbar = () => {
  const { hamburger, hamburger_top, hamburger_bottom, hamburger_middle } =
    styles;
  return (
    <>
      <nav className="relative container mx-auto p-6">
        {/* <!-- Flex container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- LOGO --> */}

          <div className="pt-2">
            <img src="/img/logo.svg" alt="logo" />
          </div>
          {/* <!-- Menu items --> */}
          <div className="hidden md:flex space-x-6">
            {navlinks.map(({ href, linktxt }) => (
              <>
                <Link key={linktxt} href={href}>
                  <a className="hover:text-darkGrayishBlue">{linktxt}</a>
                </Link>
              </>
            ))}
          </div>

          {/* <!-- Button --> */}
          <Button />
          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            className="block  md:hidden focus:outline-none"
            // className={hamburger}
          >
            <span className={hamburger_top}></span>
            <span className={hamburger_middle}></span>
            <span className={hamburger_bottom}></span>
          </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            {navlinks.map(({ href, linktxt }) => (
              <>
                <Link key={linktxt} href={href}>
                  <a>{linktxt}</a>
                </Link>
              </>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
