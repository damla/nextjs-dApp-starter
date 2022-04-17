import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="NextJS starter created for developers"
        />
      </Head>
      <header className="container flex min-w-full items-center justify-between p-7">
        <span className=" text-gray-900 text-xl font-bold">NextJS Starter</span>
        <button className="hover:underline">Log In</button>
      </header>
      <main className="w-full flex items-center justify-center flex-grow">
        <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4 my-20">
          <h3 className="text-lg md:text-xl font-medium text-black">
            Language
          </h3>
          <p className="text-gray-500">{router.locale?.toLocaleUpperCase()}</p>
        </div>
      </main>
      <footer className="flex h-24 w-full flex-col items-center justify-center border-t p-7 text-center text-xs font-medium tracking-tight text-gray-700 md:flex-row md:p-0 md:text-sm">
        <span>All rights are reserved.&nbsp;</span>
        <span>2022 © NextJS Starter</span>
      </footer>
    </div>
  );
};

export default Home;
