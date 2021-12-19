// import data from '../public/data.json';
import { Service } from '../components/Service';

interface Service {
  name: string;
  appointment: number;
}

interface Props {
  data: Service[];
}

const Home = ({ data }: Props) => {
  return (
    <section className="grid sm:p-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-10 w-full max-h-full">
      {data.map(({ name, appointment }, index) => (
        <Service key={index} name={name} appointment={appointment} />
      ))}
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/sly');
  const { data } = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
