// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>This is the about page.</p>
      </main>
    </div>
  );
}
