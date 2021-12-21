import Link from 'next/link';

import { Service } from '../components/Service';

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
    <section className="w-full max-h-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-10 px-8">
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
