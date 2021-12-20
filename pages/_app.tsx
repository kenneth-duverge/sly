import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

import BellButton from '../components/Bell';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="h-14 w-full flex items-center justify-between py-4 px-8 container mx-auto">
        <Link href="/">
          <a>
            <h1 className="md:text-2xl sm:text-lg text-gray-900">NJDMV Next Site</h1>
          </a>
        </Link>
        <BellButton />
      </nav>
      <main className="container mx-auto w-full h-full mt-20">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
