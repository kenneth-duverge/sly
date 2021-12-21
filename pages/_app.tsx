import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

import BellButton from '../components/Bell';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-full relative">
      <div className="w-full absolute">
        <nav className="h-14 w-full flex items-center justify-between py-4 px-8 container mx-auto">
          <Link href="/">
            <a>
              <h1 className="md:text-2xl sm:text-lg text-white">NJDMV</h1>
            </a>
          </Link>
          <BellButton />
        </nav>
      </div>
      <header className="w-full h-96 bg-gray-800 text-white flex justify-center items-center gap-2 flex-col text-center">
        <h1 className="text-4xl">New Jersey DMV Appointment Finder</h1>
        <p className="text-md">
          Everything you love about the njdmv site but just a little bit better 😊{' '}
        </p>
      </header>
      <main className="container mx-auto w-full h-full mt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
