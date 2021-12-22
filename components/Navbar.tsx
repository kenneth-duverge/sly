import { ReactElement } from 'react';

import Link from 'next/link';

export const Logo = () => (
  <Link href="/">
    <a>
      <h1 className="md:text-2xl sm:text-lg text-gray-800">NJDMV</h1>
    </a>
  </Link>
);

export const BackArrow = () => (
  <Link href="/">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-800"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </Link>
);

const Navbar = ({ children }: { children: ReactElement }) => {
  return (
    <nav className="h-14 w-full flex items-center justify-between py-4 px-8 container mx-auto">
      {children}
    </nav>
  );
};

export default Navbar;
