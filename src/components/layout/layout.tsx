import Navbar from './navbar';
import Footer from './footer';
import React, { useCallback } from 'react';

import { Auth, Typography, Button } from '@supabase/ui';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const Container = (props) => {
  const { user } = Auth.useUser();
  const handleSignOut = useCallback(() => {
    props.supabaseClient.auth.signOut();
    window.location.reload();
  }, [props]);
  if (user)
    return (
      <>
        <div className='container max-w-screen-md mx-auto text-sans'>
          <div className='absolute left-0 top-0'>
            <Typography.Text>Signed in: {user.email}</Typography.Text>
          </div>
          <div className='absolute right-0 top-0 w-[120px] p-4'>
            <Button block onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
          <Navbar />
          <main>{props.childNode}</main>
          <Footer />
        </div>
      </>
    );
  return props.children;
};

const AuthBasic = (props) => {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase} childNode={props.children}>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
            <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
              <h1 className='title-font font-medium text-3xl text-gray-900'>
                QRコード付きのポップアップを手軽に作成できるサービス！！
              </h1>
              <p className='leading-relaxed mt-4'>
                フリーマーケットや路上ライブの宣伝やお店のホームページの案内などQRコードを活用したポップアップの作成をサポートするために作ったサービスです！
              </p>
            </div>
            <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
              <Auth supabaseClient={supabase} />
            </div>
          </div>
        </section>
      </Container>
    </Auth.UserContextProvider>
  );
};

export default function Layout({ children }) {
  return (
    <>
      <AuthBasic>
        {children}
      </AuthBasic>
    </>
  );
}
