import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import cookies from 'next-cookies';
import { DefaultSeo } from 'next-seo';
import { Provider, useDispatch } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../src/store';
import 'tailwindcss/tailwind.css';
import SEO from '../next-seo.config';
import {
  publicRoutes,
  userRoutes,
  chefRoutes,
  driverRoutes,
  kitchenRoutes,
} from '../src/utils/routes';
import { authSetOnReload } from '../src/store/authSlice';

function App(props) {
  const { Component, pageProps, userType } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userType) {
      dispatch(authSetOnReload({ userType }));
    }
  }, [userType, dispatch]);

  return (
    <>
      <Head>
        <title>Cheffy</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <DefaultSeo {...SEO} />
      </Provider>
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const { user_type: userType } = cookies(ctx);
  if (ctx.res && userType === 'user') {
    const filter = userRoutes.filter((item) => item === ctx.pathname);
    if (filter.length === 0) {
      ctx.res.writeHead(302, { Location: '/plates' });
      ctx.res.end();
    } else {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return { pageProps, userType };
    }
  }
  if (ctx.res && userType === 'chef') {
    const filter = chefRoutes.filter((item) => item === ctx.pathname);
    if (filter.length === 0) {
      ctx.res.writeHead(302, { Location: '/chef' });
      ctx.res.end();
    } else {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return { pageProps, userType };
    }
  }
  if (ctx.res && userType === 'driver') {
    const filter = driverRoutes.filter((item) => item === ctx.pathname);
    if (filter.length === 0) {
      ctx.res.writeHead(302, { Location: '/driver' });
      ctx.res.end();
    } else {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return { pageProps, userType };
    }
  }
  if (ctx.res && userType === 'kitchen') {
    const filter = kitchenRoutes.filter((item) => item === ctx.pathname);
    if (filter.length === 0) {
      ctx.res.writeHead(302, { Location: '/kitchen' });
      ctx.res.end();
    } else {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return { pageProps, userType };
    }
  }
  if (ctx.res && !userType) {
    const filter = publicRoutes.filter((item) => item === ctx.pathname);
    if (filter.length === 0) {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    } else {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return { pageProps, userType };
    }
  }
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

const makeStore = () => store;

export default withRedux(makeStore)(App);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  userType: PropTypes.string,
};
