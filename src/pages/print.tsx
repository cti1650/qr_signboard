import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { QR } from '@comp/util/qr';

const data = {
    title: '2022 New Year Live',
    summary: ['ライブ会場はこちらになります！', '複数行のパターンを想定した検証'],
    image: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/nosesan562105010911747.jpg.webp?d=350',
    url: ''
};

const Home = () => {
    return (
        <div className='w-full my-0 text-sans'>
            <Head>
                <title>QR SignBoard - Links</title>
                <meta property='og:title' content='QR SignBoard' />
            </Head>
            <div className="absolute top-0 left-0 min-w-screen w-full bg-white">
                <article className="mx-auto bg-white" style={{ width: '172mm', height: '251mm' }}>
                    <section>
                        <h1 className="w-full text-center py-6 text-7xl">{data.title ?? 'タイトル'}</h1>
                        <div className="w-full"><img src={data.image} className="object-cover h-48 w-full" alt="bgimage" /></div>
                        <div className="w-full text-center py-6 text-3xl">{data.summary.map((item, i) => <p key={i}>{item}</p>) ?? '補足説明'}</div>
                        <div className="w-full h-auto px-12"><div className="w-full h-auto py-8 bg-gray-300 border border-gray-500 rounded"><QR url={data.url} size='normal' /></div></div>
                        <div className="w-full text-center py-6 text-3xl">上のQRコードを読み込んでください！</div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

export default Home;
