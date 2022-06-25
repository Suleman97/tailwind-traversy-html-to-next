import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const {} = styles;
  return (
    <div className="">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page Tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="">this is suleman anwar</div>
      </main>
    </div>
  );
}
