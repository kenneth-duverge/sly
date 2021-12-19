import { useState } from 'react';

import data from '../data.json';
import { Service } from '../components/Service';

const Home = () => {
  return (
    <section className="grid sm:p-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-10 w-full max-h-full">
      {data.map(({ name, appointment }, index) => (
        <Service key={index} name={name} appointment={appointment} />
      ))}
    </section>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      data,
    },
  };
};

export default Home;
