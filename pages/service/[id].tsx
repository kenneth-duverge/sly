import { ReactElement } from 'react';

import Footer from '../../components/Footer';
import Navbar, { BackArrow } from '../../components/Navbar';
import Notification from '../../components/Bell';

import { Service as DMVService } from '../../utils';

interface Props {
  service: DMVService;
}

const Service = ({ service: { appointment, name } }: Props) => {
  const updatedName = name.includes('INITIAL') ? 'Initial Permit' : name;

  return (
    <section className="w-full h-screen px-8 pt-16">
      <div className="w-96 p-2 flex flex-col gap-2">
        <h1 className="text-3xl text-gray-900 mt-2">{updatedName}</h1>
        <p className="text-md text-gray-900">
          <span className={`font-bold ${appointment > 0 ? 'text-green-600' : 'text-red-700'}`}>
            {' '}
            {appointment.toLocaleString('en-us')}
          </span>{' '}
          appointments available
        </p>
      </div>
    </section>
  );
};

Service.getLayout = (page: ReactElement) => {
  return (
    <main className="h-full w-full relative">
      <div className="w-full absolute">
        <Navbar>
          <>
            <BackArrow />
            <Notification />
          </>
        </Navbar>
      </div>
      <section className="w-full min-h-full h-full container mx-auto pt-16">{page}</section>
      <Footer />
    </main>
  );
};

interface Params {
  id: string;
}

export const getServerSideProps = async ({ params }: { params: Params }) => {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const { data: service }: { data: DMVService } = await fetch(
    `${protocol}://${process.env.VERCEL_URL}/api/services/${params.id}`
  ).then((res) => res.json());

  return { props: { service } };
};

export default Service;
