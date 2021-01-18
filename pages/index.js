import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/layout';
import { Button, Pager } from '../src/lib';

function HomePage() {
  const router = useRouter();
  return (
    <Layout>
      <Pager>
        <div>
          <h1 className="font-sans text-3xl py-4 uppercase font-semibold"> Welcome to cheffy</h1>
        </div>
        <Button name="Order Foods" onClick={() => router.push('/plates')} />
      </Pager>
    </Layout>
  );
}

export default HomePage;
