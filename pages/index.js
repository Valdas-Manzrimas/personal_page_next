import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/navbar';
import LifeSpan from '../components/LifeSpan';

import styles from '../styles/Home.module.css';
import bg from '../images/space_background.jpg';

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <LifeSpan />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
