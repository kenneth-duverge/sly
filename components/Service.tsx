interface Props {
  name: string;
  appointment: number;
}

export const Service = ({ name, appointment }: Props) => {
  const updatedName = name.includes('INITIAL') ? 'Initial Permit' : name;
  return (
    <figure className="w-full h-28 border border-gray-800 border-opacity-70 text-gray-800 shadow p-2 font-mono rounded-md transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
      <h2 className="font-bold font-mono text-lg">{updatedName}</h2>
      <figcaption className="font-light text-sm">
        <span className={`font-bold ${appointment > 0 ? 'text-green-600' : 'text-red-700'}`}>
          {' '}
          {appointment}
        </span>{' '}
        appointments avaliable
      </figcaption>
    </figure>
  );
};
