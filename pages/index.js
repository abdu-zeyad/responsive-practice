import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className=' bg-green-100 min-h-screen'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  );
}
