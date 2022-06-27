import Head from 'next/head';

import { Button, Navbar } from '../components';
import styles from '../styles/Home.module.css';
import Homepage from './homepage/Home-page';

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
        <Homepage />
      </main>
    </div>
  );
}
