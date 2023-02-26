import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const deedsInfo = [
    {
      number: 60768,
      title: 'Body',
      theme: 'bodywork',
      description: 'Lorem1',
    },
    {
      number: 84090,
      title: 'Mind',
      theme: 'Inner Work',
      description: 'Lorem2',
    },
    {
      number: 71810,
      title: 'Spirit',
      theme: 'Creativity',
      description: 'Lorem3',
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>The School Of Presence</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2>The School of Presence</h2>
        <div className={styles.otherdeedsContainer}>
          {deedsInfo.map((x, i) => (
            <div key={i} className={styles.deedContainer}>
              <h3>{x.title}</h3>
              <Image
                src={`/images/${x.number}.jpeg`}
                width={333}
                height={333 * 1.3}
              />
              <p>{x.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
