import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className=' bg-green-100 min-h-screen '>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet" />

        <style>
          @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
        </style>

      </Head>
      <Header />
      <Main


      />
    </div>
  );
}
