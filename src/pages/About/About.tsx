import { FC } from 'react';

import Page from '../../layouts/Page';

import CustomLink from '../../components/CustomLink';

const About: FC = () => {
  return (
    <Page>
      <div className="mx-auto ">
        <CustomLink
          href="https://github.com/artemshchirov/web-starter"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
        >
          About
        </CustomLink>
      </div>
    </Page>
  );
};

export default About;
