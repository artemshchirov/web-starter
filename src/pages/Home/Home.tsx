import { FC } from 'react';

import Page from '../../layouts/Page';

const Home: FC = () => {
  return (
    <Page>
      <h1 className="self-center font-semibold text-transparent text-md whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 md:text-3xl">
        Vite + React.js + TypeScript + Tailwind CSS + Primereact
      </h1>
    </Page>
  );
};

export default Home;
