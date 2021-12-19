interface DMVService {
  id: string;
  name: string;
  appointment: number;
}

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

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/services`);
  const { data } = await response.json();

  return {
    paths: data.map((service: DMVService) => ({ params: { id: service.id.toString() } })),
    fallback: false,
  };
};

interface Params {
  id: string;
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  const response = await fetch(`${process.env.API_URL}/services/${params.id}`);
  const { data: service } = await response.json();

  return { props: { service } };
};

export default Service;
