// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a more advanced Next.js application running behind an Nginx reverse proxy.</p>
      </main>
    </div>
  );
}
