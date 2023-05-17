import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Wheel Animation App</title>
        <meta name="description" content="A wheel animation test app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-15">
        <section className="container"></section>
      </main>
    </>
  );
};

export default Home;
