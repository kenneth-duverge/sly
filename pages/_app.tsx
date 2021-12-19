import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

const onClick = () => {
  fetch('/api/sly')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const BellButton = ({ onClick }: { onClick: VoidFunction }) => (
  <button onClick={onClick} className="btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  </button>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="h-14 w-full flex items-center justify-between py-4 container mx-auto">
        <Link href="/">
          <a>
            <h1 className="text-2xl text-gray-900">NJDMV Next Site</h1>
          </a>
        </Link>
        <BellButton onClick={onClick} />
      </nav>
      <main className="container mx-auto w-full h-full mt-20">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
