import Head from 'next/head';

function HomeNoAuth() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className='text-black	'>Ola Mundo</h1>
      </main>
    </>
  );
}

export default HomeNoAuth;
