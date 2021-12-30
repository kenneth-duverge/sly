import { ReactElement } from 'react';
import Link from 'next/link';

import { Service } from '../components/Service';
import FeaturedArea from '../components/FeaturedArea';

import Navbar, { Logo } from '../components/Navbar';
import Footer from '../components/Footer';
import Notification from '../components/Bell';

interface DMVService {
  id: number;
  name: string;
  appointment: number;
}

interface Props {
  data: DMVService[];
}

const Home = ({ data }: Props) => {
  return (
    <section className="w-full h-full flex flex-col gap-1 container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 pt-8 px-8 h-full">
        {data.map(({ appointment, id, name }) => (
          <Link key={id} href={`/service/${id}`}>
            <a>
              <Service name={name} appointment={appointment} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <main className="h-full w-full relative">
      <div className="w-full absolute">
        <Navbar>
          <>
            <Logo />
            <Notification />
          </>
        </Navbar>
      </div>
      <FeaturedArea />
      {page}
      <Footer />
    </main>
  );
};

export const getServerSideProps = async () => {
  /** Abstract this into its own function */
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const { data }: { data: DMVService[] } = await fetch(
    `${protocol}://${process.env.VERCEL_URL}/api/services`
  ).then((res) => res.json());
  return {
    props: { data },
  };
};

export default Home;
