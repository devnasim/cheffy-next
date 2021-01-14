import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/layout';
import { Button } from '../src/lib';

function HomePage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="h-screen py-20">
        <div>
          <h1 className="font-sans text-3xl py-4 uppercase font-semibold"> Welcome to cheffy</h1>
        </div>
        <Button name="Order Foods" onClick={() => router.push('/foods')} />
      </div>
    </Layout>
  );
}

export default HomePage;
