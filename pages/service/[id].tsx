import { Service as DMVService } from '../../utils';

interface Props {
  service: DMVService;
}

const Service = ({ service: { appointment, name } }: Props) => {
  const updatedName = name.includes('INITIAL') ? 'Initial Permit' : name;

  return (
    <section className="w-full h-full">
      <div className="w-96 rounded-md border border-gray-800 shadow p-2 flex flex-col gap-2">
        <h1 className="text-3xl text-gray-900">{updatedName}</h1>
        <p className="text-lg text-gray-900">
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
