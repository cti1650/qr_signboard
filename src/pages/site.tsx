import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

const Home = () => {
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>QR SignBoard - Links</title>
        <meta property='og:title' content='QR SignBoard' />
      </Head>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;
