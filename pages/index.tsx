import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home = () => {
  const onClick = () => {
    fetch('/api/sly')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const onChange = () => {
    fetch('/api/sly', { method: 'POST' })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Sly</title>
      </Head>

      <button onClick={onClick}>Request 📍</button>

      <input type="file" onChange={onChange} />
    </div>
  );
};

export default Home;
