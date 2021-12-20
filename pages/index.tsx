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
    <section className="grid sm:p-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-10 w-full max-h-full">
      {data.map(({ appointment, id, name }, index) => (
        <Link key={id} href={`/service/${id}`}>
          <a>
            <Service name={name} appointment={appointment} />
          </a>
        </Link>
      ))}
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/api/services`);

  const { data } = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
